import axios from 'axios';
import React, { useEffect, useState } from 'react';

const PokeTypes = ({ onInputChange }) => {
  const [types, setTypes] = useState([]);

  useEffect(() => {
    const fetchTypes = async () => {
      try {
        const response = await axios.get('https://api.pokemontcg.io/v2/types');
        // console.log('get the types', response.data);
        setTypes(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTypes();
  }, []);

  return (
    <div>
      <div className="w-full grid grid-cols-3 sm:grid-cols-4 md:grid-cols-6 gap-2 p-5">
        {types.map((type) => {
          // console.log('get color type', type.toLowerCase());
          return (
            <label
              className={`flex justify-between border rounded py-1 px-2 cursor-pointer bg-${type.toLowerCase()} border-${type.toLowerCase()}`}
              key={type}
            >
              <span>{type}</span>
              <input
                type="radio"
                className="ml-2"
                name="pokemonType"
                value={type}
                onChange={onInputChange}
              />
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default PokeTypes;
