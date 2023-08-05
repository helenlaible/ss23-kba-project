# Systemarchitectur

** Welche Systemarchitektur stehen zur Auswahl?**


** Monolithisches Architekturmodell: **
Das monolithische Architekturmodell ist ein traditioneller Ansatz zur Entwicklung von Softwareanwendungen. 
Hierbei wird das gesamte Krankenhaussystem als eine einzige, zusammenhängende Anwendung entwickelt und bereitgestellt. 
Alle Funktionen und Komponenten sind in ein einzigen Systemabbild integriert. 
Die monolithische Architektur hat eine geringere Komplexität, da alle Funktionen in einer Anwendung zusammengefasst sind.

Vorteile:
- Geringere Komplexität: Da alle Komponenten und Funktionen unter einem Dach vereint sind, haben Entwickler eine einheitliche Sicht auf das Gesamtsystem. Die Entwicklung und Bereitstellung von Anwendungen wird dadurch in vielen Fällen vereinfacht.
- Kommunikation: Da alle Teile der Anwendung innerhalb des gleichen Systems laufen, können sie ohne den Einsatz von Netzwerkprotokollen effizient kommunizieren. Dies kann zu einer geringeren internen Netzwerklatenz führen und somit die Gesamtleistung der Anwendung verbessern.

Herausforderungen:
- Skalierbarkeit: Eine der größten Herausforderungen monolithischer Architekturen ist die Skalierbarkeit. Um die Leistung zu verbessern oder mehr Benutzer zu bedienen, muss das gesamte System skaliert werden und nicht nur die Komponenten, die die größte Last tragen. Dies kann zu einer Verschwendung von Ressourcen und damit zu höheren Kosten führen.
- Wartung und Erweiterung: Da sich jede Änderung an einer Komponente auf das gesamte System auswirken kann, kann die Wartung und Erweiterung einer monolithischen Anwendung komplex und zeitaufwändig sein. Außerdem ist die Gefahr größer, dass eine kleine Änderung unerwartete Auswirkungen auf andere Teile des Systems hat.
- Code-Wiederverwendung: In einer monolithischen Architektur kann es schwierig sein, Code wiederzuverwenden oder Module zu erstellen, die in anderen Projekten verwendet werden können. Die Anwendung ist so eng miteinander verknüpft, dass es oft schwierig ist, Komponenten zu entfernen oder hinzuzufügen.

** Microservices-Architektur: **
Die Microservice-Architektur ist ein Ansatz für die Entwicklung von Softwaresystemen, bei dem die Anwendung als eine Sammlung kleiner, autonomer und modularer Dienste konzipiert wird, von denen jeder einen bestimmten Geschäftsprozess abdeckt. Jeder dieser Dienste kann unabhängig von den anderen entwickelt,
bereitgestellt, skaliert und gewartet werden. Jeder Microservice läuft in seinem eigenen Prozess und kommuniziert typischerweise mit anderen Services über definierte APIs und Protokolle, meist HTTP/REST oder asynchrone Messaging-Protokolle.

Im Kontext eines Krankenhaussystems könnte es beispielsweise separate Microservices für die Patientenaufnahme, die Diagnose und die Abrechnung geben. Jeder dieser Dienste hätte seine eigene Datenbank und Geschäftslogik und könnte unabhängig aktualisiert und skaliert werden.

Vorteile:
- Skalierbarkeit: Da jeder Dienst unabhängig skaliert werden kann, kann das System effizienter genutzt und angepasst werden. Beispielsweise könnte ein Krankenhaussystem mehr Ressourcen für den Abrechnungsdienst bereitstellen, wenn das Monatsende naht, ohne dass andere Dienste skaliert werden müssen.
- Unabhängige Entwicklung und Bereitstellung: Da jeder Dienst unabhängig ist, können Teams an verschiedenen Diensten gleichzeitig arbeiten, und Updates können ohne Beeinträchtigung der gesamten Anwendung durchgeführt werden.
- Technologievielfalt: Verschiedene Services können mit verschiedenen Technologien entwickelt werden, was die Flexibilität erhöht.
- Fehlerisolierung: Da jeder Dienst in einem eigenen Prozess abläuft, kann sich ein Fehler in einem Dienst nicht direkt auf andere Dienste auswirken. Dies kann die Ausfallsicherheit und Zuverlässigkeit des Systems erhöhen.

