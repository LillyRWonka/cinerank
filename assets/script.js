//global calling HTML IDs to make them interactive in Javascript
var inputSearch = document.querySelector("input");
var goButton = document.getElementById("go-button");
var submitButton = document.getElementById("submit-button");
var searchBoxEl = document.getElementById("search-box");
var leftBoxEl = document.getElementById("left-box");
var bottomleftBoxEl = document.getElementById("bottom-left-box");
var reviewBoxEl = document.getElementById("review-box");
const myDiv = document.createElement("div");
var hintEl = document.getElementById("hint")

//Adds titles to the textboxes
leftBoxEl.textContent = 'Name of Movie'
reviewBoxEl.textContent = 'Review of Movie'

//Pulls specified movie information from IMBD movie database 
function renderMovie(event) {
    var titleVal = inputSearch.value
    //Note: limit of 100 calls per day, alternative apiKey=k_n85bma6f, k_f2lcoitr
    var apiKey = "k_n85bma6f" 
    //Requests data from the IMDb search movie server and pulls JSON file and prints it to the console
    fetch (`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleVal}`) 
    .then(res => res.json()) 
    .then(data => {
        const title = data.results[0].title
        const description = data.results[0].description
        const imgUrl = data.results[0].image
        const image = document.createElement("img")
        //changes the movie poster to a specified size
        image.setAttribute("src",imgUrl)
        image.setAttribute('width',220)
        image.setAttribute('height',300)
        //when button is clicked, text displays information from the API call
        leftBoxEl.innerHTML = "Movie Title: " + title + "<br>" + "Description: " + description + "<br>" + "<br>";
        //image is set as the last child of the element, leftbox textbox
        leftBoxEl.appendChild(image)
        //movie id from APIs are required for the use of the second API
        const idEl = data.results[0].id
    
    //Requests data from the IMDb review server and pulls JSON file and prints it to the console
    fetch (`https://imdb-api.com/en/API/Reviews/${apiKey}/${idEl}`)
        .then(resp=>resp.json())
        .then(data=> {
        const warningSpoilers = data.items[0].warningSpoilers
        const date = data.items[0].date
        const rate = data.items[0].rate
        const title = data.items[0].title
        const content = data.items[0].content
        //when button is clicked, text displays information from the API call
        reviewBoxEl.innerHTML = "IMBd Review Title: " + title + "<br>" + "Date of Review: " +
        + date + "<br>" + "Rating: " + rate + "<br>" + "Warning Spoiler: " + warningSpoilers +
        "<br>" + "<br>" + "Title of Review: " + title + "<br>" + "Review: " + content})
        })
    
    //If title value in Search bar is blank when button is clicked, a message will appear and replace the current text 
    if (titleVal=="") {
      hintEl.textContent = "You need a search input value!"
      return;
    }}

//both APIs are called when the Search button is clicked, user calls the function//
goButton.addEventListener("click", renderMovie);

//creating a function to save user's personal review of their choice of movie
function saveUserReview(){
    var titleboxEl = document.getElementById("title-box").value;
    var reviewUser = document.getElementById("review-user").value;
    //saves user response in local storage
    localStorage.setItem("title",titleboxEl);
    localStorage.setItem("review",reviewUser);
    submitButton.textContent = "Response received"
    document.getElementById("review-box").value = localStorage.setItem('review',reviewUser);
}

//when Submit button is clicked, user response is saved to local storage and response received message appears
submitButton.addEventListener("click",saveUserReview);