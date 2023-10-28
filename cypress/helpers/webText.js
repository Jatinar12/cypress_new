import WebElement from './webElement';
const webElement = new WebElement();


class WebText {
  getText(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).invoke('text').then(function(text) {
      return new Promise(function(resolve) {
        resolve(text);
      });
    });
  }


  shouldHaveText(locatorIdentifier, text) {
    cy.get(locatorIdentifier).should('have.text', text);
  }


  shouldHaveValue(locatorIdentifier, value) {
    cy.get(locatorIdentifier).should('have.value', value);
  }

  shouldContainText(locatorIdentifier, text) {
    cy.get(locatorIdentifier).should('contain', text);
  }


  verifyExactText(locatorIdentifier, expectedtext) {
   locatorIdentifier.should('have.text', expectedtext);
  }

  verifyPartialText(locatorIdentifier, expectedtext) {
      locatorIdentifier.should('contain', expectedtext);
  }

  verifyExactAttribute(locatorIdentifier, attribute, value) {
      locatorIdentifier.invoke('attr', attribute).should('equal', value);
  }

  verifyPartialAttribute(locatorIdentifier, attribute, value) {
      locatorIdentifier.invoke('attr', attribute).should('contain', value);
  }
}
export default WebText;
