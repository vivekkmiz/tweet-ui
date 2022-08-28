import React from "react";
import "./User.css";
import { NavLink } from "react-router-dom";
import MainHeader from "../Z-UI/MainHeader";

const User = (props) => {
  return (
    <div>
      <MainHeader />
      <div className="abc">
        <h1 className="custom">
          Your Details{" "}
          <NavLink to="/update">
            <button className="buttonz">Update</button>
          </NavLink>{" "}
        </h1>
        <table className="tablez">
          <tr>
            <td>First Name</td>
            <td>{props.userData.fname}</td>
          </tr>
          <tr>
            <td> Last Name</td>
            <td>{props.userData.lname}</td>
          </tr>
          <tr>
            <td>Username: </td>
            <td>{props.userData.username}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{props.userData.email}</td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default User;
