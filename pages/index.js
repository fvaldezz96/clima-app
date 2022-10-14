import React, { useState } from 'react';
import Header from '../components/Header.jsx';
import Nav from '../components/Nav.jsx';
import axios from 'axios';
import Swal from 'sweetalert2/dist/sweetalert2.js';
import Cards from '../components/Cards.jsx';
const apikey = '6e448c3c4fde4e1be3633c806af4d3c1';

export default function Home() {
  const [cities, setCities] = useState([]);

  function onClose(id) {
    setCities((oldCities) => oldCities.filter((city) => city.id !== id));
  }

  async function onSearch(cityToSearch) {
    try {
      let jsonCity = await axios.get(`${process.env.NEXT_PUBLIC_APIKEYS_URL}?q=${cityToSearch}&appid=${apikey}&units=metriccityToSearch`);
      let cityData = jsonCity.data;
      if (cityData.main !== undefined) {
        const city = {
          min: Math.round(cityData.main.temp_min) - 273,
          max: Math.round(cityData.main.temp_max) - 273,
          img: cityData.weather[0].icon,
          id: cityData.id,
          wind: cityData.wind.speed,
          temp: Math.round(cityData.main.temp) - 273,
          name: cityData.name,
          weather: cityData.weather[0].main,
          clouds: cityData.clouds.all,
          latitud: cityData.coord.lat,
          longitud: cityData.coord.lon,
        }
        // console.log(city, 'soy el obj de city')
        cities.some((e) => e.name === city.name)
          ? Swal.fire({
            title: 'Error!',
            text: "You've already searched for that city!",
            icon: 'warning',
            confirmButtonText: 'Alright',
          })
          : setCities((oldCities) => [...oldCities, city]);
      }
    } catch (error) {
      Swal.fire({
        title: 'Error',
        text: 'City not found.',
        icon: 'error',
        confirmButtonText: 'Alright',
      });
    }
  }

  function onFilter(cityId) {
    let city = cities.filter((c) => c.id === parseInt(cityId));

    if (city.length > 0) {
      return city[0];
    } else {
      return null;
    }
  }

  return (
    <>
      <Header />

      <Nav onSearch={onSearch} />

      <main>
        <Cards cities={cities} onClose={onClose} />
      </main>
    </>
  );
}
