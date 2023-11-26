fetch("https://api.tvmaze.com/shows?all")
  .then((res) => res.json())
  .then((data) => {
    data.forEach((element) => {
      Fill(data);
      console.log(element.name);
    });
  });
function Fill(element) {
  let result = "";
  const charList = document.getElementById("a");
  element.forEach((item) => {
    result += `

    <div class="col-lg-3 col-md-4 col-sm-12 allmovies">

    <div class="card" style="width: 18rem;">
    <img  src="${item.image.medium}" class="card-img-top" alt="...">
    <div class="card-body">
      <h5 class="card-title">${item.name}</h5>
      <p class=${item.type}</p>
      <a href="readMore.html" class="btn btn-primary">Read More</a>
    </div>
  </div>
  </div>

        `;
  });
  charList.innerHTML = result;
}
