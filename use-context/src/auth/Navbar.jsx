import { useContext } from "react";
import { AuthContext } from "./AuthContext";

const Navbar = () => {
    const { isLoggedIn, login, logout } = useContext(AuthContext)
    console.log(isLoggedIn);
    return (
      <nav>
        {isLoggedIn ? (
          <button onClick={logout}>Logout</button>
        ) : (
          <button onClick={login}>Login</button>
        )}
      </nav>
    );
}

export default Navbar;