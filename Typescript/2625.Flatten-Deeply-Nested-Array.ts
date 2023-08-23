type MultiDimensionalArray = (number | MultiDimensionalArray)[];

var flat = function (arr:  MultiDimensionalArray, n: number):  MultiDimensionalArray {
    let result: MultiDimensionalArray = [];
    if (n == 0) return arr;
    while (0 < n) {
        arr.forEach((value, index) => {
            if (typeof value === 'number') {
                result.push(value) ;
            } else {
                result.push(...value) ;
            }
        })
        arr=[]
        arr=Array.from(result);
        result=[]
        n--;
    }

   return arr;
};