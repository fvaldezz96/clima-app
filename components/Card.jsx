import { AiFillCloseCircle } from 'react-icons/ai';
import Image from 'next/image';

export default function Card({ min, max, name, img, onClose, temp, id }) {
  return (
    <article className="animate__animated animate__fadeIn shadow-lg w-full bg-blue-300 my-4 rounded-md flex flex-col justify-center items-center p-4  max-w-xs hover:shadow-xl">
      <button
        onClick={onClose}
        className="text-red-700 text-3xl m-2 transition-colors duration-500  ml-auto hover:text-red-600"
      >
        <AiFillCloseCircle />
      </button>
      <h1 className="text-4xl m-4 text-slate-100">{name}</h1>
      <div className='flex  place-items-center '>
        <div className="m-2">
          <Image
            src={'http://openweathermap.org/img/wn/' + img + '@2x.png'}
            width="140"
            height="140"
            alt={name}
          />
        </div>
      </div>
      <span className="text-5xl text-slate-100">{temp}&deg;C</span>
      <div className='flex column-2 m-2'>
        <p className="text-2xl font-light text-slate-100">
          {min}&deg;/
        </p>
        <p className="text-2xl font-light text-slate-100">
          {max}&deg;
        </p>
      </div>
    </article>
  );
}
