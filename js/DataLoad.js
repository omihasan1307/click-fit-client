function loadData() {
  const xhttp = new XMLHttpRequest();

  xhttp.onload = function () {
    const jsonData = this.response;
    console.log(jsonData);
    document.getElementById("information").innerHTML = `
    <div class="text-start p-5">
    
    <p>${jsonData.text}</p>
    <p>Year : ${jsonData.year}</p>
    <p>Number : ${jsonData.number}</p>
    <p>Type : ${jsonData.type}</p>
    </div>
    `;
  };

  xhttp.open("GET", "http://numbersapi.com/1/30/date?json");
  xhttp.responseType = "json";
  xhttp.send();
}

const getData = document.getElementById("information");
getData.addEventListener("click", loadData);
