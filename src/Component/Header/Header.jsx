import "./Header.scss";
import { NavLink } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutAction } from "../../store/actions/action";
function Header(props) {
  const isLogedIn = useSelector((state) => state.login.isLogedIn);
  const dispatch = useDispatch();
  const logoutHandler = () => {
    dispatch(logoutAction);
  };

  return isLogedIn ? (
    <header>
      <div className="Logo">
        <NavLink to="/">LOGO</NavLink>
      </div>
      <div className="NavBar">
        <nav>
          <ul>
            <li>
              <NavLink to="/posts">Posts</NavLink>
            </li>
            <li>
              <NavLink to="/contacts">Contacts</NavLink>
            </li>
            <li>
              <NavLink to="/about">About</NavLink>
            </li>
          </ul>
        </nav>
      </div>
      <div className="Logout">
        <NavLink onClick={logoutHandler} to="/login">
          Logout
        </NavLink>
      </div>
    </header>
  ) : (
    <div />
  );
}

export default Header;
