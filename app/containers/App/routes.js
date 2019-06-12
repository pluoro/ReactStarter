
import React from 'react';
import { Switch, Route } from 'react-router-dom';
import HomePage from 'containers/HomePage/Loadable';
import NotFoundPage from 'containers/NotFoundPage/Loadable';
import {createStructuredSelector} from "reselect";

import {compose} from "redux";
import injectReducer from 'utils/injectReducer';
import injectSaga from 'utils/injectSaga';
import {connect} from "react-redux";
import reducer from "./Redux/reducer";
import saga from "./Redux/saga";
import {stateName} from "./Redux/constants";
import {login} from "../AuthenticationPage/Redux/actions";
import {makeSelectError} from "../AuthenticationPage/Redux/selectors";
import {checkToken} from "./Redux/actions";

class Routes extends React.Component{
  render(){
    return (
      <div>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="" component={NotFoundPage} />
        </Switch>
      </div>
    )
  }
}



export function mapDispatchToProps(dispatch) {
  return {
    onCheckToken: data => {
      dispatch(checkToken(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
  {pure: false}
);
const withReducer = injectReducer({ key: stateName, reducer });
const withSaga = injectSaga({ key: stateName, saga });
export default compose(
  withReducer,
  withSaga,
  withConnect,
)(Routes);

