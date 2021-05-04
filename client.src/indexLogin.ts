( function()
{
    'use strict';
    
    const form = document.forms.namedItem( 'log_in' );
    form.addEventListener(
        'submit',
        async ( event:Event ) =>
        {
            event.preventDefault();
            
            const nameField = <HTMLInputElement>form.elements.namedItem( 'log_email_name' );
            const passwordField = <HTMLInputElement>form.elements.namedItem( 'password' );
            
            const data = {
                log_email_name: nameField.value,
                password: passwordField.value,
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
            passwordField.value = '';
            document.location.href = 'http://localhost:5042/category.html';
        }
    );
} )();