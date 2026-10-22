/*Navigate to the LeafGround Frames page.
Identify the parent iframe.
Locate the nested iframe inside the parent iframe using frameLocator().
Click the button inside the nested iframe.
Verify that the button text changes to Hurray! You Clicked Me.
Requirements
Use Playwright with TypeScript.
Use the frameLocator() method to handle both parent and child frames.
Use expect() to validate the button text after clicking.
Do not use page.frame() or fixed waitForTimeout() calls.
Expected Result: The nested-frame button should be clicked successfully, and the assertion should pass.*/

import test, { expect } from "@playwright/test";

test('Learn frame using framelocator',async({page})=>{
    await page.goto('https://www.leafground.com/frame.xhtml')

    let parentFrame = page.frameLocator('//iframe[@src="page.xhtml"]')
    const childFrame = parentFrame.frameLocator('#frame2')

    await childFrame.locator('#Click').click()

   const afterClick = await childFrame.locator('#Click').innerText()
   console.log(afterClick);

   await expect(childFrame.locator('#Click')).toHaveText('Hurray! You Clicked Me.')
})