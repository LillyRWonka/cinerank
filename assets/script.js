var inputSearch = document.querySelector("input");
var goButton = document.getElementById("go-button");
var movie = inputSearch.value

function renderTitle(event) {
    var titleVal = inputSearch.value
    var apiKey = "k_n85bma6f" //limit of 100 calls per day, alternative apiKey=k_f2lcoitr
    fetch (`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleVal}`) 
    .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        console.log(data);
      });
    console.log(titleVal); //prints movie input 
}
goButton.addEventListener("click", renderTitle);
renderTitle ();

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
