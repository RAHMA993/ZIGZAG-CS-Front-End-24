function fetchDataWithTimeout(url) {
    let timeoutPromise = new Promise((resolve, reject) => {
        setTimeout(() => {
            reject(new Error('Request timed out'));
        }, 5000);
    });
    
    return Promise.race([
        fetch(url),     
        timeoutPromise  
    ]);
}

// Example:
fetchDataWithTimeout('https://api.example.com/data')
    .then(response => {
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        return response.json();
    })
    .then(data => {
        console.log('Data fetched successfully:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
