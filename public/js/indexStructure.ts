import { addElem } from './newPointStructure.js';
import { elemStructure} from './structureElements.js';
import { clear} from './clearStructureInput.js';

(function()
{
	'use strict';
	
	const form = document.forms.namedItem( 'structure' );

	form.addEventListener(
		'submit',
		async ( event:Event ) =>
		{
			event.preventDefault();

			const data = {
                structure : elemStructure(),
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
			
			clear();
            document.location.href = "javascript:history.back()";
		}
	);
    addElem();
})();
