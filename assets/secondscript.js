var IMDbreviewEl = document.getElementById("IMDb-review");

function renderReview () {
    fetch (`https://imdb-api.com/en/API/Reviews/k_f2lcoitr/tt1375666`)
    .then(resp=>{
        return resp.json();
    })
    .then(data=>{
        console.log(data);
    })
}

renderReview ();