import Card from './Card';
import Image from 'next/image';
import City from '../assets/icons8-globo.gif';

export default function Cards({ cities, onClose }) {
  return (
    <>
      {cities.length > 0 ? (
        <div className="w-full flex flex-wrap justify-center gap-4 max-w-7xl m-auto">
          {cities.map((city) => (
            <Card
              key={city.id}
              id={city.id}
              temp={city.temp}
              max={city.max}
              min={city.min}
              name={city.name}
              img={city.img}
              onClose={() => onClose(city.id)}
            />
          ))}
        </div>
      ) : (
        <div className="animate__animated animate__fadeIn w-full h-full grid place-items-center justify-center mt-48">
          <h1 className="m-0 mt-8 text-2xl">Search for any city in the world!</h1>
          <div className="max-w-sm mx-2">
            <Image src={City} alt="Search for a City!" />
          </div>
        </div>
      )}
    </>
  );
}