Herausforderungen:

- Komplexität: Die Verwaltung einer Vielzahl von Diensten kann komplex sein, und Themen wie Diensterkennung, verteilte Datenverwaltung und Kommunikation zwischen Diensten erfordern sorgfältige Planung und Koordination.
- Netzwerklatenz und -overhead: Da die Dienste miteinander kommunizieren müssen, oft über das Netzwerk, kann dies zu einer erhöhten Latenz und einem erhöhten Overhead führen.
- Datenintegrität: Da jeder Dienst seine eigene Datenbank hat, kann es eine Herausforderung sein, die Konsistenz der Daten im gesamten System zu gewährleisten.


** Schichtenarchitektur: ** 
Die Schichtenarchitektur ist ein gängiger Ansatz in der Softwareentwicklung, um die Struktur und die Komponenten einer Anwendung zu organisieren.
In einer Schichtenarchitektur ist die Anwendung in horizontale Ebenen oder "Schichten" unterteilt, wobei jede Schicht eine bestimmte Art von Aufgabe
ausführt und Dienste für die darüber liegenden Schichten bereitstellt. Jede Schicht kommuniziert nur mit der darunter- und darüberliegenden Schicht, was zur Entkopplung und Modularität der Komponenten beiträgt. Dies ermöglicht eine flexiblere Entwicklung und Wartung, da Änderungen in einer Schicht die anderen Schichten nicht direkt beeinflussen.

Vorteile:
- Trennung der Verantwortlichkeiten: Jede Schicht hat eine klare und spezifische Aufgabe. Dies erleichtert das Verständnis und die Wartung der Anwendung.
- Wartbarkeit: Änderungen in einer Schicht beeinträchtigen nicht die anderen Schichten, was die Wartung und Erweiterung erleichtert.
- Modularität: Die Schichtenarchitektur ermöglicht eine klare Trennung von Funktionen und erleichtert die Wiederverwendung von Code.
- Einfachheit der Entwicklung: Die Entwickler können sich auf eine bestimmte Schicht konzentrieren, ohne sich um die Details der anderen Schichten kümmern zu müssen.
- Wiederverwendbarkeit und Erstezbarkeit: Da jede Schicht unabhängig von den anderen ist, können Teile der Anwendung wiederverwendet oder ausgetauscht werden, ohne dass die gesamte Anwendung neu geschrieben werden muss.

Herausforderungen:
- Abstraktionskosten: Da jede Anforderung mehrere Schichten durchlaufen muss, kann dies die Gesamtleistung der Anwendung beeinflussen.
- Über-Engineering: Obwohl das Schichtenmodell die Komplexität innerhalb jeder Schicht reduziert, kann die Gesamtkomplexität der Anwendung durch die Anzahl der Schichten und die Notwendigkeit der Kommunikation zwischen den Schichten erhöht werden.


** Warum haben wir uns für Microservices entschieden **
Die Entscheidung für ein Microservices-System in einem Krankenhaus-IT-System bietet eine Reihe von Vorteilen,
die mit den spezifischen und komplexen Anforderungen eines solchen Umfelds zusammenhängen. Die Skalierbarkeit,
die durch die Möglichkeit, jede Komponente des Systems unabhängig zu skalieren, gewährleistet wird,
ermöglicht eine effiziente Ressourcennutzung für verschiedene Dienste wie Patientenaktenverwaltung,
Terminplanung und medizinische Bildgebung.
Die Unabhängigkeit der Microservices erleichtert auch die parallele Entwicklung, was die unabhängige Arbeit verschiedener Teams fördert.
Diese Unabhängigkeit trägt auch zur Fehlertoleranz bei, da der Ausfall eines Dienstes nicht notwendigerweise die anderen beeinträchtigt, was in einem Krankenhaus ein kritischer Aspekt ist.
Die technologische Flexibilität, die sich aus der Möglichkeit ergibt, für jeden Service die am besten geeignete Technologie zu wählen, bietet in einem komplexen System erhebliche Vorteile. Die schnelle Einführung neuer Funktionen und Verbesserungen wird durch die Unabhängigkeit
der Microservices in Entwicklung, Test und Bereitstellung ermöglicht.
Die Integration mit Drittanbietern wird vereinfacht, da jeder Microservice als unabhängige Schnittstelle zu externen Systemen fungieren kann. Gezielte Compliance erleichtert die Anpassung an strenge gesetzliche Vorschriften im Gesundheitswesen.
Die Isolierung von Microservices kann auch die Sicherheit verbessern, da sich eine Sicherheitsverletzung in einem Bereich des Systems nicht auf andere Bereiche ausbreitet - ein entscheidender Vorteil, wenn der Datenschutz von höchster Bedeutung ist.
Eine einfache Migration und Modernisierung wird durch die Unabhängigkeit der Microservices unterstützt, die es ermöglicht, Teile des Systems zu aktualisieren oder zu migrieren, ohne das gesamte System neu entwerfen zu müssen.
Insgesamt bieten Microservices somit ein hohes Maß an Flexibilität, Skalierbarkeit, Robustheit und Anpassbarkeit, was sie zu einer idealen Architektur für ein Krankenhaus-IT-System macht, das eine Vielzahl komplexer, interagierender Anforderungen effizient erfüllen muss.

