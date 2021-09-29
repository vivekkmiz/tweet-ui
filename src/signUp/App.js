import React, { useState } from "react";
import { Route } from "react-router";
import SignUp from "../signUp/SignUp";
import NewPolicy from "../components/PolicyService/NewPolicys/NewPolicy";
import Policys from "../components/PolicyService/Policys/Policys";
import User from "../components/ProfileService/User";
import UserForm from "../components/ProfileService/UserForm";
//import "./app.css"


const DUMMY_Policys = [];
const DUMMY_User = {
  name: "Vivek Mishra" ,
  username: "",
  password: "",
  address: "",
  citizenship: "",
  state: "",
  country: "",
  email: "",
  gender: "",
  maritialStatus: "",
  contact: "",
  date: new Date(),
  idType: "",
  idNumber: "",
};

const App = () => {
  const [userData, setUpdate] = useState(DUMMY_User);
  const [PolicyList, setPolicyList] = useState(DUMMY_Policys);
  console.log("i WAS HERE 2");
  console.log(userData);

  console.log(userData);
  const addPolicyHandler = (policy) => {
    setPolicyList((prevPolicys) => {
      return [policy, ...prevPolicys];
    });
  };

  const updateHandler = (updateData) => {
    const userData = {
      ...updateData,
    };
    console.log(userData);
    console.log("update success full");
    setUpdate(userData);
  };

  return (
    <div className = "app">
      <main>
        
        <Route exact path="/">
          <SignUp data={userData} onUpdate={updateHandler} />
        </Route>
        <Route exact path="/myProfile">
          <User userData={userData} />
        </Route>
        <Route path="/update">
          <UserForm data={userData} onUpdate={updateHandler} />
        </Route>
        <Route path="/buyPolicies">
          <NewPolicy onAddPolicy={addPolicyHandler} />
        </Route>
        <Route  path="/myPolicies">
          <Policys items={PolicyList} />
        </Route>
      </main>
    </div>
  );
};

export default App;
