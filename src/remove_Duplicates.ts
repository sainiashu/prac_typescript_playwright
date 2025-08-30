export function removeDuplicates(num : number[]):number[]{
    return Array.from(new Set(num));

}

if(require.main===module){
    console.log(removeDuplicates([1,2,3,3,4,3,]));
}