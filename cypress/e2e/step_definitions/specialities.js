import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators.json';
import WebElement from '../../helpers/webElement';
import WebButton from '../../helpers/webButton';


const webElement = new WebElement();
const webButton = new WebButton();

Given('{string} button is {string}', (text, elementIdentifier) => {
  webElement.shouldBeVisible(commonLocators[elementIdentifier], text);
});

When('user clicks on the {string} button', (elementIdentifier) => {
  webButton.click(commonLocators[elementIdentifier]);
});

Then('user is on {string} button', (elementIdentifier) => {
  cy.wait(2000);
  webElement.shouldBeVisible(commonLocators[elementIdentifier]);
});

