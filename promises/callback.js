function callbackFunction (callback) {
    setTimeout(callback, 2000);
}

// Example:
callbackFunction(() => {
    console.log('Callback after a 2 second delay');
});
