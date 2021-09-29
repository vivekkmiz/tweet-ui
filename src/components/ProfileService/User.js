import React from "react";
import "./User.css";
import PolicyDate from "../PolicyService/Policys/PolicyDate";
import { NavLink } from "react-router-dom";
import MainHeader from "../UI/MainHeader";

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
            <td>Name</td>
            <td>{props.userData.name}</td>
          </tr>
          <tr>
            <td>Username: </td>
            <td>{props.userData.username}</td>
          </tr>
          <tr>
            <td>Address: </td>
            <td>{props.userData.address}</td>
          </tr>
          <tr>
            <td>Cititzenship: </td>
            <td>{props.userData.citizenship}</td>
          </tr>
          <tr>
            <td>State: </td>
            <td>{props.userData.state}</td>
          </tr>
          <tr>
            <td>Country: </td>
            <td>{props.userData.username}</td>
          </tr>
          <tr>
            <td>Email: </td>
            <td>{props.userData.email}</td>
          </tr>
          <tr>
            <td>Contact: </td>
            <td>{props.userData.contact}</td>
          </tr>
          <tr>
            <td>Gender: </td>
            <td>{props.userData.gender}</td>
          </tr>
          <tr>
            <td>MaritialStatus: </td>
            <td>{props.userData.maritialStatus}</td>
          </tr>
          <tr>
            <td>ID Type: </td>
            <td>{props.userData.idType}</td>
          </tr>
          <tr>
            <td>ID Number: </td>
            <td>{props.userData.idNumber}</td>
          </tr>
          <tr>
            <td>Date of Birth :</td>
            <td>
              <PolicyDate date={props.userData.date} />
            </td>
          </tr>
        </table>
      </div>
    </div>
  );
};

export default User;
