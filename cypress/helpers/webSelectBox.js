class WebSelectBox {
  selectDropDownUsingText(elementIdentifier, text) {
    cy.get(elementIdentifier).select(text).then(function() {
      cy.log('--->Success: The ' + text + ' in dropdown got clicked.');
    });
  }
}

export default WebSelectBox;
