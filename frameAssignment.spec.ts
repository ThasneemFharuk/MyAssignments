
import { test, expect } from "@playwright/test";

test("Automating Alert & Frame Interactions", async ({ page }) => {

    await page.goto(
        "https://www.w3schools.com/js/tryit.asp?filename=tryjs_confirm"
    );

    // Listen for the dialog before clicking Try it
    page.on("dialog", async (dialog) => {
        console.log("Dialog message:", dialog.message());
        console.log("Dialog type:", dialog.type());

        await dialog.accept();
    });

    // Locate the iframe
    const frame = page.frameLocator("#iframeResult");

    // Click Try it
    await frame.getByRole("button", { name: "Try it" }).click();

    // Locate the result paragraph
    const successMessage = frame.locator("#demo");

    // Verify the displayed text
    await expect(successMessage).toHaveText("You pressed OK!");

    console.log("Success message:", await successMessage.innerText());
});
