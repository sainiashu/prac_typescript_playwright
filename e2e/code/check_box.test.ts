import {test, expect} from '@playwright/test'

test('select test', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
    
    await page.locator("//input[@name='option2']").check()        
})
