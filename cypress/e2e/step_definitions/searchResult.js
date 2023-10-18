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

Given('{string} keyword is {string}', (locatorIdentifier, text) => {
  try {
  webTextBox.typeText(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation Unable to type an element'+ error);
  }
});

Given('search {string} is clicked', (locatorIdentifier) => {
  try {
  webButton.click(commonLocators[locatorIdentifier]);
  } catch (error) {
    throw new Error('Expectation unable to click' +error);
  }
});

Given('{string} is {string}', (locatorIdentifier, text) => {
  try {
  webTextBox.typeText(commonLocators[locatorIdentifier], text);
  webTextBox.typeTextDown(commonLocators[locatorIdentifier]);
  webTextBox.typeTextEnter(commonLocators[locatorIdentifier]);
  } catch {error} {
    throw new Error('Expectation unable to locate'+ error);
  }
});

Then('{string} should see {string}', (locatorIdentifier, text) => {
  try {
  webElement.shouldBeVisible(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation: Element is not visible' +error);
  }
});

Then('result page is move to {string} page', (urlIdentifier) => {
  try {
  const decordedUrl = decryption.getDecodedString(urlIdentifier);
  actions.checkUrl(decordedUrl);
  } catch (error) {
    throw new Error('Expectation unable to decode an email' +error);
  }
});

Then('Result contain {string} {string}', (locatorIdentifier, text) => {
  try {
  webElement.shouldBeVisible(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation: Element is not visible' + error);
  }
});
