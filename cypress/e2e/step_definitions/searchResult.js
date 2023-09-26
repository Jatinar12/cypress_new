import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators.json';
import WebTextBox from '../../helpers/webTextBox';
import WebElement from '../../helpers/webElement';
import WebButton from '../../helpers/webButton';
import GenericActions from '../../utilities/genericActions';
import Decryption from '../../utilities/decryption';

const webTextBox = new WebTextBox();
const webElement = new WebElement();
const webButton = new WebButton();
const actions = new GenericActions();
const decryption = new Decryption();

Given('{string} keyword is {string}', (elementIdentifier, text) => {
  webTextBox.typeText(commonLocators[elementIdentifier], text);
});

Given('search {string} is clicked', (elementIdentifier) => {
  webButton.click(commonLocators[elementIdentifier]);
});

Given('{string} is {string}', (elementIdentifier, text) => {
  webTextBox.typeText(commonLocators[elementIdentifier], text);
  webTextBox.typeTextDown(commonLocators[elementIdentifier]);
  webTextBox.typeTextEnter(commonLocators[elementIdentifier]);
});

Then('{string} should see {string}', (elementIdentifier, text) => {
  webElement.shouldBeVisible(commonLocators[elementIdentifier], text);
});

Then('result page is move to {string} page', (url) => {
  const decordedUrl = decryption.getDecodedString(url);
  actions.checkUrl(decordedUrl);
});

Then('Result contain {string} {string}', (elementIdentifier, text) => {
  webElement.shouldBeVisible(commonLocators[elementIdentifier], text);
});
