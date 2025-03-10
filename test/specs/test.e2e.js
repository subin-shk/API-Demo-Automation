const { expect, browser, $ } = require("@wdio/globals");
const LoginPage = require("../pageobjects/login.page");
const SecurePage = require("../pageobjects/secure.page");
describe("Accessibility interaction", () => {
  // it('should open the application', async () => {
  //      await browser.pause(5000);
  //     const app = await $("~App");
  //     app.click()

  // })

  it("should click accessibility", async () => {
    await browser.pause(5000);

    let assecibility = await $("~Access'ibility");
    assecibility.click();
  });

  it("should select accessibility node query", async () => {
    await browser.pause(5000);

    let assecibility = await $("~Access'ibility");
    assecibility.click();

    let nodeQuery = await $("~Accessibility Node Querying");
    nodeQuery.click();

    let takeOutTrash = await $(
      '//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"][1]'
    );
    takeOutTrash.click();

    await $(
      '(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[2]'
    ).click();

    let conquerWorld = await $(
      '(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[3]'
    );
    conquerWorld.click();

    await $(
      '(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[4]'
    ).click();

    await $(
      '(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[5]'
    ).click();

    await $(
      '(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[6]'
    ).click();
    await $(
      '(//android.widget.CheckBox[@resource-id="io.appium.android.apis:id/tasklist_finished"])[7]'
    ).click();

    // if (await $("~Accessibility Node Querying").isExisting()) {
    await browser.back();
    // }
  });

  it("should go to Accessibility Service and return", async () => {
    await browser.pause(2000);

    let accessibilityService = await $("~Accessibility Service");
    if (await accessibilityService.isExisting()) {
      await accessibilityService.click();
      await browser.back();
    }
  });

  it("should go to custom view and return", async () => {
    await browser.pause(2000);

    let customView = await $("~Custom View");

    if (await customView.isExisting()) {
      await customView.click();
      await browser.back();
      await browser.back();
    }
  });
});

describe("Animation", () => {
  it("should open animation", async () => {
    await browser.pause(2000);
    let animation = await $("~Animation");
    animation.click();
  });

  it("should click Cloning and retun", async () => {
    await browser.pause(2000);
    cloning = await $("~Cloning");
    cloning.click();

    await $("~Run").click();

    browser.pause(5000);

    browser.back();
    browser.back();
  });
});

describe("Views", () => {
  it("should go to views, animation, lyon", async () => {
    await browser.pause(5000);
    views = await $("~Views");
    views.click();

    await browser.pause(2000);
    animation = await $("~Animation");
    animation.click();

    browser.pause(50000);
  });
});
