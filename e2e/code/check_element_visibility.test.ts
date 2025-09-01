import {test, expect} from '@playwright/test'

test('check element visibility', async({page})=>{
    await page.goto("https://www.saucedemo.com/")
    const elem =  await page.locator("//input[@id='login-button']")
    await expect(elem).toBeVisible()

})