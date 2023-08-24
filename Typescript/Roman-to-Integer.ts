function romanToInt(s: string): number {
    let result = 0;
       const length = s.length;
       const orderObj: { [key: string]: number } = {
           'I': 1,
           'V': 5,
           'X': 10,
           'L': 50,
           'C': 100,
           'D': 500,
           'M': 1000
       }
       for (let i = 0; i < length; i++) {
           if (orderObj[s[i]] < orderObj[s[i + 1]]) {
               result = result - orderObj[s[i]]
           } else {
               result = result + orderObj[s[i]]
           }
       }
       return result;
   };