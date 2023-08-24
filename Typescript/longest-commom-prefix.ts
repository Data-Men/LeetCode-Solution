function longestCommonPrefix(strs: string[]): string {
    let prefix = strs[0];
    for (let i = 1; i < strs.length; i++) {
        while(!strs[i].startsWith(prefix)){
            prefix=prefix.substring(0,prefix.length-1)
            if (prefix==="") return prefix
        }
    }
    return prefix
};

console.clear();
console.log(longestCommonPrefix(["dog","racecar","car"]));
