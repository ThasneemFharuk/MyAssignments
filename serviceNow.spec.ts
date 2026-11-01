
import { test, expect } from '@playwright/test';

test('Ordering mobile in servicenow', async ({ page }) => {

    await page.goto("https://dev330545.service-now.com/");

    await page.locator('//input[@id="user_name"]').fill('Admin');

    await page.locator('//input[@id="user_password"]').fill('TkA5z3JBzp//');

    await page.locator('//button[@id="sysverb_login"]').click();
    await page.waitForTimeout(3000);

    /*const Title = await page.title();
    console.log(Title);
    await expect.soft(page).toHaveTitle('Shared admin dashboard | Unified Navigation App | ServiceNow');*/

    await page.locator('[aria-label="All"]').click();
    await page.locator('[aria-label="Service Catalog 3 of 23"]').click();

    let serviceFrame = await page.frameLocator('iframe[title="Main Content"]')
    let mobileFrame = await serviceFrame.getByRole('link', {
        name: 'Mobiles. Cell phones to meet your business needs.',
        exact: true
    }).click();

    let mobileselectionFrame = await page.frameLocator('iframe[title="Main Content"]')
    let appleFrame = await mobileselectionFrame.getByText('Apple iPhone 13 pro').click();

    await mobileselectionFrame.locator("//label[contains(text(),'No')]").click();
    await mobileselectionFrame.locator("//select[@class='form-control cat_item_option ']").selectOption("unlimited")
    // Select Gold
    await mobileselectionFrame.locator("//label[contains(text(),'Gold')]").click();
    // Select 512 GB
    await mobileselectionFrame.locator("//label[contains(.,'512 GB')]").click();

    await mobileselectionFrame.locator("//button[@aria-label='Order Now']").click();

    let confirmNotify = await mobileselectionFrame.locator("//div[contains(@class,'notification')]").innerText();
    console.log(confirmNotify);
    await expect(confirmNotify).toContain('submitted');
    await page.screenshot({
        path: 'Data/servicecatalog.png',
        fullPage: true
    });



});
