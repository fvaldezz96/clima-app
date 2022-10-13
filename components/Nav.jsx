import { useState } from 'react';
import { TiWeatherPartlySunny } from 'react-icons/ti';

export default function Nav({ onSearch }) {
  const [city, setCity] = useState('');

  return (
    <nav className="animate__animated animate__fadeIn bg-blue-300 z-50 flex justify-around items-center sticky w-full top-0 px-4 py-4 shadow-lg md:px-12 md:justify-between">
      <div className="flex items-center justify-center">
        <TiWeatherPartlySunny className="mr-4 text-3xl text-sky-900" />
        <h3 className="hidden md:block font-bold text-xl">
          App Clima
        </h3>
      </div>
      <div>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            onSearch(city);
            setCity('');
          }}
        >
          <input
            type="text"
            placeholder="Search City 🌎"
            value={city}
            onChange={(e) => setCity(e.target.value)}
            className="py-2 px-4 outline-none bg-gray-200 rounded-md font-sans font-semibold text-sky-900 focus:placeholder:invisible"
          />
        </form>
      </div>
    </nav>
  );
}
