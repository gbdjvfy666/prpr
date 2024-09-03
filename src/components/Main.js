import React, { Component } from "react";
import "../styles/Main.css"
import Coutries from "./Countries";
import Countlike from "./Count";

class Main extends Component {
  render() {
    return(
      <main>
        <Coutries />
        <Countlike />
      </main>
      
    )
  }
}


export default Main;