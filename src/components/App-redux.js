import React from "react";
import { connect } from "react-redux";


class ReduxApp extends React.Component{
  render() {
    console.log(this.props)
    return (
      <div>
        
      </div>
    )
  }
}



export default connect(
  //mapStateToProps
  state => ({}),
  //mapDispatchToProps
  dispatch => ({})
)(ReduxApp);
