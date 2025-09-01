import {test, expect} from '@playwright/test'
import path from 'path'

test('screenshot test', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    await page.screenshot({path:'.//e2e//code//homepage.png', fullPage:true})

})