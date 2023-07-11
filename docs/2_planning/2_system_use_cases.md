# System Use Cases

**Patientendaten pflegen - Antonia**

```plantuml Patientendaten pflegen
@startuml
left to right direction
actor "Interne Ärzt:innen" as int_docs
actor "Externe Ärzt:innen" as ext_docs
actor "Krankenpfleger:innen" as nurse


package "SUC Patientendaten pflegen" {
  usecase "Patientendaten pflegen" as UC1
  usecase "Patientendaten erweitern" as UC2
  usecase "Patient suchen" as UC3
  usecase "Patientendaten lesen" as UC4
  usecase "Patient anlegen" as UC5
  usecase "Patientendaten senden" as UC6
  usecase "Zusätzliche Daten hinzufügen" as UC7
  usecase "Befunde hinzufügen" as UC8
}

int_docs --> UC1
ext_docs --> UC6
ext_docs-->UC5
nurse-->UC1

(UC2).>(UC1) : extend
(UC3).>(UC1) : extend
(UC4).>(UC1) : extend
(UC7).>(UC1):extend

(UC6).>(UC2) : include

 UC8 -left-|> UC7 
@enduml
```


**Termine pflegen - Antonia**

```plantuml Termine pflegen
@startuml
left to right direction
actor "Interne Ärzt:innen" as int_docs
actor "Patient:innen" as patient
actor "Krankenpfelger:innen" as nurse



package "SUC Termine pflegen" {
  usecase "Termine pflegen" as UC1
  usecase "Termin bestätigen" as UC2
  usecase "Termin eintragen" as UC3
  usecase "Termin verschieben" as UC4
  usecase "Termin absagen" as UC5
  usecase "Terminübersicht ansehen" as UC6
}

int_docs --> UC6
patient --> UC6
nurse --> UC6

int_docs --> UC1

(UC3).>(UC1) : extend 
(UC4).>(UC1) : extend
(UC5).>(UC1) : extend 

(UC3).>(UC2) : include
(UC4).>(UC2) : include
@enduml
```


**Gemeldeter Fehlerbericht verwalten - Lino Becht**

```plantuml SUC Gemeldeter Fehlerbericht verwalten
@startuml
left to right direction
actor Externer_Systemtechniker as es
package Gemeldeter_Fehlerbericht_verwalten {
  usecase "Fehlerbericht anzeigen" as UC1
  usecase "Fehlerbericht bearbeiten" as UC2
  usecase "Fehlerbericht als erledigt markieren" as UC3
}

es --> UC1
es --> UC2
es --> UC3
@enduml
```


**Medizinisches Geraet verwalten - Lino Becht**

```plantuml SUC Medizinisches Geraet verwalten
@startuml
left to right direction
actor Interner_Systemtechniker as is
package Medizinisches_Gerät_verwalten {
  usecase "Starten" as UC1
  usecase "Stoppen" as UC2
  usecase "Konfigurationseinstellungen anzeigen" as UC3
  usecase "Konfigurationseinstellungen bearbeiten" as UC4
}

is --> UC1
is --> UC2
is --> UC3
@enduml
```

**Backlog verwalten - Lino Becht**

```plantuml SUC Backlog verwalten
@startuml
left to right direction
actor Laborpersonal as lb
package Backlog_verwalten {
  usecase "Auftrag anzeigen" as UC1
  usecase "Auftrag bearbeiten" as UC2
  usecase "Auftrag als erledigt markieren"as UC3
  usecase "Ergebnisse an externen Auftraggeber senden" as UC4
}

lb --> UC1
lb --> UC2
lb --> UC3

(UC4) .> (UC2) : extend
@enduml
```

**Routenplanung - Helen**

```plantuml Routenplanung
@startuml
left to right direction

actor "Krankenpfelger:innen" as nurse

package "SUC PatientenInnen Routenplanung" {
  usecase "Routenplanung einsehen" as UC1
  usecase "Terminerinnerung erhalten" as UC2
  usecase "Routen festlegen" as UC3
  usecase "Routen ändern" as UC4
  usecase "Erledigte Routen abhaken" as UC5
}

nurse --> UC1
nurse --> UC3
nurse --> UC5

(UC2).>(UC1) : extend
(UC3).>(UC4) : include

@enduml
```

**Benutzerverwaltung - Jann**

