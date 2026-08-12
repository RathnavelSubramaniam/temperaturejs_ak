# temperaturejs_ak
# Temperature Converter

## Objective

Create a Temperature Converter using HTML, CSS, and JavaScript.

## Requirements

The application should:

1. Accept a temperature value.
2. Convert Celsius to Fahrenheit.
3. Convert Fahrenheit to Celsius.
4. Display the converted temperature.

## Conversion Formulas

### Celsius to Fahrenheit

Fahrenheit = (Celsius × 9/5) + 32

### Fahrenheit to Celsius

Celsius = (Fahrenheit - 32) × 5/9

## Example 1

Input:

Temperature = 0

Conversion = Celsius to Fahrenheit

Output:

Result: 32.00 °F

## Example 2

Input:

Temperature = 100

Conversion = Celsius to Fahrenheit

Output:

Result: 212.00 °F

## Example 3

Input:

Temperature = 32

Conversion = Fahrenheit to Celsius

Output:

Result: 0.00 °C

## Files

- `index.html` - Webpage structure
- `style.css` - CSS styling
- `script.js` - Temperature conversion logic
- `tests/temperature.spec.js` - Automated tests
- `package.json` - Project configuration
- `.github/workflows/test.yml` - GitHub Actions workflow

## How to Run

Open `index.html` in a web browser.

Enter a temperature, select the conversion type, and click the Convert button.

## Automated Testing

GitHub Actions uses Playwright to test the webpage.

The following are tested:

- Celsius to Fahrenheit
- 100°C to Fahrenheit
- Fahrenheit to Celsius
- 212°F to Celsius

## Important

Do not execute:

node script.js

The JavaScript uses the browser DOM.

GitHub Actions executes the tests using Chromium and Playwright.

## Submission

Push all files to GitHub.

GitHub Actions will automatically run the tests.
