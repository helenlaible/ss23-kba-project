# Business Use Cases

**Interne & externe Ärzt:innen, Krankenpfleger:innen und Rettungskräfte - Antonia, Helen**

```plantuml BUC Interne & externe Ärzt:innen, Krankenpfleger:innen und Rettungskräfte --
left to right direction

actor "Krankenpfleger:innen" as nurse
actor "Interne Ärzt:innen" as int_docs
actor "Rettungskräfte" as rescue
actor "Externe Ärtz:innen" as ext_docs
actor "Patient:innen" as patients

package "BUC Patient:innen" {
  usecase "Arbeitsplan ansehen" as UC1
  usecase "Patientendaten pflegen" as UC2

  usecase "Übersichtliche Erste-Hilfe-Maßnahmen übergeben" as UC3
  usecase "Übergabe an Krankenhaus anmelden" as UC4

  usecase "Patientendaten anfordern" as UC5
}

nurse --> UC1
nurse --> UC2

int_docs --> UC1

rescue --> UC3
rescue --> UC4

ext_docs --> UC5
ext_docs --> UC2


package "BUC Transportdienst" {
  usecase "Patiententransportplan pflegen" as TUC1
  usecase "Routenplanung lesen" as TUC2
  usecase "Erinnerungen erhalten" as TUC3
  usecase "Termine pflegen" as TUC4
}

nurse --> TUC1
nurse --> TUC2
nurse --> TUC4
(TUC2) .> (TUC3) : extend

int_docs --> TUC4

patients --> TUC4
```

**Systemadministrator:innen - Jann Lucas Pischke**

```plantuml BUC für Systemadministrator:innen
left to right direction

actor "Systemadministrator:innen" as g

package "BUC Systemadministrator:innen" {
  (Systemüberwachung) as UC1
  (Benutzer verwalten) as UC2
  (Konfigurationsdaten verwalten) as UC3
  (Installation von Hardware) as UC4
  (Dokumentation verwalten) as UC5
}

g --> UC1
g --> UC2
g --> UC3
g --> UC4
g --> UC5
```

**Patient:innen - Jann Lucas Pischke** 

```plantuml BUC Patient:innen
left to right direction

actor "Patient:innen" as patient

package "BUC Patient:innen" {
  (Eigene Krankendaten einsehen) as UC1
  (Offene Leistungen einsehen) as UC2

  UC1 <-- (Geplante Arzt/Stationstermine einsehen): <<extend>>
  UC1 <-- (Kuratierte Diganose einsehen): <<extend>>
}

patient --> UC1
patient --> UC2
```

**Externe Systemtechniker - Lino Becht**

```plantuml BUC Geraetehersteller
@startuml
left to right direction
actor Externer_Systemtechniker as es
package Gerätehersteller {
  usecase "Gemeldeter Fehlerbericht verwalten" as UC1
}

es --> UC1
@enduml
```

**Interne Systemtechniker:innen - Lino Becht**

```plantuml BUC Geraetehersteller
@startuml
left to right direction
actor Interner_Systemtechniker:innen as is
package Medizinisches_Gerät {
  usecase "Medizinisches Gerät verwalten" as UC1
}

is --> UC1
@enduml
```

**Backlog - Lino Becht**

```plantuml BUC Backlog
@startuml
left to right direction
actor Laborpersonal as lb
package Backlog {
  usecase "Backlog verwalten" as UC1
}

lb --> UC1
@enduml
```

**Geschäftsführer: innen - Duc Duong Nguyen**
```plantuml
@startuml
left to right direction
actor Geschäftsführer
rectangle "Geschäftsführer:innen" {
  (Überwachung der Krankenhausleistung) as UC1
  (Listen aller Leistungen verwalten) as UC2

  UC2 <-- (Leistungen einsehen) : <<extend>>
  UC2 <-- (Leistungen prüfen) : <<extend>>

  UC1 <-- (Auslastung der Krankenhäuser ansehen) : <<extend>>
  UC1 <-- (Personaldaten verwalten) : <<extend>>
  UC1 <-- (Patientendaten verwalten) : <<extend>>
  UC1 <-- (Abteilungsanalyse) : <<extend>>
}

Geschäftsführer -- UC1
Geschäftsführer --UC2
@enduml
```

**Sekretär:innen - Duc Duong Nguyen**
```plantuml
@startuml
left to right direction
actor Sekretäre

rectangle "Sekretäre" {
  (Formulare/Berichte einreichen) as UC1
  (Patient:innen registrieren) as UC2
  (Erstellen von Terminen) as UC3
  (Aufnahme von Patient:innen) as UC4

  UC2 -left-|> UC3 : <<exclude>>
  UC2 -- UC4 : <<include>>
}

Sekretäre -- UC1
Sekretäre -- UC2
@enduml
```


**Krankenkasse - Duc Duong Nguyen**
```plantuml
@startuml
left to right direction
actor Krankenkassen

rectangle "Krankenkasse" {
  (Patientenakten verwalten) as UC1
  (Abrechnung senden/empfangen) as UC2
  (Listen aller Leistungen verwalten) as UC3

  UC1 -right-|> (Lesen) : <<exclude>>
  UC1 -right-|> (Erweitern) : <<exclude>>
  UC1 -left-|> (Ändern) : <<exclude>>

  UC3 -down-|> (Leistungen einlesen) : <<exclude>>
  UC3 -down-|> (Leistungen prüfen) : <<exclude>>
}

actor "Interne Systeme" as InternalSystems

Krankenkassen -- UC1
Krankenkassen -- UC2
Krankenkassen -- UC3

InternalSystems -- UC1
InternalSystems -- UC2
InternalSystems -- UC3
@enduml
```


