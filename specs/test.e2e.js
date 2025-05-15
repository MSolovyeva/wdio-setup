const { expect, browser } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");

import { assert } from "chai";

describe("My Test application", () => {
  it("should login with valid credentials", async () => {
    await LoginPage.open();
    await browser.pause(10000);
    await LoginPage.login("tomsmith", "SuperSecretPassword!");
    await browser.pause(5000);
    await expect(SecurePage.flashAlert).toBeExisting();
    await expect(SecurePage.flashAlert).toHaveText(
      expect.stringContaining("You logged into a secure area!")
    );
  });
  it("Verify page Title", async () => {
    await LoginPage.open();
    await browser.pause(5000);
    const title = await browser.getTitle();
    console.log("Title of the page is: ", title);
    assert.equal(title, "The Internet");
  });
  it("Verify page2 Title", async () => {
    await browser.url("https://apple.com");
    await browser.pause(5000);
    const title = await browser.getTitle();
    console.log("Title of the page is: ", title);
    assert.equal(title, "Apple");    
  });
});
