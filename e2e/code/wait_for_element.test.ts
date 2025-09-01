import {test, expect} from '@playwright/test'

test('wait for element',async({page})=>{

    await page. goto("https://www.lambdatest.com/selenium-playground/upload-file-demo")
    const button = await page.locator("//button[normalize-space()='Book a Demo']")

    await expect(button).toBeVisible()
})