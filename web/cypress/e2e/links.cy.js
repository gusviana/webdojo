describe('Links abrindo nova guia/janela', () => {

    it('Validando o atributo do link do instagram', () => {
        cy.Start()
        cy.SubmitLoginForm('papito@webdojo.com','katana123')
        
        cy.get('[data-cy="instagram-link"]')
            .should('have.attr', 'href', 'https://www.instagram.com/qapapito')
            .and('have.attr', 'target', '_blank')
    })

    it('Acessa link de termos de uso removendo o target blank', ()=>{
        cy.Start()
        cy.SubmitLoginForm('papito@webdojo.com','katana123')

        cy.GoTo('Formulários', 'Consultoria')

        cy.contains('a', 'termos de uso')
            .invoke('removeAttr', 'target')
            .click()
    })
})