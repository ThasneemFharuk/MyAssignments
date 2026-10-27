import test from "@playwright/test";
import dotenv from 'dotenv'

let fileName = process.env.envData || 'QA_salesforce' || 'Prod_salesforce'
dotenv.config({ path: `Data/${fileName}.env` })

test('learn to read data from env file', async ({ page }) => {

    await page.goto(process.env.L_Url as string)
    await page.locator('[id="username"]').fill(process.env.L_UserName as string)
    await page.locator('[id="Login"]').click()
    await page.locator('[id="password"]').fill(process.env.L_Password as string)
    await page.locator('[id="Login"]').click()



})
