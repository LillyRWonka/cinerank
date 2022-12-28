var inputSearch = document.querySelector("input");
var goButton = document.getElementById("go-button");
var submitButton = document.getElementById("submit-button");

//adds dynamtic HTML 
var searchBoxEl = document.getElementById("search-box");
var leftBoxEl = document.getElementById("left-box");
var bottomleftBoxEl = document.getElementById("bottom-left-box");
var reviewBoxEl = document.getElementById("review-box");
const myDiv = document.createElement("div");
var movie = inputSearch.value

leftBoxEl.textContent = 'Name of Movie'
reviewBoxEl.textContent = 'Review of Movie'

function renderTitle(event) {
    // console.log('IN THE RENDER TITLE FUNCTION')
    var titleVal = inputSearch.value
    var apiKey = "k_n85bma6f" //limit of 100 calls per day, alternative apiKey=k_n85bma6f, k_f2lcoitr
    fetch (`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleVal}`) 
    .then(res => res.json()) 
    .then(data => {
        // console.log('ATTEMPTING TO RENDER TITLE')
        // console.log('THE DATA!',data)
        // console.log('TITLE: ', data.results[0].title)
        // console.log('IMAGE LINK: ', data.results[0].image)
        const title = data.results[0].title
        const description = data.results[0].description
        console.log(description)
        const imgUrl = data.results[0].image
        const image = document.createElement("img")
        image.setAttribute("src",imgUrl);
        // image.setAttribute() to get the sizing of the image
        image.setAttribute('width',220);
        image.setAttribute('height',300);
        // changed from textcontent to innerHTML 
        leftBoxEl.innerHTML = "Movie Title: " + title + "<br>" + "Description: " + description;
        leftBoxEl.appendChild(image);
        const idEl = data.results[0].id
    //causes the review from IMDb to be displayed on the website//
    fetch (`https://imdb-api.com/en/API/Reviews/${apiKey}/${idEl}`)
        .then(resp=>{
        return resp.json();
        })
        .then(data=>{
        // console.log(data);
        // console.log('Spoiler alert: ' + data.items[0].warningSpoilers)
        // console.log('Date of Review: ' + data.items[0].date)
        // console.log('Rating: ' + data.items[0].rate)
        // console.log('Title of Review: ' + data.items[0].title)
        // console.log('Review Content: ' + data.items[0].content)
        const warningSpoilers = data.items[0].warningSpoilers
        const date = data.items[0].date
        const rate = data.items[0].rate
        const title = data.items[0].title
        const content = data.items[0].content
        // console.log('Title of Review: ' + data.items[0].title)
        // console.log('Review Content: ' + data.items[0].content)
        reviewBoxEl.innerHTML = "IMBd Review Title: " + title + "<br>" + "Date of Review: " +
        + date + "<br>" + "Rating: " + rate + "<br>" + "Warning Spoiler: " + warningSpoilers +
        "<br>" + "Title of Review: " + title + "<br>" + "Review: " + content})
        })

// leftBoxEl.textContent = data.results.title[0]
    console.log(titleVal); //prints movie input 
    if (!titleVal) {
      console.error('You need a search input value!');
      return;
    }
}

//the function is called with a button click, user calls the function//
goButton.addEventListener("click", renderTitle);

function saveUserReview(){
    var titleboxEl = document.getElementById("title-box").value;
    var reviewUser = document.getElementById("review-box").value;
    localStorage.setItem("title",titleboxEl);
    localStorage.setItem("review",reviewUser);
    submitButton.textContent = "Response received."
    // document.getElementById("title-box").value = localStorage.getItem('title');
    document.getElementById("review-box").value = localStorage.getItem('review');
}

submitButton.addEventListener("click",saveUserReview);

// function renderTitleAndReview(){
//     renderTitle()
//     renderReviewbox()
// }


//stores the string in the variable, completes a fetch request with the search result
//when go is clicked, complete a fetch request and console log the movie title

//TO DO
//set attribute in height to change search box in css - omit padding
//take out console logs and put comments instead to clean up code