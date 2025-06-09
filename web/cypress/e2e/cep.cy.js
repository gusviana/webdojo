import address from '../fixtures/cep.json'

describe('CEP', () => {
    beforeEach(() => {
        cy.login()
        cy.GoTo('Integração', 'Consulta de CEP')
    })

    it('Deve validar a consulta de CEP', () => {

        
        cy.get('#cep').type(address.cep)
        cy.contains('button', 'Buscar').click()

        cy.get('#street')
            .should('have.value', address.street)

        cy.get('#neighborhood')
            .should('have.value', address.neighborhood)

        cy.get('#city')
            .should('have.value', address.city)

        cy.get('#state')
            .should('have.value', address.state)
    })
})