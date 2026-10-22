import { test } from "@playwright/test";

test("Test to handle alerts",async({page})=>{

    page.on('dialog', async(alert)=>{
        const typeText = alert.accept("Testing")
    })

    await page.goto('https://leafground.com/alert.xhtml')

    await page.locator("(//span[text()='Show'])[5]").click()
    await page.waitForTimeout(3000)

})