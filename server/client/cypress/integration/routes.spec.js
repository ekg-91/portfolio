describe('Working routes for: ', () => {
  it('The Home page (/)', () => {
    cy.visit('http://localhost:3000/').then(() => {
      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq('/');
      });

      cy.get('.app .home h1').should('have.text', 'Elegant Design');
    });
  });

  it('The About page (/about)', () => {
    cy.visit('http://localhost:3000/about').then(() => {
      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq('/about');
      });

      cy.get('.app .about h1').should('have.text', 'About Me');
    });
  });

  it('The Projects page (/projects)', () => {
    cy.visit('http://localhost:3000/projects').then(() => {
      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq('/projects');
      });

      cy.get('.app .projects h1').should('have.text', 'Projects');
    });
  });

  it('The Contact page (/contact)', () => {
    cy.visit('http://localhost:3000/contact').then(() => {
      cy.location().should(location => {
        expect(location.hash).to.be.empty;
        expect(location.pathname).to.eq('/contact');
      });

      cy.get('.app .contact h1').should('have.text', 'Contact me');
    });
  });
});
