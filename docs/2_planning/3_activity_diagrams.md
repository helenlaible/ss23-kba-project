# Activity Diagrams

**Backlog bearbeiten - Lino Becht**

```plantuml Backlog bearbeiten
@startuml
start

if (Backlog leer?) then (Ja)
else (Nein)
  :Auftrag mit höchster Priorität bearbeiten;
  if (Probe verunreinigt?) then (Ja)
    :Auftraggeber benachrichtigen und im Backlog vermerken;
    stop
  else (Nein)
    if (Handelt es sich um einen externen Auftraggeber?) then (Ja)
      :Ergebnisse elektronisch verschicken;
    else (Nein)
      :Ergebnisse in Akte legen;
    endif
    :Auftrag als erledigt markieren;
  endif
endif

stop
@enduml
```


**Konfigurationseinstellungen bearbeiten - Lino Becht**

```plantuml Konfigurationseinstellungen bearbeiten
@startuml
start

if (Reagiert das medizinisches Gerät auf Eingaben?) then (Ja)
else (Nein)
  :Fehlerbericht an Herstellerfirma senden;
  stop
endif
:Konfigurationseinstellungen anzeigen;
if (Sind die Einstellungen für die kommende Untersuchung korrekt?) then (Ja)
else (Nein)
  :Konfigurationseinstellungen bearbeiten;
endif
:Untersuchung durchführen;

stop
@enduml
```


**Fehlerbericht bearbeiten - Lino Becht**

```plantuml Fehlerbericht bearbeiten
@startuml
start

:Fehlerbericht anzeigen;
:Fehlerbericht bearbeiten;
if (Muss Personal zur Behebung des Problems zum Kunden geschickt werden?) then (Ja)
  :Personal beauftragen;
else (Nein)
  :Lösungshinweise an Kunden schicken;
endif
:Fehlerbericht als erledigt markieren;

stop
@enduml
```


**Benutzerkontoerstellung - Jann**

```plantuml Benutzerkontoerstellung
@startuml
start

:Neuer benutzer beantragen;
if (Beantragung genehmigt?) then (ja)
  :Benutzerkonto erstellen;
  if (Konto erfolgreich erstellt?) then (ja)
    :Benutzerdaten erfassen;
    :Benutzernamen generieren;
    :Passwort generieren;
    :Zugriffsrechte festlegen;
    :Gruppenrichtlinien zuweisen;
    :Benutzerkonto aktivieren;
    :Ersteller:innen informieren;
  else (nein)
    :Fehler bei der Kontoerstellung;
    :Ersteller:innen informieren;
    :Kontoerstellung abgelehnt;
  endif
else (nein)
  :Beantragung abgelehnt;
  :Ersteller:innen informieren;
  :Kontoerstellung abgelehnt;
endif

stop
@enduml
```

**Überwachung der Systemressourcen - Jann**

```plantuml Überwachung der Systemressourcen
@startuml
start

:Überwachung der Systemressourcen starten;
fork
  :CPU-Auslastung überprüfen;
  if (CPU-Auslastung hoch?) then (ja)
    :Warnung generieren;
  else (nein)
    :CPU-Auslastung im normalen Bereich;
  endif
fork again
  :Arbeitsspeicher überprüfen;
  if (Arbeitsspeicher-Auslastung hoch?) then (ja)
    :Warnung generieren;
  else (nein)
    :Arbeitsspeicher-Auslastung im normalen Bereich;
  endif
fork again
  :Festplattenplatz überprüfen;
  if (Verfügbarer Festplattenspeicher niedrig?) then (ja)
    :Warnung generieren;
  else (nein)
    :Speicherkapazität im normalen Bereich;
  endif
end fork

stop
@enduml
```

**Überwachung der Netzwerkaktivität - Jann**

```plantuml Überwachung der Netzwerkaktivität
@startuml
start

:Überwachung der Netzwerkaktivität starten;
fork
  :Datenverkehr im Netzwerk erfassen;
  if (Ungewöhnlicher Datenverkehr erkannt?) then (ja)
    :Analyse des ungewöhnlichen Datenverkehrs;
    :Warnung generieren;
  else (nein)
    :Kein ungewöhnlicher Datenverkehr erkannt;
  endif
fork again
  :Weitere Netzwerkaktivitäten überprüfen;
  if (Probleme erkannt?) then (ja)
    :Alarm generieren;
  else (nein)
    :Netzwerkaktivität im normalen Bereich;
  endif
end fork

stop
@enduml
```

**Überwachung von Server und Diensten - Jann**

