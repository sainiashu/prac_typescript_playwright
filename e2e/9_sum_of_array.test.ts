import { test, expect } from '@playwright/test'
import { sumOfArray} from '../src/sum_num_of_array'

test('Sum of array',async()=>{
    expect(sumOfArray([1,2,3])).toEqual(6)
})