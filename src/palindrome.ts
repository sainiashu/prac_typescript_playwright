export function isPalidrone(word:string): boolean{

    const noramlized = word.replace(/\s+/g,"").toLowerCase()
    return noramlized ===noramlized.split("").reverse().join("")
}

if(require.main===module){
    console.log(isPalidrone('Race car'))
}