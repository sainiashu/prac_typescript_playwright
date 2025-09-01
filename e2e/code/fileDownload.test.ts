import { test, expect } from '@playwright/test'
import path from 'path'
import { parseEnv } from 'util'


test('test 3rd download option', async ({ page }) => {

    await page.goto('https://www.lambdatest.com/selenium-playground/generate-file-to-download-demo')

    await page.locator("#textbox").fill('Demo User test the functionality')

    await page.locator("#textbox").press('Enter')

    // const [downloadPromise] = await Promise.all([
    //     page.waitForEvent('download'),
    //     page.locator("").click()        
    // ])

    // downloadPromise.saveAs(path.join(__dirname, downloadPromise.suggestedFilename(s)))


    const [downloadPromise] = await Promise.all([
        page.waitForEvent('download'),
        page.getByRole('button', { name: 'Generate File' }).click(),
        page.locator("#link-to-download").click()
    ])

    await downloadPromise.saveAs(path.join(__dirname, downloadPromise.suggestedFilename()))

})