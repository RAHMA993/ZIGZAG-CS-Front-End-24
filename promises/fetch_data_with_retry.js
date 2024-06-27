async function fetchDataWithRetry(url, maxRetries) {
    let retries = 0;
    while (retries < maxRetries) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return await response.json();
        } catch (error) {
            console.error(`Attempt ${retries + 1} failed:`, error.message);
            retries++;
        }
    }
    throw new Error(`Failed to fetch data after ${maxRetries} attempts.`);
}

// Example:
const apiUrl = 'https://api.example.com/data';
const maxRetries = 3;

fetchDataWithRetry(apiUrl, maxRetries)
    .then(data => {
        console.log('Fetched data:', data);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
