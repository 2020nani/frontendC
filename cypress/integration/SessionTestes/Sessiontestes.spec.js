describe('Login', () => {
    it('Login Sucesso', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.url().should('contain', '/home')
    })
    it('Dados Invalidos', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('hjhjhjh@hotmail.com');
        cy.get('#password').click();
        cy.get('#password').type('1234567');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('.Toastify__toast-body')
            .should('contain', 'Falha na autenticação, verifique seu email/senha')

    })


    it('campo email nao preenchido retorna erro', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#password').click();
        cy.get('#password').type('123456');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span')
            .should('contain', 'O e-mail é obrigatório');
    })

    it('campo senha nao preenchido retorna erro', () => {
        cy.visit('http://localhost:3000/');
        cy.get('#email').click();
        cy.get('#email').type('jr@hotmail.com');
        cy.get('button').click();
        cy.get('[data-testid=form]').submit();
        cy.get('span')
            .should('contain', 'No mínimo 6 caracteres');
    })

    it('Validando Link criar conta', () => {
        cy.visit('http://localhost:3000/');
        cy.get('a').click();
        cy.url().should('contain', '/cadastro')

    })
   
 
})