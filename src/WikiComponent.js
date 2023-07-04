import React from 'react';

const WikiComponent = () => {
  return (
      <div className="wiki-container">
         <h2>Nützliche Links, Infos, Metadaten (?)...</h2>
        <div className="WikiLinksContainer">
          <ul className="WikiLinks">
          <li>https://opensensemap.org/explore/615f2969c031ff001b118a3e</li>
            {/* Add more links as needed */}
          </ul>
          <p>Wie zitiere ich Daten?</p>
          <p>Was sind Metadaten?</p>
        </div>
      </div>
    
  );
};

export default WikiComponent;
