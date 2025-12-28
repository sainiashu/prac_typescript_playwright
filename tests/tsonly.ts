




// function countVowel(str: string): number {
//     const vowelcount = str.match(/[aeiou]/gi)
//     return vowelcount ? vowelcount.length : 0
//     }
//
// if(require.main == module){
//     console.log(countVowel(("tEster")))
//     }


// function diffofArray(a : number[], b : number[]): number[]{
//     return a.filter((x)=> !b.includes(x))
//     }
//
// if(require.main===module){
//     console.log(diffofArray([1,2,3],[2,3,4]))
//     }

// function fac(n: number): number{
//     if(n<=1) return n
//     return n* fac(n-1)
//     }
//
// if(require.main === module){
//     console.log(fac(5))
//     }

// function fibonacci(n: number): number{
//     if(n<=1) return n
//     return fibonacci(n-1) + fibonacci(n-2)
//     }
//
// if(require.main===module){
//     console.log(fibonacci(8))
//     }

// function findDuplicate(testData: number[]): number | null{
//     const data = new Set<number>()
//     for( const num of testData){
//         if (data.has(num))
//             return num
//         data.add(num)
//         }
//     return null
//     }
//
//
// if(require.main===module){
//     console.log(findDuplicate([1,2,3,3,4,5]))
//     }



//
// function findMinNum(num: number[]): number{
//     return Math.min(...num)
//     }
//
// if(require.main===module){
//     console.log(findMinNum([1,2,3,4]))
//     }

// function findMaxNum(num: number[]): number{
//     return Math.max(...num)
//
//     }
//
// if(require.main===module){
//
//     console.log(findMaxNum([1,2,3,4]))
//     }




// function flattenArray(arr: any[]): any[]{
//     return arr.flat(Infinity)
//     }
//
// if(require.main===module){
//     console.log(flattenArray([1,2,[3,4,[5,6]]]))
//
//     }


// function intersectionArray(a:number[], b: number[]): number[]{
//     return a.filter((x)=> b.includes(x))
//     }
//
// if(require.main===module){
//     console.log(intersectionArray([1,2,3],[2,3,4]))
// }


// function isAnagram(a: string, b: string): Boolean{
//     const s1 = a.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('')
//     const s2 = b.replace(/[^a-zA-Z0-9]/g, '').toLowerCase().split('').sort().join('')
//
//   return s1 === s2
//     }
//
// if(require.main=== module){
//     console.log(isAnagram('silent', 'word'))
//     }

// function mergejsonObject(a: any, b: any): any{
//     return {...a,... b}
//     }
//
// if(require.main=== module){
//     console.log(mergejsonObject({x:1,y:2}, {z:3, y:4}))
//     }


// function mergeTwoArray(a: number[], b: number[]): number[]{
//     return [... a, ... b].sort((x,y)=> x- y)
//     }
//
// if(require.main===module){
//     console.log(mergeTwoArray([1,2,4,6],[3,5,7,8]))
//     }



// function isPalidrome(str: String) : Boolean{
//     const word = str.replace(/[^a-zA-Z0-9]/g, '').toLowerCase()
//     return word === word.split('').reverse().join('')
//     }
//
//
// if(require.main===module){
//     console.log(isPalidrome("racecar"))
//     }


// function removeDup(num: number[]): number[]{
//     return Array.from(new Set(num))
//     }
//
// if(require.main===module){
//     console.log(removeDup([1,2,3,4,4,3,4,3,1]))
//     }


//
// function sumofArray(arr : number[]): number{
//     return arr.reduce((sum, num) => sum + num,0)
//     }
//
// if(require.main===module){
//     console.log(sumofArray([1,2,3]))
//     }



// function titleCase(str: string): string{
//     return str
//         .toLowerCase()
//         .split(" ")
//         .map(word => word.charAt(0).toUpperCase() + word.slice(1))
//         .join(" ")
//     }
//
// if(require.main=== module){
//     console.log(titleCase("JOHN SMITH"))
//     }

// function uniqueNum(num: number[]):number[]{
//     return [... new Set(num)]
//     }
//
// if(require.main===module){
//     console.log(uniqueNum([3,4,5,5,5,6]))
//     }


// function reverseString(input:string): string{
//     return input.split('').reverse().join('')
//     }
//
// if(require.main===module){
//     console.log(reverseString("hello"))
//     }