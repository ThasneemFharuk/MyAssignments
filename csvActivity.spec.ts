import test, { expect } from "@playwright/test";
import { parse } from "csv-parse/sync";
import fs from 'fs'
import path from "path";

//relative path to read data from CSV file
let value = fs.readFileSync('Data/leaf.csv', 'utf-8')
console.log(value);

let value1: any[] = parse(value, { columns: true, skip_empty_lines: true })
console.log(value1);

for (let details of value1) {
    test(`Learn to read data from CSV file ${details.tcid}`, async ({ page }) => {
        await page.goto('https://leaftaps.com/opentaps/control/login')
        await page.locator('[id="username"]').fill(details.username)
        await page.locator('[id="password"]').fill(details.password)
        await page.locator('[class="decorativeSubmit"]').click()
        //await page.locator("//a[contains(text(),'CRM/SFA')]").click()
        await expect(page.locator('//h2[contains(text(),"Welcome ")]')).toContainText("Welcome ")
        //await expect(page.getByText(' CRM/SFA ',{exact:true})).toContainText('CRM/SFA');

    })
}