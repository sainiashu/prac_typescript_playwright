import {test, expect} from '@playwright/test'

test('input form',async({page})=>{

    await page. goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
    await page.locator("//input[@id='name']").fill("")
    const input = page.locator('#search');
    await input.click();
    await page.keyboard.type('Playwright Rocks!');
    // await expect(input).to('Playwright Rocks!');

    
})