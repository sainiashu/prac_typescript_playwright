import {test, expect} from '@playwright/test';

test('launch browser', async({page})=>{
    await page.goto('https://google.com')
    });
