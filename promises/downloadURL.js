async function downloadUrls(urls) {
    try {
        const promises = urls.map(url => fetch(url)
        .then(response => response.text()));

        const results = await Promise.all(promises);
        return results;
    } catch (error) {
        console.error('Error downloading URLs:', error);
        throw error;
    }
}

// Example:
const urls = [
    'https://example.com/file1.txt',
    'https://example.com/file2.txt',
    'https://example.com/file3.txt'
];

downloadUrls(urls)
    .then(contents => {
        console.log('Downloaded contents:', contents);
    })
    .catch(error => {
        console.error('Error downloading URLs:', error);
    });
