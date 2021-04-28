( function()
{
    'use strict';
    

    const form = document.forms.namedItem( 'registration' );
    form.addEventListener(
        'submit',
        async ( event:Event ) =>
        {
            event.preventDefault();
            
            const nameField = <HTMLInputElement>form.elements.namedItem( 'name' );
            const loginField = <HTMLInputElement>form.elements.namedItem( 'login' );
            const emailField = <HTMLInputElement>form.elements.namedItem( 'email' );
            const passwordField = <HTMLInputElement>form.elements.namedItem( 'password' );
            const repeatpasswordField = <HTMLInputElement>form.elements.namedItem( 'password_rep' );

            //if ( passwordField != repeatpasswordField )

            
            const data = {
                name: nameField.value,
                login: loginField.value,
                email: emailField.value,
                password: passwordField.value,
                password_rep: repeatpasswordField.value,
            };
            
            await fetch(
                form.action,
                {
                    method: form.method,
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify( data ),
                },
            );
            
            nameField.value = '';
            loginField.value ='';
            emailField.value ='';
            passwordField.value = '';
            repeatpasswordField.value = '';
            document.location.href = 'http://localhost:5042/category.html';
        }
    );
} )();