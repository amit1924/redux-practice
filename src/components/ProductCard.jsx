import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice";

const ProductCard = () => {
  const items = useSelector((state) => state.cartSlice.items);
  const dispatch = useDispatch();

  return (
    <div className="m-2 ">
      {items &&
        items.map((item, index) => (
          <div
            className="card"
            style={{ width: "18rem", marginBottom: "10px" }}
            key={index}
          >
            <img src={item.img} className="card-img-top" alt={item.name} />
            <div className="card-body">
              <h5 className="card-title">{item.title}</h5>
              <p className="card-text">{item.quantity}</p>
              <button
                onClick={() => dispatch(addToCart(item))}
                className="btn btn-primary"
                data-mdb-ripple-init
              >
                Add To Cart
              </button>
            </div>
          </div>
        ))}
    </div>
  );
};

export default ProductCard;
