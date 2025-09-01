import {test, expect } from '@playwright/test'

test ("Navigate to website", async({page})=>{

        await page.goto("https://www.saucedemo.com/")
        const title = await page.title()
        await page.waitForTimeout(3000)
        expect(title).toBe("Swag Labs")
        console.log(title)
})  