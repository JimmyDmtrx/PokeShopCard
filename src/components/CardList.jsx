import PokeCard from './PokeCard';
import { useState } from 'react';
import { toast } from 'react-toastify';

const CardList = ({ cards }) => {
  const [basket, setBasket] = useState([]);

  const notify = () =>
    toast.success('Added to cart!', {
      position: 'bottom-left',
      autoClose: 1000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
    });
  const handleBasketClick = (cards) => {
    const newBasket = [...basket];

    let exist = newBasket.find((item) => item.id === cards.id);
    if (exist === undefined) {
      newBasket.push(cards);
      cards.quantity = 1;
      notify();
      // console.log('push in cart', newBasket);
    } else {
      cards.quantity++;
      // console.log('add quantity', newBasket);
    }
    setBasket(newBasket);
    // console.log('basket', basket);
    localStorage.setItem('basket', JSON.stringify(basket));
  };
  // console.log('cards list', cards);
  return cards.length > 0 ? (
    <>
      <h1>Card list</h1>

      <ul className="m-5 overflow-y-scroll grid gap-10 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5">
        {cards &&
          cards.map((card) => {
            // console.log('card mapping ---->', card);
            return (
              <ul>
                <PokeCard card={card} handleClick={handleBasketClick} />
              </ul>
            );
          })}
      </ul>
    </>
  ) : (
    <>
      <p>En chargement</p>
    </>
  );
};

export default CardList;
