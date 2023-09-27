import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WebButton from '../../helpers/webButton';
import WebSelectBox from '../../helpers/webSelectBox';
import commonLocators from '../../pages/commonLocators.json';
import WebXpath from '../../helpers/webXpath';


const webButton = new WebButton();
const webSelectBox = new WebSelectBox();
const webXpath = new WebXpath();

When('user selects checkbox with value {string} Type', (elementIdentifier) => {
  webXpath.clickByXpath(elementIdentifier, 'visibleText');
});

When('user selects {string} in the {string} select field', (text, elementIdentifier) => {
  webSelectBox.selectDropDownUsingText(commonLocators[elementIdentifier], text);
});
