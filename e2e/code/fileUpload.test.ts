import {test, expect} from '@playwright/test'

test('select test', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/upload-file-demo")

        const fileUpload = Promise.all([
        await page.waitForEvent('filechooser'),
        await page.locator("#file").click(),
        await page.setInputFiles("#file",[".//e2e//code//homepage.png"])        
    ])
    
    // await page.setInputFiles("#file",".//e2e//code//homepage.png")
    
})
