class WebXpath {
  setXpathValue(word, type) {
   return `//*[contains(text(),'${word}')] |  //*[@${type}='${word}']`;
  }

  clickByXpath(locatorIdentifier, type) {
    const getXpathValue = this.setXpathValue(locatorIdentifier, type);
    cy.xpath(getXpathValue).click();
  }

  typeTextByXpath(locatorIdentifier, type, word) {
    const getXpathValue = this.setXpathValue(locatorIdentifier, type);
    cy.log("##############################################");
    cy.xpath(getXpathValue).type(word);
  }
  
  typeTextPresent(text) {
    const getXpathValue = this.setXpathValue(text);
    cy.xpath(getXpathValue).should('contain', text);
  }

  selectDropDownUsingTextByXpath(locatorIdentifier, text) {
    cy.xpath(locatorIdentifier).select(text);
  }

}

export default WebXpath;
