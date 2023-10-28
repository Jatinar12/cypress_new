import WebElement from './webElement';
const webElement = new WebElement();

class WebSelectBox {
  selectDropDownUsingText(locatorIdentifier, text) {
    webElement.getWebElement(locatorIdentifier).select(text);
  }
}

export default WebSelectBox;
