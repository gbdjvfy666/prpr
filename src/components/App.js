import React, { Component } from "react";

import "../styles/App.css";
import Header from "./Header";

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header></Header>
        <main>
          <div>
            <h1>Hello world</h1>
          </div>
        </main>
      </React.Fragment>
    );
  }
}

export default App