describe('Simulando Mouseover', () => {
    it('deve mostrar um texto ao passar o mouse em cima do link do instagram', () => {
        cy.Start()
        cy.SubmitLoginForm('papito@webdojo.com', 'katana123')

        cy.contains('Isso é Mouseover!')
            .should('not.exist')        
        cy.get('[data-cy="instagram-link"]').realHover()
        cy.contains('Isso é Mouseover!')
            .should('exist')

    })
})