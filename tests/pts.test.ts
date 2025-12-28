
import {test, expect} from '@playwright/test'
import {removeDuplicates} from '../src/remove_Duplicates'

test('Remove duplicates',async()=>{
    expect(removeDuplicates([1,2,3,1,1,])).toEqual([1,2,3])
})










// import { findDuplicate } from '../src/find_Duplicate'
//
// test('find dup', async({})=>{
//     const dup = findDuplicate([1,2,3,4,5,5])
//     console.log(dup)
//     })


// import { reverse } from '../src/reverse'
//
// test('Reverse test', async()=>{
//     const input = "Hello word"
//     const result = reverse(input)
//     console.log(result)
//     })