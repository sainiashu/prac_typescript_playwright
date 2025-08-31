export function removeDuplicate(num: number[]): number[]{
    return Array.from(new Set(num))
}

if(require.main===module){
    console.log(removeDuplicate([1,2,2,3,4,4,5]))
}