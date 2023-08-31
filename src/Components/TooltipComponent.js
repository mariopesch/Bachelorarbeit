import React from 'react';

// Komponente zum Rendern des Tooltips in ein eigenes Fenster (noch nicht in Benutzung)

const TooltipComponent = ({ tooltip }) => {
  return (
    <div className="tooltip-window">
      <p>{tooltip}</p>
    </div>
  );
};

export default TooltipComponent;
