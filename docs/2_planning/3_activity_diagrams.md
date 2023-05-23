# Activity Diagrams

**Backlog bearbeiten - Lino Becht**

```plantuml Backlog bearbeiten
@startuml
start

if (Backlog leer?) then (Ja)
else (Nein)
  :Auftrag mit höchster Priorität bearbeiten;
  if (Handelt es sich um einen externen Auftraggeber?) then (Ja)
    :Ergebnisse elektronisch verschicken;
  else (Nein)
    :Ergebnisse in Ablage legen;
  endif
:Auftrag als erledigt markieren;
endif

stop
@enduml
```


**Konfigurationseinstellungen bearbeiten - Lino Becht**

```plantuml Konfigurationseinstellungen bearbeiten
@startuml
start

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
    :Benutzer informieren;
  else (nein)
    :Fehler bei der Kontoerstellung;
    :Benutzer informieren;
    :Kontoerstellung abgelehnt;
  endif
else (nein)
  :Beantragung abgelehnt;
  :Benutzer informieren;
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
:CPU-Auslastung überprüfen;
if (CPU-Auslastung hoch?) then (ja)
  :Warnung generieren;
else (nein)
  :CPU-Auslastung im normalen Bereich;
endif
:Arbeitsspeicher überprüfen;
if (Arbeitsspeicher-Auslastung hoch?) then (ja)
  :Warnung generieren;
else (nein)
  :Arbeitsspeicher-Auslastung im normalen Bereich;
endif
:Festplattenplatz überprüfen;
if (Verfügbarer Festplattenspeicher niedrig?) then (ja)
  :Warnung generieren;
else (nein)
  :Speicherkapazität im normalen Bereich;
endif

stop
@enduml
```

**Überwachung der Netzwerkaktivität - Jann**

```plantuml Überwachung der Netzwerkaktivität
@startuml
start

:Überwachung der Netzwerkaktivität starten;
:Datenverkehr im Netzwerk erfassen;
if (Ungewöhnlicher Datenverkehr erkannt?) then (ja)
  :Analyse des ungewöhnlichen Datenverkehrs;
  :Warnung generieren;
else (nein)
  :Kein ungewöhnlicher Datenverkehr erkannt;
endif
if (Bandbreitenengpässe erkannt?) then (ja)
  :Analyse der Bandbreitenengpässe;
  :Warnung generieren;
else (nein)
  :Keine Bandbreitenengpässe erkannt;
endif
:Weitere Netzwerkaktivitäten überprüfen;
if (Probleme erkannt?) then (ja)
  :Alarm generieren;
else (nein)
  :Netzwerkaktivität im normalen Bereich;
endif

stop
@enduml
```

**Überwachung von Server und Diensten - Jann**

```plantuml Überwachung der Systemressourcen
@startuml
start

:Überwachung von Server und Diensten starten;
:Status von Webserber überprüfen;
if (Webserver nicht erreichbar?) then (ja)
  :Warnung generieren;
else (nein)
  :Webserver erreichbar;
endif
:Datenbankverbindung überprüfen;
if (Datenbankverbindung fehlerhaft?) then (ja)
  :Warnung generieren;
else (nein)
  :Datenbankverbindung in Ordnung;
endif
:E-Mail Serverstatus überprüfen;
if (E-Mail Server nicht funktionsfähig) then (ja)
  :Warnung generieren;
else (nein)
  :E-Mail Server funktionsfähig;
endif
:Weitere Server und Dienste überprüfen;
if (Probleme erkannt?) then (ja)
  :Warnung generieren;
else (nein)
  :Server und Dienste funktionieren ordnungsgemäß;
endif

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
  :Mapnahmen ergreifen;
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

:Überwachungssysteme konfigurieren;
:Schwellenwerte festlegen;
:Alarmierungsregeln definieren;
:Benachrichtigungseinstellungen einrichten;
:Alarmbedingungen überprüfen;
if (Alarmbedingungen erfüllt?) then (ja)
  :Alarm generieren;
  :Benachrichtigung erstellen;
  :Benachrichtigung an Administrator senden;
else (nein)
  :Keine Alarmbedingungen erfüllt;
endif

stop
@enduml
```
