// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

import 'cypress-real-events'
import './actions/consultancy.actions'

import { getCurrentFormattedDate } from './utils'

Cypress.Commands.add('Start', () => {
    cy.viewport(1920, 1080)
    cy.visit('/')
})

Cypress.Commands.add('SubmitLoginForm', (email, senha) => {
    cy.get('#email').type(email)
    cy.get('#password').type(senha)

    cy.contains('Button', 'Entrar').click()
})

Cypress.Commands.add('GoTo', (ButtonName, PageTitle) => {
    cy.contains('button', ButtonName)
        .should('be.visible')
        .click()

    cy.contains('h1', PageTitle)
        .should('be.visible')
})

//Helper
Cypress.Commands.add('login', (ui = false) => {

    if (ui === true) {
        cy.Start()
        cy.SubmitLoginForm('papito@webdojo.com', 'katana123')
    } else {
        const token = 'e1033d63a53fe66c0fd3451c7fd8f617'
        const loginDate = getCurrentFormattedDate()

        cy.setCookie('login_date', loginDate)
        cy.visit('/dashboard', {
            onBeforeLoad(win) {
                win.localStorage.setItem('token', token)
            }
        })
    }


})