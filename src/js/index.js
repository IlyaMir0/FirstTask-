import '../scss/styles.scss';
/* import { fetchByName, fetchByCoords } from "./services/WeatherService";
import { drawCurrentCity, drawHumidity} from "./components/city"; */

/* let options = {
  enableHighAccuracy: true,
  timeout: 10000,
  maximumAge: 0
};

async function successHandler(pos) {
  let crd = pos.coords;
  let currentCity = await fetchByCoords(crd.latitude, crd.longitude)
  drawCurrentCity(currentCity)
}

document.querySelector('.city-reload').addEventListener('click', () => {
  //document.querySelector('.city-humidity_hum').innerHTML = drawCurrentCity();
  fetchCurrentCity()
  return false
})

function errorHandler(err) {
  alert(`Ошибка при получении города: ${err}`)
}

function fetchCurrentCity(){
  navigator.geolocation.getCurrentPosition(successHandler, errorHandler, options);
}
fetchCurrentCity() */



//TODO: Удалить меня)
// let test = document.getElementById('test')
// let btn = document.getElementById('btn')
// btn.addEventListener('click', () => {
//   localStorage.setItem('cities', test.value)
// })
/* let cities = []
if (localStorage.getItem('cities')) {
  cities = localStorage.getItem('cities').split(' ')
}
cities.forEach(item => {
  console.log(fetchByName(item))

  //рисовать
})
//TODO: Подсказка
let test = document.getElementById('test')

document.querySelector('.btn').addEventListener('click', () => {
  localStorage.setItem('cities', test.value)
  localStorage.getItem('cities')
  document.querySelector('.card-cities').textContent = localStorage.getItem('cities')
  cities.forEach(item => {
    console.log(fetchByName(item))
  })
})
 */
