//fetch GET request

//headers:
//CONTENT-TYPE: application/json
fetch('api/url',{
    content-type: 'application/json'
})

//METHOD TYPE - what kind of action do you want to take with the api
//GET, POST, PUT, DELETE, PATCH

//GET - getting information (reading)
    //what's required for GET request
    //url + endpoint
    //API token
    //sometimes an id of something
//WHAT WILL THE RESPONSE BE LIKE?
    //response object => response.json()
    //{'id': 4, 'username': 'anthony'}

//POST - adding information / puhing data into the API (writing)
    //whats required for POST?
    //url + endpoint
    //what you're adding - JSON OBJECT
//WHAT WILL THE RESPONSE BE LIKE?
    //confirmation not gauranteed
    //response object --> res => res.json() --> res.status || res.ok
    //err if err
    //how can we see if it was posted successfully?
        // can make second get request after post request made
        // can look into data/API itself --> if you have access
        // trusting the status of the response

//PUT - changes something that's already on the API (editing)
    //what should be sent with a PUT request?
    //identify the data you're changing
    // where does that id go when you make the request --> at the end of the url
    //what your changing
    //where do i add the object that im changing the specified thing to
        //-->options object, which is the second parameter to my .fetch() method
//WHAT WILL THE RESPONSE BE LIKE?
    //dont get actual data back - have to check status or make another GET request to see if updated

//DELETE - delete a specific data from the API
    //what's required to make delete request
    // id of thing your deleting
//WHAT WILL THE RESPONSE BE LIKE?
    //response object => res.json() => res.status


// EXAMPLE API - SUPER SIMPLIFIED
{
    'stars': 4,
    'name': 'mcdonalds',
    'location': 'everywhere'
    'id': 001
}

//request body
    //data to be added

//POST

//url
//content being added - json
//token - possibly
//endpoint - possibly
//method type - specify that we're making POST request

const url = 'https://codeup-restful-example.glitch.me/reviews';
const reqBody = {
    "id": 2,
    "restaurant_id": 748,
    "name": "Anthony",
    "createdAt": 1504095567183,
    "updatedAt": 1504095567183,
    "rating": 4,
    "comments": "Hello"
}

const options = {
    method: 'POST',
    header: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(reqBody);
}

fetch(url, options)
    .then(res => res.json())
    .then(jsonObj => console.log(jsonObj))



















