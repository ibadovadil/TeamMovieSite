document.addEventListener('DOMContentLoaded', function () {
    const readMoreContent = document.getElementById('readMoreContent');

    // Function to get the URL parameter by name
    function getParameterByName(name, url) {
        if (!url) url = window.location.href;
        name = name.replace(/[\[\]]/g, '\\$&');
        const regex = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)');
        const results = regex.exec(url);
        if (!results) return null;
        if (!results[2]) return '';
        return decodeURIComponent(results[2].replace(/\+/g, ' '));
    }

    // Get the item ID from the URL
    const itemId = getParameterByName('id');

    // Fetch data from the API based on the ID
    fetch(`https://api.tvmaze.com/shows/${itemId}`)
        .then(response => response.json())
        .then(data => {
            readMoreContent.innerHTML = `
                <h1>${data.name}</h1>
                <p>${data.summary}</p>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});

