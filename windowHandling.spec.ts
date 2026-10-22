/* 1. Launch the URL:
   https://www.leafground.com/window.xhtml
2. Handle the single window scenario.
   - Click Open.
   - Capture the newly opened child page.
   - Print the title of the main page.
   - Print the title of the child page.
3. Switch to the child page.
4. Inspect the Email field and enter your email address.
5. Inspect the Message field and enter:
   "Playwright window handling"*/

import { test, expect } from "@playwright/test";

test("Handling window", async ({ page, context }) => {
    // 1. Launch the URL
    await page.goto("https://www.leafground.com/window.xhtml");

    // 2. Click Open and capture the child page
    const [childPage] = await Promise.all([
        context.waitForEvent("page"),
        page.getByText("Open", { exact: true }).click()
    ]);

   // Wait until the child page is available
    await childPage.waitForTimeout(2000);

    // 3. Print the titles of both pages
    console.log("Main page title:", await page.title());
    console.log("Child page title:", await childPage.title());

    // 4. Inspect the Email field and enter your email
    await childPage.getByLabel("E-mail Address").fill("thasneemfharuk@gmail.com");

    // 5. Inspect the Message field and enter the required text
    await childPage.getByPlaceholder("Write your message...").fill("Playwright window handling");
});
