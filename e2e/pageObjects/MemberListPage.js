import assert from 'chai';

class MemberListPage {

    get memberListHeader() {
        return element(by.id('memberListHeader'));
    }
    get addMemberIcon() {
        return element(by.id('addMemberIcon'));
    }
    get noResultsText() {
        return element(by.id('noResultsText'));
    }

    // Functions used in encapsulation
    async verifyMemberListPage(membersCount) {
        await expect(this.memberListHeader).toHaveText('Members');
        await expect(this.addMemberIcon).toBeVisible();

        switch(membersCount) {
            case 0:
                await expect(this.noResultsText).toHaveText('No Members added on the list');
                break;
            default:
                assert.fail(`The entered ${membersCount} is an invalid count for Members`);
        }
    }
}

export default new MemberListPage();