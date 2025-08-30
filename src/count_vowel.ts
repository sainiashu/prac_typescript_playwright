export function countVowel(input: string): number{
    const matches = input.match(/[aeiou]/gi)
    return matches ? matches.length : 0
}

if (require.main===module){
    console.log(countVowel("Testing"))
}