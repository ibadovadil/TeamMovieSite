fetch("https://api.tvmaze.com/shows?all")
  .then((res) => res.json())
  .then((data) => {
    const slicedData = data.slice(110,114);
    Fill(slicedData);
  });

function Fill(data) {
  let result = "";
  const charList = document.getElementById("cards");
  data.forEach((item) => {
    result += `
       
                 <div class="card">
                 <a href="./Assets/pages/readMore.html?id=${item.id}" type="button" class="btn btn-danger genrebtn">Read More  <i class="fa-solid fa-caret-right" style="color: #ffffff;"></i></a>

                 <div class="cardimg">
                  <img src="${item.image.medium}" alt="">
                 </div>
                  <div class="name">
                  ${item.name}
                  </div>
               
              </div>
        `;
  });
  charList.innerHTML = result;
}
