var IMDbreviewEl = document.getElementById("IMDb-review");
var YTplayer = document.getElementById("videoplayer");

function renderReview () {
    fetch (`https://imdb-api.com/en/API/Reviews/k_f2lcoitr`)
    .then(resp=>{
        return resp.json();
    })
    .then(data=>{
        console.log(data);
    })
}

renderReview ();

