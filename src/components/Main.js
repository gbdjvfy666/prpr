import React, { Component } from "react";
import "../styles/Main.css"
import Coutries from "./Countries";
import Panel from "./Panel";

class Main extends Component {
  render() {
    return(
      <main>
        <Coutries />
        <Panel />
      </main>
      
    )
  }
}


export default Main;