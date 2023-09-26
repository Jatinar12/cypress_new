import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators';
import WebElement from '../../helpers/webElement';
import WebButton from '../../helpers/webButton';
import WebText from '../../helpers/webText';

const webButton = new WebButton();
const webElement = new WebElement();
const webText = new WebText();

Given('user can view list of {string}', (elementIdentifier) => {
  webElement.shouldBeVisible(commonLocators[elementIdentifier]);
});

When('user clicks on {string} {string}', function(elementIdentifier, pageNumber) {
  const identifier = `${commonLocators[elementIdentifier]}:contains("${pageNumber}")`;
  webButton.click(identifier);
});

When('User is on {string} page of {string}', (text, elementIdentifier) => {
  webText.getText(commonLocators[elementIdentifier], text);
});

When('user clicks on {string} page of {string}', (text, elementIdentifier) => {
  webButton.click(commonLocators[elementIdentifier], text);
});
