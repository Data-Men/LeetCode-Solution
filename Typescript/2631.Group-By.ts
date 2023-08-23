declare global {
    interface Array<T> {
        groupBy(fn: (item: T) => string): Record<string, T[]>
    }
}

Array.prototype.groupBy = function(fn) {
   const obj:{[key:string]:Array<any>}={}
    for(let i=0;i<this.length;i++){
        const id=fn(this[i]) as string 
        if(Object.keys(obj).includes(id)){
            obj[id].push(this[i]);
        }else{
            obj[id]=[this[i]];
        }
    }
    return obj  
}

/**
 * [1,2,3].groupBy(String) // {"1":[1],"2":[2],"3":[3]}
 */