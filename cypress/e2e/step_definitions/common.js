import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WebButton from '../../helpers/webButton';
import GenericActions from '../../utilities/genericActions';
import commonLocators from '../../pages/commonLocators.json';
import WebXpath from '../../helpers/webXpath';
import Urls from '../../urls/urls.json';
import WebTextBox from '../../helpers/webTextBox';
import WebElement from '../../helpers/webElement';

const webButton = new WebButton();
const webTextBox = new WebTextBox();
const webXpath = new WebXpath();
const actions = new GenericActions();
const webElement = new WebElement();

Given('user navigates to the {string} page', (urlIdentifier)=> {
  try {
    actions.wait(1000);
    actions.visit(Urls[urlIdentifier]);
  } catch (error) {
    throw new Error('Expectation: Unable to navigate' + error);
  }
});

When('user clicks on the {string}', (locatorIdentifier) => { 
  try {
    actions.wait(1000);
    webButton.click(commonLocators[locatorIdentifier]);
  } catch (error) {
    throw new Error('Expectation: Unable to click an element' +error);
  }
});

When('user enters value {string} in the {string} input field', (text, locatorIdentifier) => {
  const selector = locatorIdentifier.split('-');
  try {
    webXpath.typeTextByXpath(selector[0], typeIdentifier[1], text);
  } catch (error) {
    throw new Error('Expectation: Unable to type an text'+ error);
  }
});

When('user enters value {string} in the {string} field', (text, locatorIdentifier) => {
  try {
    webTextBox.typeText(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation unable to type' + error);
  }
});

Then('user can view message {string}', (text) => {
  try {
    webXpath.shouldContainTextByXpath(text);
  } catch (error) {
    throw new Error('Expectation unable to see message' + error);
  }
});

Given('the corresponding page appears with the expected elements: {string}', (locatorIdentifier) => {
  try {
  const selector = locatorIdentifier.split(',');
  for (let count = 0; count < selector.length; count++) {
    webXpath.shouldContainTextByXpath(selector[count]);
  }
} catch (error) {
  throw new Error('Expectation: element is not visible' +error);
}
});

Given('user is on {string} page', (pagination) => {
  try {
    webElement.shouldBeVisible(pagination);
  } catch (error) {
    throw new Error('Expectation Not present on the current'+ error);
  }
});

Given('{string} per page is {string}', (locatorIdentifier, text) => {
  try {
    webElement.shouldBeVisible(commonLocators[locatorIdentifier], text);
  } catch (error) {
    throw new Error('Expectation not able to see pagination' +error);
  }
});

When('user clicks on the {string} field', (locatorIdentifier) => {
  const selector = locatorIdentifier.split('-');
  try {
    webXpath.clickByXpath(selector[0], selector[1]);
  } catch (error) {
    throw new Error('Expectation Unable to click element by xpath'+ error);
  }
});

Then('user can view {string}', (text) => {
  try {
    webXpath.shouldContainTextByXpath(text);
  } catch (error) {
    throw new Error('Expectation unable to locate an element'+ error);
  }
});
