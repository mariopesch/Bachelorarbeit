import React, { useState } from 'react';

const WikiComponent = () => {
  const [selectedInfo, setSelectedInfo] = useState(null);

  const handleInfoClick = (info) => {
    setSelectedInfo(info);
  };

  return (
    <div className="wiki-container">
      <h2>Wiki des Blockly4R Tools</h2>
      <p>Hier findest du nützliche Infos, die dir bei der Bearbeitung der Aufgaben helfen. Klicke auf die einzelnen Themen, um mehr zu erfahren. </p>
      <p>Weitere Informationen über SenseBoxen und das Futurium Projekt:</p>
      <ul>
        <li>
          <a href="https://futurium.de/de/blog/umweltmesser-auf-dem-fahrrad" target="_blank" rel="noopener noreferrer">
            https://futurium.de/de/blog/umweltmesser-auf-dem-fahrrad
          </a>
        </li>
      </ul>
      <p><strong>Basiswissen Statisitk:</strong></p>
      <ul className="WikiLinks">
        <li onClick={() => handleInfoClick('Eine <strong>Hypothese</strong> ist eine Annahme, die mithilfe von Daten bestätigt oder widerlegt werden soll. In der Forschung werden eine <strong>Nullhypothese H0</strong> und eine <strong>Alternativhypothese H1</strong> aufgestellt, wobei die beiden Hypothesen inhaltlich das Gegenteil behaupten.')} className="clickable-item">Infos über Hypothesen</li>
        <li onClick={() => handleInfoClick('Der <strong>Mittelwert</strong> ist der Durchschnittswert der vorliegenden Daten.  Er wird berechnnet, indem alle Werte addiert werden und dann durch die Anzahl der Werte geteilt wird.')} className="clickable-item">Infos über Mittelwert</li>
        <li onClick={() => handleInfoClick('Der <strong>Median</strong> ist der Wert, bei dem 50% der Proben einen höheren Wert haben und 50% einen niedrigeren Wert haben. Bei einer ungeraden Anzahl von Proben kann man zur Bestimmung die Werte der Größe nach sortieren, der Wert in der Mitte ist dann der <strong>Median</strong>. ')} className="clickable-item">Infos über Median</li>
        <li onClick={() => handleInfoClick('Die <strong>Standardabweichung (sd)</strong> ist ein Maß für die Streuung um den Mittelwert. Er gibt Auskunft darüber, wie die Werte im Durchschnitt vom Mittwelwert abweichen.')} className="clickable-item">Infos über Standardabweichung</li>
        <li onClick={() => handleInfoClick('<strong>Quantile</strong> spalten die Daten in mehrere gleich große Teile, üblich ist die Wahl von Vierteln (Quartile). Die wichtigsten <strong>Quantile</strong> sind dabei das 1. und 3., da sie die Hälfte aller Daten betrachten - die niedrigsten 25% bis 75%. Man betrachtet also die 50% der Daten, die dem 2. <strong>Quantil</strong> - dem Median (s.o.) - am nächsten sind. Die Differenz des 3. und 1. <strong>Quantils</strong> wird als <strong>Interquartilsabstand</strong> bezeichnet und ist, ähnlich wie die Standardabweichung, ein Streuungsmaß.')} className="clickable-item">Infos über Quantile</li>
        <li onClick={() => handleInfoClick('Die <strong>Regression</strong> ist eine statistische Methode, um die Beziehung zwischen einer <strong>abhängigen Variable</strong> und einer oder mehreren <strong>unabhängigen Variablen</strong> zu beschreiben. Im Blockly4R Tool wird nur eine unabhängige Variable verwendet <strong>(lineare Regression)</strong>. Sie ermöglicht es, den Einfluss von Variablen zu untersuchen oder eine Vorhersage über eine Variable zu machen. Die Variable auf die geschlossen werden soll ist dabei die <strong>abhängige</strong> und diejenigen, die zur Vorhersage verwendet werden, sind die <strong>unabhängigen</strong> Variablen. ')} className="clickable-item">Infos über Regression</li>
        <li onClick={() => handleInfoClick('Der t-Test ist der häufigste <strong>Hypothesentest</strong> in der Statistik. Dabei kann zwischen einem <strong>Einstichproben-t-Test</strong> und einem <strong>Zweistichproben-t-Test</strong> unterschieden werden. Der <strong>Einstichproben-t-Test</strong> beantwortet die Frage, ob es einen Unterschied zwischen einer Stichprobe und einer Grundgesamtheit gibt. Der <strong>Zweistichproben-t-Test</strong> hingegen untersucht den Unterschied zwischen zwei Stichproben oder den Unterschied einer Stichprobe zu zwei unterschiedlichen Zeitpunkten. Dazu muss die Varianz beider Stichproben gleich groß sein, weshalb er in der Realität nur selten angewandt wird. <br><br>Bei einem <strong>einseitigen (gerichteten) Einstichproben-t-Test</strong> wird die Frage gestellt, ob der Mittelwert der Stichprobe signifikant kleiner (bzw. größer) als der der Grundgesamtheit ist, man gibt dem Zusammenhang also eine Richtung. Der <strong>zweiseitige (ungerichtete) Einstichproben-t-Test</strong> untersucht lediglich, ob es einen signifikanten Unterschied zwischen den Mittelwerten gibt, ohne eine Richtung anzugeben. Das Ergebnis eines t-Tests ist ein <strong>t-Wert</strong> (Differenz geteilt durch Streuung der Stichprobe) und ein <strong>p-Wert</strong>. Ein kleiner <strong>p-Wert</strong> deutet auf die Ablehnung der H0 hin und das Vorzeichen des <strong>t-Werts</strong> gibt Auskunft darüber, ob der Mittelwert des Samples größer (positiver Wert) oder kleiner (negativer Wert) als der der Grundgesamtheit ist.')} className="clickable-item">Info über t-Tests</li>
        <li onClick={() => handleInfoClick('Bei der Interpretation von statistischen Ergebnissen ist es wichtig, auf den Unterschied zwischen <strong>Korrelation</strong> und <strong>Kausalität</strong> zu achten. Eine <strong>Korrelation</strong> gibt nur an, ob es einen Zusammenhang zwischen Merkmalen gibt. Eine <strong>Kausalität</strong> dagegen ist eine echte Ursache-Wirkung-Beziehung (B wird von A verursacht). Das bedeutet nicht, dass nur weil A hohe Werte hat und einen Anstieg von B verursacht, hohe Werte von B auch automatisch einen Ansteig von A verursacht.')} className="clickable-item">Korrelation vs. Kausalität</li>
        <li onClick={() => handleInfoClick('<strong>Korrelation</strong> ist ein statistisches Verfahren, um den <strong>Zusammenhang zwischen Variablen</strong> zu untersuchen. Wie stark der Zusammenhang ist, beschreibt dabei der <strong>Korrelationskoeffizient</strong>, der einen Wert von -1 bis 1 annhemen kann. Das Verfahren wird genutzt, um einen vermuteten Zusammenhang zwischen Merkmalen zu bestätigen, um später beispielsweise eine lineare Regression (s.o.) durchführen zu können. Gibt es in einer Stichprobe eine <strong>Korrelation</strong>, muss geprüft werden, ob es sich um einen Zufall handelt, oder ob auch in der Grundgesamtheit eine <strong>Korrelation</strong> besteht. Um die <strong>Signifikanz des Korrelationskoeffizienten</strong> zu bestimmen, kann ein t-Test (s.o.) verwendet werden.')} className="clickable-item">Infos über Korrelation</li>
        <li onClick={() => handleInfoClick('Mithilfe von <strong>Diagrammen</strong> werden Daten graphisch dargestellt. Dabei gibt es verschiedene <strong>Visualisierungsformen wie Balken-, Säulen- und Tortendiagramme, Histogramme, Boxplots und Scatterplots</strong>.<br><br> <strong>Balken-, Säulen- und Tortendiagramme</strong> stellen absolute oder relative Häufigkeiten dar: Je höher ein Balken oder größer ein Tortenstück ist, desto höher der Wert der Variable. Während diese Diagramme die Daten in diskreter Form (einzelne, getrennt voneinander existierende, meist ganzzahlige Werte, wie die Anzahl der Bücher in einem Regal) darstellen, beschreibt ein <strong>Histogramm</strong> Daten kontinuierlich (beliebiger Wert in bestimmten Bereich eines Spektrums, wie Zeit: zwischen jedem gemessenen Wert können unendlich viele weitere Werte existieren). Ein <strong>Histogramm</strong> veranschaulicht die Häufigkeitsverteilung von Daten in Klassen. <br><br>Ein <strong>Scatterplot</strong> hingegen visualisiert den Zusammenhang zwischen Daten. Er stellt ein Wertepaar für zwei Variablen dar. Wenn es einen hohen Zusammenhang zwischen diesen zwei Variablen gibt, sind die Punkte im Plot auf eine bestimmte Weise angeordnet. Ein positiver Zusammenhang (hohe Werte Variable A + hohe Werte Variable B) stellt eine steigende Gerade dar und ein negativer Zusammenhang (hohe Werte Variable A + niedrige Werte Variable B) eine fallende Gerade. Besteht kein Zusammenhang zwischen den Variablen (keine Gerade), ist kein Muster der Punkte zu erkennen und sie wirken zufällig im Plot verteilt.<br><br> Ein <strong>Boxplot</strong> kann man als eine visuelle Zusammenfassung von Daten beschreiben. Er stellt neben der Verteilung der Daten zusätzlich die Quantile und den Median (Box mit Linie in Box) und den minimalen, bzw. maximalen Wert (Antenne/Whiskers) dar. Ausreißer werden mithilfe des Kreises beschrieben. Ein Ausreißer ist eine Beobachtung, die von den üblichen Werten entfernt ist. Da sie durch Zufall oder auch oft durch Messfehler entstehen, möchte man sie von der Analyse ausschließen, um das Ergebnis nicht zu verfälschen. ')} className="clickable-item">Infos über Visualisierungsformen</li>
        {/* Add more links as needed */}
      </ul>
      <p>Die vorliegenden Informationen stammen von DATAtab, wo noch weitere und genauere Einblicke gemacht werden können: <a href="https://datatab.de/tutorial" target="_blank" rel="noopener noreferrer">https://datatab.de/tutorial</a></p>

      <p>Was sind Metadaten?</p>
      <ul>
        <li onClick={() => handleInfoClick('Die große Fülle an Daten im 21. Jahrhundert muss gemanaged und organisiert werden. Neben Datenbanken, verschiedenen Tools und ausgebildeten Data Scientists werden dafür besonders auch <strong>Metadatenstandards und -practices</strong> benötigt. <strong>Metadaten</strong> sind Informationen über Daten, sie halten also fest, wer was, wann, wo, wie und warum etwas mit Daten gemacht hat. Sie vereinfachen die Beschreibung, die Authentifizierung und das Management von Daten und helfen letztendlich dabei, Daten kritisch betrachten, auswählen und verarbeiten zu können. (Quelle: Quin, J., Dignazio, J.: The Central Role of Metadata in a Science Data Literacy Course. Syracuse 2010.)  ')} className="clickable-item">Informationen zu Metadaten</li>
        {/* Add more links as needed */}
      </ul>
      <p>Wie werden Daten korrekt zitiert?</p>
      <ul>
        <li onClick={() => handleInfoClick('Das korrekte <strong>Zitieren von Daten</strong> gewährleistet deren Wiederverwendbarkeit und unterstützt einen ethischen Umgang mit Daten. Eine wissenschaftliche Angabe der Daten sollte dabei folgende Bestandteile in dieser Form beinhalten:<br><br> Urheber(Veröffentlichungsdatum):Titel.Publikationsagent.Identifikator.<br><br> Der Publikationsagent ist dabei das Datenzentrum oder die Institution, das/die die Ressource veröffentlicht hat. Der Identifikator wird mithilfe einer URL oder eines Hyperlinks angegeben. Optional kann die Zitation noch Information über die Version oder den Ressourcentyp beinhalten. Um auch zukünftig souverän mit Daten umgehen zu können, spielt <strong>Datenethik</strong> und Werthaltung eine zentrale Rolle. Diese Thematiken beschäftigen sich mit Diskriminierungsfreiheit, Schutz der Selbstbestimmung sowie der Ablehnung von Ausbeutung, Überwachung und den Eingriff in die Privatssphäre. Prinzipien der <strong>Datenethik</strong> sollten nicht nur bei der Datennutzung berücksichtigt werden, sondern auch bei deren Erfassung und Teilung. (Quellen: Böker, E: Das Zitieren von Daten - Prinzipien und Varianten. 2023. https://forschungsdaten.info/themen/finden-und-nachnutzen/zitieren-von-daten/ und Schüller, K. & Schüller, B.: Datenkompetenz und Datenethik. In: Marketing Analytics. Hrsg. von Marion Halfmann und Katharina Schüller. Mönchengladbach 2022. S. 39-58.) ')} className="clickable-item">Daten korrekt zitieren und Datenethik</li>
        {/* Add more links as needed */}
      </ul>

      {selectedInfo && (
        <div className="info-popup-container">
          <div className="info-popup">
            <button className="close-button" onClick={() => setSelectedInfo(null)}>Zurück</button>
            <p dangerouslySetInnerHTML={{ __html: selectedInfo }}></p>
          </div>
        </div>
      )}
    </div>
  );
};

export default WikiComponent;
