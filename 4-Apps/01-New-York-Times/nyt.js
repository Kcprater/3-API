const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json'; //1

function fetchResults(e) {
  e.preventDefault();


const key = 'BRqq9a33bbg8HgfinYyAiDpze87vb7u7'; //2

let url;

url = baseURL + '?api-key=' + key + '&page=' + pageNumber + '&q=' + searchTerm.value; //3

if(startDate.value !== '') {
  console.log(startDate.value)
  url += '&begin_date=' + startDate.value;
};

if(endDate.value !== '') {
  url += '&end_date=' + endDate.value;
};

fetch(url)
  .then(function(result) {
    return result.json();
  }).then(function(json) {
    displayResults(json);
  });
}

function displayResults(json) {
  while (section.firstChild) {
    section.removeChild(section.firstChild);
  }
  let articles = json.response.docs;

  if (articles.length === 0){
  } else if (articles.length === 10) {
    nav.style.display = 'block';
  }else if (articles.length < 10) {
    nav.style.display = 'none'
} else articles.length === 0 
    console.log('No results') 
    {

   for(let i = 0; i < articles.length; i++) {
     let article = document.createElement('article');
     let heading = document.createElement('h2');
     let link = document.createElement('a');

     let current = articles[i];
     console.log('Current:', current);
     
     link.href = current.web_url;
     link.textContent = current.headline.main;

     article.appendChild(heading);
     heading.appendChild(link)
     section.appendChild(article);
   }
}
}


const nextBtn = document.querySelector('.next');

function nextPage() {
  console.log('Next button clicked');
} //5


const previousBtn = document.querySelector('.prev');

function previousPage() {
  console.log('Next button clicked');
} //5


// SEARCH FORM
const searchTerm = document.querySelector('.search');
const startDate = document.querySelector('.start-date');
const endDate = document.querySelector('.end-date');
const searchForm = document.querySelector('form');
const submitBtn = document.querySelector('.submit');

searchForm.addEventListener('submit', fetchResults);

// RESULTS NAVIGATION
const nav = document.querySelector('nav');

nextBtn.addEventListener('click', nextPage);
previousBtn.addEventListener('click', previousPage);

// RESULTS SECTION
const section = document.querySelector('section');

let pageNumber = 0;
let displayNav = false;
nav.style.display = 'none';