```plantuml Benutzerverwaltung
@startuml

left to right direction
actor "Systemadministrator:innen" as SysAdmin

package "SUC Benutzerverwaltung" {

  (Kontoverwaltung) as UC1
  (Passwortverwaltung) as UC2
  (Gruppenrichtlinien verwalten) as UC3
  (Zugriffsrechte verwalten) as UC4
  
  UC1 <-- (Kontoerstellung): <<extend>>
  UC1 <-- (Kontoänderung): <<extend>>
  UC1 <-- (Kontolöschung): <<extend>>
  
  UC2 <-- (Passwortrichtlinie anlegen): <<extend>>
  UC2 <-- (Passwort ändern): <<extend>>
  UC2 <-- (Passwort einsehen): <<extend>>

  UC3 <-- (Gruppenrichtlinien anlegen): <<extend>>
  UC3 <-- (Gruppenrichtlinien ändern): <<extend>>
  UC3 <-- (Gruppenrichtlinien löschen): <<extend>>

  UC4 <-- (Zugriffsrechte anlegen): <<extend>>
  UC4 <-- (Zugriffsrechte ändern): <<extend>>
  UC4 <-- (Zugriffsrechte löschen): <<extend>>

}

SysAdmin --> UC1
SysAdmin --> UC2
SysAdmin --> UC3
SysAdmin --> UC4

@enduml
```

**Systemüberwachung - Jann**

```plantuml Systemüberwachung
@startuml

left to right direction
actor "Systemadministrator:innen" as SysAdmin

package "SUC Systemüberwachung" {

  (Überwachung der Systemressourcen) as UC1
  (Überwachung der Netzwerkaktivität) as UC2
  (Überwachung von Server und Diensten) as UC3
  (Protokollüberwachung) as UC4
  (Alarmierung und Benachrichtigungen) as UC5

  UC1 <-- (Hardwareauslastung überwachen): <<extend>>
  UC1 <-- (Serverressourcen überwachen): <<extend>>

  
  UC2 <-- (Datenverkehr überwachen): <<extend>>
  UC2 <-- (Bandbreite überwachen): <<extend>>
  UC2 <-- (Netzwerkstatus überwachen): <<extend>>
  
  UC3 <-- (Serverleistung überwachen): <<extend>>
  UC3 <-- (Dienst und Anwendungsleistung überwachen): <<extend>>

  
  UC4 <-- (Systemereignisse einsehen): <<extend>>
  UC4 <-- (Fehlerereignisse einsehen): <<extend>>
  UC4 <-- (Warungen einsehen): <<extend>>
  
  UC5 <-- (Überwachungssysteme konfigurieren): <<extend>>
  UC5 <-- (Alarmbenachrichtigung empfangen): <<extend>>

}

SysAdmin --> UC1
SysAdmin --> UC2
SysAdmin --> UC3
SysAdmin --> UC4
SysAdmin --> UC5

@enduml
```

**Konfigurationsdaten verwalten - Jann**
```plantuml Konfigurationsdaten verwalten
@startuml

left to right direction
actor "Systemadministrator:innen" as SysAdmin

package "SUC Konfigurationsdaten verwalten" {

  (Konfigurationsdaten erfassen) as UC1
  (Konfigurationsdaten speichern) as UC2
  (Konfigurationsdaten abrufen) as UC3
  (Konfigurationsdaten bearbeiten) as UC4
  (Konfigurationsdaten validieren) as UC5
  (Konfigurationsdaten zurücksetzen) as UC6

}

SysAdmin --> UC1
SysAdmin --> UC2
SysAdmin --> UC3
SysAdmin --> UC4
SysAdmin --> UC5
SysAdmin --> UC6

@enduml
```

**Installation von Hardware - Jann**
```plantuml Installation von Hardware
@startuml

left to right direction
actor "Systemadministrator:innen" as SysAdmin

package "SUC Installation von Hardware" {

  (Installation) as UC1
  (Konfigurierung) as UC2
  (Dokumentation aktualisieren) as UC3

  UC1 <-- (Gerät identifizieren): <<extend>>
  UC1 <-- (Netzwerk validieren): <<extend>>
  UC1 <-- (Gerät physisch anschließen): <<extend>>

  UC2 <-- (Netzwerkkonfiguration durchführen): <<extend>>
  UC2 <-- (Gerät konfigurieren): <<extend>>
  UC2 <-- (Verbindung testen): <<extend>>
  
}

SysAdmin --> UC1
SysAdmin --> UC2
SysAdmin --> UC3

@enduml
```

