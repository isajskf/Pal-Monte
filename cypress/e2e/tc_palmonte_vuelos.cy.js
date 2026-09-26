describe('Pa\'l Monte - búsqueda y reserva de vuelos', function () {

    it('busca un vuelo, lo elige y completa la compra', function () {
        // 1. Página principal: buscar vuelo
        cy.visit('https://blazedemo.com')
        cy.get('select[name="fromPort"]').select('Boston')
        cy.get('select[name="toPort"]').select('London')
        cy.get('input[type="submit"]').click()

        // 2. Lista de vuelos: elegir el primero
        cy.url().should('include', 'reserve.php')
        cy.get('table tbody tr').should('have.length.greaterThan', 0)
        cy.get('input[type="submit"]').first().click()

        // 3. Formulario de compra: llenar datos del viajero
        cy.url().should('include', 'purchase.php')
        cy.get('#inputName').type('Paulina Viajera')
        cy.get('#address').type('Calle 10 # 20-30')
        cy.get('#city').type('Medellín')
        cy.get('#state').type('Antioquia')
        cy.get('#zipCode').type('050001')
        cy.get('#creditCardNumber').type('4111111111111111')
        cy.get('#nameOnCard').type('Paulina Viajera')
        cy.get('input[type="submit"]').click()

        // 4. Confirmación
        cy.url().should('include', 'confirmation.php')
        cy.contains('Thank you for your purchase today!').should('be.visible')
    })
})