import {test, expect} from '@playwright/test'
import { reverse } from '../src/reverse'

test('Test Reverse',async()=>{
    const input = "Updated location";
    const result = reverse(input);

    console.log(result);
})
