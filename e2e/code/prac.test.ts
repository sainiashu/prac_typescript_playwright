import {test, expect} from '@playwright/test'
import path from 'path'

test("upload",async({page})=>{

    const [downloadPromise] = await Promise.all([
        page.waitForEvent('download'),
        page.locator("").click()
    ])

    downloadPromise.saveAs(path.join(__dirname, downloadPromise.suggestedFilename()))



    await page.selectOption("locator",{value:'text'})


})