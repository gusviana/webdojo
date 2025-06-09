describe('Validações de alertar em JavaScript', () => {
    beforeEach(() => {
        cy.login()
        cy.GoTo('Alertas JS', 'JavaScript Alerts')
    })

    it('Deve validar a mensagem de alerta', () => {
        cy.on('window:alert', (msg) => {
            expect(msg).to.equals('Olá QA, eu sou um Alert Box!')
        })

        cy.contains('button', 'Mostrar Alert').click()
    })

    it('Deve confirmar um dialogo e validar a resposta positiva', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equals('Aperte um botão!')
            return true;
        })
        cy.on('window:alert', (msg) => {
            expect(msg).to.equals('Você clicou em Ok!')
            return true;
        })
        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve cancelar um dialogo e validar a resposta negativa', () => {
        cy.on('window:confirm', (msg) => {
            expect(msg).to.equals('Aperte um botão!')
            return false;
        })
        cy.on('window:alert', (msg) => {
            expect(msg).to.equals('Você cancelou!')
        })
        cy.contains('button', 'Mostrar Confirm').click()
    })

    it('Deve interagir com um prompt, inserir um texto e validar uma mensagem', () => {
        cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('Gustavo')
        })

        cy.on('window:alert', (msg) => {
            expect(msg).to.equals('Olá Gustavo! Boas-vindas ao WebDojo!')
        })

        cy.contains('button', 'Mostrar Prompt').click()

    })
})