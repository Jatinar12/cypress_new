import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators.json';
import GenericActions from '../../utilities/genericActions';
import WebButton from '../../helpers/webButton';
import WebTextBox from '../../helpers/webTextBox';
import Decryption from '../../utilities/decryption';

const actions = new GenericActions();
const webButton = new WebButton();
const webTextBox = new WebTextBox();
const decryption = new Decryption();


Given('user logs in with {string} credentials', (role) => {
  const decodedEmail = decryption.getDecodedString(`${role}_EMAIL`);
  const decodedPassword = decryption.getDecodedString(`${role}_PASSWORD`);
  actions.visit('/');
  webButton.click(commonLocators['login button']);
  webTextBox.typeText(commonLocators[`${role}_EMAIL`], decodedEmail);
  webTextBox.typeText(commonLocators[`${role}_PASSWORD`], decodedPassword);
  webButton.click(commonLocators['submit button']);
});
