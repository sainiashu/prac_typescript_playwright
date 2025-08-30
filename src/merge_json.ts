export function mergeJsonObject(a: any,b : any): any{
    return  {...a, ...b}

}

if(require.main===module){
    console.log(mergeJsonObject({x:1,y:2},{y:3,z:5}))
    //  console.log(mergeJsonObject({x:1,y:2},{y:3,z:4}));
}