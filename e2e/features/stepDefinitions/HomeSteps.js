import { Given, Then } from '@cucumber/cucumber';
import homePage from '../../pageObjects/HomePage';

Given('I tap on the {string} Home section', async (section) => {
    await homePage.tapHomeSection(section);
});

Then('the Home page is correctly displayed', async () => {
    await homePage.verifyHomePage();
});