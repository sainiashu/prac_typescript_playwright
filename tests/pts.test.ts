import {test, expect} from '@playwright/test'

test('Multiple Page',async({page})=>{
    await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');

    const [multiWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("#followboth").click()
        ])
    await multiWindow.waitForLoadState()

    const pages = page.context().pages()
    pages.forEach(tabs=>{
        console.log(tabs.url())
        })
})


















// test('single window', async({page})=>{
//
//     await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")
//
//     const [newWindow] = await Promise.all([
//         page.waitForEvent('popup'),
//         page.locator("//a[@title='Follow @Lambdatesting on Twitter']").click()
//         ])
//
//     await newWindow.waitForLoadState()
//
// //     expect(newWindow).toHaveURL(/Lambdatesting/)
//     await newWindow.close()
//
//     })

// test('Test 1 pop window',async({page})=>{
//     await page.goto('https://www.lambdatest.com/selenium-playground/window-popup-modal-demo');
//
//     const [newWindow] = await Promise.all([
//         page.waitForEvent('popup'),
//         // page.click("'  Follow On Twitter '")
//         page.locator("a[title='Follow @Lambdatesting on Twitter']").click()
//
//     ]);

//     console.log(newWindow);
//})


//
// test('mouse hover', async({})=>{
//
//     await page.goto("https://www.lambdatest.com/selenium-playground/")
//     await page.hover("")
//     const tooltip = page.locator("")
//     await expect(tooltip).toBeVisible()
//
//     })

// test('login test', async({page})=>{
//
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator("//input[@id='user-name']").fill("standard_user")
//     await page.locator("#password").fill("secret_sauce")
//     await page.locator("//input[@id='login-button']").click()
//
//     const content = await page.locator("//span[@class='title']").textContent()
//     expect(content).toContain("Products")
//     })


// test('input form test', async({page})=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/input-form-demo")
//     await page.locator("//input[@id='name']").fill("playwright")
//     await page.locator("//button[normalize-space()='Submit']").click();
//     })


// test('test count link', async({page})=>{
//     await page.goto("https://www.saucedemo.com/")
//     await page.locator("//input[@id='user-name']").fill("standard_user")
//     await page.locator("#password").fill("secret_sauce")
//     await page.locator("//input[@id='login-button']").click()
//
//     const linkCount = await page.locator("[class='inventory_item']").count()
//     await expect(linkCount).toEqual(6)
//     })


// test('check visibility', async({page})=>{
//
//     await page.goto("https://www.saucedemo.com/")
//     const elem = await page.locator("//input[@id='login-button']")
//     await expect(elem).toBeVisible()
//
//     })


// test('select checkbox',async({page})=>{
//     await page.goto("https://www.lambdatest.com/selenium-playground/checkbox-demo")
//     await page.locator("//input[@name='option2']").click()
//
//     } )


// xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
//
// import {test, expect} from '@playwright/test'
// import {removeDuplicate} from '../src/remove_Duplicates'
//
// test('Remove duplicates',async()=>{
//     expect(removeDuplicate([1,2,3,1,1,])).toEqual([1,2,3])
//
// })

// import { findDuplicate } from '../src/find_Duplicate'
//
// test('find dup', async({})=>{
//     const dup = findDuplicate([1,2,3,4,5,5])
//     console.log(dup)
//     })


// import { reverse } from '../src/reverse'
//
// test('Reverse test', async()=>{
//     const input = "Hello word"
//     const result = reverse(input)
//     console.log(result)
//     })