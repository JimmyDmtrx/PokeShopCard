import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const PokeCard = ({ card, handleClick }) => {
  return (
    <li className={`p-3 bg-${card.types}`}>
      <div className="pb-3">
        <h1 className="text-center mb-2 text-xl">{card.name}</h1>
        <div className="flex justify-between">
          <p>{card.types}</p>
          <p>{card.rarity}</p>
          <p>{card.hp} €</p>
        </div>
      </div>

      <img
        className="h-auto w-full"
        src={card.imageUrl || card.images.small}
        alt={`${card.name} pokemon`}
      />
      <div
        onClick={() => handleClick(card)}
        className="bg-blue-400 text-white border rounded shadow px-2 ml-2 h-full text-center mt-2 cursor-pointer hover:scale-105"
      >
        Add to basket
      </div>
      <ToastContainer
        position="bottom-left"
        autoClose={1000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover={false}
      />
    </li>
  );
};

export default PokeCard;
