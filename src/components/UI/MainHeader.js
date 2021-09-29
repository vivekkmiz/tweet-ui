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
            <NavLink activeClassName={classes.active} to="/update">
              Update Profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/myPolicies">
              MyPolicies
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName={classes.active} to="/buyPolicies">
              Buy Policies
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
