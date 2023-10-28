import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators';
import WebElement from '../../helpers/webElement';
import WebButton from '../../helpers/webButton';
import WebText from '../../helpers/webText';

const webButton = new WebButton();
const webElement = new WebElement();
const webText = new WebText();

Given('user can view list of {string}', (locatorIdentifier) => {
  try {
  webElement.shouldBeVisible(commonLocators[locatorIdentifier]);
  } catch(error) {
    throw new Error('Expectation element is not visible' +" "+ error);
  }
});

When('user clicks on {string} {string}', function(locatorIdentifier, pagination) {
  try {
  const locator = `${commonLocators[locatorIdentifier]}:contains("${pagination}")`;
  webButton.click(locator);
  } catch (error) {
    throw new Error('Expectation unable to click an element' +" "+ error);
  }
});

When('User is on {string} page of {string}', (text, locatorIdentifier) => {
  try {
  webText.getText(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation element is not present' +" "+ error);
  }
});

When('user clicks on {string} page of {string}', (text, locatorIdentifier) => {
  try {
  webButton.click(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation unable to click an element' +" "+ error);
  }
});