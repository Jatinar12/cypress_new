import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators.json';
import GenericActions from '../../utilities/genericActions';
import WebButton from '../../helpers/webButton';
import Decryption from '../../utilities/decryption';
import WebXpath from '../../helpers/webXpath';

const actions = new GenericActions();
const webButton = new WebButton();
const decryption = new Decryption();
const webXpath = new WebXpath();


Given('user logs in with {string} credentials', (role) => {
  try {
  const decodedEmail = decryption.getDecodedString(`${role}_EMAIL`);
  const decodedPassword = decryption.getDecodedString(`${role}_PASSWORD`);
  actions.visit('/');
  webButton.click(commonLocators['loginButton']);
  webXpath.typeTextByXpath(`emailOrMobile`, 'id', decodedEmail);
  webXpath.typeTextByXpath(`password`, 'id', decodedPassword);
  webButton.click(commonLocators['submitButton']);
  } catch (error) {
    throw new Error('Expectation unable to naviagte to particular page' +" "+ error);
  }
});
