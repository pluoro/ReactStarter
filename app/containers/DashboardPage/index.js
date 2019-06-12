import React from 'react';
import { Helmet } from 'react-helmet';
import messages from "./messages";
import { FormattedMessage } from "react-intl";

export class DashboardPage extends React.PureComponent {
  render() {
    return (
      <div>
        <Helmet>
          <title>Dashboard</title>
        </Helmet>
        <FormattedMessage {...messages.hello}/>
      </div>
    );
  }
}
export default DashboardPage;
