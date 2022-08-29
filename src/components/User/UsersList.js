import { useEffect, useState } from "react";
import MainHeader from "../Z-UI/MainHeader";
import User from "./User";
import "./UsersList.css";

const UsersList = (props) => {
  const [usersList, setUsersList] = useState([]);

  useEffect(async () => {
    const response = await fetch('/users/all');
    const body = await response.json();
    console.log(body);
    setUsersList(body);
  },[]);

  return (
    
      <div classname="users">
        {usersList.map((userData) => (
          <User userData={userData}
          />
            
          ))}

    </div>
  );
};

export default UsersList;