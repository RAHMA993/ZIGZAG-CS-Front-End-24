function fetchDataFromMultipleAPIs(apiUrls) {
    const promises = apiUrls.map(url =>fetch(url)
            .then(response => {
                if (!response.ok) {
                    throw new Error(`Failed to fetch ${url}: ${response.status} ${response.statusText}`);
                }
                return response.json();
            })
            .catch(error => {
                console.error(`Error fetching ${url}:`, error);
                return null; 
            })
    );

    return Promise.all(promises);
}

// Example:
const apiUrls = [
    'https://api.example.com/data1',
    'https://api.example.com/data2',
    'https://api.example.com/data3'
];

fetchDataFromMultipleAPIs(apiUrls)
    .then(results => {
        console.log('Combined results:', results);
    })
    .catch(error => {
        console.error('Error fetching data:', error);
    });
