import React from "react";
import { MdDashboard, MdLocationOn, MdPeople } from "react-icons/md";
import { FaBell, FaChartBar, FaGift } from "react-icons/fa";
import { GiChart, GiHamburgerMenu } from "react-icons/gi";
import { NavLink, Route, Switch } from "react-router-dom";
import HomePage from "containers/HomePage";

class DrawerLayout extends React.Component{
  state = {
    drawerPos:2
  };
  handleDrawer = () => {
    const {drawerPos} = this.state;
    this.setState({
      ...this.state,
      drawerPos: drawerPos === 1 ? 2 : 1
    });
  };
  render(){
    const {drawerPos} = this.state;
    return (
      <div className="drawer-layout">
        <aside className={`${drawerPos === 1 ? 'drawer-min' : 'drawer-open'}`}>
          <section className="user-info">
            <img src="https://react-material-dashboard.devias.io/images/avatars/avatar_1.png" alt="User Thumbnail"/>
            <p className="user-name">Roman Kuperov</p>
            <p className="user-role">Administrator</p>
          </section>
          <div className="divider"/>
          <ul>
            <li><NavLink activeClassName="active-link" to={"/dashboard"}><i><MdDashboard size={20}/></i><span>Dashboard</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/products"}><i><FaGift size={20}/></i><span>Products</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/tests"}><i><MdLocationOn size={20}/></i><span>Local Tests</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/jobs"}><i><GiChart size={20}/></i><span>Jobs</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/status"}><i><GiChart size={20}/></i><span>My Status</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/ranking"}><i><GiChart size={20}/></i><span>Ranking</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/settings"}><i><GiChart size={20}/></i><span>Settings</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/help"}><i><GiChart size={20}/></i><span>Help</span></NavLink></li>
            <li><NavLink activeClassName="active-link" to={"/sign-off"}><i><GiChart size={20}/></i><span>Sign off</span></NavLink></li>
          </ul>
        </aside>
        <main className={`${drawerPos === 1 ? 'main-min' : 'main-open'}`}>
          <nav className="navbar">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4">
              <i className="material-icons" onClick={this.handleDrawer}><GiHamburgerMenu size={20}/></i>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center">
              <h3><img src="https://testerjob.net/wp-content/themes/gsm/img/final_logo_-_Horizontal.png" alt="Logo"/></h3>
            </div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-right">
              <i className="material-icons">
                <FaBell size={20}/>
              </i>
            </div>
          </nav>
          <div className="clear" />
          <div>
            <Switch>
              <Route path="/products" component={HomePage} />
              <Route path="/tests" component={HomePage} />
              <Route path="/jobs" component={HomePage} />
              <Route path="/status" component={HomePage} />
              <Route path="/ranking" component={HomePage} />
              <Route path="/settings" component={HomePage} />
              <Route path="/help" component={HomePage} />
            </Switch>
          </div>
        </main>
      </div>
    );
  }
}

export default DrawerLayout;
