import React, { useState } from 'react';

function Navbar({ handleResultsClick, handleMapClick, handleWikiClick, handleIdeasClick }) {

  return (
    <nav className="Navbar">
      <ul className="NavList">
        <li className="NavItem" onClick={handleResultsClick}>Ergebnisse</li>
        <li className="NavItem" onClick={handleMapClick}>Map</li>
        <li className="NavItem" onClick={handleWikiClick}>Wiki</li>
        <li className="NavItem" onClick={handleIdeasClick}>Analyseideen</li>

      </ul>
    </nav>
  );
}

export default Navbar;


