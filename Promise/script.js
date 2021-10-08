// promise

// successful -> resolve
// Failed -> reject

/*
// declared promise
let prom = new Promise((resolve, reject) => {
  let a = 1 + 1;
	if (a == 2) {
    resolve('Success');
	} else {
    reject('Failed');
	}
});
*/
// declared promise setTimeOut
let prom = new Promise((resolve, reject) => {
	let a;
	setTimeout(() => {
		let a = 1 + 1;
		if (a == 2) {
			resolve('Success');
		} else {
			reject('Failed');
		}
	}, 4000);
});

// .then = when promise is successful
// .catch = when promise is failed

// promise result
prom
	.then((message) => {
		console.log('I am from then ' + message);
	})
	.catch(() => {
		console.log('I am from Catch' + message);
	});

// promise work with asynchronous ways.
console.log('I am after Promise');
