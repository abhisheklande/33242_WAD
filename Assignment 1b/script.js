const mySubmit = () =>{
    const name = document.getElementById("name").value
    const pass = document.getElementById("psw").value
    const email = document.getElementById("email").value

    var data = {
        "name": name,
        "email": email,
        "password": pass
    }
    const url = "https://622855af9fd6174ca820a2b8.mockapi.io/users"
    let xhr = new XMLHttpRequest();
    xhr.open('POST', url, true)
    xhr.setRequestHeader('Content-type', 'application/json; charset=UTF-8')
    xhr.send(JSON.stringify(data));

    xhr.onload = function () {
        if(xhr.status === 201) {
            console.log("Post successfully created!") 
            window.location.replace("D:/Assignment TE-10/WADL/Assignment 1b/ajax_result.html")
        }
    }
}
