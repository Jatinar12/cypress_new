import WebElement from './webElement';
const webElement = new WebElement();


class WebText {
  getText(locatorIdentifier) {
    webElement.getWebElement(locatorIdentifier).invoke('text').then(function(text) {
      return new Promise(function(resolve, reject) {
        resolve(text);
      });
    });
  }


  shouldHaveText(locatorIdentifier, text) {
    cy.get(locatorIdentifier).should('have.text', text).then(function(text) {
      return true;
    }, function(err) {
      return false;
    });
  }


  shouldHaveValue(locatorIdentifier, value) {
    cy.get(locatorIdentifier).should('have.value', value).then(function(text) {
      return true;
    }, function(err) {
      return false;
    });
  }

  shouldContainText(locatorIdentifier, text) {
    cy.get(locatorIdentifier).should('contain', text).then(function(text) {
      return true;
    }, function(err) {
      return false;
    });
  }data


  verifyExactText(locatorIdentifier, expectedtext) {
    try {
      if (locatorIdentifier.should('have.text', expectedtext)) {
        return true;
      }
    } catch (err) {
      return false;
    }
  }

  verifyPartialText(locatorIdentifier, expectedtext) {
    try {
      locatorIdentifier.should('contain', expectedtext);
      return true;
    } catch (err) {
      return false;
    }
  }

  verifyExactAttribute(locatorIdentifier, attribute, value) {
    try {
      locatorIdentifier.invoke('attr', attribute).should('equal', value);
      return true;
    } catch (error) {
       return false;
    }
  }

  verifyPartialAttribute(locatorIdentifier, attribute, value) {
    try {
      locatorIdentifier.invoke('attr', attribute).should('contain', value);
      return true;
    } catch (error) {
      return false;
    }
  }
}
export default WebText;
