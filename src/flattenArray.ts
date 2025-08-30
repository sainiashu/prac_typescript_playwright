
export function flattenArray(arr: any[]): any[] {
    return arr.flat(Infinity); // Flatten recursively
}

if(require.main===module){
    console.log(flattenArray([1,[2,[3,4]],5]))
}