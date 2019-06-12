import React from 'react';
import { NavLink, Route, Switch } from "react-router-dom";
import { MdDashboard, MdHelp } from "react-icons/md";
import { FaBell, FaCog, FaGift, FaMoneyCheckAlt, FaPowerOff, FaThumbsUp, FaVial } from "react-icons/fa";
import {  GiHamburgerMenu } from "react-icons/gi";
import HomePage from "containers/HomePage/Loadable";
import DashboardPage from "containers/DashboardPage/Loadable";
import LocaleToggle  from "../LocaleToggle";
import messages from "./messages";
import { FormattedMessage } from "react-intl";
import logo from "images/logo-sample.png";
import { createStructuredSelector } from 'reselect';
import { connect } from 'react-redux';
import { toggleDrawer } from 'containers/AuthenticatedPage/Redux/actions';
import { makeSelectDrawerState } from 'containers/AuthenticatedPage/Redux/selectors';
import { compose } from 'redux';
import injectReducer from 'utils/injectReducer';
import {stateName} from "containers/AuthenticatedPage/Redux/constants";
import reducer from "containers/AuthenticatedPage/Redux/reducer";

export class AuthenticatedPage extends React.PureComponent {

  handleDrawer = () => {
    const {drawerState, onToggleDrawer} = this.props;
    console.log("hadinglin", {drawerState, onToggleDrawer})
    onToggleDrawer(drawerState === 1 ? 2 : 1);
  };

  render(){
    const {drawerState} = this.props;
    return (
      <div className="drawer-layout">
        <aside className={`${drawerState === 1 ? 'drawer-min' : 'drawer-open'}`}>
          <section className="user-info">
            <img src="https://react-material-dashboard.devias.io/images/avatars/avatar_1.png" alt="User Thumbnail"/>
            <p className="user-name">Roman Kuperov</p>
            <p className="user-role">Administrator</p>
          </section>
          <div className="divider"/>
          <ul>
            <li><NavLink activeClassName="active-link" to={"/dashboard"}><i><MdDashboard size={20}/></i><span><FormattedMessage {...messages.dashboard}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/reviews"}><i><FaThumbsUp size={20}/></i><span><FormattedMessage {...messages.reviews}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/products"}><i><FaGift size={20}/></i><span><FormattedMessage {...messages.products}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/tests"}><i><FaVial size={20}/></i><span><FormattedMessage {...messages.myTests}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/payments"}><i><FaMoneyCheckAlt size={20}/></i><span><FormattedMessage {...messages.payments}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/settings"}><i><FaCog size={20}/></i><span><FormattedMessage {...messages.settings}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/help"}><i><MdHelp size={20}/></i><span><FormattedMessage {...messages.help}/></span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/sign-out"}><i><FaPowerOff size={20}/></i><span><FormattedMessage {...messages.signOut}/></span></NavLink></li>
          </ul>
        </aside>
        <main className={`${drawerState === 1 ? 'main-min' : 'main-open'}`}>
          <nav className="navbar">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <i className="material-icons" onClick={this.handleDrawer}><GiHamburgerMenu size={20}/></i>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <h3><img src={logo} alt="Logo"/></h3>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-right">
              <i className="material-icons">
                <FaBell size={20}/>
                <LocaleToggle />
              </i>
            </div>
          </nav>
          <div className="clear" />
          <div>
            <Switch>
              <Route path="/dashboard" component={DashboardPage} />
              <Route path="/reviews" component={HomePage} />
              <Route path="/products" component={HomePage} />
              <Route path="/tests" component={HomePage} />
              <Route path="/payments" component={HomePage} />
              <Route path="/settings" component={HomePage} />
              <Route path="/help" component={HomePage} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}
export function mapDispatchToProps(dispatch) {
  return {
    onToggleDrawer: data => {
      console.log("dadada", data)
      dispatch(toggleDrawer(data));
    },
  };
}

const mapStateToProps = createStructuredSelector({
  drawerState: makeSelectDrawerState()
});

const withConnect = connect(
  mapStateToProps,
  mapDispatchToProps,
);
const withReducer = injectReducer({ key: stateName, reducer });
export default compose(
  withReducer,
  withConnect,
)(AuthenticatedPage);
