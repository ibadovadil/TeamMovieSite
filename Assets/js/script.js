fetch('https://api.tvmaze.com/shows?all')
.then(res=>res.json())
.then(data=>{
    data.forEach(element => {
            Fill(data)
            console.log(element.name);
    });
})
function Fill(element){
    let result = '';
    const charList = document.getElementById('a')
    element.forEach(item =>{
        result+=
        <h1>
            ${item.name}
        </h1>
        

    })
    charList.innerHTML=result;
}

fetch('https://api.tvmaze.com/shows?all')
    .then(res => res.json())
    .then(data => {
        const slicedData = data.slice(0, 10);
        Fill(slicedData);
    });

function Fill(data) {
    let result = '';
    const charList = document.getElementById('a');
    data.forEach(item => {
        result += 
        <h1>
            ${item.name}
        </h1>
        ;
    });
    charList.innerHTML = result;
}