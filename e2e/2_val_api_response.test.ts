import {test, expect } from '@playwright/test'
import {validateAPI} from '../src/validateAPI_response'


test(' Validate Response', async()=>{
    const apiResponse = {id:1, status: "success",data:{}}
    console.log("Api response:", apiResponse)
    expect(validateAPI(apiResponse)).toBe(true)
})