const baseURL = "https://ci-swapi.herokuapp.com/api/";

function getData(type, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", baseURL + type + "/");
    xhr.send();

    xhr.onreadystatechange =function() {
        if (this.readyState == 4 && this.status == 200) { 
             cb(JSON.parse(this.responseText));
       }
   }
};

function writeToDocument(type) {
    let el = document.getElementById("data");
    el.innerHTML = "";
    getData(type, function(data) {
         data = data.results;

         data.forEach(function(item) {
         el.innerHTML += "<p>" + item.name + "</p>";
         }); 
    });
}





//let xhr = new XMLHttpRequest(); //creates a new instance of the object
//let data; //to store the data from responseText so it can be manipulated

//xhr.open("GET", "https://ci-swapi.herokuapp.com/api/"); //retrieves the data from the URL entered
//xhr.send(); // sends the request to retrieve the data

//function setData(jsonData) {   with the timeout function we no longer need this function
 //   data = jsonData;
 //   console.log(data);
//}

//xhr.onreadystatechange =function() {
    //console.log(this.readyState); //this will print out the readystate everytime the function is invoked - it is not a necessary bit of code - only shows us when the function is invoked
   // if (this.readyState == 4 && this.status == 200) {  //readystate==4 means the operation has been completed. status ==200 (http status code) means request succeeded, content delivered
       //document.getElementById("data").innerHTML = this.responseText; code to get the response into our div
       //console.log(typeof(this.responseText)); checks the type of variable - in this case a string
       //console.log(typeof(JSON.parse(this.responseText))); //parses the string into a JSON data structure (object)
       //console.log(JSON.parse(this.responseText)); //logs the actual object to the console
      // setData(JSON.parse(this.responseText));
        //data = JSON.parse(this.responseText);    //can use this line of code with the timeout function  
   // }
//};

//setTimeout(function() {
   // console.log(data);
//}, 500);
