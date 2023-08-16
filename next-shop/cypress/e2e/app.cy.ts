describe('Navigation', () => {
    it('should navigate to login page and perform login', () => {
      // Visit the login page
      cy.visit('/auth/login')
  
      // Type email and password
      cy.get('.email').type('nextshop@test.app')
      cy.get('.pass').type('nextshop')
  
      // Click the login button
      cy.contains('login').click()
  
      // You can add assertions here to verify successful login if needed
    })
  })
  