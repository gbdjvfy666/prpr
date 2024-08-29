import React, { Component } from "react";

import "../styles/App.css";
import Header from "./Header";
import Main from "./Main"

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <Main></Main>
      </React.Fragment>
    );
  }
}

export default App