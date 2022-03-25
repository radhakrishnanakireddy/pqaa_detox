import { Given, setDefaultTimeout } from '@cucumber/cucumber';

setDefaultTimeout(120 * 1000);

Given('I start Detox', { timeout: 60 * 1000 }, async () => {
    console.log('Test started');
});