function differenceOfArray(a: number[], b:number[]): number[]{
    return a.filter(x => !b.includes(x))
}

if(require.main===module){
    console.log(differenceOfArray([1,2,3,],[2,4,3]))
}