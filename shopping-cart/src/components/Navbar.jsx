import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

function Navbar() {
    const { cart } = useCart();
  return (
    <div>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <Link className="navbar-brand fw-bold" to="/">
            🛒 MyShop
          </Link>
          <div>
            <Link to="/" className="nav-link d-inline me-3 text-white">Home</Link>
            <Link to="/cart" className="nav-link d-inline text-white"> Cart ({ cart.length })</Link>
          </div>
        </div>
      </nav>
    </div>
  );
}

export default Navbar;
