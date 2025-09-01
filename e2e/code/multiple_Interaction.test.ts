import {test, expect } from '@playwright/test'

test(" single pop",async({page})=>{

    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

    const [newWindow] = await Promise.all([
        page.waitForEvent('popup'),
        page.locator("").click()
    ])
})

test.only("multiple pop",async({page})=>{
    await page.goto("https://www.lambdatest.com/selenium-playground/window-popup-modal-demo")

   const [newPop] = await Promise.all([
    page.waitForEvent('popup'),
    page.locator("").click()
   ])

   newPop.waitForLoadState()

   const pages = page.context().pages()

   pages.forEach(tabs=>{
    console.log(tabs.url())
   })
})
