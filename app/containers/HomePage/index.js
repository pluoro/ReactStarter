import React from 'react';
import { Helmet } from 'react-helmet';
import Header from "components/Header";
import { FormattedMessage } from "react-intl";
import messages from "./messages";
import Card from "components/Card";
import { FaCheck, FaClock, FaGift, FaSearch, FaThumbsUp, FaTruckMoving } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { MdFeedback } from "react-icons/md";
import { setActiveTab } from '../../providers/AuthProvider/Redux/actions';
import { createStructuredSelector } from 'reselect';
import { makeSelectActiveTab } from 'providers/AuthProvider/Redux/selectors';
import { connect } from 'react-redux';

export class HomePage extends React.PureComponent {
  showRegisterTab = () => {
    const {onSetActiveTab} = this.props;
    onSetActiveTab("sign-up");
  };
  render() {
    return (
      <div className="home-page">
        <Helmet>
          <title>Home</title>
          <meta
            name="description"
            content="A React.js Boilerplate application homepage"
          />
        </Helmet>
        <Header/>
        <div className="home-top-content">
          <div className="outer-page home-background">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <h1 className="home-title"><FormattedMessage {...messages.homeTitle}/></h1>
              <h4 className="home-subtitle"><FormattedMessage {...messages.homeSubtitle}/></h4>
              <button className="home-register-button" onClick={this.showRegisterTab}><NavLink to="/sign-in"><FormattedMessage {...messages.homeRegisterButton}/></NavLink></button>
            </div>
          </div>
        </div>
        <div className="home-cards">
          <div className="middle-page">
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><Card icon={<FaClock size={56} className="fill-yellow"/>} title={messages.card2Title} subtitle={messages.card2Subtitle}/></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><Card icon={<FaGift size={56} className="fill-green"/>} title={messages.card1Title} subtitle={messages.card1Subtitle}/></div>
            <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4"><Card icon={<FaThumbsUp size={56} className="fill-social-blue"/>} title={messages.card3Title} subtitle={messages.card3Subtitle}/></div>
          </div>
        </div>

        <div className="home-why-us">
          <div className="outer-page why-us-background">
            <div className="col-xs-12 col-sm-12 col-md-8 col-lg-8">
              <h1 className="home-title"><FormattedMessage {...messages.whyUs}/></h1>
              <h4 className="home-subtitle"><FaCheck /> <FormattedMessage {...messages.reason1Title}/></h4>
              <h4 className="home-subtitle"><FaCheck/> <FormattedMessage {...messages.reason2Title}/></h4>
              <h4 className="home-subtitle"><FaCheck/> <FormattedMessage {...messages.reason3Title}/></h4>
              <h4 className="home-subtitle"><FaCheck/> <FormattedMessage {...messages.reason4Title}/></h4>
              <button className="home-register-button"><NavLink to="/sign-in"><FormattedMessage {...messages.homeRegisterButton}/></NavLink></button>
            </div>
          </div>
        </div>

        <div className="home-steps">
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center"><Card icon={<FaSearch size={56} className="fill-yellow"/>} title={messages.step1Title} subtitle={messages.step1Subtitle}/></div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center"><Card icon={<FaTruckMoving size={56}  className="fill-green"/>} title={messages.step2Title} subtitle={messages.step2Subtitle}/></div>
          <div className="col-xs-12 col-sm-12 col-md-4 col-lg-4 text-center"><Card icon={<MdFeedback size={56}  className="fill-social-blue" />} title={messages.step3Title} subtitle={messages.step3Subtitle}/></div>
        </div>

        <div className="home-pre-footer  text-center">
          <h1 className={"home-title"}><FormattedMessage {...messages.preFooterMessage}/></h1>
          <button className="home-register-button"><NavLink to="/sign-in"><FormattedMessage {...messages.preFooterButton}/></NavLink></button>
        </div>
      </div>
    );
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
export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
