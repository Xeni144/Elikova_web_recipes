import { change } from './changeHtml.js';

(function()
{
    // 'use strict';   
    
    const form = document.forms.namedItem( 'new_rec' );
    form.addEventListener(
        'submit',
        async ( event:Event ) =>
        {
            event.preventDefault();

            const nameField = <HTMLInputElement>form.elements.namedItem( 'name' );
            const categoryField = <HTMLInputElement>form.elements.namedItem( 'select_cat' );
            const methodField = <HTMLInputElement>form.elements.namedItem( 'select_method' );
            const structureField = <HTMLInputElement>form.elements.namedItem( 'button_struct' );
            const timeField = <HTMLInputElement>form.elements.namedItem( 'time' );
            const processField = <HTMLInputElement>form.elements.namedItem( 'process' );
            
            const data = {
                name: nameField.value,
                select_cat: categoryField.value,
                select_method: methodField.value,
                time: timeField.value,
                process: processField.value,
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
            categoryField.value = '';
            methodField.value = '';
            timeField.value = '';
            processField.value = '';
            structureField.value ='';
        }
    );

    const inputBtn = <HTMLInputElement>document.getElementById('button_struct');

    inputBtn.onclick = function(){
        document.location.href='http://localhost:5042/structure.html';
    }
    
})();