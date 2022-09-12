import Cart from '../components/Cart';

const Basket = () => {
  return (
    <div className="px-5">
      <div className="grid grid-cols-5 py-5 uppercase text-xl text-center border-b-2 ">
        <h3 className="col-span-2">Product</h3>
        <h3>Price</h3>
        <h3>Quantity</h3>
        <h3>Total</h3>
      </div>
      <Cart />
    </div>
  );
};

export default Basket;
