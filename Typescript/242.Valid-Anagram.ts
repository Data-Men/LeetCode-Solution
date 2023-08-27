function isAnagram(s: string, t: string): boolean {
    if (s.length != t.length) return false;
    return s.split("").sort().toString() == t.split("").sort().toString()
};


console.log(isAnagram("anagram", "nagaram"));
console.log(isAnagram("car", "rat"));
