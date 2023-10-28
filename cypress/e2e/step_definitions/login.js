import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import Decryption from '../../utilities/decryption.js';
import Urls from '../../urls/urls.json';
import GenericActions from '../../utilities/genericActions.js';
import WebXpath from '../../helpers/webXpath.js';


const decode = new Decryption();
const webXpath = new WebXpath();
const actions = new GenericActions();

When('user enters the user {string} in the {string} input field', (userData, locatorIdentifier) => {
  try {
    const decodedText = decode.getDecodedString(userData);
    webXpath.typeTextByXpath(locatorIdentifier, 'id', decodedText);
  } catch (error) {
    throw new Error('Expectation unable to type in input field' +" "+ error);
  }
});

Then('user should navigate to the {string}', (urlIdentifier) => {
  try {
    actions.checkUrl(Urls[urlIdentifier]);
  } catch (error) {
    throw new Error('Expectation not navigated to particular page' +" "+ error);
  }
});

