import React from 'react';
import {connect} from "react-redux";
import {logout} from "providers/AuthProvider/Redux/actions";

class Logout extends React.Component {
  constructor(props){
    super(props);
    props.onLogout();
  }
  render() {
    return null;
  }
}

export function mapDispatchToProps(dispatch) {
  return {
    onLogout: () => {
      dispatch(logout());
    },
  };
}


export default connect(null, mapDispatchToProps)(Logout);
