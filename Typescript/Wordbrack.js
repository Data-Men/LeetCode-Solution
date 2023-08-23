function wordBreak(s, wordDict) {
    
    wordDict.forEach(element => {
        const regx = new RegExp(element, 'g')
        s = s.replace(regx, "")
    });
    return s == "" ? true : false
};

console.log(wordBreak("cars",["car","ca","rs"]));