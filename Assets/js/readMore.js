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
            
            <div class="card readmorecard mb-3" style="width: 100% !important; height: 60vh !important;">
            <div class="row g-0">
              <div class="col-md-4">
                <img src="${data.image.medium}" class="img-fluid rounded-start" alt="...">
              </div>
              <div class="col-md-8">
                <div class="card-body">
                  <h5 class="card-title">${data.name}</h5>
                  <p class="card-text"> ${data.summary}</p>
                  
                  <p class="card-text"><small class="text-body-secondary">Genres: ${data.genres}</small></p>
                  <p class="card-text">Rate: ${data.rating.average}</p>
                </div>
              </div>
            </div>
          </div>
            `;
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});