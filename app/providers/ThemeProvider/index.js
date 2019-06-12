import React from 'react';
import {connect} from "react-redux";
import {stateName} from "./Redux/constants";
import injectReducer from 'utils/injectReducer';
import reducer from "./Redux/reducer";
import {compose} from "redux";

class ThemeProvider extends React.Component {
  render() {
    return null;
  }
}
const withReducer = injectReducer({ key: stateName, reducer });
export default compose(
  withReducer,
)(ThemeProvider);
