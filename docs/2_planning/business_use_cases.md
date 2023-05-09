# Business Use Cases

**Business Use Case für Systemadministrator:innen - Jann Lucas Pischke**

```plantuml Business Use Case für Systemadministrator:innen
left to right direction

actor "Systemadministrator:innen" as g

package "BUC Systemadministrator:innen" {
  usecase "Logdaten einsehen" as UC1
  usecase "Berechtigungen verwalten" as UC2
  usecase "Konfigurationsdaten. verwalten" as UC3
  usecase "Hardwaredaten einsehen" as UC4
  usecase "Datenbanklogs einsehen" as UC5
}

g --> UC1
g --> UC2
g --> UC3

(UC4) .> (UC1) : extend
(UC5) .> (UC1) : extend
```