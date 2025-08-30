import {test, expect} from '@playwright/test'
import { findDuplicate } from '../src/find_duplicate'

test('test find duplicate',async()=>{
    expect(findDuplicate([1,2,2,5,6])).toBe(2)
})