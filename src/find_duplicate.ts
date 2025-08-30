export function findDuplicate(testData: number[]): number | null{
    const data  = new Set<number>();
    for (const num of testData){
        if(data.has(num))
            return num;
        data.add(num);
    } 
    return null;
}

if(require.main===module){
    console.log(findDuplicate([1,2,3,2,4,8]))
}