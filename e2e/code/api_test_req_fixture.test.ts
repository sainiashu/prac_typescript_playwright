import {test, expect } from '@playwright/test'
import { request } from 'http'

test(" Api request",async({request})=>{
     const response = await request.get('https://jsonplaceholder.typicode.com/posts/1');
     expect(response.status()).toBe(200)
     const data = await response.json()
     expect(data.id).toBe(1)
})