// const urlCity = (city) => {
//   xhttp.open(
//     "GET",
//     `https://api.openweathermap.org/data/2.5/forecast?q=${city}&APPID=0eee845fbfb08dcc0204fcb70613dc4a`,
//     true
//   );
// };

const urlCity = (city) => {
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&APPID=0eee845fbfb08dcc0204fcb70613dc4a`;

  fetch(url)
    .then((response) =>
      response.json().then((data) => {
        console.log(data);
        document.querySelector("#country").innerHTML = data.sys.country;
        document.querySelector("main").innerHTML += `
            <article class="card">
                <h2 id="city">${data.name}</h2>
                <p>Min : ${data.main.temp_min}°</p>
                <p>Max : ${data.main.temp_max}°</p>
                <h2>Time: <time></time></h2>
            </article>`;
      })
    )
    .catch((error) => console.log("Error : " + error));
};

let searchCity = document.querySelector("#searchCity");
document.querySelector("form").addEventListener("submit", (e) => {
  e.preventDefault();
  urlCity(searchCity.value);
  searchCity.value = "";
});
