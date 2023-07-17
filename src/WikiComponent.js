import React from 'react';

const WikiComponent = () => {
  return (
      <div className="wiki-container">
         <h2>Wiki des Blockly4R Tools</h2>
          <h4>Hier findest du nützliche Infos, die dir bei der Bearbeitung der Aufgaben helfen</h4>
          <p>Weitere Informationen über SenseBoxen und das Futurium Projekt:</p>
          <ul>
            <li>https://futurium.de/de/blog/umweltmesser-auf-dem-fahrrad</li>
          </ul>
          <p>Basiswissen Statisitk:</p>
          <ul className="WikiLinks">
          <li>Info über Hypothese</li>
          <li>Info über Mittelwert</li>
          <li>Info über Median</li>
          <li>Info über sd</li>
          <li>Info über Quantile</li>
          <li>Info über Regression</li>
          <li>Info über t-Tests</li>
          <li>Info über Korrelation? Vielleicht noch Block entfernen</li>
          <li>Info über Visualisierungsformen</li>
          <li>... Graphen, Plots, Histogramme...</li>
          <li>[Links zu Statistikseite]</li>
            {/* Add more links as needed */}
          </ul>
          <p>Was sind Metadaten?</p>
          <ul>
          <li>[Metadaten sind...]</li>
            {/* Add more links as needed */}
          </ul>
          <p>Wie werden Daten korrekt zitiert?</p>
          <ul>
          <li>[Daten werden korrekt zitiert, indem...]</li>
            {/* Add more links as needed */}
          </ul>
          <p>Noch mehr Informationen kannst du hier nachlesen: https://datatab.de/tutorial</p>
        </div>
    
    
  );
};

export default WikiComponent;
