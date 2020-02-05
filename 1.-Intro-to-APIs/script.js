/*  
  - API stands for Application Programming Interface

  - in basic terms, API's allow applications to communicate with one another
  - the API is not the database or the server, it is the code that allows us access points to the server
      - those access points come in the form of an endpoint (url), which directs us to different sets of data that we can access

      ASYNCHRONOUS PROGRAMMING
      - generally code is read and implemented line by line, which is known as synchronous programming
      -asynchronous programming allows code to continue to run while were waiting for a response from an API

      - the fetch() method is built into the browser window
      -the fetch () method is asynchronous
      - the fetch() method starts the process of fetching a resource from a network, and will return a promise
        - a promise represents a value that is intially unknown when the promise is created
          - a promise is always one of 3 states:
              1. pending: intial state is neither fulfilled nor rejected
              2.fulfilled: meaning the operation completed successfully
              3.rejected: meaning the operation failed (would get an error)
          - in the case of a fetch request, a promise will resolve into a Response object that represents the response of the request made
*/

// const baseUrl= 'https://api.spacexdata.com/v3';

// const searchForm = document.querySelector('form');
// const spaceShips = document.querySelector('ul');

// searchForm.addEventListener('submit', fetchSpace);

// function fetchSpace(event) {
//     event.preventDefault();
    
//     fetch(`${baseUrl}/rockets`)
//       .then(response => response.json())
//       .then(json => displayRockets(json))
// }

// function displayRockets(data) {
//   // console.log('this is in our displayRockets function',data);
//   data.forEach(rocket => {
//      let rocketName = document.createElement('li');
//      rocketName.innerText = rocket.rocket_name;
//      spaceShips.appendChild(rocketName);
//   })
// }

const baseUrl = 'https://api.spacexdata.com/v3';

const searchForm = document.querySelector('form');
const shipHeight = document.querySelector('ul');

searchForm.addEventListener('submit', fetchHeight);

function fetchHeight(event) {
  event.preventDefault();

  fetch(`${baseUrl}/rockets`)
  .then(response => response.json())
  .then(json => displayHeight(json))
}

function displayHeight(data) {
    console.log(data);
  data.forEach(rocket => {
    let rocketHeight = document.createElement('li')
    rocketHeight.innerText = rocket.height.meters;
    shipHeight.appendChild(rocketHeight)

  })
}