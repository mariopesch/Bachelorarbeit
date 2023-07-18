import React,  { useState } from 'react';

const IdeaComponent = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };
  
  return (
      <div className="idea-container">
         <h2>Ideen zur Nutzung des Tools und Analyseaufgaben</h2>
        <div className="IdeasContainer">
        <p><strong>Aufgaben mit Beispielen:</strong></p>
        <p>Benutze die Beispiele mithilfe der Buttons oben links und mache dich mit der Benutzung und Funktion der Blöcke vertraut. Klicke auf die Aufgaben, um die einzelen Aufgabenstellungen zu lesen.</p>
          <ul className="Examples">
          <li onClick={() => handleInfoClick('Lade das 1. Beispiel und schaue dir die Blöcke an. Was wäre eine mögliche These, die man anhand der vorliegenden Daten untersuchen könnte? Kannst du dir deine These mit den Ergebnissen auch beantworten?')} className="clickable-item">Aufgabe 1</li>
          <li onClick={() => handleInfoClick('Lade das 2. Beispiel und stelle deine Daten mithilfe eines Scatterplots dar. Was genau zeigt er an und wie würdest du ihn interpretieren?')} className="clickable-item">Aufgabe 2</li>
          <li onClick={() => handleInfoClick('Lade das 3. Beispiel und finde heraus, welche der drei verwendeten Senseboxen in letzter Zeit am schnellsten unterwegs war. Wie kommt das Tool auf das Ergebnis und was müsstest du verändern, um die langsamste Sensebox zu finden?')} className="clickable-item">Aufgabe 3</li>
          </ul>
        <p><strong>Weitere Aufgaben:</strong></p>
        <p>Versuche nun die freien Aufgaben zu lösen. Klicke auf die Aufgabe, um die Aufgabenstellung zu lesen und nutze die Hilfen im Wiki oder in der Blockbeschreibung, falls du nicht weiterkommst.</p>
          <ul className="Beginner">
          <li onClick={() => handleInfoClick('Wo befindet sich Box #29 aktuell? Benutze dafür die Blöcke und suche sie anschließend auf der Karte.')} className="clickable-item">Aufgabe 4</li>
          <li onClick={() => handleInfoClick('Hole dir die Sensorwerte einer Box deiner Wahl, für die du dich interessierst. Speichere sie in einer Variable ab und lasse dir eine Zusammenfassung über deine Stichprobe ausgeben. Was sagen die einzelnen Werte aus? Warum ist der Median unterschiedlich vom Mittelwert und kannst du das Streuungsmaß mit den Quantilen bestimmen?')} className="clickable-item">Aufgabe 5</li>
          <li onClick={() => handleInfoClick('(a) Gib dir die letzten Feinstaubmessungen (PM10) von SenseBox #6 an. Überschreiten die Messwerte den gesetzlich festgelegten Grenzwert von 50 µg/m³? (b) Sieh dir zusätzlich den Boxplot auf der About-Seite an und deute die Darstellung. Nutze die Informationen über Visualisierungsformen im Wiki.')} className="clickable-item">Aufgabe 6</li>
          <li>LM trainieren und prediction machen oder krieging???? Oder t-Test???</li>
          </ul>

          {selectedInfo && (
        <div className="info-popup-container">
          <div className="info-popup">
            <button className="close-button" onClick={() => setSelectedInfo(null)}>Zurück</button>
            <p>{selectedInfo}</p>
          </div>
        </div>
      )}
        </div>
      </div>
    
  );
};

export default IdeaComponent;
