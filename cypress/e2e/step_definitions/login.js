import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WebTextBox from '../../helpers/webTextBox.js';
import Decryption from '../../utilities/decryption.js';
import Urls from '../../urls/urls.json';
import GenericActions from '../../utilities/genericActions.js';
import commonLocators from '../../pages/commonLocators.json';

const webTextBox = new WebTextBox();
const decode = new Decryption();

When('user enters the user {string} in the {string} input field', (userData, elementIdentifier) => {
  const decodedText = decode.getDecodedString(userData);
  webTextBox.typeText(commonLocators[elementIdentifier], decodedText);
});

Then('user should navigate to the {string}', (url) => {
  const actions = new GenericActions();
  actions.checkUrl(Urls[url]);
});
