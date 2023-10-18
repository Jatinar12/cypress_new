import WebElement from './webElement';
const webElement = new WebElement();

class WebSelectBox {
  selectDropDownUsingText(locatorIdentifier, text) {
    webElement.getWebElement(locatorIdentifier).select(text).then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }
}

export default WebSelectBox;
