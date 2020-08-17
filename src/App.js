import React from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";

import Navbar from "./Components/Navbar";
import CreateUserForm from "./Components/CreateUserForm";
import CreateMessage from "./Components/CreateMessage";
import Login from "./Components/Login";
import Homepage from "./Components/Homepage";

function App() {
  return (
    <Router>
    <Navbar/>
    <div className="container">
      <Route path="/" exact component={Homepage}/>
      <Route path="/register" exact component={CreateUserForm} />
      <Route path="/new-msg" exact component={CreateMessage}/>
      <Route path="/login" exact component={Login}/>

    </div>
    </Router>
  );
}

export default App;
