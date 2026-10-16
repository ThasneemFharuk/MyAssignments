//import {test} from "@playwright/test";
import test, { expect } from "@playwright/test";

test("ticket booking in pvr", async ({page}) => {
    await page.goto('https://www.pvrcinemas.com/')

     const Title = await page.title()
     console.log(Title);
     await expect(Title).toBe('PVR Cinemas')


    await page.locator('//span[text()="Cinema"]').click()
    await page.locator('//span[text()="Select Cinema"]').click()
    await page.locator('//span[text()="INOX Insignia At Epicuria,Nehru Place Delhi"]').click()
    await page.locator('//span[contains(text(),"Tomorrow")]').click()
    await page.locator('(//span[text()="STREET FIGHTER"])[3]').click()
    await page.locator('//span[contains(text(),"03:25 PM")]').click()
    await page.locator('//button[@aria-label="Submit"]').click()
    await page.locator('//button[text()="Accept"]').click()
    await page.locator('//span[@id="RE.RECLINERS|F:1"]').click()

    const seat = await page.locator('//span[@id="RE.RECLINERS|F:1"]').innerText()
    const selectedseat = await page.locator("//div[@class='select-seat-number']/div[1]").innerText()
    await expect(selectedseat).toContain(seat)

    const price = await page.locator('//div[@class="grand-prices"]')
    await expect(price).toHaveText('1281.42');

    await page.locator('//button[text()="Proceed"]').click()
})