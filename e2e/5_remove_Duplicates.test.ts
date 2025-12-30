import{test, expect} from '@playwright/test'
import {removeDuplicates} from '../src/remove_Duplicates'

test('Remove duplicates',async()=>{
    expect(removeDuplicate([1,2,3,1,1,])).toEqual([1,2,3])
})