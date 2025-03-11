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
    await browser.pause(2000);

    let assecibility = await $("~Access'ibility");
    assecibility.click();
  });

  it("should select accessibility node query", async () => {
    await browser.pause(2000);

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
  });

  it("should touch and drag on the screen", async () => {
    await browser.pause(2000);

    const bouncingBalls = await $("~Bouncing Balls");
    await bouncingBalls.waitForExist({ timeout: 5000 });
    await bouncingBalls.click();

    await browser.pause(3000);

    // Touch at (100, 500) and drag to (500, 1000)
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: 100,
            y: 500,
            origin: "viewport",
          },
          { type: "pointerDown", button: 0 },
          { type: "pause", duration: 1000 },
          {
            type: "pointerMove",
            duration: 1000,
            x: 500,
            y: 1000,
            origin: "viewport",
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await browser.pause(2000);
    await browser.back();
    await browser.back();
  });
});

describe.only("Views", () => {
  it("should go to views, animation", async () => {
    await browser.pause(5000);
    views = await $("~Views");
    views.click();

    await browser.pause(2000);
    animation = await $("~Animation");
    animation.click();
  });

  it("should go to 3dtransition and click lyon", async () => {
    await browser.pause(2000);

    transition = await $("~3D Transition");
    await transition.click();

    lyon = await $(
      '//android.widget.TextView[@resource-id="android:id/text1" and @text="Lyon"]'
    );
    await lyon.click();

    image = await $(
      '//android.widget.ImageView[@resource-id="io.appium.android.apis:id/picture"]'
    );
    await image.click();

    if (await lyon.isExisting) {
      browser.back();
    }
  });

  it("should click interpolators and select animationDropdown", async () => {
    await browser.pause(2000);

    interpolars = await $("~Interpolators");
    await interpolars.click();

    animationDropdown = await $(
      '//android.widget.TextView[@resource-id="android:id/text1"]'
    );
    await animationDropdown.click();

    bounce = await $(
      '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Bounce"]'
    );
    await bounce.click();

    await animationDropdown.click();

    overshot = await $(
      '//android.widget.CheckedTextView[@resource-id="android:id/text1" and @text="Overshoot"]'
    );
    await overshot.click();

    if (await interpolars.isExisting) {
      await browser.back();
    }

    // browser.pause(2000);
  });

  it("should go to shake and fill", async () => {
    await browser.pause(2000);

    let shake = await $("~Shake");
    await shake.click();

    let password = await $("id:io.appium.android.apis:id/pw");
    await password.setValue("password");

    loginBtn = await $("~Login");
    await loginBtn.click();
    await browser.back();
    await browser.back();
  });

  it("should go inside date widget>inline and spin the clock", async () => {
    await browser.pause(2000);

    let dateWidget = await $("~Date Widgets");
    await dateWidget.click();

    let inline = await $("~2. Inline");
    await inline.click();

    await $("~5").click();
    await $("~10").click();
    await $("~20").click();
    await $("~25").click();
    await $("~30").click();

    browser.back();
    browser.back();
  });

  it.only("should go to views and picker", async () => {
    browser.pause(2000);

    const views = await $("~Views");
    await views.click();

    async function scrollUntilElementIsVisible(element, maxSwipes = 5) {
      let isElementVisible = await element.isDisplayed().catch(() => false);
      let swipeCount = 0;

      while (!isElementVisible && swipeCount < maxSwipes) {
        await browser.performActions([
          {
            type: "pointer",
            id: "finger1",
            parameters: { pointerType: "touch" },
            actions: [
              {
                type: "pointerMove",
                duration: 0,
                x: 500,
                y: 1500,
                origin: "viewport",
              },
              { type: "pointerDown", button: 0 },
              {
                type: "pointerMove",
                duration: 500,
                x: 500,
                y: 500,
                origin: "viewport",
              },
              { type: "pointerUp", button: 0 },
            ],
          },
        ]);

        await browser.pause(1000);

        isElementVisible = await element.isDisplayed().catch(() => false);
        swipeCount++;
      }

      if (!isElementVisible) {
        throw new Error("Element not found after scrolling!");
      }

      await element.click();
    }

    // Locate "Picker" and scroll to it
    const myElement = await $("~Picker");
    await scrollUntilElementIsVisible(myElement);

    browser.pause(5000);
    await browser.performActions([
      {
        type: "pointer",
        id: "finger1",
        parameters: { pointerType: "touch" },
        actions: [
          {
            type: "pointerMove",
            duration: 0,
            x: 551,
            y: 300,
            origin: "viewport",
          },
          { type: "pointerDown", button: 0 },
          {
            type: "pointerMove",
            duration: 500,
            x: 500,
            y: 700,
            origin: "viewport",
          },
          { type: "pointerUp", button: 0 },
        ],
      },
    ]);

    await browser.pause(5000);
    await browser.back();
  });
});
