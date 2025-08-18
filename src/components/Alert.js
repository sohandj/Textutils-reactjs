import React from 'react';

function Alert(props) {
  if (!props.alert) return null;

  return (
    <div className={`alert alert-${props.alert.type}`} role="alert">
      {props.alert.msg}
    </div>
  );
}

export default Alert;
