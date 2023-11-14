class AppointmentPage {
  elements = {
    lbTitle: () => cy.get('h2'),
  };

  getTitle() {
    return this.elements.lbTitle();
  }
}

export default new AppointmentPage();
