// Add your code here
//fetch()
//write a method, submitData, that takes two strings arguments,
//one representing a user's name and the other representing a user's email.

function submitData(name, email) {
    return fetch("http://localhost:3000/users", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json"
        },
        body: JSON.stringify( {
            name,
            email
        })
    })
    .then(function ( response ) {
        return response.json()
    })
    .then(function ( object ) {
        document.body.innerHTML = object["id"] //From this object, find the new id and append this value to the DOM
    })
    .catch(function (error) {
        document.body.innerHTML = error.message
    })
}
    