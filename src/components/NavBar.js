import { Logo, NavItem, ThemeButton, BtnColumn } from "../styles";

import { useDispatch, useSelector } from "react-redux";
import { signOut } from "../store/actions/authActions";
import { useHistory } from "react-router";

const NavBar = ({ currentTheme, toggleTheme }, props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const user = useSelector((state) => state.users.users);
  console.log(user);
  const handleSignOut = () => {
    dispatch(signOut(history));
    // history.push("/");
  };
  return (
    <div className="navbar navbar-expand">
      <div className="navbar-nav ml-auto">
        <NavItem className="nav-item" to="/garbages">
          Garbage
        </NavItem>
        {user ? (
          <>
            <NavItem
              className="nav-item"
              to="/treasures"
              style={{ padding: "0.25en 1en" }}
            >
              Treasure
            </NavItem>
            <h3>Hello {user.username}</h3>
            <ThemeButton className="nav-item" onClick={handleSignOut}>
              Sign Out
            </ThemeButton>
          </>
        ) : (
          <>
            <NavItem
              className="nav-item"
              to="/signup"
              style={{ padding: "0.25en 1en" }}
            >
              <ThemeButton type="button" className="btn btn-info">
                Signup
              </ThemeButton>
            </NavItem>
            <NavItem
              className="nav-item"
              to="/signin"
              style={{ padding: "0.25en 1en" }}
            >
              <ThemeButton type="button" className="btn btn-info">
                Sign in
              </ThemeButton>
            </NavItem>{" "}
          </>
        )}
      </div>
    </div>
  );
};

export default NavBar;
