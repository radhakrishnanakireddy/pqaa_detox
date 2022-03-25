import { When, Then, setDefaultTimeout } from '@cucumber/cucumber';
import citiesPage from '../../pageObjects/CitiesPage';

setDefaultTimeout(120 * 1000); 

When('the Cities page is correctly displayed', async () => {
    await citiesPage.verifyCitiesPage();
});

Then('I scroll {string} at {int} pixels {string} to image number {int}', async (
    continent, pixels, direction, number) => {
    await citiesPage.scrollCities(
        continent.toLowerCase(),
        pixels,
        direction.toLowerCase(),
        number - 1
    )
});

Then('I scroll {string} to the {string}', async(elementId, edge) => {
    await element(citiesPage.continentBackground(elementId)).scrollTo(edge);
});