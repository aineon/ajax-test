let xhr = new XMLHttpRequest(); //creates a new instance of the object
let data; //to store the data from responseText so it can be manipulated

xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //retrieves the data from the URL entered
xhr.send(); // sends the request to retrieve the data

function setData(jsonData) {
    data = jsonData;
    console.log(data);
}

xhr.onreadystatechange =function() {
    if (this.readyState == 4 && this.status == 200) {  //readystate==4 means the operation has been completed. status ==200 (http status code) means request succeeded, content delivered
       //document.getElementById("data").innerHTML = this.responseText; code to get the response into our div
       //console.log(typeof(this.responseText)); checks the type of variable - in this case a string
       //console.log(typeof(JSON.parse(this.responseText))); //parses the string into a JSON data structure (object)
       //console.log(JSON.parse(this.responseText)); //logs the actual object to the console
       setData(JSON.parse(this.responseText));
    }
};

