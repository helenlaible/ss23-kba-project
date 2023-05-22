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
}

int_docs --> UC1
ext_docs --> UC6
nurse-->UC1

(UC2).>(UC1) : extend
(UC3).>(UC1) : extend
(UC4).>(UC1) : extend
(UC5).>(UC1) : extend

(UC6).>(UC2) : include
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
