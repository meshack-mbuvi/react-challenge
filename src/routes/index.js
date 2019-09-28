import React from "react";

import { BrowserRouter as Router, Route } from "react-router-dom";

import Login from "./login";
import Tasks from "./tasks";
import Navbar from "../components/navbar";

export class Index extends React.Component {
  render() {
    const authToken = localStorage.getItem("token");
    if (!authToken) {
      return <Login />;
    }
    return (
      <Router>
        <div>
          <Navbar />
          <Route path="/" component={Tasks} />
        </div>
      </Router>
    );
  }
}

export default Index;
