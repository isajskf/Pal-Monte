// ***********************************************************
// This example support/e2e.js is processed and
// loaded automatically before your test files.
//
// You can read more here:
// https://on.cypress.io/configuration
// ***********************************************************

// Import commands.js using ES2015 syntax:
import './commands'

// Ignorar errores de JavaScript propios de BlazeDemo (sitio externo de práctica).
// Solo se ignoran los errores que vienen de blazedemo.com; cualquier otro error
// sigue haciendo fallar las pruebas.
Cypress.on('uncaught:exception', (err) => {
    if (err.stack && err.stack.includes('blazedemo.com')) {
        return false
    }
})