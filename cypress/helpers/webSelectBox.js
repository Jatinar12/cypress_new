import WebElement from './webElement';
const webElement = new WebElement();

class WebSelectBox {
  selectDropDownUsingText(elementIdentifier, text) {
    webElement.getWebElement(elementIdentifier).select(text).then(function() {
      cy.log('--->Success: The ' + text + ' in dropdown got clicked.');
    });
  }
}

export default WebSelectBox;
