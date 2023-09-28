class ProductPage {
  elements = {
    lbTitle: () => cy.get('span[class="title"'),
  };
}

export default new ProductPage();
