function factorial(num: number): number{
    if(num <= 1) return 1
    return num * factorial(num-1)
}

if(require.main===module){
    console.log(factorial(5))
}