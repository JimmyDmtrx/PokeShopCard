import { useNavigate } from 'react-router-dom';

import { useState } from 'react';
import { useEffect } from 'react';

const Header = () => {
  const navigate = useNavigate(false);
  const [isBasketFull, setIsBasketfull] = useState(false);

  useEffect(() => {
    getBasket();
  });

  const getBasket = () => {
    let basketInStorage = localStorage.getItem('basket');
    basketInStorage && setIsBasketfull(true);
    console.log('ok');
  };

  return (
    <div className="flex flex-col bg-purple-200 relative">
      <div className="flex justify-center">
        <h1
          onClick={() => navigate('/')}
          className="text-3xl text-blue-700 py-4 hover:cursor-pointer hover:scale-110"
        >
          My Poke Shop
        </h1>
      </div>
      <div className="p-4 text-2xl absolute  hover:cursor-pointer hover:scale-110 right-20">
        <h1 onClick={() => navigate('/basket')}>my cart</h1>
      </div>{' '}
      {isBasketFull ? (
        <div className="absolute right-20">basket full</div>
      ) : (
        <div className="absolute right-20">empty basket</div>
      )}
    </div>
  );
};

export default Header;
