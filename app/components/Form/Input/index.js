/* eslint-disable */

import React from "react";
import { FormattedMessage, injectIntl } from 'react-intl';

const Input = ({intl, input, meta, message, errorMessage }) => {
  const placeholder = intl.formatMessage(message);
  return (
    <div>
      <input type={input.type} {...input} className="inpt" placeholder={placeholder}/>
      <label htmlFor={input.name}><FormattedMessage {...message}/></label>
      <div className={"input-error"}>
        {meta.error && meta.touched && <FormattedMessage {...errorMessage}/>}
      </div>
    </div>
  )
};
export  default injectIntl(Input);
