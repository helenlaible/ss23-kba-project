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

  usecase "Kontoverwaltung" as UC1
  usecase "Kontoerstellung" as UC2
  usecase "Kontoänderung" as UC3
  usecase "Kontolöschung" as UC4
  usecase "Zugriffsrechte ändern" as UC5
  usecase "Passwortverwaltung" as UC6
  usecase "Passwortrichtlinie anlegen" as UC7
  usecase "Passwort ändern" as UC8
  usecase "Passwort einsehen" as UC9
  usecase "Gruppenrichtlinien verwalten" as UC10
  usecase "Gruppenrichtlinien anlegen" as UC11
  usecase "Gruppenrichtlinien ändern" as UC12
  usecase "Gruppenrichtlinien löschen" as UC13
  
}

SysAdmin --> UC1
SysAdmin --> UC5
SysAdmin --> UC6
SysAdmin --> UC10

(UC2).>(UC1) : extend
(UC3).>(UC1) : extend
(UC4).>(UC1) : extend

(UC7).>(UC6) : extend
(UC8).>(UC6) : extend
(UC9).>(UC6) : extend

(UC11).>(UC10) : extend
(UC12).>(UC10) : extend
(UC13).>(UC10) : extend

@enduml
```

**Systemüberwachung - Jann**

```plantuml Systemüberwachung
@startuml
left to right direction
actor "Systemadministrator:innen" as SysAdmin

package "SUC Systemüberwachung" {

  usecase "Überwachung der Systemressourcen" as UC1
  usecase "Hardwareauslastung überwachen" as UC2
  usecase "Serverressourcen überwachen" as UC3
  usecase "Überwachung der Netzwerkaktivität" as UC4
  usecase "Datenverkehr überwachen" as UC5
  usecase "Bandbreite überwachen" as UC6
  usecase "Netzwerkstatus überwachen" as UC7
  usecase "Überwachung von Server und Diensten" as UC8
  usecase "Serverleistung überwachen" as UC9
  usecase "Dienst und Anwendungsleistung überwachen" as UC10
  usecase "Protokollüberwachung" as UC11
  usecase "Systemereignisse einsehen" as UC12
  usecase "Fehlerereignisse einsehen" as UC13
  usecase "Warungen einsehen" as UC14 
  usecase "Alarmierung und Benachrichtigungen" as UC15
  usecase "Überwachungssysteme konfigurieren" as UC16
  usecase "Alarmbenachrichtigung empfangen" as UC17
}

SysAdmin --> UC1
SysAdmin --> UC4
SysAdmin --> UC8
SysAdmin --> UC11
SysAdmin --> UC15

(UC2).>(UC1) : extend
(UC3).>(UC1) : extend

(UC5).>(UC4) : extend
(UC6).>(UC4) : extend
(UC7).>(UC4) : extend

(UC9).>(UC8) : extend
(UC10).>(UC8) : extend

(UC12).>(UC11) : extend
(UC13).>(UC11) : extend
(UC14).>(UC11) : extend

(UC16).>(UC15) : extend
(UC17).>(UC15) : extend

@enduml
```

**Patientendaten verwalten - Duc Duong Nguyen**
```plantuml
@startuml
left to right direction
actor Geschäftsführer as GF
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

note right of UC1: Der Geschäftsführer kann auf die\nAkten von Patienten zugreifen, um Daten\nfür Berichte oder Analysen zu sammeln.
note right of UC2: Der Geschäftsführer kann Statistiken überprüfen,\ndie die Anzahl der Patienten, die Länge des\nKrankenhausaufenthalts, ...
note right of UC3: Der Geschäftsführer kann bestimmte Informationen\n zu Patientendaten aktualisieren(ändern, löschen),\nz. B. Kontaktdaten oder Versicherungsinformationen.
note right of UC4: Der Geschäftsführer und die Krankenkasse kann \n Patientendatenversenden, beispielsweise an \n anderen/externe Einrichtungen oder andere \n Abteilungen innerhalb des Krankenhauses.
note right of UC5: Der Geschäftsführer und die Krankenkasse kann \n Patientendaten empfangen, zum Beispiel von \n anderen/externe Einrichtungen, die Patienten \n an das Krankenhaus überweisen, oder von den \n Abteilungen innerhalb des Krankenhauses selbst.
@enduml
```


**Personaldaten verwalten - Duc Duong Nguyen**
```plantuml
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

note right of UC1: Der Geschäftsführer kann die Details jedes Mitarbeiters\n einsehen, einschließlich persönlicher Informationen und\n arbeitsbezogener Details.
note right of UC2: Der Geschäftsführer kann die Personaldaten aktualisieren,\n z.B. bei Änderungen der Adressen, Abteilung oder\n anderen relevanten Informationen.
note right of UC3: Der Geschäftsführer kann einen neuen Mitarbeiter zur\n Mitarbeiterdatenbank hinzufügen, wenn eine Neueinstellung erfolgt.
note right of UC4: Der Geschäftsführer kann einen Mitarbeiter aus der\n Mitarbeiterdatenbank entfernen, wenn dieser das Krankenhaus verlässt.
note right of UC5: Der Geschäftsführer kann die Kontaktdaten jedes\n Mitarbeiters anzeigen, um bei Bedarf Kontakt aufzunehmen.
note right of UC6: Der Geschäftsführer kann die Position und die\n Abteilungszugehörigkeit jedes Mitarbeiters anzeigen.

}
@enduml
```

**Patientenaufnahme - Duc Duong Nguyen**
```plantuml
@startuml
left to right direction

actor Sekretär as S
actor Geschäftsführer as GF
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

note right of UC1: Die Sekretär erfasst die Daten von neuen Patienten\n und fügt sie in das Krankenhausinformationssystem ein.
note right of UC2: Die Sekretär legt eine neue Patientenakte an,\n sobald ein neuer Patient ins Krankenhaus kommt.
note right of UC3: Die Sekretär plant Termine für/mit Patienten,\n basierend auf der Verfügbarkeit des medizinischen Personals.
note right of UC4: Die Sekretär führt Änderungen an bestehenden Terminen durch,\n basierend auf den Anforderungen von Patienten und medizinischem Personal.
note right of UC5: Die Sekretär erstellt eine Wartenummer für jeden Patienten,\n der auf eine Konsultation oder Behandlung wartet.
note right of UC6: Die Sekretär und der Geschäftsführer überprüfen die Kapazität der Kliniken,\n um sicherzustellen, dass die Kliniken nicht überfüllt sind.
}
@enduml
```
