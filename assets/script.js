var inputSearch = document.getElementById("input");
var goButton = document.getElementById("go-button");
var title = ""
var movie = inputSearch.value

function renderTitle(event) {
    var titleVal = inputSearch.value
    fetch (`https://imdb-api.com/en/API/SearchMovie/k_f2lcoitr/${inputSearch}`)
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

renderTitle ();

// goButton.addEventListener ("click", projectMovie);

// function projectMovie() {
// // when button is clicked, IMDb movie title + review + Youtube API will load on secondary page
//     fetch (`https://imdb-api.com/en/API/SearchMovie/k_f2lcoitr/inception 2010`);
//     //add .then code 
//     fetch (`https://www.youtube.com/iframe_api`);
//     //
// }
