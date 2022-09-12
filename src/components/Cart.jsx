import React from 'react';
import { useState, useEffect } from 'react';
import CartCard from './CartCard';
import { Link } from 'react-router-dom';

const Cart = () => {
  const [isempty, setIsEmpty] = useState(true);
  const [basket, setBasket] = useState([]);
  const [total, setTotal] = useState();

  useEffect(() => {
    getBasket();
  }, []);

  useEffect(() => {
    const getTotalprice = async () => {
      let totalCounter = 0;
      // console.log('basket in fn total', basket);
      for (let i = 0; i < basket.length; i++) {
        totalCounter += basket[i].hp * basket[i].quantity;
        console.log(basket, basket[i].quantity);
      }
      setTotal(totalCounter);
    };
    getTotalprice();
  }, [basket]);

  const getBasket = () => {
    let basketInStorage = JSON.parse(localStorage.getItem('basket'));
    if (basketInStorage === undefined) {
      // console.log('ok');
    } else {
      setIsEmpty(false);
      // console.log('basket rempli');
      setBasket(basketInStorage);
    }
  };

  // console.log('localstorebasket', basket);

  return isempty ? (
    <>
      <div> your cart is empty</div>
      <Link to="/">
        <div>go shoppping</div>
      </Link>
    </>
  ) : (
    <div className="flex flex-col">
      {basket &&
        basket.map((basketCard, index) => {
          return (
            <CartCard
              key={basketCard.id}
              index={index}
              basketCard={basketCard}
              setBasket={setBasket}
              basket={basket}
              setTotal={setTotal}
            />
          );
        })}
      <div className="flex justify-end pr-10 pt-10">Total price : {total}</div>
    </div>
  );
};

export default Cart;
