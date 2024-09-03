class Pair {
  _Key;
  _Value;

  constructor(key, value) {
    this._Key = key;
    this._Value = value;
  }
}

module.exports = class Dictionary {
  entries;
  entriesCount;

  constructor() {
    this.entriesCount = 0;
    this.entries = [];
  }

  set(key, value) {
    for (let i = 0; i < this.entriesCount; i++) {
      if (this.entries[i] && this.entries[i]._Key === key) {
        this.entries[i]._Value = value;
        return;
      }
    }
    this.entries[this.entriesCount] = new Pair(key, value);
    this.entriesCount++;
  }

  get(key) {
    for (let i = 0; i < this.entriesCount; i++) {
      if (this.entries[i] && this.entries[i]._Key === key) {
        return this.entries[i]._Value;
      }
    }
    return null;
  }

  remove(key) {
    for (let i = 0; i < this.entriesCount; i++) {
      if (this.entries[i] !== null && this.entries[i]._Key === key) {
        this.entries[i] = this.entries[this.entriesCount - 1];
        this.entries[this.entriesCount-1] = null;
        this.entriesCount--;
        return true;
      }
    }
    return false;
  }

  size() {
    return this.entriesCount;
  }

  print() {
    for (let i = 0; i < this.entries.length; i++) {
      if(this.entries[i] === null) {
        continue;
      }
      console.log(`${this.entries[i]._Key} : ${this.entries[i]._Value}`);
    }
    console.log("=======================")
  }
};
