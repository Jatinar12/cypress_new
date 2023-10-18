class WebXpath {
  setXpathValue(word, type) {
   return `//*[contains(text(),'${word}')] |  //*[@${type}='${word}']`;
  }

  clickByXpath(locatorIdentifier, type) {
    const getXpathValue = this.setXpathValue(locatorIdentifier, type);
    cy.xpath(getXpathValue).click().then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }

  typeTextByXpath(locatorIdentifier, type, word) {
    const getXpathValue = this.setXpathValue(locatorIdentifier, "id");
    cy.xpath(getXpathValue).clear().type(word).then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }
  
  typeTextPresent(text) {
    const getXpathValue = this.setXpathValue(text);
    cy.xpath(getXpathValue).should('contain', text).then(function() {
     return true;
    }, function(error) {
      return false;
    });
  }

  selectDropDownUsingTextByXpath(locatorIdentifier, text) {
    cy.xpath(locatorIdentifier).select(text).then(function() {
      return true;
    }, function(error) {
      return false;
    });
  }
}

export default WebXpath;
