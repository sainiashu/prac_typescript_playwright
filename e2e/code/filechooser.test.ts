import {test, expect } from '@playwright/test'
import path from 'path';

test.only('upload file', async({page})=>{

    //Simple upload option
    await page.goto('https://www.lambdatest.com/selenium-playground/upload-file-demo')

    //Option 1: Single File
     await page.locator("#file").setInputFiles(path.join(__dirname, 'homepage.png'))

    
    // await page.waitForTimeout(1000)
       
    //Option 2 : Multiple files
    // await page.locator("#file").setInputFiles([
    //     path.join(__dirname,"homepage.png"),
    //     // path.join(__dirname,"homepage2.png")  commented becuase it works with only one file
    // ])
    //await page.waitForTimeout(1000)


    
    
    
})