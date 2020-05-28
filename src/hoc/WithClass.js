import React form 'react';

const withClass = props => (
  <div className={props.classes}>
    {props.children}
  </div>
)

export default withClass;
