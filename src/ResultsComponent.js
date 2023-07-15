import React from 'react';

const ResultsComponent = () => {
  return (
      <div className="results-container">
         <h2>Das Blockly4R Tool</h2>
        <div className="ResultsContainer">
          <p>Blockly4R ist eine blockbasierte Programmierumgebung, die den Einstieg in den Umgang mit Daten erleichtern soll.</p>
          <p>Ohne Wissen über komplizierten Code, kann mit Daten gearbeitet und erste Erfahrungen mit statistischer Datenanalyse gemacht werden.</p>
          <p>Die Daten stammen von mobilen SenseBoxen auf Fahrrädern, die das Blockly4R in Echtzeit anfragt. SenseBoxen sind kleine Umweltmessstationen, die verschiedenste Werte messen.</p>
          <p>Die Benutzung ist ganz einfach:</p>
          <ul className="Results">
          <li>Wähle den passenden Block aus den Blockkategorien auf der linken Seite</li>
          <li>Füge die Blöcke wie Puzzleteile zusammen. Sie beinhalten den Code, der die Daten verarbeitet</li>
          <li>Du kannst dir den Code in der Programmiersprache R über "R Code anzeigen" ansehen</li>
          <li>Speichere den von dir erzeugten Code in der Zwischenablage mithilfe von "R Code in Zwischenablage"</li>
          <li>Füge den Code in RStudio ein und führe ihn aus.</li>
          <li>Dort erhälst du die Analyseergebnisse und -visualisierungen deiner Blöcke, die zum Beispiel so aussehen können: </li>
            {/* Add more links as needed */}
          </ul>
          <h3>Screenshot von Plot o.Ä.</h3>
          <p>Wenn du Hilfe bei der Bearbeitung der Aufgaben benötigst, klicke auf die einzelnen Blöcke oder schaue im Wiki vorbei</p>
        <p>Informiere dich im Wiki auch über Metadaten und die korrekte Zitierweise von Daten!</p>
        </div>
      </div>
    
  );
};

export default ResultsComponent;