```plantuml Überwachung der Systemressourcen
@startuml
start

:Überwachung von Server und Diensten starten;
fork
  :Status von Webserver überprüfen;
  if (Webserver nicht erreichbar?) then (ja)
    :Warnung generieren;
  else (nein)
    :Webserver erreichbar;
  endif
fork again
  :Datenbankverbindung überprüfen;
  if (Datenbankverbindung fehlerhaft?) then (ja)
    :Warnung generieren;
  else (nein)
    :Datenbankverbindung in Ordnung;
  endif
fork again
  :E-Mail Serverstatus überprüfen;
  if (E-Mail Server nicht funktionsfähig) then (ja)
    :Warnung generieren;
  else (nein)
    :E-Mail Server funktionsfähig;
  endif
fork again
  :Weitere Server und Dienste überprüfen;
  if (Probleme erkannt?) then (ja)
    :Warnung generieren;
  else (nein)
    :Server und Dienste funktionieren ordnungsgemäß;
  endif
end fork

stop
@enduml
```

**Protokollüberwachung - Jann**

```plantuml Protokollüberwachung
@startuml
start

:Protokolle überwachen;
:Protokolldateien Sammeln;
:Protokoldateien analysieren;
if (Anomalien erkannt?) then (ja)
  :Fehler, Warnungen oder Sicherheitsvorfälle identifizieren;
  :Maßnahmen ergreifen;
else (nein)
  :Keine Anomalien erkannt;
endif

stop
@enduml
```

**Alarmierung und Benachrichtigungen - Jann**

```plantuml Alarmierung und Benachrichtigungen
@startuml
start
fork
:Überwachungssysteme konfigurieren;
split
:Schwellenwerte festlegen;
split again
:Alarmierungsregeln definieren;
split again
:Benachrichtigungseinstellungen einrichten;
split again
:Benachrichtigung erstellen;
end split
:Benachrichtigung an Administrator senden;
fork again
:Alarmbedingungen überprüfen;
if (Alarmbedingungen erfüllt?) then (ja)
  :Alarm generieren;
  :Benachrichtigung erstellen;
  :Benachrichtigung an Administrator senden;
else (nein)
  :Keine Alarmbedingungen erfüllt;
endif
end fork

stop
@enduml
```

**Dokumentation verwalten - Jann**
```
@startuml Dokumentation verwalten
start

fork
  :Dokumente erstellen;
  split
    :Dokumententyp auswählen;
    :Dokumenteninhalte erfassen;
    :Metadaten hinzufügen;
  end split
fork again
  :Dokumente bearbeiten;
  split
    :Dokument auswählen;
    :Änderungen vornehmen;
    :Änderungen speichern;
  end split
fork again
  :Dokumente löschen;
  split
    :Dokument auswählen;
    :Bestätigung für das Löschen erhalten;
    :Dokument löschen;
  end split
fork again
  :Dokumente organisieren;
  split
    :Dokumente in Kategorien/Ordner sortieren;
    :Metadaten aktualisieren;
  end split
fork again
  :Dokumente suchen;
  split
    :Suchkriterien festlegen;
    :Dokumente nach Kriterien durchsuchen;
    :Suchergebnisse anzeigen;
  end split
fork again
  :Dokumente freigeben;
  split
    :Dokument auswählen;
    :Freigabeberechtigungen festlegen;
    :Freigabe bestätigen;
  end split
end fork

stop
@enduml
```

**Krankendaten einsehen - Jann**
```
@startuml Krankendaten einsehen
start

fork
  :Kuratierte Diagnosedaten einsehen;
  split
    :Allgemeine Informationen einsehen;
  split again  
    :Diagnose und Behandlung einsehen;
  split again  
    :Laborergebnisse einsehen;
  split again
    :Medikation einsehen;
  end split
fork again
    :Termine einsehen;
  split  
    :Arzttermine einsehen; 
  split again
    :Stationstermine einsehen;
  end split
end fork

stop
@enduml

```

**Offene Leistungen einsehen - Jann**
```
@startuml
start

:Offene Leistungen einsehen;
fork
  if (Geplante Arzttermine einsehen?) then (ja)
    :Geplante Arzttermine anzeigen;
  else (nein)
    :Keine geplanten Arzttermine;
  endif
fork again
  if (Laboruntersuchungen einsehen?) then (ja)
    :Laboruntersuchungen anzeigen;
  else (nein)
    :Keine Laboruntersuchungen;
  endif
fork again
  if (Medizinische Prozeduren einsehen?) then (ja)
    :Medizinische Prozeduren anzeigen;
  else (nein)
    :Keine medizinischen Prozeduren;
  endif
fork again
  if (Therapiesitzungen einsehen?) then (ja)
    :Therapiesitzungen anzeigen;
  else (nein)
    :Keine Therapiesitzungen;
  endif
fork again
  if (Medikamentenverschreibungen einsehen?) then (ja)
    :Medikamentenverschreibungen anzeigen;
  else (nein)
    :Keine Medikamentenverschreibungen;
  endif
fork again
  if (Diagnostische Untersuchungen einsehen?) then (ja)
    :Diagnostische Untersuchungen anzeigen;
  else (nein)
    :Keine diagnostischen Untersuchungen;
  endif
fork again
  if (Nachsorge oder Folgetermine einsehen?) then (ja)
    :Nachsorge oder Folgetermine anzeigen;
  else (nein)
    :Keine Nachsorge oder Folgetermine;
  endif
end fork
stop
@enduml
```


