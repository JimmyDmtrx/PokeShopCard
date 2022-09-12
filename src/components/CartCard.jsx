import React, { useEffect } from 'react';
import { useState } from 'react';

const CartCard = ({ basketCard, setBasket, index, basket, setTotal }) => {
  // const [totalPrice, setTotalprice] = useState(0);
  // const getPrice = () => {
  //   if (basket[index].tcgplayer?.prices?.holofoil?.market) {
  //     return basket[index].tcgplayer.prices?.holofoil.market;
  //   } else if (basket[index].tcgplayer?.prices?.unlimitedholofoil?.market) {
  //     return basket[index].tcgplayer.prices.unlimitedholofoil.market;
  //   } else if (basket[index].tcgplayer?.prices?.normal?.market) {
  //     return basket[index].tcgplayer.prices.normal.market;
  //   } else if (basket[index].tcgplayer?.prices?.reverseHolofoil?.market) {
  //     return basket[index].tcgplayer.prices.reverseHolofoil.market;
  //   } else {
  //     return basket[index].number;
  //   }
  // };
  const getTotalPerProduct = () => {
    const totalPricePerProduct =
      basket[index].hp * basket[index].quantity + ' €';

    return totalPricePerProduct;
  };

  // const addToTotalPrice = () => {
  //   let totalPrice = 0;
  //   totalPrice = totalPrice + basket[index].hp;
  //   // console.log('in total price fn', totalPrice);
  //   setTotal(totalPrice);
  // };

  const addBasketClick = () => {
    const newBasket = [...basket];
    newBasket[index].quantity++;
    // addToTotalPrice();
    setBasket(newBasket);
    localStorage.setItem('basket', JSON.stringify(basket));
  };

  const removeBasketClick = () => {
    const newBasket = [...basket];
    newBasket[index].quantity--;
    // console.log('1', newBasket[index]);
    // addToTotalPrice();
    newBasket[index].quantity === 0 && newBasket.splice(index, 1);

    setBasket(newBasket);
    localStorage.setItem('basket', JSON.stringify(basket));
  };

  return (
    <div className="grid grid-cols-5 py-3 border-b-2">
      <div className="flex col-span-2 pl-16">
        <img
          className="w-20 hover:scale-150 hover:cursor-pointer"
          src={basketCard.images?.small || basketCard?.imageUrl}
          alt=""
        />
        <div className="pl-2 flex flex-col justify-around">
          <p className="">{basketCard.name}</p>
          <p> {basketCard.rarity}</p>
          <p>{basketCard.types}</p>
        </div>
      </div>
      <div className="flex justify-center items-center text-center">
        {/* {getPrice() + ' €'} */}
        {basket[index].hp + ' €'}
      </div>

      <div className="flex justify-center pl-3">
        <button
          className="text-white flex justify-center items-center self-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-5  h-10"
          onClick={removeBasketClick}
        >
          -
        </button>
        <div className="w-8 flex justify-center items-center px-5 text-center text-2xl">
          {basketCard.quantity}
        </div>
        <button
          className="text-white flex justify-center items-center self-center bg-gradient-to-r from-purple-500 via-purple-600 to-purple-700 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-purple-300 dark:focus:ring-purple-800 rounded-lg text-sm px-5  h-10"
          onClick={addBasketClick}
        >
          +
        </button>
      </div>
      <div className="text-center flex justify-center items-center">
        {/* {() => {
          getTotalPerProduct();
        }} */}
        {getTotalPerProduct(basket)}
      </div>
    </div>
  );
};

export default CartCard;
