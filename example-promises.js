// function getTemp (location) {
// 	return new Promise(function (resolve, reject) {
// 		resolve(79);
// 		reject('City not found');
// 	});
// }

// getTemp('Philadelphia').then(function (temp) {
// 	console.log('success:', temp);
// }, function(err) {
// 	console.log('failed:', err);
// });

function add (a,b) {
	return new Promise(function(resolve,reject) {
		if(typeof a === 'number' && typeof b === 'number') {
			resolve(a + b);
		} else {
			reject('both values need to be numbers');
		}
	});
}

add(5,2).then(function (sum) {
	console.log('Success:', sum);
}, function (err) {
	console.log('Failed:', err);
});

add('five',2).then(function (sum) {
	console.log('Success:', sum);
}, function (err) {
	console.log('Failed:', err);
});