import WebElement from './webElement';
const webElement = new WebElement();

class WebButton {
  click(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).click().then(function() {
      return true;
    }, function (error) {
      return false;
    });
  }

  multipleClick(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).click({multiple: true}).then(function() {
      return true;
    }, function (error) {
      return false;
    });
  }

  focusClick(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).click({force: true}).then(function() {
      return true;
    }, function (error) {
      return false;
    });
  }

  realclick(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).realClick().then(function() {
      return true;
    }, function (error) {
      return false;
    });
  }

  check(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).check().then(function() {
      return true;
    }, function (error) {
      return false;
    });
  }
}

export default WebButton;
