import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { totalQuantity } = useSelector((state) => state.cartSlice);
  return (
    <div>
      <nav className="navbar navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <a className="navbar-brand">Navbar</a>
          <span>
            <Link to="/">All Product</Link>
          </span>
          <button type="button" className="btn btn-danger" data-mdb-ripple-init>
            <Link
              to="/cartpage"
              style={{ color: "white", textDecoration: "none" }}
            >
              Cart({totalQuantity})
            </Link>
          </button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
