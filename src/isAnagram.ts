function isAnagram(a: string, b: string ): boolean{
    const s1 = a.replace(/[^a-zA-Z0-9]/g,"").toLowerCase().split("").sort().join("")
    const s2 = b.replace(/[^a-zA-Z0-9]/g,'').toLowerCase().split("").sort().join("")

    return s1 === s2
}

if(require.main===module){
    console.log(isAnagram("listen"," silent"))
}