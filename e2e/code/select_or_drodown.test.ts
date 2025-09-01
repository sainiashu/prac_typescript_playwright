import {test, expect} from '@playwright/test'

test('select test', async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/select-dropdown-demo")
    await page.selectOption("id=select-demo",{value:'Wednesday'})

    await page.waitForTimeout(2000)

    
})


