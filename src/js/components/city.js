/* export function drawCurrentCity(city){
  let kelvin = ' K';
  let percent = ' %';
  let language = document.querySelector('.city-name').textContent = city.sys['country']
  console.log(city)
  document.querySelector('.city-name').textContent = city.name + ',' + ' ' + language;
  document.querySelector('.city-info_cloud').textContent = city.weather[0]['description'];
  document.querySelector('.city-temperature_temp').textContent = city.main['temp'] + kelvin;
  document.querySelector('.city-humidity_hum').textContent = city.main['humidity'] + percent;
}

export function drawHumidity(city) {
  let percent = ' %';
  document.querySelector('.city-humidity_hum').textContent = city.main['humidity'] + percent;
}
// export function drawCities(s){
//   let button = document.querySelector('.card-cities');
//   document.querySelector('#btn').onclick = async function (s) {
//     button.textContent= s.localStorage.getItem('cities')
//   }
// } */