import MainHeader from "../Z-UI/MainHeader";
import User from "./User";
import "./UsersList.css";

const UsersList = (props) => {

    return (
        <div classname = "users">
          {props.usersList.map((userData) => (
            <User userData = {userData}
            />
          ))}

      </div>
    );
  };

  export default UsersList;