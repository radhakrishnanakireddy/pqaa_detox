import { Given, Then, setDefaultTimeout } from '@cucumber/cucumber';
import commonPage from '../../pageObjects/CommonPage';

setDefaultTimeout(120 * 1000);

Given('I tap on the {string} navigation tab section', async (section) => {
    await commonPage.tapNavigationSection(section);
});

Then('I tap the back button', async () => {
    if (device.getPlatform() === 'ios') {
        await element(by.id('header-back')).atIndex(0).tap();
    } else {
        await device.pressBack();
    }
});