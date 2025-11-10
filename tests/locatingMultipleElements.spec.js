//const { test, expect } = require("@playwright/test");
import { test, expect } from '@playwright/test';

test("should locate multiple hyperlinked element in the home page of demoblaze.com and display the item names in console", async ({
  page,
}) => {
  await page.goto("https://demoblaze.com/index.html");


//   const elements = await page.$$("a");
//   for (const element of elements) {
//     const text = await element.textContent();
//     console.log(text);
 

await page.waitForSelector("#tbodyid");
const products = await page.$$("#tbodyid h4 a");
for (const product of products) {
  const text = await product.textContent();
  console.log(text);


}
});

