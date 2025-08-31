export function findMaxNum(nums : number[]): number{
    return Math.max(...nums)
}

if(require.main===module){
    console.log(findMaxNum([2,5,8,]))
}