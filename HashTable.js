class Pair {
  _Key;
  _Value;

  constructor(key, value) {
    this._Key = key;
    this._Value = value;
  }
}

module.exports = class HashTable {
  entries;
  entriesCount;

  constructor() {
    this.entries = new Array(5);
    this.entriesCount = 0;
  }

  getHash(key) {
    const OffsetBasis = 2166136261n;
    const FNVPrime = 16777619n;

    const data = new TextEncoder().encode(key);
    let hash = OffsetBasis;

    for (let i = 0; i < data.length; i++) {
      hash = hash ^ BigInt(data[i]);
      hash *= FNVPrime;
      // Ensure hash stays within 32-bit unsigned integer bounds
      hash = hash & 0xffffffffn;
    }

    return Number(Number(hash) % this.entries.length);
  }

  resizeOrNot() {
    if (this.entries.length > this.entriesCount) return false;

    const newEntry = [...this.entries];
    this.entries = new Array(this.entriesCount * 2);
    this.entriesCount = 0;

    newEntry.map((pair) => {
      this.addToEntries(pair._Key, pair._Value);
    });

    return true;
  }

  /// Linear Proping hashing
  collisionHandling(hash, key, Set) {
    let newHash;
    for (let i = 1; i < this.entries.length; i++) {
      newHash = (hash + i) % this.entries.length;
      if (
        Set &&
        (!this.entries[newHash] || this.entries[newHash]._Key === key)
      ) {
        if (!this.entries[newHash]) this.entriesCount++;
        return newHash;
      } else if (
        !Set &&
        this.entries[newHash] &&
        this.entries[newHash]._Key === key
      ) {
        return newHash;
      }
    }

    return -1;
  }

  addToEntries(key, value) {
    let index = this.getHash(key);
    /// if this index is empty
    if (!this.entries[index]) {
      this.entries[index] = new Pair(key, value);
      this.entriesCount++;
    } else {
      /// if we want to update value of same key
      if (key === this.entries[index]._Key) {
        this.entries[index]._Key = value;
      }
      /// there are a collision
      else {
        index = this.collisionHandling(index, key, 1);
        if (index === -1) throw new Error("something went wrong!");
        else this.entries[index] = new Pair(key, value);
      }
    }
  }

  set(key, value) {
    this.resizeOrNot();
    this.addToEntries(key, value);
  }

  /// we use flag to determine if we want to return the index of the value or the value it self
  get(key, flag = 1) {
    const index = this.getHash(key);
    const pair = this.entries[index];

    if (pair && pair._Key === key) return flag ? pair._Value : index;
    if (pair && pair._Key !== key) {
      const newIndex = this.collisionHandling(index, key, 0);
      if (newIndex === -1) return null;
      return flag ? this.entries[newIndex]._Value : newIndex;
    }

    return null;
  }

  remove(key) {
    const index = this.get(key, 0);
    if (index === null) return false;
    this.entries[index] = null;
    this.entriesCount--;
    return true;
  }

  size() {
    return this.entriesCount;
  }
};
