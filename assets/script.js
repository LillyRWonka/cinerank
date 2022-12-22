var inputSearch = document.getElementById("input");
var goButton = document.getElementById("go-button");
var title = ""
var movie = inputSearch.value

function renderTitle() {
    fetch (`https://imdb-api.com/en/API/SearchMovie/k_f2lcoitr/${title}`)
    .then(response=>{
        return response.json();
    })
    .then(data =>
        console.log(data));
    // .catch(error => console.log(error))
console.log(title);
console.log(movie);
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
