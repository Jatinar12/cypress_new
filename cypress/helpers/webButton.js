import WebElement from './webElement';
const webElement = new WebElement();

class WebButton {
  click(elementIdentifier) {
    webElement.getWebElement(elementIdentifier).click().then(function() {
      cy.log('The element got clicked.' + elementIdentifier );
    });
  }

  multipleClick(elementIdentifier) {
    webElement.getWebElement(elementIdentifier).click({multiple: true}).then(function() {
      cy.log('The element got clicked.');
    });
  }

  focusClick(elementIdentifier) {
    webElement.getWebElement(elementIdentifier).click({force: true}).then(function() {
      cy.log('The element got clicked.');
    });
  }

  realclick(elementIdentifier) {
    webElement.getWebElement(elementIdentifier).realClick().then(function() {
      cy.log('The element got clicked.');
    });
  }

  check(elementIdentifier) {
    webElement.getWebElement(elementIdentifier).check().then(function() {
      cy.log('The element got checked');
    });
  }
}

export default WebButton;
