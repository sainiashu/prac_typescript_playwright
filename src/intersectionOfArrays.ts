function intersectionArray(a: number[], b:number[]){
    return a.filter((x) => b.includes(x) )
}

if(require.main===module){
    console.log(intersectionArray([1,2,3],[5,3,4]))
}