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

Given('user navigates to the {string} page', (url)=> {
  try {
    actions.wait(2000);
    actions.visit(Urls[url]);
  } catch (error) {
    cy.log('not able to click on the element' + error);
    throw new Error('The condition was not met!');
  }
});

When('user clicks on the {string}', (elementIdentifier) => {
  try {
    actions.wait(3000);
    webButton.click(commonLocators[elementIdentifier]);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

When('user clicks on the {string} field', (elementIdentifier) => {
  const ele = elementIdentifier.split('-');
  try {
    actions.wait(3000);
    // webButton.click(commonLocators[elementIdentifier]);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

When('user enters value {string} in the {string} input field', (text, elementIdentifier) => {
  const ele = elementIdentifier.split('-');
  try {
    webXpath.typeTextByXpath(ele[0], ele[1], text);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

Then('user can view message {string}', (text) => {
  try {
    webXpath.shouldContainTextByXpath(text);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

Given('the corresponding page appears with the expected elements: {string}', (elementIdentifier) => {
  const text = elementIdentifier.toString();
  const textArray = text.split(',');
  for (let count = 0; count < textArray.length; count++) {
    webXpath.shouldContainTextByXpath(textArray[count]);
  }
});

Given('user is on {string} page', (Page) => {
  try {
    webElement.shouldBeVisible(Page);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

Given('{string} per page is {string}', (elementIdentifier, text) => {
  try {
    webElement.shouldBeVisible(commonLocators[elementIdentifier], text);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

When('user clicks on the {string} field', (elementIdentifier) => {
  try {
    webXpath.clickByXpath('visibleText', elementIdentifier);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});

Then('user can view {string}', (text) => {
  try {
    webXpath.shouldContainTextByXpath(text);
  } catch (error) {
    cy.log('not able to click on the button' + error);
    throw new Error('The condition was not met!');
  }
});
