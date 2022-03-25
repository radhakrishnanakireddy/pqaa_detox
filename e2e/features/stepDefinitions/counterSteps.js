import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import countersPage from '../../pageObjects/CountersPage';

setDefaultTimeout(120* 1000);

When('the Counters page is correctly displayed', async () => {
    await countersPage.verifyCountersPage();
});

Then('I tap the {string} Counter {int} times', async (counter, tapsNumber) => {
    await countersPage.tapCounter(counter, tapsNumber);
});