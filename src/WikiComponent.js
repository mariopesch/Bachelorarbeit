import React, { useState } from 'react';

const WikiComponent = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div className="wiki-container">
      <h2>Wiki des Blockly4R Tools</h2>
      <p>Hier findest du nützliche Infos, die dir bei der Bearbeitung der Aufgaben helfen. Klicke auf die einzelnen Themen, um mehr zu erfahren </p>
      <p>Weitere Informationen über SenseBoxen und das Futurium Projekt:</p>
      <ul>
        <li>
          <a href="https://futurium.de/de/blog/umweltmesser-auf-dem-fahrrad" target="_blank" rel="noopener noreferrer">
            https://futurium.de/de/blog/umweltmesser-auf-dem-fahrrad
          </a>
        </li>
      </ul>
      <p>Basiswissen Statisitk:</p>
      <ul className="WikiLinks">
        <li onClick={() => handleInfoClick('Eine Hypothese ist eine Annahme, die mithilfe von Daten bestätigt oder widerlegt werden soll. In der Forschung werden eine Nullhypothese H0 und eine Alternativhypothese H1 aufgestellt, wobei die beiden Hypothesen inhaltlich das Gegenteil behaupten.')} className="clickable-item">Info über Hypothese</li>
        <li onClick={() => handleInfoClick('Der Mittelwert ist der Durchschnittswert der vorliegenden Daten.  Er wird berechnnet, indem alle Werte addiert werden und dann durch die Anzahl der Werte geteilt wird.')} className="clickable-item">Info über Mittelwert</li>
        <li onClick={() => handleInfoClick('Der Median ist der Wert, bei dem 50% der Proben einen höheren Wert haben und 50% einen niedrigeren Wert haben. Bei einer ungeraden Anzahl von Proben kann man zur Bestimmung die Werte der Größe nach sortieren, der Wert in der Mitte ist dann der Median. ')} className="clickable-item">Info über Median</li>
        <li onClick={() => handleInfoClick('Die Standardabweichung (sd) ist ein Maß für die Streuung um den Mittelwert. Er gibt also Auskunft darüber, wie die Werte im Durchschnitt vom Mittwelwert abweichen.')} className="clickable-item">Info über sd</li>
        <li onClick={() => handleInfoClick('Quantile spalten die Daten in mehrere gleich große Teile, üblich ist die Wahl von Vierteln (Quartile). Die wichtigsten Quantile sind dabei das 1. und 3., da sie die Hälfte aller Daten betrachten - die niedrigsten 25% bis 75%. Man betrachtet also die 50% der Daten, die dem 2. Quantil - dem Median (s.o.) - am nächsten sind. Die Differenz des 3. und 1. Quantils wird als Interquartilsabstand bezeichnet und ist, ähnlich wie die Standardabweichung, ein Streuungsmaß.')} className="clickable-item">Info über Quantile</li>
        <li onClick={() => handleInfoClick('Die Regression ist eine statistische Methode, um die Beziehung zwischen einer abhängigen Variable und einer oder mehreren unabhängigen Variablen zu beschreiben. Im Blockly4R Tool wird nur eine unabhängige Variable verwendet (lineare Regression). Sie ermöglicht es, den Einfluss von Variablen zu untersuchen oder eine Vorhersage über eine Variable zu machen. Die Variable auf die geschlossen werden soll ist dabei die abhängige und diejenigen, die zur Vorhersage verwendet werden, sind die unabhängigen Variablen. ')} className="clickable-item">Info über Regression</li>
        <li onClick={() => handleInfoClick('Der t-Test ist der häufigste Hypothesentest in der Statistik. Dabei kann zwischen einem Einstichproben-t-Test und einem Zweistichproben-t-Test unterschieden werden. Der Einstichproben-t-Test beantwortet die Frage, ob es einen Unterschied zwischen einer Stichprobe und einer Grundgesamtheit gibt. Der Zweistichproben-t-Test hingegen untersucht den unterschied zwischen zwei Stichproben oder den Unterschied einer Stichprobe zu zwei unterschiedlichen Zeitpunkten.  Bei einem einseitigen (gerichteten) Einstichproben-t-Test wird die Frage gestellt, ob der Mittelwert der Stichprobe signifikant kleiner (bzw. größer) als der der Grundgesamtheit ist, man gibt dem Zusammenhang also eine Richtung. Der zweiseitige (ungerichtete) untersucht lediglich, ob es einen signifikanten Unterschied zwischen den Mittelwerten gibt, ohne eine Richtung anzugeben. Die Ergebnis eines t-Tests  ist ein t-Wert (Differenz geteilt durch Streuung der Stichprobe). Je größer der t-Wert, desto mehr spricht es gegen H0.')} className="clickable-item">Info über t-Tests</li>
        <li onClick={() => handleInfoClick('Bei der Interpretation von statistischen Ergebnissen ist es wichtig, auf den Unterschied zwischen Korrelation und Kausalität zu achten. Eine Korrelation gibt nur an, ob es einen Zusammenhang zwischen Merkmalen gibt. Eine Kausalität dagegen ist eine echte Ursache-Wirkung-Beziehung (B wird von A verursacht). Das bedeutet nicht, dass nur weil A hohe Werte hat und einen Anstieg von B verursacht, hohe Werte von B auch automatisch einen Ansteig von A verursacht.')} className="clickable-item">Korrelation vs. Kausalität</li>
        <li onClick={() => handleInfoClick('Korrelation ist ein statistisches Verfahren, um den Zusammenhang zwischen Variablen zu untersuchen. Wie stark der Zusammenhang ist, beschreibt dabei der Korrelationskoeefizient, der einen Wert von -1 bis 1 annhemen kann. Das Verfahren wird genutzt, um einen vermuteten Zusammenhang zwischen Merkmalen zu bestätigen, um später beispielsweise eine lineare Regression (s.o.) durchführen zu können. Gibt es in einer Stichprobe eine Korrelation, muss geprüft werden, ob es sich um einen Zufall ahndelt, oder ob auch in der Grundgesamtheit eine Korrelation besteht. Um die Signifikanz des Korrelationskoeffizienten zu bestimmen, kann ein t-Test (s.o.) verwendet werden.')} className="clickable-item">Korrelation als statistisches Verfahren</li>
        <li onClick={() => handleInfoClick('Mithilfe von Diagrammen werden Daten graphisch dargestellt. Dabei gibt es verschiedene Visualisierungsformen wie Balken-, Säulen- und Tortendiagramme, Histogramme, Boxplots und Scatterplots. Balken-, Säulen- und Tortendiagramme stellen absolute oder relative Häufigkeiten dar: Je höher ein Balken oder größer ein Tortenstück ist, desto höher der Wert der Variable. Während diese Diagramme die Daten in diskreter Form (einzelne, getrennt voneinander existierende, meist ganzzahlige Werte, wie die Anzahl der Bücher in einem Regal) darstellen, beschreibt ein Histogramm Daten kontinuierlich (beliebiger Wert in bestimmten Bereich eines Spektrums, wie Zeit: zwischen jedem gemessenen Wert können unendlich viele weitere Werte existieren). Ein Histogramm veranschaulicht die Häufigkeitsverteilung von Daten in Klassen. Ein Scatterplot hingegen visualisiert den Zusammenhang zwischen Daten. Er stellt ein Wertepaar für zwei Variablen dar. Wenn es einen hohen Zusammenhang zwischen diesen zwei Variablen gibt, sind die Punkte im Plot auf eine bestimmte Weise angeordnet. Ein positiver Zusammenhang (hohe Werte Variable A + hohe Werte Variable B) stellt eine steigende Gerade dar und ein negativer Zusammenhang (hohe Werte Variable A + niedrige Werte Variable B) eine fallende Gerade. Besteht kein Zusammenhang zwischen den Variablen, ist kein Muster der Punkte zu erkennen und sie wirken zufällig im Plot verteilt. Ein Boxplot kann man als eine visuelle Zusammenfassung von Daten beschreiben. Er stellt neben der Verteilung der Daten zusätzlich die Quantile und den Median (Box mit Linie in Box) und den minimalen bzw. maximalen Wert (Antenne/Whiskers) dar. Ausreißer werden mithilfe des Kreises beschrieben (s. About)).')} className="clickable-item"></li>
        {/* Add more links as needed */}
      </ul>
      <p>Noch mehr Informationen kannst du hier nachlesen: <a href="https://datatab.de/tutorial" target="_blank" rel="noopener noreferrer">https://datatab.de/tutorial</a></p>

      <p>Was sind Metadaten?</p>
      <ul>
        <li onClick={() => handleInfoClick('Metadaten sind...')} className="clickable-item">Metadaten sind...</li>
        {/* Add more links as needed */}
      </ul>
      <p>Wie werden Daten korrekt zitiert?</p>
      <ul>
        <li onClick={() => handleInfoClick('Daten werden korrekt zitiert, indem...')} className="clickable-item">Daten werden korrekt zitiert, indem...</li>
        {/* Add more links as needed */}
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
  );
};

export default WikiComponent;
