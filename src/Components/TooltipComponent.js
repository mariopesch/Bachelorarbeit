import React from 'react';

const TooltipComponent = ({ tooltip }) => {
  return (
    <div className="tooltip-window">
      <p>{tooltip}</p>
    </div>
  );
};

export default TooltipComponent;
