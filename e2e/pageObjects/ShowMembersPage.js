import baseData from '../testData/BaseData';
import utilities from '../helper/Utilities';

class ShowMemberPage {

    // Show Member header elements
    get showMemberHeader() {
        return element(by.id('showMemberHeader'));
    }
    get editMemberIcon() {
        return element(by.id('editMemberIcon'));
    }

    // Show Member body elements
    get showMemberBackground() {
        return by.id('showMemberBackground');
    }
    get memberIdLabel() {
        return element(by.id('memberFieldLabel-id'));
    }
    get memberIdValue() {
        return element(by.id('memberFieldValue-id'));
    }
    get memberNameLabel() {
        return element(by.id('memberFieldLabel-name'));
    }
    get memberNameValue() {
        return element(by.id('memberFieldValue-name'));
    }
    get memberSurnameLabel() {
        return element(by.id('memberFieldLabel-surname'));
    }
    get memberSurnameValue() {
        return element(by.id('memberFieldValue-surname'));
    }
    get memberDateOfBirthLabel() {
        return element(by.id('memberFieldLabel-dateOfBirth'));
    }
    get memberDateOfBirthValue() {
        return element(by.id('memberFieldValue-dateOfBirth'));
    }
    get memberStartDayLabel() {
        return element(by.id('memberFieldLabel-startDay'));
    }
    get memberStartDayValue() {
        return element(by.id('memberFieldValue-startDay'));
    }
    get memberEmailLabel() {
        return element(by.id('memberFieldLabel-email'));
    }
    get memberEmailValue() {
        return element(by.id('memberFieldValue-email'));
    }
    get memberAddressLineOneLabel() {
        return element(by.id('memberFieldLabel-addressLineOne'));
    }
    get memberAddressLineOneValue() {
        return element(by.id('memberFieldValue-addressLineOne'));
    }
    get memberAddressLineTwoLabel() {
        return element(by.id('memberFieldLabel-addressLineTwo'));
    }
    get memberAddressLineTwoValue() {
        return element(by.id('memberFieldValue-addressLineTwo'));
    }
    get memberCityLabel() {
        return element(by.id('memberFieldLabel-city'));
    }
    get memberCityValue() {
        return element(by.id('memberFieldValue-city'));
    }
    get memberPostcodeLabel() {
        return element(by.id('memberFieldLabel-postcode'));
    }
    get memberPostcodeValue() {
        return element(by.id('memberFieldValue-postcode'));
    }
    get memberCountryLabel() {
        return element(by.id('memberFieldLabel-country'));
    }
    get memberCountryValue() {
        return element(by.id('memberFieldValue-country'));
    }
    get memberStartDateLabel() {
        return element(by.id('memberFieldLabel-startDate'));
    }
    get memberStartDateValue() {
        return element(by.id('memberFieldValue-startDate'));
    }
    get memberStartTimeLabel() {
        return element(by.id('memberFieldLabel-startTime'));
    }
    get memberStartTimeValue() {
        return element(by.id('memberFieldValue-startTime'));
    }

    async verifyShowMemberPage(formData) {
        await expect(this.showMemberHeader).toHaveText(`Member ${baseData.getId(formData.member)}`);
        await expect(this.editMemberIcon).toBeVisible();
        await expect(this.memberIdLabel).toHaveText('ID');
        await expect(this.memberIdValue).toHaveText(baseData.getId(formData.member));
        await expect(this.memberNameLabel).toHaveText('Name');
        await expect(this.memberNameValue).toHaveText(formData.name);
        await expect(this.memberSurnameLabel).toHaveText('Surname');
        await expect(this.memberSurnameValue).toHaveText(formData.surname);
        await expect(this.memberDateOfBirthLabel).toHaveText('Date of Birth');
        await expect(this.memberDateOfBirthValue).toHaveText(
            `${formData.b_day}-${formData.b_month}-${formData.b_year}`);
        await expect(this.memberStartDayLabel).toHaveText('Start Day');
        await expect(this.memberStartDayValue).toHaveText(formData.start_day);

        await utilities.scrollToElement(this.memberPostcodeValue, this.showMemberBackground, 200, 'down');

        await expect(this.memberEmailLabel).toHaveText('Email');
        await expect(this.memberEmailValue).toHaveText(formData.email);
        await expect(this.memberAddressLineOneLabel).toHaveText('Address Line One');
        await expect(this.memberAddressLineOneValue).toHaveText(formData.address_one);
        await expect(this.memberAddressLineTwoLabel).toHaveText('Address Line Two');
        await expect(this.memberAddressLineTwoValue).toHaveText(formData.address_two);
        await expect(this.memberCityLabel).toHaveText('City');
        await expect(this.memberCityValue).toHaveText(formData.city);
        await expect(this.memberPostcodeLabel).toHaveText('Postcode');
        await expect(this.memberPostcodeValue).toHaveText(formData.postcode);
        await expect(this.memberEmailLabel).toHaveText('Email');
        await expect(this.memberEmailValue).toHaveText(formData.email);

        await element(this.showMemberBackground).swipe('up');

        await expect(this.memberCountryLabel).toHaveText('Country');
        await expect(this.memberCountryValue).toHaveText(formData.country);
        await expect(this.memberStartDateLabel).toHaveText('Start Date');
        await expect(this.memberStartDateValue).toHaveText(
            `${formData.start_date}-${baseData.getMonthNumber(formData.start_month)}-${formData.start_year}`
        );
        await expect(this.memberStartTimeLabel).toHaveText('Start Time');
        await expect(this.memberStartTimeValue).toHaveText(
            `${formData.start_hour}:${formData.start_minute}`);
        
    }
}

export default new ShowMemberPage();