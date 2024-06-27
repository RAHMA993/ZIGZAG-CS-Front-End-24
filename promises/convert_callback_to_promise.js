// Callback-based function
function callbackBasedFunction(x, callback) {
    setTimeout(() => {
        if (typeof x === 'number') {
            callback(null, x * 2); 
        } else {
            callback('Error: Input is not a number', null);
        }
    }, 1000); 
}

// Converting to Promise-based function
function promiseBasedFunction(x) {
    return new Promise((resolve, reject) => {
        callbackBasedFunction(x, (error, result) => {
            if (error) {
                reject(error);
            } else {
                resolve(result);
            }
        });
    });
}

// Using the Promise-based function
promiseBasedFunction(5)
    .then(result => {
        console.log('Result:', result);
    })
    .catch(error => {
        console.error('Error:', error);
    });



