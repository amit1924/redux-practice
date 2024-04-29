import { useSelector, useDispatch } from "react-redux";
import {
  increaseQuantity,
  decreaseQuantity,
  removeFromCart,
} from "../features/cartSlice.jsx"; // Up date the path to your cartSlice file

const CartPage = () => {
  const { cart, totalQuantity, totalPrice } = useSelector(
    (state) => state.cartSlice
  );
  const dispatch = useDispatch();

  // Function to handle increasing quantity
  const handleIncreaseQuantity = (id) => {
    dispatch(increaseQuantity({ id }));
  };

  // Function to handle decreasing quantity
  const handleDecreaseQuantity = (id) => {
    dispatch(decreaseQuantity({ id }));
  };

  // Function to handle removing item from cart
  const handleRemoveFromCart = (id) => {
    dispatch(removeFromCart({ id }));
  };

  return (
    <div>
      <section className="h-100 gradient-custom">
        <div className="container py-5">
          <div className="row d-flex justify-content-center my-4">
            <div className="col-md-8">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Cart - {cart.length} items</h5>
                </div>
                <div className="card-body">
                  {/* Map over each item in the cart */}
                  {cart.map((item, index) => (
                    <div key={index}>
                      {/* Render each item here */}
                      <img src={item.img} alt={item.img} width={250} />
                      <p>Brand: {item.title}</p>
                      <p>Price: {item.price}</p>
                      {/* Quantity controls */}
                      <div>
                        <button
                          type="button"
                          onClick={() => handleDecreaseQuantity(item.id)}
                        >
                          -
                        </button>
                        <span>{item.quantity}</span>
                        <button
                          type="button"
                          onClick={() => handleIncreaseQuantity(item.id)}
                        >
                          +
                        </button>
                      </div>
                      {/* Remove item button */}
                      <button
                        type="button"
                        onClick={() => handleRemoveFromCart(item.id)}
                      >
                        Remove
                      </button>
                      {/* End of quantity controls */}
                    </div>
                  ))}
                  {/* End of mapping over cart items */}
                </div>
              </div>
            </div>
            <div className="col-md-4">
              <div className="card mb-4">
                <div className="card-header py-3">
                  <h5 className="mb-0">Summary</h5>
                </div>
                <div className="card-body">
                  <ul className="list-group list-group-flush">
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>{totalQuantity}</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p className="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>{totalPrice}</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    data-mdb-button-init
                    data-mdb-ripple-init
                    className="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CartPage;
