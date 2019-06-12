import { NavLink } from "react-router-dom";
import React from "react";
import LocaleToggle from "containers/LocaleToggle";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import { setActiveTab } from '../../providers/AuthProvider/Redux/actions';
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { makeSelectActiveTab } from '../../providers/AuthProvider/Redux/selectors';

class Header extends React.Component {

  showLoginTab = () => {
    const {onSetActiveTab} = this.props;
    onSetActiveTab("sign-in");
  };

  render (){
    return (
      <header className="header">
        <div className="outer-page">
          <div className="col-md-4">
            <NavLink to="/">
              <div className="logo"/>
            </NavLink>
          </div>
          <div className="col-md-4"/>
          <div className="col-md-4">
            <nav>
              <ul>
                <li><NavLink onClick={this.showLoginTab} to="/sign-in"><FormattedMessage {...messages.signIn}/></NavLink></li>
                <li><LocaleToggle/></li>
              </ul>
            </nav>
          </div>
        </div>
      </header>
    )
  }
}


export function mapDispatchToProps(dispatch) {
  return {
    onSetActiveTab: data => {
      dispatch(setActiveTab(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  activeTab: makeSelectActiveTab()
});
export default connect(mapStateToProps, mapDispatchToProps)(Header);
