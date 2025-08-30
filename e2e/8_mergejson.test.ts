import {test,expect} from '@playwright/test'
import { mergeJsonObject} from '../src/merge_json'

test('merge json object', async()=>{
    expect(mergeJsonObject({a:1, b:2},{b:3,d:4}))
})