**Dokumentation verwalten - Jann**

```plantuml Dokumentation verwalten
@startuml

left to right direction
actor "Systemadministrator:innen" as SysAdmin

package "SUC Dokumentation verwalten" {
  (Dokumente erstellen) as UC1
  (Dokumente bearbeiten) as UC2
  (Dokumente löschen) as UC3
  (Dokumente organisieren) as UC4
  (Dokumente suchen) as UC5
  (Dokumente freigeben) as UC6
}

SysAdmin --> UC1
SysAdmin --> UC2
SysAdmin --> UC3
SysAdmin --> UC4
SysAdmin --> UC5
SysAdmin --> UC6

@enduml
```

**Krankendaten einsehen - Jann**

```plantuml Dokumentation verwalten
@startuml

left to right direction
actor "Patient:innen" as patient

package "SUC Krankendaten einsehen" {
  (Kuratierte Diagnosedaten einsehen) as UC1
  (Termine einsehen) as UC2

  UC1 <-- (Allgemeine Informationen einsehen): <<extend>>
  UC1 <-- (Diagnose und Behandlung einsehen): <<extend>>
  UC1 <-- (Laborergebnisse einsehen): <<extend>>
  UC1 <-- (Medikation einsehen): <<extend>>

  UC2 <-- (Arzttermine einsehen): <<extend>>
  UC2 <-- (Stationstermine einsehen): <<extend>>
}

patient --> UC1
patient --> UC2

@enduml
```

**Offene Leistungen einsehen - Jann**

```plantuml Offene Leistungen einsehen
@startuml

left to right direction
actor "Patient:innen" as patient

package "SUC Offene Leistungen einsehen" {
  (Geplante Arzttermine einsehen) as UC1
  (Laboruntersuchungen einsehen) as UC2
  (Medizinische Prozeduren einsehen) as UC3
  (Therapiesitzungen einsehen) as UC4
  (Medikamentenverschreibungen einsehen) as UC5
  (Diagnostische Untersuchungen einsehen) as UC6
  (Nachsorge oder Folgetermine einsehen) as UC7
}

patient --> UC1
patient --> UC2
patient --> UC3
patient --> UC4
patient --> UC5
patient --> UC6
patient --> UC7

@enduml
```

**Patientendaten verwalten - Duc Duong Nguyen**
```plantuml Patientendaten verwalten
@startuml
left to right direction
actor Geschäftsführer:innen as GF
actor Krankenkasse as K

rectangle "Patientendaten verwalten" {

usecase UC1 as "Patientenakten einsehen"
usecase UC2 as "Patientenstatistiken überprüfen"
usecase UC3 as "Patientendaten aktualisieren"
usecase UC4 as "Patientendaten versenden"
usecase UC5 as "Patientendaten empfangen"

GF -- UC1
GF -- UC2
GF -- UC3
GF -- UC4
GF -- UC5

K -- UC4
K -- UC5

note right of UC1: Geschäftsführer:innen kann auf die\nAkten von Patient:innen zugreifen, um Daten\nfür Berichte oder Analysen zu sammeln.
note right of UC2: Geschäftsführer:innen kann Statistiken überprüfen,\ndie die Anzahl der Patient:innen, die Länge des\nKrankenhausaufenthalts, ...
note right of UC3: Geschäftsführer:innen kann bestimmte Informationen\n zu Patientendaten aktualisieren(ändern, löschen),\nz. B. Kontaktdaten oder Versicherungsinformationen.
note right of UC4: Geschäftsführer:innen und die Krankenkasse kann \n Patientendatenversenden, beispielsweise an \n anderen/externe Einrichtungen oder andere \n Abteilungen innerhalb des Krankenhauses.
note right of UC5: Geschäftsführer:innen und die Krankenkasse kann \n Patientendaten empfangen, zum Beispiel von \n anderen/externe Einrichtungen, die Patienten \n an das Krankenhaus überweisen, oder von den \n Abteilungen innerhalb des Krankenhauses selbst.
@enduml
```

