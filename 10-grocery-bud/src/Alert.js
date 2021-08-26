import React, { useEffect } from 'react'

const Alert = ({ type, msg, removeAlert }) => {

  // Any changes to the rendering values in the alert within the 3 seconds will be truncated
  useEffect(() => {
    const timeout = setTimeout(() => {
      // A removeAlert method without arguments will use the default values for parameters
      removeAlert();
    }, 3000);
    return () => { clearTimeout(timeout) }
  }, [msg])

  return (<React.Fragment>
    <p className={`alert alert-${type}`}>{msg}</p>
  </React.Fragment>);
}

export default Alert
