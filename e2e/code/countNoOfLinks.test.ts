import {test, expect} from '@playwright/test'

test('screenshot test', async({page})=>{
    await page.goto("https://www.saucedemo.com/")       
    await page.locator("//input[@id='user-name']").fill("standard_user")
    await page.locator("#password").fill("secret_sauce")
    await page.locator("//input[@id='login-button']").click()
    const linkCount = await page.locator("[class='inventory_item']").count()
    expect(linkCount).toEqual(6)
})