function uniqueNum(num : number[]):number[]{
    return [...new Set(num)]
}

if(require.main==module){
    console.log(uniqueNum([1,2,3,1,3]))
}