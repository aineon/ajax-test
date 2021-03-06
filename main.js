

function getData(url, cb) {
    let xhr = new XMLHttpRequest();

    xhr.open("GET", url);
    xhr.send();

    xhr.onreadystatechange =function() {
        if (this.readyState == 4 && this.status == 200) { 
             cb(JSON.parse(this.responseText));
       }
   }
};

function getTableHeaders(obj) {
    let tableHeaders = [];

    Object.keys(obj).forEach(function(key) {
        tableHeaders.push(`<td>${key}</td>`);
    });

    return `<tr>${tableHeaders}</tr>`;
}

function generatePaginationButtons(next, prev) {
    if (next && prev) {
        return `<button onclick="writeToDocument('${prev}')">Previous</button>
                <button onclick="writeToDocument('${next}')">Next</button>`;
    } else if (next && !prev) {
        return `<button onclick="writeToDocument('${next}')">Next</button>`;
    }   
      else if (!next && prev) {
          return `<button onclick="writeToDocument('${prev}')">Previous</button>`;
    }
}

function writeToDocument(url) {
    let tableRows = [];
    let el = document.getElementById("data");
    el.innerHTML = "";
    
    getData(url, function(data) {
        let pagination;
        if (data.next || data.previous) {
            pagination = generatePaginationButtons(data.next, data.previous)
        }
         data = data.results; //retrieves our data
        let tableHeaders = getTableHeaders(data[0]); //calls the get tableHeaders function

         data.forEach(function(item) {
           let dataRow = [];
           
           Object.keys(item).forEach(function(key) {
               let rowData = item[key].toString();
               let truncatedData = rowData.substring(0, 15);
               dataRow.push(`<td>${truncatedData}</td>`);
           });
           tableRows.push(`<tr>${dataRow}</tr>`);
         }); 

         el.innerHTML = `<table>${tableHeaders}${tableRows}</table>${pagination}`.replace(/,/g, "");
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
