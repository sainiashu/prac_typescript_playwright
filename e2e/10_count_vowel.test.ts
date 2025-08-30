import {test, expect } from '@playwright/test'
import { countVowel} from '../src/count_vowel'

test('Count Vowel',async()=>{
    expect(countVowel("Testing")).toBe(2)
})