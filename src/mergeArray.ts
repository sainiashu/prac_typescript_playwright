function mergTwoArray(a: number[], b: number[]): number[]{
    return [...a, ...b].sort((x,y)=> x-y)
}

if(require.main===module){
    console.log(mergTwoArray([2,3],[4,1]))
}