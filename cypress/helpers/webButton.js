import WebElement from './webElement';
const webElement = new WebElement();

class WebButton {
  click(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).click();
  }

  multipleClick(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).click({multiple: true});
  }

  focusClick(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).click({force: true});
  }

  realclick(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).realClick();
  }

  check(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).check();
  }
}

export default WebButton;
