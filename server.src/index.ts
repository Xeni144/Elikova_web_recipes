import Express from 'express';
import { resolve } from 'path';
//import Handlebars from 'express-handlebars';
import BodyParser from 'body-parser';
import { readFile, writeFile } from 'fs/promises';

const rootPath = resolve( __dirname, '..' );
process.chdir( rootPath );

const app = Express();
app.listen( 5042 );

app.use(Express.static( resolve( rootPath, 'public' ) ) );

app.get(
	'/',
	( _request: Express.Request, response: Express.Response ) =>
	{
		response.sendFile( rootPath + '/public/category.html')
	},
);

const jsonParser = BodyParser.json();
const logonFile = resolve( rootPath, 'logon.json' );
const registrationFile = resolve( rootPath, 'registration.json' );
const recipeFile = resolve( rootPath, 'recipes.json' );
const structureFile = resolve( rootPath, 'structure.json' );

type FormLoginData = {
	log_email_name: string;
	password: string;
};

app.post(
	'/api/form/log_in',
	jsonParser,
	async ( request: Express.Request, response: Express.Response ) =>
	{
		const data = request.body as FormLoginData;
		let logon: FormLoginData[];
		
		try
		{
			const content = await readFile( logonFile, 'utf8' );
			
			logon = JSON.parse( content );
		}
		catch ( _error )
		{
			logon = [];
		}
		
		logon.push( data );
		
		await writeFile(
			logonFile,
			JSON.stringify( logon ),
			'utf8',
		);

		response.send( 'OK' );
	},
);

type FormRegistrationData = {
	name: string;
	login: string;
	email: string;
	password: string;
	password_rep: string;
};

app.post(
	'/api/form/registration',
	jsonParser,
	async ( request: Express.Request, response: Express.Response ) =>
	{
		const data = request.body as FormRegistrationData;
		let registration: FormRegistrationData[];
		
		try
		{
			const content = await readFile( registrationFile, 'utf8' );
			
			registration = JSON.parse( content );
		}
		catch ( _error )
		{
			registration = [];
		}
		
		registration.push( data );
		
		await writeFile(
			registrationFile,
			JSON.stringify( registration ),
			'utf8',
		);

		 response.send( 'OK' );
	},
);

type FormNewRecipeData = {
	name: string;
	select_cat: string;
	select_method: string;
	time: string;
	process: string;
};

app.post(
	'/api/form/new_rec',
	jsonParser,
	async ( request: Express.Request, response: Express.Response ) =>
	{
		const data = request.body as FormNewRecipeData;
		let recipe: FormNewRecipeData[];
		
		try
		{
			const content = await readFile( recipeFile, 'utf8' );
			
			recipe = JSON.parse( content );
		}
		catch ( _error )
		{
			recipe = [];
		}
		
		recipe.push( data );
		
		await writeFile(
			recipeFile,
			JSON.stringify( recipe ),
			'utf8',
		);

		 response.send( 'OK' );
	},
);

type FormStructureData = {
	name_s: string;
	count: number;
	select_ed: string;
};

app.post(
	'/api/form/structure',
	jsonParser,
	async ( request: Express.Request, response: Express.Response ) =>
	{
		const data = request.body as FormStructureData;
		let struct: FormStructureData[];
		
		try
		{
			const content = await readFile( structureFile, 'utf8' );
			
			struct = JSON.parse( content );
		}
		catch ( _error )
		{
			struct = [];
		}
		
		struct.push( data );
		
		await writeFile(
			structureFile,
			JSON.stringify( struct ),
			'utf8',
		);

		 response.send( 'OK' );
	},
);
