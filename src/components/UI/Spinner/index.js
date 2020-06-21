import React from 'react';

import './index.css';

const Spinner = () => {
  return (
    <div className="lds-css">
      <div className="lds-double-ring">
        <div />
        <div />
      </div>
    </div>
  );
};

export default Spinner;
