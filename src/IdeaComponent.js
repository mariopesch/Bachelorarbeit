import React from 'react';

const IdeaComponent = () => {
  
  return (
      <div className="idea-container">
         <h2>Ideen zur Nutzung des Tools und Analyseaufgaben</h2>
        <div className="IdeasContainer">
        <p>Aufgaben mit Beispielen:</p>
        <p>Benutze die Beispiele mithilfe der Buttons oben links und mache dich mit der Benutzung und Funktion der Blöcke vertraut.</p>
          <ul className="Examples">
          <li>Lade das 1. Beispiel und schaue dir die Blöcke an. Was wäre eine mögliche These, die man anhand der vorliegenden Daten untersuchen könnte? Kannst du dir deine These mit den Ergebnissen auch beantworten?</li>
          <li>Lade das 2. Beispiel und stelle deine Daten mithilfe eines Scatterplots dar. Was genau zeigt er an und wie würdest du ihn interpretieren?</li>
          <li>Lade das 3. Beispiel und finde heraus, welche der drei verwendeten Senseboxen in letzter Zeit am schnellsten unterwegs war. Wie kommt das Tool auf das Ergebnis und was müsstest du verändern, um die langsamste Sensebox zu finden?</li>

          </ul>
        <p>Weitere Aufgaben:</p>
          <ul className="Beginner">
          <li>Wo befindet sich Box #29 aktuell? Benutze dafür die Blöcke und suche sie anschließend auf der Karte.</li>
          <li>Hole dir die Sensorwerte einer Box deiner Wahl, für die du dich interessierst. Speichere sie in einer Variable ab und lasse dir eine Zusammenfassung über deine Stichprobe ausgeben. Was sagen die einzelnen Werte aus? Warum ist der Median unterschiedlich vom Mittelwert und kannst du das Streuungsmaß mit den Quantilen bestimmen?</li>
          <li>Gib dir die letzten Feinstaubmessungen (PM10) von SenseBox #6 an. Überschreiten die Messwerte den gesetzlich festgelegten Grenzwert von 50 µg/m³? </li>
          <li>LM trainieren und prediction machen oder krieging???? Oder t-Test???</li>
          </ul>
        </div>
      </div>
    
  );
};

export default IdeaComponent;
