import WebElement from './webElement';
const webElement = new WebElement();


class WebTextBox {
  clearText(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).clear();
  }

  typeText(locatorIdentifier, text) {
    webElement.getWebElement(locatorIdentifier).type(text);
  }

  typeTextWithoutClearingExistingText(locatorIdentifier, text) {
    locatorIdentifier.type(text);
  }
  
  typeTextDown(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).type('{downarrow}');
  }

  typeTextEnter(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).type('{enter}');
  }
}

export default WebTextBox;
