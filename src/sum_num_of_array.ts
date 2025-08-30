export function sumOfArray(arr : number[]): number{

    return arr.reduce((sum, num)=>sum+num, 0);
}

if(require.main===module){
    console.log(sumOfArray([1,2,3]))
}