//File that contains our code 
//babel src/app.js --out-file=public/scripts/app.js --presets=env,react --watch 

var template = <div> <h1> hello </h1> <p>This is JSX from app.js </p> </div>;

var obj = {
	user : 'nikhil',
	age :26
}
var template2 = (
	<div>
		<h1>{obj.user}</h1>
		<p>{obj.age}</p>
	</div>
	);

var appRoot = document.getElementById('app');
ReactDOM.render(template2,appRoot);