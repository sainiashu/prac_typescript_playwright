export function isPalindrome(str : string): boolean{
    const word  = str.replace(/[^a-zA-z0-9]/g, '').toLowerCase()
    return word === word.split("").reverse().join("")
}

if(require.main===module){
    console.log(isPalindrome('racecar'))
}