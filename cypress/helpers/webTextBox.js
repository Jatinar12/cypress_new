import WebElement from './webElement';
const webElement = new WebElement();


class WebTextBox {
  clearText(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).clear().then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }

  typeText(locatorIdentifier, text) {
    webElement.getWebElement(locatorIdentifier).type(text).then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }

  typeTextWithoutClearingExistingText(locatorIdentifier, text) {
    locatorIdentifier.type(text).then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }
  data
  typeTextDown(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).type('{downarrow}').then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }

  typeTextEnter(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).type('{enter}').then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }
}

export default WebTextBox;