**Patientenaufnahme - Duc Duong Nguyen**

```plantuml
@startuml
start
:Patient kommt ins Krankenhaus;
if (Ist es ein Notfall?) then (ja)
  :Direkte Behandlung;
  :Nachträgliche Aufnahme und Anlegen der Patientenakte;
else (nein)
  :Aufnahme von Patient;
  if (Hat der Patient einen Termin?) then (ja)
    :Anlegen der Patientenakte;
  else (nein)
    :Termin anfragen;
    if (Möchte der Patient noch heute behandelt werden?) then (ja)
      :Anlegen der Patientenakte;
      :Erhalt einer Wartenummer;
      :Warten in der Warteschlange;
    else (nein)
      :Termin für einen anderen Tag vereinbaren;
      stop
    endif
  endif
  :Zuweisung zur Klinik;
  :Behandlung des Patienten;
endif
if (Muss der Patient übernachten?) then (ja)
  if (Sind Zimmer mit Bett frei?) then (ja)
    :Zuweisung eines Zimmers;
  else (nein)
    :Patient wird auf Warteliste gesetzt;
  endif
else (nein)
  :Patient wird entlassen;
endif
stop
@enduml
```



**Abteilungsanalyse - Duc Duong Nguyen**
```plantuml
@startuml
start
:Geschäftsführer startet Abteilungsanalyse;
:Wahl der zu analysierenden Abteilung;
:Überprüfung der aktuellen Abteilungsstatistiken;
:Gespräch mit dem Abteilungsleiter;
if (Gibt es Probleme in der Abteilung?) then (ja)
  :Problemlösungsstrategie entwickeln;
else (nein)
  :Anerkennung der guten Leistung der Abteilung;
endif
:Überprüfung und Anpassung der Abteilungsstrategie falls nötig;
:Feedback an den Abteilungsleiter geben;
stop
@enduml
```

**Auslastung der Krankenhäuser ansehen - Duc Duong Nguyen**
```plantuml
@startuml

start

:Krankenhausauslastung anzeigen;

split
  :Prüft die allgemeine Auslastung;
  if (Gibt es kritische Bereiche?) then (Ja)
    :Markiert kritische Bereiche;
  endif
split again
  :Prüft die Auslastung nach Abteilungen;
  if (Gibt es Abteilungen mit hoher Auslastung?) then (Ja)
    :Markiert Abteilungen mit hoher Auslastung;
  endif
split again
  :Prüft die Auslastung nach Krankenhausbetten;
  if (Sind Krankenhausbetten knapp?) then (Ja)
    :Markiert Krankenhausbettenmangel;
  endif
end split

:Erstellt einen Auslastungsbericht;

if (Soll der Bericht verschickt werden?) then (Ja)
  :Verschickt den Bericht an die betroffenen Abteilungen und Mitarbeiter;
else (Nein)
  :Behält den Bericht für weitere Analyse und Maßnahmen;
endif

stop
@enduml
```

**Leistungsüberprüfung - Duc Duong Nguyen**
```plantuml
@startuml

start

:Leistungsüberprüfung durchführen;

:Prüft die Leistung (Geräte, Abteilungen, Mitarbeitern);
if (Gibt es Geräte/Abteilungen/Mitarbeiter mit geringer Leistung?) then (Ja)
  :Markiert Geräte/Abteilungen/Mitarbeiter mit geringer Leistung;
endif

:Erstellt einen Leistungsüberprüfungsbericht;

if (Soll der Bericht verschickt werden?) then (Ja)
  :Verschickt den Bericht an die betroffenen Abteilungen und Mitarbeiter;
else (Nein)
  :Behält den Bericht für weitere Analyse und Maßnahmen;
endif

stop
@enduml
```

**Krankenkasse fordert Patientendaten - Duc Duong Nguyen**
```plantuml
@startuml

start

:Krankenkasse sendet Datenanforderung;

:Das Krankenhaus erhält die Anforderung;

if (Ist die Anforderung gültig?) then (Ja)
  :Sucht die Patientendaten in der Datenbank;
  :Verifiziert die gefundenen Daten;
  if (Sind die Daten korrekt und vollständig?) then (Ja)
    :Bereitet die Daten für die Übertragung vor;
    :Erstellt einen Bericht mit den angeforderten Daten;
:Versendet den Bericht an die Krankenkasse;
  else (Nein)
    :Benachrichtigt die Krankenkasse über fehlende oder ungenaue Daten;
  endif
else (Nein)
  :Benachrichtigt die Krankenkasse über eine ungültige Anforderung;
endif

stop
@enduml
```


