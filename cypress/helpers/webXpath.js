class WebXpath {
  setXpathValue(word, type='visibleText') {
    let xpathString = '';

    if (type != 'visibleText') {
      xpathString = `//*[@${type}='${word}']`;
    } else if (type='visibleText') {
      xpathString = `//*[contains(text(),'${word}')]`;
    }
    return xpathString;
  }

  clickByXpath(elementIdentifier, type) {
    const getXpathValue = this.setXpathValue(elementIdentifier, type);
    cy.xpath(getXpathValue).click().then(function() {
      cy.log('The element got clicked.');
    }, function(err) {
      cy.log('--->Error: The element couldn\'t get clicked due to: ' + err);
    });
  }

  typeTextByXpath(elementIdentifier, type, word) {
    const getXpathValue = this.setXpathValue(elementIdentifier, type);
    cy.xpath(getXpathValue).clear().type(word).then(function() {
      cy.log('Typing of the field with value: ' + word);
    });
  }

  shouldContainTextByXpath(text) {
    const getXpathValue = this.setXpathValue(text);
    cy.xpath(getXpathValue).should('contain', text).then(function() {
      cy.log('The element is have: ' + text);
    }, function(err) {
      cy.log('--->Error: The element dosn\'t have text due to: ' + err);
    });
  }
}

export default WebXpath;
