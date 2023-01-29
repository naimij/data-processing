//alert("hello from data-processing!")

const queryString = window.location.search;
console.log(queryString);

if(queryString.length > 0){
    const urlParams = new URLSearchParams(queryString);

    let myData = "";

    urlParams.forEach(function(value, key) {
        //swaps underscore for space 
        key = key.split("_").join(" ");

        myData += `<p>${key}: ${value}</p>`;
      //console.log(key, value);
    });

    myData += '<p><a href="index.html">CLEAR</a></p>';

    document.getElementById("output").innerHTML = myData;
    }
