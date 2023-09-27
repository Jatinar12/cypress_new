import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WebTextBox from '../../helpers/webTextBox.js';
import Decryption from '../../utilities/decryption.js';
import Urls from '../../urls/urls.json';
import GenericActions from '../../utilities/genericActions.js';
import commonLocators from '../../pages/commonLocators.json';
import WebXpath from '../../helpers/webXpath.js';

const webTextBox = new WebTextBox();
const decode = new Decryption();
const webXpath = new WebXpath();

When('user enters the user {string} in the {string} input field', (userData, elementIdentifier) => {
  try {
    const decodedText = decode.getDecodedString(userData);
    webXpath.typeTextByXpath(elementIdentifier, 'id', decodedText);
  } catch (error) {
    cy.log('Unable to type in input field' + error);
    throw new Error('The condition was not met!');
  }
});

Then('user should navigate to the {string}', (url) => {
  try {
    const actions = new GenericActions();
    actions.checkUrl(Urls[url]);
  } catch (error) {
    cy.log('not navigated to particular url' + error);
    throw new Error('The condition was not met!');
  }
});

