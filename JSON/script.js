const details ="data.json";  //creating a variable named details having value data.json; created a function like a vari

//Create promise that fetch's the data from data.json in a JavaScript file
function fetchPromise(file){
  return  new Promise(function(resolve, reject){
       return fetch(details).then(function(data){
            resolve(data.json())
        }).catch(function(error){
            reject(error, 'Cannot retrieve data');
        })
    })
}

fetchPromise(details).then(function(info){
    console.log(info);
    printQuotesData(info.quotes);
})

function printQuotesData(array){
   
    array.forEach(function(quotes){  //Array.from= changes to an array
        const div = document.createElement("div");
        const h1 = document.createElement("h1");
        const p = document.createElement("p");
        const app = document.getElementById("app");
        //h1.appendChild(document.createTextNode(quotes.author));
        p.appendChild(document.createTextNode(quotes.quote));
        div.appendChild(h1);
        div.appendChild(p);
        app.appendChild(div);
    });
}
