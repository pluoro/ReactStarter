/* eslint-disable */

import React from 'react';
import {compose} from "redux";
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from "react-redux";
import reducer from "./Redux/reducer";
import saga from "./Redux/saga";
import {stateName} from "./Redux/constants";
import {checkToken} from "./Redux/actions";

class AuthProvider extends React.Component {

  componentDidMount() {
    let token = localStorage.getItem("token");
    let {onCheckToken} = this.props;
    onCheckToken(token);
  }

  render() {
    return null;
  }
}

function mapDispatchToProps(dispatch) {
  return {
    onCheckToken: data => {
      dispatch(checkToken(data));
    },
  };
}

const withConnect = connect(
  null,
  mapDispatchToProps,
  null,
  {pure: false}
);
const withReducer = injectReducer({ key: stateName, reducer });
const withSaga = injectSaga({ key: stateName, saga });
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(AuthProvider);