# Microservices

**Backlog,Fehlerbericht,Medizinisches_Gerät - Lino Becht**

```plantuml Microservices 
@startuml

package "Microservices" {
  node "Backlog" {
    [Auftrag bearbeiten] - HTTP1
    [Auftrag ansehen] - HTTP1

    database "Database1"{
    }
      HTTP1 --> Database1 : Datenfluss
  }

  node "Medizinische_Geräte" {
    [Untersuchungsergebnisse anzeigen] - HTTP2
    [Untersuchungseinstellungen verwalten] - HTTP2
    database "Database2"{
      HTTP2 --> Database2 : Datenfluss
    }
  }

  node "Fehlerbericht"{
    [Fehlerbericht anzeigen] - HTTP3
    [Fehlerbericht an externe Systemtechniker senden] - HTTP3
    database "Database3"{
      HTTP3 --> Database3 : Datenfluss
    }
  }


}


Medizinisches_Gerät <-up- Database2 : Datenfluss
Medizinisches_Gerät <-up- Database3 : Datenfluss

package "API"{
  [Sinnvolle API-Namen ausdenken?]
}

Backlog -left- API
Medizinische_Geräte -left- API
Fehlerbericht -left- API

@enduml
```

```plantuml Microservices - Jann Lucas Pischke
@startuml

package "Microservices" {
node "Systemüberwachung" {
  [Ressourcen überwachen] -right- HTTP1
  [Benachrichtigungen versenden] -left- HTTP1
  database "Database" as db1
  HTTP1 -down- db1: Datenfluss
}
node "Benutzerverwaltung" {
  [Konroverwaltung] -down- HTTP2
  [Passwortverwaltung] -down- HTTP2
  [Richtlinienverwaltung] - HTTP2
  [Rechteverwaltung] -left- HTTP2
  database "Datenbank" as db2
  HTTP2 --> db2 : Datenfluss
}
node "Konfigurationsdatenverwaltung" {
  [Konfigurationsdaten bearbeiten] -right- HTTP3
  [Konfigurationsdaten einsehen] -left- HTTP3
  database "Datenbank" as db3
  HTTP3 --> db3 : Datenfluss
}
node "Dokumentationsverwaltung" {
  [Dokumente bearbeiten] -right- HTTP4
  [Dokumente einsehen] -left- HTTP4
  database "Datenbank" as db4
  HTTP4 --> db4 : Datenfluss
}

}

Telmetrie_Module -up-> db1

package "API" {
  [API Name]
}

Systemüberwachung - API
Benutzerverwaltung - API
Konfigurationsdatenverwaltung - API
Dokumentationsverwaltung - API

@enduml

Patiententransportdienst - Helen Laible

@startuml

package "Microservices" {

   node "Zugriffsmöglichkeiten_eingeschränkt" {
    [Termine als erledigt markieren] - HTTP1
    [Termine einsehen] - HTTP1
    database "Database1"{
      HTTP1 --> Database1 : Datenfluss
    }
  }

  node "Zugriffsmöglichkeiten_erweitert"{
    [Patiententermine in Transportpläne eintragen] - HTTP2
    [Patiententermine bearbeiten/löschen] - HTTP2
    database "Database2"{
      HTTP2 --> Database2 : Datenfluss
    }
  }
}


Patiententransportplan <-up- Database1 : Datenfluss
Patiententransportplan <-up- Database2 : Datenfluss

@enduml
