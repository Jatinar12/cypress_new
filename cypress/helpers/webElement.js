class WebElement {
  countElement(locatorIdentifier) {
    try {
      return locatorIdentifier.its('length').then(function(size) {
        return new Promise(function(resolve, reject) {
          resolve(size);
        });
      });
    } catch (err) {
      return false;
    }
  }

  validateElement(locatorIdentifier) {
    try {
      locatorIdentifier.should('exist');
      return true;
    } catch (error) {
      return false;
    }
  }

  validateElementAbsence(locatorIdentifier) {
    try {
      locatorIdentifier.should('not.exist');
      return true;
    }
    catch (error) {
      return false;
    }
  }

  elementVisibility(locatorIdentifier) {
    try {
      locatorIdentifier.should('be.visible');
      return true;
    }
    catch (error) {
      return false;
    }
  }

  elementNotVisible(locatorIdentifier) {
    try {
      locatorIdentifier.should('not.be.visible');
      return true;
    }
    catch (error) {
      return false;
    }
  }

  validateWebElement(locatorIdentifier) {
    try {
      locatorIdentifier.should('not.be.disabled');
      return true;
    } catch (error) {
      return false;
    }
  }

  validateWebElementAbsence(locatorIdentifier) {
    try {
      locatorIdentifier.should('be.disabled');
      return true;
    } catch (error) {
      return false;
    }
  }


  shouldHaveCSS(locatorIdentifier, attribute, value) {
    locatorIdentifier.should('have.css', attribute, value).then(function(text) {
      return true;
    }, function(error) {
      return false;
    });
  }

  getAttribute(locatorIdentifier, attribute) {
    cy.get(locatorIdentifier).invoke('attr', attribute).then(function(text) {
      return text;
    }, function(error) {
      cy.log('--->Error: The attribute of the element couldn\'t be captured due to: ' + error);
    });
  }

  drag(sourceElement, targetElement) {
    cy.get(sourceElement).drag(targetElement).then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }

  shouldBeVisible(locatorIdentifier) {
    this.getWebElement(locatorIdentifier).should('be.visible').then(function() {
      return true;
    }), function(err) {
      return false;
    };
  }

  shouldBeVisible1(locatorIdentifier) {
    cy.xpath(locatorIdentifier).should('be.visible').then(function() {
      return true;
    }), function(err) {
      return false;
    };
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
