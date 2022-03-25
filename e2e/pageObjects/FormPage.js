import utilities from '../helper/Utilities';

class FormPage {
    
    // Form headers
    get addMemberHeader() {
        return element(by.id('addMemberHeader'));
    }

    // Form fields
    get formBackground() {
        return by.id('formBackground');
    }

    get nameLabel() {
        return element(by.id('formLabel-name'));
    }
    get nameInput() {
        return element(by.id('formInput-name'));
    }
    get surnameLabel() {
        return element(by.id('formLabel-surname'));
    }
    get surnameInput() {
        return element(by.id('formInput-surname'));
    }
    get dateOfBirthLabel() {
        return element(by.id('formLabel-dateOfBirth'));
    }
    get dateOfBirthInput() {
        return element(by.id('formInput-dateOfBirth'));
    }
    get dateOfBirthPicker() {
        return element(by.id('formDatePicker'));
    }
    get confirmPickerButton() {
        return element(by.id('confirmPickerButton'));
    }
    get cancelPickerButton() {
        return element(by.id('cancelPickerButton'));
    }
    get startDayLabel() {
        return element(by.id('formLabel-startDay'));
    }
    get startDayInput() {
        return element(by.id('formInput-startDay'));
    }
    get startDayPicker() {
        return element(by.id('formPicker-startDay'));
    }
    get emailLabel() {
        return element(by.id('formLabel-email'));
    }
    get emailInput() {
        return element(by.id('formInput-email'));
    }
    get addressLineOneLabel() {
        return element(by.id('formLabel-addressLineOne'));
    }
    get addressLineOneInput() {
        return element(by.id('formInput-addressLineOne'));
    }
    get addressLineTwoLabel() {
        return element(by.id('formLabel-addressLineTwo'));
    }
    get addressLineTwoInput() {
        return element(by.id('formInput-addressLineTwo'));
    }
    get cityLabel() {
        return element(by.id('formLabel-city'));
    }
    get cityInput() {
        return element(by.id('formInput-city'));
    }
    get postcodeLabel() {
        return element(by.id('formLabel-postcode'));
    }
    get postcodeInput() {
        return element(by.id('formInput-postcode'));
    }
    get countryLabel() {
        return element(by.id('formLabel-country'));
    }
    get countryInput() {
        return element(by.id('formInput-country'));
    }
    get countryPicker() {
        return element(by.id('formPicker-country'));
    }
    get startDateLabel() {
        return element(by.id('formLabel-startDate'));
    }
    get startDateInput() {
        return element(by.id('formInput-startDate'));
    }
    get startTimeLabel() {
        return element(by.id('formLabel-startTime'));
    }
    get startTimeInput() {
        return element(by.id('formInput-startTime'));
    }
    get startTimePicker() {
        return element(by.id('formTimePicker'));
    }
    get saveMemberButton() {
        return element(by.id('saveMemberButton'));
    }

    // Functions used in encapsulation
    async verifyAddMemberPage() {
        await expect(this.addMemberHeader).toHaveText('Add Member');
        await this.verifyFormLabels();

        await expect(this.nameInput).toHaveText('');
        await expect(this.surnameInput).toHaveText('');
        await expect(this.dateOfBirthInput).toHaveText('');
        await expect(this.startDayInput).toHaveText('');
        await expect(this.emailInput).toHaveText('');

        await utilities.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        );

        await expect(this.addressLineOneInput).toHaveText('');
        await expect(this.addressLineTwoInput).toHaveText('');
        await expect(this.cityInput).toHaveText('');

        await element(this.formBackground).swipe('up');

        await expect(this.postcodeInput).toHaveText('');
        await expect(this.countryInput).toHaveText('');
        await expect(this.startDateInput).toHaveText('');
        await expect(this.startTimeInput).toHaveText('');
        await expect(this.saveMemberButton).toBeVisible();

        await element(this.formBackground).swipe('down');
    }

    // Support functions
    async verifyFormLabels() {
        await expect(this.nameLabel).toHaveText('Name:');
        await expect(this.surnameLabel).toHaveText('Surname:');
        await expect(this.dateOfBirthLabel).toHaveText('Date of Birth:');
        await expect(this.startDayLabel).toHaveText('Start Day:');
        await expect(this.emailLabel).toHaveText('Email:');

        await utilities.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        );

        await expect(this.addressLineOneLabel).toHaveText('Address Line One:');
        await expect(this.addressLineTwoLabel).toHaveText('Address Line Two:');
        await expect(this.cityLabel).toHaveText('City:');

        await element(this.formBackground).swipe('up');

        await expect(this.postcodeLabel).toHaveText('Postcode:');
        await expect(this.countryLabel).toHaveText('Country:');
        await expect(this.startDateLabel).toHaveText('Start Date:');
        await expect(this.startTimeLabel).toHaveText('Start Time:');

        await element(this.formBackground).swipe('down');
    }
}

export default new FormPage();