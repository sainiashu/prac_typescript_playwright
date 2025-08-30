import {test, expect} from '@playwright/test'
import { countFailures } from '../src/count_failed_login_attempt'

test('count failed attempt',async()=>{
    
    const attempts = [
        {user:"Alice",success:false},
        {user:"Bob",success:true},
        {user:"Alice",success:false}
    ];

    console.log(attempts)
    expect(countFailures(attempts)).toEqual({Alice: 2})
})
