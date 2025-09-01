import {test, expect} from '@playwright/test'

test('mouse hover',async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/")
    await page.hover("")
    const toolTip = page.locator("")
    await expect(toolTip).toBeVisible()

    
})