**Leistungsübersicht - Duc Duong Nguyen**
```plantuml Leistungsübersicht
@startuml
left to right direction

actor Geschäftsführer:innen as GF

rectangle "Leistungsübersicht" {

usecase "Personalperformance-Daten abrufen" as UC1
usecase "Abteilungsleistungs-Report einsehen" as UC2
usecase "Gerätenutzung prüfen" as UC3

GF -- UC1
GF -- UC2
GF -- UC3

note right of UC1: Geschäftsführer:innen sieht sich Personalperformance-Daten an, \n um einen Überblick über die Produktivität und Kompetenz des Personals zu erhalten.
note right of UC2: Geschäftsführer:innen liest Abteilungsleistungs-Reports, \n um Informationen über die Effizienz und Kosten jeder Abteilung zu erhalten.
note right of UC3: Geschäftsführer:innen lässt sich Gerätenutzungsdaten anzeigen, \n um den Auslastungsgrad und Wartungsbedarf der medizinischen Geräte zu überblicken.
@enduml
```



**Personaldaten verwalten - Duc Duong Nguyen**
```plantuml Personaldaten verwalten
@startuml
left to right direction

actor Geschäftsführer as GF

rectangle "Personaldaten verwalten" {
    
usecase "Personaldaten anzeigen" as UC1 
usecase "Personaldaten bearbeiten" as UC2 
usecase "Neuen Mitarbeiter hinzufügen" as UC3 
usecase "Mitarbeiter entfernen" as UC4 
usecase "Kontaktdaten anzeigen" as UC5
usecase "Position und Abteilung anzeigen" as UC6

GF --> UC1
GF --> UC2
GF --> UC3
GF --> UC4
GF --> UC5
GF --> UC6

note right of UC1: Geschäftsführer:innen kann die Details jedes Mitarbeiters\n einsehen, einschließlich persönlicher Informationen und\n arbeitsbezogener Details.
note right of UC2: Geschäftsführer:innen kann die Personaldaten aktualisieren,\n z.B. bei Änderungen der Adressen, Abteilung oder\n anderen relevanten Informationen.
note right of UC3: Geschäftsführer:innen kann einen neuen Mitarbeiter zur\n Mitarbeiterdatenbank hinzufügen, wenn eine Neueinstellung erfolgt.
note right of UC4: Geschäftsführer:innen kann einen Mitarbeiter aus der\n Mitarbeiterdatenbank entfernen, wenn dieser das Krankenhaus verlässt.
note right of UC5: Geschäftsführer:innen kann die Kontaktdaten jedes\n Mitarbeiters anzeigen, um bei Bedarf Kontakt aufzunehmen.
note right of UC6: Geschäftsführer:innen kann die Position und die\n Abteilungszugehörigkeit jedes Mitarbeiters anzeigen.

}
@enduml
```

**Patientenaufnahme - Duc Duong Nguyen**
```plantuml Patientenaufnahme
@startuml
left to right direction

actor Sekretär:innen as S
actor Geschäftsführer:innen as GF
rectangle "Patientenaufnahme" {

usecase "Patientendaten erfassen" as UC1
usecase "Patientenakte anlegen" as UC2
usecase "Termin anlegen" as UC3
usecase "Terminänderungen durchführen" as UC4
usecase "Wartenummer erstellen" as UC5
usecase "Kapazität der Kliniken überprüfen" as UC6

S --> UC1
S --> UC2
S --> UC3
S --> UC4
S --> UC5
S --> UC6

GF --> UC6

note right of UC1: Sekretär:innen erfasst die Daten von neuen Patienten\n und fügt sie in das Krankenhausinformationssystem ein.
note right of UC2: Sekretär:innen legt eine neue Patientenakte an,\n sobald ein neuer Patient ins Krankenhaus kommt.
note right of UC3: Sekretär:innen plant Termine für/mit Patienten,\n basierend auf der Verfügbarkeit des medizinischen Personals.
note right of UC4: Sekretär:innen führt Änderungen an bestehenden Terminen durch,\n basierend auf den Anforderungen von Patienten und medizinischem Personal.
note right of UC5: Sekretär:innen erstellt eine Wartenummer für jeden Patienten,\n der auf eine Konsultation oder Behandlung wartet.
note right of UC6: Sekretär:innen und der Geschäftsführer überprüfen die Kapazität der Kliniken,\n um sicherzustellen, dass die Kliniken nicht überfüllt sind.
}
@enduml
```
