class AppointmentPage {
  elements = {
    lbTitle: () => cy.get('h2'),
  };
}

export default new AppointmentPage();
