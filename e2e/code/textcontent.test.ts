import {test, expect} from '@playwright/test'

test('text content',async({page})=>{

    await page. goto("https://www.lambdatest.com/selenium-playground/status-code")
    const button = await page.locator("//p[@class='text-size-16 mt-10 text-black font-medium']")

    await expect(button).toHaveText("200")
})