import {test, expect} from '@playwright/test'

test('login test', async({page})=>{

    await page.goto("https://www.saucedemo.com/")
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()

    const text = await page.locator("//span[@class='title']").textContent()
    expect(text).toContain("Products")
})