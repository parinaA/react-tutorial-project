'use strict';

//File that contains our code 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

var template = React.createElement(
	'div',
	null,
	' ',
	React.createElement(
		'h1',
		null,
		' hello '
	),
	' ',
	React.createElement(
		'p',
		null,
		'This is JSX from app.js '
	),
	' '
);

var obj = {
	user: 'nikhil',
	age: 26
};
var template2 = React.createElement(
	'div',
	null,
	React.createElement(
		'h1',
		null,
		obj.user
	),
	React.createElement(
		'p',
		null,
		obj.age
	)
);

var appRoot = document.getElementById('app');
ReactDOM.render(template2, appRoot);
