import baseData from '../testData/baseData';

class Utilities {

    async sleep(milliseconds) {
        return new Promise(resolve => setTimeout(resolve, milliseconds));
    }

    async typeInElement(mobileElement, text) {
        await mobileElement.replaceText(text);
        await mobileElement.tapReturnKey();
    }

    async scrollToElement(targetElement, background, pixels, direction) {
        await waitFor(targetElement)
            .toBeVisible()
            .whileElement(background)
            .scroll(pixels, direction, direction === 'left' ? 0.25 : NaN);
    }

    async selectCalendarDate(weekday, day, month, year) {
        while (await this.softTextAssertion(element(by.id('HEADER_MONTH_NAME')),
            `${month} ${year}`) === false) {
            await element(by.id('native.calendar.CHANGE_MONTH_RIGHT_ARROW')).tap();
        }
        await element(by.label(` ${weekday} ${day} ${month} ${year} `)).atIndex(0).tap();

    }

    async selectDatePickerDate(day, month, year) {
        if (device.getPlatform() === 'ios') {
            await element(by.id('formDatePicker')).setDatePickerDate(`${day}-${month}-${year}`,
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
            while (await this.softElementAssertion(optionToSelect) === false) {
                await element(by.type('android.widget.ListView')).swipe(swipeDirection, 'slow');
            }
            await optionToSelect.tap();
        }
    }

    async setTime(hours, minutes) {
        if (device.getPlatform() === 'ios') {
            await element(by.id('formBackground')).swipe('up', 'fast', 0.5);
            await element(by.id('formTimePicker')).setDatePickerDate(`${hours}:${minutes}`, 'HH:mm');
        } else {
            await element(by.label('Switch to text input mode for the time input.')).tap();
            await this.typeInElement(element(by.type('android.widget.EditText')).atIndex(0), hours);
            await this.typeInElement(element(by.type('android.widget.EditText')).atIndex(1), minutes);
        }
    }

    async softElementAssertion(mobileElement) {
        try {
            await expect(mobileElement).toBeVisible();
            return true;
        } catch {
            return false;
        }
    }

    async softTextAssertion(mobileElement, text) {
        try {
            await expect(mobileElement).toHaveText(text);
            return true;
        } catch {
            return false;
        }
    }

    async confirmPickerButton() {
        if (device.getPlatform() === 'ios') {
            await element(by.id('confirmPickerButton')).tap();
        } else {
            await element(by.text('OK')).tap();
        }
    }

    async cancelPickerButton() {
        if (device.getPlatform() === 'ios') {
            await element(by.id('cancelPickerButton')).tap();
        } else {
            await element(by.text('CANCEL')).tap();
        }
    }
}

export default new Utilities();