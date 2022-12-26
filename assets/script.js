var inputSearch = document.querySelector("input");
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

function renderTitle(event) {
    console.log('IN THE RENDER TITLE FUNCTION')
    var titleVal = inputSearch.value
    var apiKey = "k_n85bma6f" //limit of 100 calls per day, alternative apiKey=k_n85bma6f, k_f2lcoitr
    fetch (`https://imdb-api.com/en/API/SearchMovie/${apiKey}/${titleVal}`) 
    .then(res => res.json()) 
    .then(data => {
        console.log('ATTEMPTING TO RENDER TITLE')
        console.log('THE DATA!',data)
        console.log('TITLE: ', data.results[0].title)
        console.log('IMAGE LINK: ', data.results[0].image)
        const title = data.results[0].title
        const imgUrl = data.results[0].image
        const image = document.createElement("img")
        image.setAttribute("src",imgUrl)
        // image.setAttribute() to get the sizing of the image
        reviewBoxEl.textContent = title;
        leftBoxEl.appendChild(image)
    })
    // .catch (error => console.log('ERROR'))

// console.log(data.results.title[0])
// leftBoxEl.textContent = data.results.title[0]
    console.log(titleVal); //prints movie input 
    if (!titleVal) {
      console.error('You need a search input value!');
      return;
    }
}

function renderTitleAndReview(){
    renderTitle()
    renderReview()
}

//the function is called with a button click, user calls the function//
goButton.addEventListener("click", renderTitleAndReview);

//function causes the review from IMDb to be displayed on the website//
function renderReview () {
    console.log('IN THE RENDER REVIEW')
    var titleVal = inputSearch.value
    var apiKey = "k_n85bma6f"
    fetch (`https://imdb-api.com/en/API/Reviews/${apiKey}/${titleVal}`)
    .then(resp=>{
        return resp.json();
    })
    .then(data=>{
        console.log(data);
    })
}
//stores the string in the variable, completes a fetch request with the search result
//when go is clicked, complete a fetch request and console log the movie title