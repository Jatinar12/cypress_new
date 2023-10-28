class WebElement {
  countElement(locatorIdentifier) {
      return locatorIdentifier.its('length').then(function(size) {
        return new Promise(function(resolve) {
          resolve(size);
        });
      });
  }

  validateElement(locatorIdentifier) {
      locatorIdentifier.should('exist');
  }

  validateElementAbsence(locatorIdentifier) {
      locatorIdentifier.should('not.exist');
  }

  elementVisibility(locatorIdentifier) {
      locatorIdentifier.should('be.visible');
  }

  elementNotVisible(locatorIdentifier) {
    locatorIdentifier.should('not.be.visible');
  }

  validateWebElement(locatorIdentifier) {
    locatorIdentifier.should('not.be.disabled');
  }

  validateWebElementAbsence(locatorIdentifier) {
    locatorIdentifier.should('be.disabled');
  }


  shouldHaveCSS(locatorIdentifier, attribute, value) {
    locatorIdentifier.should('have.css', attribute, value);
  }

  getAttribute(locatorIdentifier, attribute) {
    cy.get(locatorIdentifier).invoke('attr', attribute);
      return text;
  }

  drag(sourceElement, targetElement) {
    cy.get(sourceElement).drag(targetElement);
  }

  shouldBeVisible(locatorIdentifier) {
    this.getWebElement(locatorIdentifier).should('be.visible');
  }

  shouldBeVisible1(locatorIdentifier) {
    cy.xpath(locatorIdentifier).should('be.visible');
  }

  getWebElement(locatorIdentifier) {
    const selector = locatorIdentifier.split(',');
    switch (selector[0]) {
      case 'xpath': return cy.xpath(selector[1]);
      case 'css': return cy.get(selector[1]);
      case 'text': return selector[1];
    };
  }
}

export default WebElement;
