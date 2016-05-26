// var names = ['Rheisen', 'Keegan', 'Tyler'];

// names.forEach(function(name) {
// 	console.log('func name:', name);
// });

// names.forEach((name) => {
// 	console.log('arrow name:', name);
// });

// names.forEach((name) => console.log('short arrow name:', name));

// var returnMe = (name) => name + '!';

// console.log(returnMe('Rheisen'));

// var person = {
// 	name: 'Rheisen',
// 	functionGreet: function() {
// 		names.forEach(function(name) {
// 			console.log(this.name,'says hi to',name);
// 		});
// 	},
// 	arrowGreet: function() {
// 		names.forEach((name) => {
// 			console.log(this.name,'says hi to',name);
// 		});
// 	}
// }

// person.functionGreet();

// Add Function
function addFunction (a,b) {
	return a + b;
}

// Add Statement
var addStatement = (a,b) => {
	return(a+b);
}

// Add Expression
var addExpression = (a,b) => console.log(a+b);


console.log(addFunction(2,5));
console.log(addStatement(4,9));
addExpression(2,2);