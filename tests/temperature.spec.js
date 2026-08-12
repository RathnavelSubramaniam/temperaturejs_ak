const { test, expect } = require("@playwright/test");
const path = require("path");

test.beforeEach(async ({ page }) => {
    const filePath = "file://" + path.resolve("index.html");
    await page.goto(filePath);
});

test("Celsius to Fahrenheit", async ({ page }) => {

    await page.fill("#temperature", "0");

    await page.selectOption("#conversion", "cToF");

    await page.click("#convert");

    await expect(page.locator("#result"))
        .toHaveText("Result: 32.00 °F");
});

test("Celsius to Fahrenheit 100 degrees", async ({ page }) => {

    await page.fill("#temperature", "100");

    await page.selectOption("#conversion", "cToF");

    await page.click("#convert");

    await expect(page.locator("#result"))
        .toHaveText("Result: 212.00 °F");
});

test("Fahrenheit to Celsius", async ({ page }) => {

    await page.fill("#temperature", "32");

    await page.selectOption("#conversion", "fToC");

    await page.click("#convert");

    await expect(page.locator("#result"))
        .toHaveText("Result: 0.00 °C");
});

test("Fahrenheit to Celsius 212 degrees", async ({ page }) => {

    await page.fill("#temperature", "212");

    await page.selectOption("#conversion", "fToC");

    await page.click("#convert");

    await expect(page.locator("#result"))
        .toHaveText("Result: 100.00 °C");
});
