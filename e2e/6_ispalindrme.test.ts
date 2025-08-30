import {test, expect} from '@playwright/test'
import { isPalidrone} from '../src/palindrome'

test('is palindrone work', async()=>{
    expect(isPalidrone('Race car')).toBe(true)
})