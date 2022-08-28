import { NavLink } from "react-router-dom";
import classes from "./MainHeader.css";

const MainHeader = () => {
  return (
    <header activeclassName={classes.header}>
      <nav>
        <ul>
          <li>
            <NavLink activeClassName={classes.active} to="/myProfile">
              My Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/users">
              Users
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/tweets">
              Tweets
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/tweet">
              New Tweet
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/">
              Log Out !
            </NavLink>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default MainHeader;
