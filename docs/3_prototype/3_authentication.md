# Authentication

## Authorization Code Flow with Proof Key for Code Exchange (PKCE)

Der PKCE führt ein von der aufrufenden Anwendung erstelltes Geheimnis ein, das vom Autorisierungsserver überprüft werden kann; dieses Geheimnis wird als Code Verifier bezeichnet. Zusätzlich erstellt die aufrufende Anwendung einen Transformationswert (Code Verifier) und sendet diesen Wert über HTTPS, um einen Autorisierungscode abzurufen. Auf diese Weise kann ein böswilliger Angreifer nur den Autorisierungscode abfangen, ihn nicht ohne den Code-Verifizierer gegen ein Token austauschen.

[![](https://mermaid.ink/img/pako:eNp1UsFuwjAM_RUrV5i454CEQJp6Q4xx6iVKDURtnS5JhzbEv88mUIkOckqc956fX3JW1leotIr41SNZXDlzCKYtCXh9Rgxv8_lk0XUalo2zNTT-4AgaR3WG8NWAeEfCYBLCkjVhh8HtHQYwVOXK8miaBumAj9Q-HWHLVEoa5OCD-zXJecqsjTiLCSYjEUgeZuaGv0vetZIoi33N_MoFtEnwV_cDKTfpgm-79JovNfbmrEyWZ6HIhWeMawxPZpiMIhHrXmzMkq-RnkoNJw0707jqRbCjTP_bKVawlSZX-MJajDEXHl9hXegh6p4HB25o4ORY7wlpXQykgr7v9qSDDShbwhPL7QNG9lP7MVGMbTB2EmVuMoBzFzVVLYbWuIo_51nIpeJ3aLFUmreVCXWpSrowjnP0Hz9klU6hx6nqOzFz-8hK700T8fIHBdb6DQ?type=png)](https://mermaid.live/edit#pako:eNp1UsFuwjAM_RUrV5i454CEQJp6Q4xx6iVKDURtnS5JhzbEv88mUIkOckqc956fX3JW1leotIr41SNZXDlzCKYtCXh9Rgxv8_lk0XUalo2zNTT-4AgaR3WG8NWAeEfCYBLCkjVhh8HtHQYwVOXK8miaBumAj9Q-HWHLVEoa5OCD-zXJecqsjTiLCSYjEUgeZuaGv0vetZIoi33N_MoFtEnwV_cDKTfpgm-79JovNfbmrEyWZ6HIhWeMawxPZpiMIhHrXmzMkq-RnkoNJw0707jqRbCjTP_bKVawlSZX-MJajDEXHl9hXegh6p4HB25o4ORY7wlpXQykgr7v9qSDDShbwhPL7QNG9lP7MVGMbTB2EmVuMoBzFzVVLYbWuIo_51nIpeJ3aLFUmreVCXWpSrowjnP0Hz9klU6hx6nqOzFz-8hK700T8fIHBdb6DQ)

- Der Benutzer klickt innerhalb der Anwendung auf Login.

- Die Anwendung erstellt einen kryptographisch zufälligen code_verifier und generiert daraus eine code_challenge.

- Die Anwendung leitet den Benutzer zusammen mit der code_challenge an den Autorisierungsserver (/authorizeendpoint) weiter.

- Der Autorisierungsserver leitet den Benutzer an die Anmelde- und Autorisierungsaufforderung weiter.

- Der Benutzer authentifiziert sich mit einer der konfigurierten Anmeldeoptionen und sieht möglicherweise eine Seite mit der Auflistung der Berechtigungen.

- Ihr Autorisierungsserver speichert den code_challenge und leitet den Benutzer mit einem Autorisierungscode, der für eine einmalige Verwendung gültig ist, zurück zur Anwendung.

- Die Anwendung sendet diesen Code und den code_verifier (erstellt in Schritt 2) an den Autorisierungsserver (Endpunkt /oauth/token).

- Der Autorisierungsserver verifiziert den code_challenge und den code_verifier.

- Ihr Autorisierungsserver antwortet mit einem ID-Token und einem Zugriffstoken (und optional mit einem Refresh-Token).

- Die Anwendung kann das Zugriffstoken verwenden, um eine API aufzurufen und auf Informationen über den Benutzer zuzugreifen.

- Die API antwortet mit den angeforderten Daten.


## Two Factor Authentification

Das System speichert sehr kritische und sicherheitsrelevante persönenbezogenen Daten. Potentielle Angriffe auf diese Daten müssen unbedingt vermieden und vorgebeugt werden. Dafür wird zusätzlich zu einem von dem Stakeholder gewählten Passwort, eine 2FA eingerichtet. 

Was sind gängige Methoden?

- Per SMS/Authenticator App: Diese Methode ist sehr sicher, da sie das physische Gerät benötigt. Ein Nachteil ist es jedoch, dass somit jeder Stakeholder ein Dienstgerät benötigt, welches unter anderem diese Authenticator App untersützt. Zudem laufen solche Methoden häufig über externe Dienstleister wie Google, wovon in diesem Projekt kein Nutzen gemacht werden kann aufgrund von Datenschutzbedenken,
- Per Email: Jeder Stakeholder wird bereits eine Email besitzen und könnte sich somit authorisieren. Dies ist jedoch eine schlechte UX, da sich Stakeholder somit immer in ihre Email einloggen müssten um Daten abzurufen. Dies verschwendet nicht nur zeigt, sondern sorgt dafür, dass sowohl als System als auch das Email Passwort einfach und schlecht gewählt wird um Zeit zu sparen.

Um diese Probleme vorzubeugen, bekommt jeder Mitarbeiter oder jede Mitarbeiterin, die Zugriff auf die Systeme benötigt einen kleinen Chip, mit dem das HOTP Verfahren implementiert wird.

---

- HMAC steht für "Keyed-Hash Message Authentication Code" und wird zur Überprüfung der Integrität und Authentizität von Nachrichten verwendet.
- Integrität bedeutet, dass der Inhalt der Nachricht auf dem Transportweg nicht verändert wurde; Authentizität bedeutet, dass der Empfänger die Nachricht von der richtigen Person / Personengruppe erhalten hat.
- Ein gemeinsamer geheimer Schlüssel (shared secret) wird zwischen Sender und Empfänger vereinbart.
- Der Sender generiert einen HMAC aus der Nachricht und dem Key und sendet die Nachricht zusammen mit dem HMAC.
- Der Empfänger berechnet ebenfalls den HMAC und vergleicht ihn mit dem empfangenen HMAC, um Integrität und Authentizität zu überprüfen.
- Ein Angreifer kann den HMAC nicht ändern oder eine gültige Nachricht im Namen anderer verfassen, wenn er den Key nicht kennt.

---

- Das HOTP-Verfahren basiert auf HMACs und verwendet One-Time Passwords (OTP) als Nachrichten in Form von Zählerwerten.
- Client (Zugangsschlüssel) und Server müssen ein gemeinsames Geheimnis vereinbaren und über einen synchronisierten Zähler verfügen.
- Bei einem Anmeldeversuch generiert der Zugangsschlüssel einen HMAC aus dem Zählerstand und dem geheimen Key.
- Der Server führt dieselbe Operation aus und vergleicht den gesendeten HMAC mit dem selbst errechneten HMAC.
- Durch die Erhöhung des Zählerstands nach jedem Anmeldeversuch wird der nächste HMAC unterschiedlich sein.
- Um das Problem einer nicht erkannten Anmeldung zu lösen, kann der Server zusätzlich mehrere Codes für vorherige und nachfolgende Zählerstände generieren.
- Stimmt der übermittelte Code mit einem selbst errechneten Code überein, wird die Authentifizierung akzeptiert.
- Der Server kann dann auf den aktuellen Zählerstand des Clients rückschließen und seinen eigenen Zähler anpassen.
- Es gibt einen Toleranzbereich, innerhalb dessen eine Authentifizierung noch möglich ist, um leichte Zeitabweichungen zu berücksichtigen.
- Wenn der Yubikey-Zähler außerhalb des Toleranzbereichs liegt, ist eine Authentifizierung nicht mehr möglich und ein Backup-Anmeldeverfahren wird benötigt.

Vorteile:
- Einfaches Verfahren
- Weite Verbreitung
- Zeit-unabhängig
- Keine dauerhafte Energieversorgung des Clients notwendig

Nachteile:
- Ggf. zu große Zählerabweichung bei unsachgemäßer Nutzung, => keine Anmeldung mehr möglich
- Nur Nutzung mit einem einzigen Account möglich

