import {Given, When, Then} from '@badeball/cypress-cucumber-preprocessor';
import WebButton from '../../helpers/webButton';
import WebSelectBox from '../../helpers/webSelectBox';
import commonLocators from '../../pages/commonLocators.json';
import WebXpath from '../../helpers/webXpath';
import WebElement from '../../helpers/webElement';


const webButton = new WebButton();
const webSelectBox = new WebSelectBox();
const webXpath = new WebXpath();
const webElement = new WebElement();

When('user selects checkbox with value {string} Type', (locatorIdentifier) => {
  try {
  webXpath.clickByXpath(locatorIdentifier, 'visibleText');
  } catch (error) {
    throw new Error('Expectation unable to click' +error);
  }
});

When('user selects {string} in the {string} select field', (text, locatorIdentifier) => {
  try {
  let locator  = webElement.getWebElement(commonLocators["select"]);
  var new_value;
  if(locatorIdentifier === 'date'){
    new_value = locator.replace("data", "1");
  }
  else if(locatorIdentifier === 'month'){
    new_value = locator.replace("data", "2");
  }
  else {
    new_value = locator.replace("data", "3");
  }
  webXpath.selectDropDownUsingTextByXpath(new_value,text);
} catch (error) {
    throw new Error('Expectation unable to select an element' +error);
}
});
