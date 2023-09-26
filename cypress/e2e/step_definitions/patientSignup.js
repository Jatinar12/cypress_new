import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WebButton from '../../helpers/webButton';
import WebSelectBox from '../../helpers/webSelectBox';
import commonLocators from '../../pages/commonLocators.json';


const webButton = new WebButton();
const webSelectBox = new WebSelectBox();

When('user selects checkbox with value {string} Type', (elementIdentifier) => {
  webButton.click(commonLocators[elementIdentifier]);
});

When('user selects {string} in the {string} select field', (text, elementIdentifier) => {
  webSelectBox.selectDropDownUsingText(commonLocators[elementIdentifier], text);
});
