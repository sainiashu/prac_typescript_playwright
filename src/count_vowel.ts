function countVowel(str: string): number{

    const vowelCount = str.match(/[aeiou]/gi)
    return vowelCount ? vowelCount.length :0
}

if(require.main===module){
    console.log(countVowel("Testing"))
}