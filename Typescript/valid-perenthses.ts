function isValid(s: string): boolean {
    if (s.length % 2 != 0) return false;
    if ((s.match(/\(/g) || []).length != (s.match(/\)/g) || []).length) return false;
    if ((s.match(/\{/g) || []).length != (s.match(/\}/g) || []).length) return false;
    if ((s.match(/\[/g) || []).length != (s.match(/\]/g) || []).length) return false;
    //Now check there order

    const order: { [key: string]: string } = {
        ")": "(",
        "}": "{",
        "]": "[",
    }

    while (s !== "") {
        const list: string[] = [];
        if (['(', '{', '['].includes(s[0]))
            list.push(s[0])
        else
            return false
        forLoop:
        for (let i = 1; i < s.length; i++) {
            if (list[list.length - 1] == order[s[i]]) {
                let sp = s.slice(0, i - 1) + s.slice(i + 1, s.length)
                s = sp;
                break forLoop;
            } else if (['(', '{', '['].includes(s[i])) {
                list.push(s[i]);
            } else {
                return false
            }
        }
    }
    return true
};
console.clear()
console.log(isValid('(}'))
// console.log(isValid('()'))
// console.log(isValid('()[]{}'))
// console.log(isValid('(){}}{'))
