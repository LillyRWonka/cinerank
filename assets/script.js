var inputSearch = document.getElementById("input");
var goButton = document.getElementById("go-button");

//adds dynamtic HTML 
var searchBoxEl = document.getElementById("search-box");
var leftBoxEl = document.getElementById("left-box");
var bottomleftBoxEl = document.getElementById("bottom-left-box");
var reviewBoxEl = document.getElementById("review-box");
const myDiv = document.createElement("div");
var movie = inputSearch.value

leftBoxEl.textContent = 'Youtube Trailer'
bottomleftBoxEl.textContent = 'Recent Search History'
reviewBoxEl.textContent = 'Review of Movie'

// leftBoxEl.appendChild(myDiv);

function renderTitle(event) {
    var titleVal = inputSearch.value
    var apiKey = "k_f2lcoitr" //limit of 100 calls per day, alternative apiKey=k_n85bma6f
    fetch (`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleVal}`) 
    // for (let i = 0; i < array.length; i++) {
        
    // }
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log("THE DATA", data); 
      });
    //   data.searchtype
    console.log(titleVal); //prints movie input 
    console.log()
}
goButton.addEventListener("click", renderTitle);
renderTitle ();

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

//stores the string in the variable, completes a fetch request with the search result
//when go is clicked, complete a fetch request and console log the movie title

// goButton.addEventListener ("click", projectMovie);

// function projectMovie() {
// // when button is clicked, IMDb movie title + review + Youtube API will load on secondary page
//     fetch (`https://imdb-api.com/en/API/SearchMovie/k_f2lcoitr/inception 2010`);
//     //add .then code 
//     fetch (`https://www.youtube.com/iframe_api`);
//     //
// }
