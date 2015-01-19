({
    baseUrl: ".",
    'paths': {
		// libs
		'jquery' : 'vendor/jquery-1.10.2.min',
		'inputmask' : 'vendor/jquery.inputmask',
		'jqueryValidate' : 'vendor/jquery.validate.min',

		// modules
		'generateContactNumbers' : 'app/generateContactNumbers',
		'phoneMask' : 'app/phoneMask',
		'popupInit' : 'app/popupInit',
		'steps' : 'app/steps',
		'tabs' : 'app/tabs',
		'validate' : 'app/validate',
		'validation' : 'app/validation'
    },
    name: "app",
    out: "main-built.js"
})
