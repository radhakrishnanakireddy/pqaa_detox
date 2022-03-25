import utilities from '../helper/Utilities';
import baseData from '../testData/baseData';
import testData from '../testData/TestData';
import assert from 'chai';

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

    async fillInForm(formData) {
        await utilities.typeInElement(this.nameInput, formData.name);
        await utilities.typeInElement(this.surnameInput, formData.surname);
        await this.dateOfBirthLabel.tap();
        await this.selectDatePickerDate(formData.b_day, formData.b_month, formData.b_year);
        await this.confirmPicker();
        await this.startDayLabel.tap();
        await this.selectPickerValue(this.startDayPicker, formData.start_day);
        await utilities.typeInElement(this.emailInput, formData.email);

        await utilities.scrollToElement(
            this.postcodeInput, this.formBackground, 150, 'down'
        );

        await utilities.typeInElement(this.addressLineOneInput, formData.address_one);
        await utilities.typeInElement(this.addressLineTwoInput, formData.address_two);

        await element(this.formBackground).swipe('up');
        
        await utilities.typeInElement(this.cityInput, formData.city);
        await utilities.typeInElement(this.postcodeInput, formData.postcode);
        await this.countryLabel.tap();

        await element(this.formBackground).swipe('up', 'fast', 0.25);

        await this.selectPickerValue(this.countryPicker, formData.country, 'up');
        await this.startDateLabel.tap();

        await element(this.formBackground).swipe('up', 'fast', 0.25);
        
        await this.selectCalendarDate(
            formData.start_day, formData.start_date, formData.start_month, formData.start_year);
        await this.startTimeLabel.tap();
        await this.setTime(formData.start_hour, formData.start_minute);
        await this.confirmPicker();

        this.saveMemberData(formData.member, formData.name, formData.surname);
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

    async selectCalendarDate(weekday, day, month, year) {
        while (await utilities.softTextAssertion(element(by.id('HEADER_MONTH_NAME')),
            `${month} ${year}`) === false) {
            await element(by.id('native.calendar.CHANGE_MONTH_RIGHT_ARROW')).tap();
        }
        await element(by.label(` ${weekday} ${day} ${month} ${year} `)).atIndex(0).tap();

    }

    async selectDatePickerDate(day, month, year) {
        if (device.getPlatform() === 'ios') {
            await this.dateOfBirthPicker.setDatePickerDate(`${day}-${month}-${year}`,
                'dd-MM-yyyy');
        } else {
           await element(by.type('android.widget.EditText')).atIndex(2).typeText(year);
           await element(by.type('android.widget.EditText')).atIndex(1).typeText(day);
           await element(by.type('android.widget.EditText')).atIndex(0).tap();
           await element(by.type('android.widget.EditText')).atIndex(0).clearText();
           await element(by.type('android.widget.EditText')).atIndex(0).typeText(baseData.getMonth(month));
        }
    }

    async selectPickerValue(picker, value, swipeDirection) {
        if (device.getPlatform() === 'ios') {
            await picker.setColumnToValue(0, value);
        } else {
            await element(by.type('android.widget.Spinner')).tap();
            const optionToSelect = element(by.type('android.widget.CheckedTextView').and(by.text(value)));
            while (await utilities.softElementAssertion(optionToSelect) === false) {
                await element(by.type('android.widget.ListView')).swipe(swipeDirection, 'slow');
            }
            await optionToSelect.tap();
        }
    }

    async setTime(hours, minutes ) {
        if (device.getPlatform() === 'ios') {
            await element(this.formBackground).swipe('up', 'fast', 0.5);
            await this.startTimePicker.setDatePickerDate(`${hours}:${minutes}`, 'HH:mm');
        } else {
            await element(by.label('Switch to text input mode for the time input.')).tap();
            await utilities.typeInElement(element(by.type('android.widget.EditText')).atIndex(0), hours);
            await utilities.typeInElement(element(by.type('android.widget.EditText')).atIndex(1), minutes);
        }
    }

    async confirmPicker() {
        if (device.getPlatform() === 'ios') {
            await this.confirmPickerButton.tap();
        } else {
            await element(by.text('OK')).tap();
        }
    }

    async cancelPicker() {
        if (device.getPlatform() === 'ios') {
            await this.cancelPickerButton.tap();
        } else {
            await element(by.text('CANCEL')).tap();
        }
    }

    async saveMemberData(memberNumber, name, surname) {
        switch(memberNumber) {
            case '1':
                testData.setName_1(name);
                testData.setSurname_1(surname);
                break;
            default:
                assert.fail(`The entered ${memberNumber} is an invalid Member`);
        }
    }
}

export default new FormPage();