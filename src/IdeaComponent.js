import React from 'react';

const IdeaComponent = () => {
  return (
      <div className="idea-container">
         <h2>Ideen zur Nutzung des Tools und Analyseaufgaben</h2>
        <div className="IdeasContainer">
        <p>Aufgaben für AnfängerInnen</p>
          <ul className="Beginner">
          <li>Mache dies...</li>
          <li>Mache das...</li>
          </ul>
        <p>Aufgaben für Fortgeschrittene</p>  
          <ul className="Advanced">
          <li>Mache dies...</li>
          <li>Mache das...</li>
          </ul> 
        </div>
      </div>
    
  );
};

export default IdeaComponent;
