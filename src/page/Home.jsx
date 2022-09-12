import { useState } from 'react';

import CardList from '../components/CardList';
import SearchBar from '../components/SearchBar';

const Home = () => {
  const [cards, setCards] = useState([]);

  return (
    <div className="flex flex-col px-5">
      <SearchBar setCards={setCards} />
      <CardList cards={cards} />
    </div>
  );
};

export default Home;
