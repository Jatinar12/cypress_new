import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import commonLocators from '../../pages/commonLocators.json';
import WebElement from '../../helpers/webElement';
import WebButton from '../../helpers/webButton';
import GenericActions from '../../utilities/genericActions';


const webElement = new WebElement();
const webButton = new WebButton();
const actions = new GenericActions();

Given('{string} {string} is {string}', (text, locator, locatorIdentifier) => {
  try {
  let selector  = webElement.getWebElement(commonLocators[locator]);
  var new_value;
  if(locatorIdentifier === 'disabled'){
        new_value = selector.replace("data", "4");
      }
      else if (locatorIdentifier === 'enabled'){
        new_value = selector.replace("data", "6");
      }
      webElement.shouldBeVisible1(new_value);
    } catch (error) {
    throw new Error('Expectation: Element is not visible'+" "+ error);
    }
});

When('user clicks on the {string} button', (locatorIdentifier) => {
  try {
  webButton.click(commonLocators[locatorIdentifier]);
  } catch (error) {
    throw new Error('Expectation: Unable to click' +" "+ error);
  }
});

Then('user is on {string} button', (locatorIdentifier) => {
  try {
  actions.wait(1000);
  webElement.shouldBeVisible(commonLocators[locatorIdentifier]);
  } catch (error) {
    throw new Error('Expectation: Element is not visible' +" "+ error);
  }
});

