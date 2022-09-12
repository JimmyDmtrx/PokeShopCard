import { useEffect, useState } from 'react';
import axios from 'axios';

import PokeTypes from './PokeTypes';

const SearchBar = ({ setCards }) => {
  const [searchTypes, setSearchTypes] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  // const [searchHolo, setSearchHolo] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setCards([]);
    try {
      const response = await axios.get(
        // `https://api.pokemontcg.io/v1/cards?name=${searchTerm}&types=${
        //   searchTypes.join(',') || ''
        // }&rarities=${searchHolo}`
        `https://api.pokemontcg.io/v1/cards?name=${searchTerm}&types=${
          searchTypes.join(',') || ''
        }`
      );
      // console.log('types in searchbar--->', response.data);
      setCards(response.data.cards);
      setSearchTerm('');
    } catch (error) {
      console.log(error);
    }
  };

  const handleTypeChange = (e) => {
    const { value, checked } = e.target;

    if (checked) {
      setSearchTypes((current) => [...current, value]);
    } else {
      setSearchTypes(searchTypes.filter((type) => type !== value));
    }
  };

  useEffect(() => {
    const getCardList = async () => {
      try {
        const response = await axios.get(
          'https://api.pokemontcg.io/v2/cards?pageSize=100'
        );
        // console.log('data--->', response.data.data);
        setCards(response.data.data);
      } catch (error) {
        console.log(error);
      }
    };
    getCardList();
  }, []);

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <h1 className="py-5 text">search Bar</h1>
        <div className="w-full grid grid-cols-5">
          <input
            placeholder="pokemon name"
            className=" border col-span-4 border-gray-500 rounded shadow h-full flex-grow p-1"
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button className="bg-blue-400 text-white border rounded shadow px-2 ml-2 h-full ">
            Search
          </button>
        </div>
        <PokeTypes onInputChange={handleTypeChange} />
        {/* <label className="border rounded py-1 px-2 hover:cursor-pointer">
          <span>Holo Rare</span>
          <input
            type="checkbox"
            className="ml-2"
            name="Holo Rare"
            value="Holo Rare"
            onChange={() => {
              setSearchHolo('Holo Rare');
            }}
          />
        </label> */}
      </form>
    </div>
  );
};

export default SearchBar;
