/// FNV-1a hash

const hash32 = function (str) {
  const OffsetBasis = 2166136261n;
  const FNVPrime = 16777619n;

  const data = new TextEncoder().encode(str);
  let hash = OffsetBasis;

  for (let i = 0; i < data.length; i++) {
    hash = hash ^ BigInt(data[i]);
    hash *= FNVPrime;
    // Ensure hash stays within 32-bit unsigned integer bounds
    hash = hash & 0xffffffffn;
  }

  console.log(`${str}, ${hash}, ${hash.toString(16)}`);
  return Number(hash); 
};

hash64 = function (str) {
  const OffsetBasis = 14695981039346656037n; 
  const FNVPrime = 1099511628211n; 
  
  const data = new TextEncoder().encode(str);
  let hash = OffsetBasis;

  for (let i = 0; i < data.length; i++) {
       hash = hash ^ BigInt(data[i]);
       hash *= FNVPrime;
       // Ensure hash stays within 64-bit unsigned integer bounds
       hash = hash & 0xffffffffffffffffn;
  }

  console.log(`${str}, ${hash}, ${hash.toString(16)}`);
  return hash;
};

hash32("This is Original Text");
hash64("This is Original Text");
