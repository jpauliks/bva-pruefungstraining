# BVA-Prüfungstraining

Browserbasiertes Prüfungstraining für den mittleren nichttechnischen Verwaltungsdienst des Bundes. Die Anwendung ist als statische Webseite auf GitHub Pages ausgelegt und funktioniert auf Smartphones und Desktopgeräten.

**Webseite:** https://jpauliks.github.io/bva-pruefungstraining/

## Aufbau

- `index.html`: Benutzeroberfläche, Aufgabenbank, Auswertung und Speicherlogik (derzeit Version 3.3).
- `README.md`: Projektdokumentation.
- Kein Backend, keine Datenbank und kein Build-Prozess erforderlich.

Die Anwendung enthält sechs Fachbereiche mit insgesamt 120 selbst erstellten Aufgaben. Unterstützt werden Einfachauswahl, Mehrfachauswahl, Zahleneingabe, Reihenfolge und Zuordnung. Es gibt Wochenfortschritt, Übungsstände und Ergebnisberichte.

## Authentifizierung und Zugriff

**Die Trainingsseite hat keine Benutzeranmeldung.** Sie verwendet keine Passwörter, Benutzerkonten, OAuth-Flows, JWTs oder anwendungseigene Session-Cookies. Ein öffentlicher GitHub-Pages-Link genügt zum Aufruf. Die Trainingsseite benötigt keine GitHub-Zugangsdaten.

Die Verwaltung des Repositorys erfolgt separat über GitHub und die dort vergebenen Zugriffsrechte. Zugangsdaten oder Tokens für GitHub werden nicht im Anwendungscode hinterlegt.

### Anfrage- und Datenfluss

1. Der Browser ruft die öffentliche GitHub-Pages-Adresse über HTTPS auf.
2. GitHub Pages liefert die statische `index.html` aus.
3. JavaScript zeigt Aufgaben an und wertet Eingaben lokal aus.
4. Entwürfe, Antworten und Ergebnisse werden im `localStorage` desselben Browsers gespeichert.
5. Ein Ergebnis kann als Textdatei heruntergeladen, kopiert oder als E-Mail-Entwurf über `mailto:` vorbereitet werden. Der tatsächliche Versand erfolgt manuell über die E-Mail-Anwendung.

Die Trainingsanwendung sendet Antworten nicht selbstständig an einen Server. Der Aktualisieren-Knopf lädt die öffentliche Seite neu; er überträgt keinen Lernstand. Beim Aufruf externer Quellenlinks verlassen Nutzer die Trainingsseite.

## Lokale Speicherung

- Aktueller Speicherschlüssel: `bva-training-v3.1`; älterer Wochenstand: `bva-week-v2`.
- Der gespeicherte Zustand enthält unter anderem Aufgabenentwürfe, Ergebnisse, Verlauf und Revisionsnummer.
- Eine Revisionsprüfung und ein `storage`-Event helfen beim Umgang mit mehreren Tabs; das ist **keine** serverseitige Synchronisierung oder sichere Zugriffskontrolle.
- Andere Geräte und Browser übernehmen den Stand nicht automatisch.
- Gelöschte Browserdaten oder gesperrter lokaler Speicher können zu Datenverlust führen. Ergebnisberichte sollten bei Bedarf separat gesichert werden.

## Datenschutz und Sicherheitsgrenzen

- `localStorage` ist keine verschlüsselte, personenbezogen geschützte Datenbank. Personen mit Zugriff auf dasselbe Browserprofil können gegebenenfalls gespeicherte Ergebnisse lesen.
- Die Anwendung besitzt keine Benutzeridentifikation und keine manipulationssichere Prüfungsaufsicht. Wochen- und Fachregeln werden clientseitig durchgesetzt.
- Der im HTML-Code hinterlegte E-Mail-Empfänger ist öffentlich im Quelltext sichtbar.
- E-Mail-Entwürfe können Ergebnisdaten enthalten; die Weitergabe erfolgt erst durch die nutzende Person. Bei Nutzung von E-Mail gelten die Datenschutzbedingungen des jeweiligen E-Mail-Dienstes.
- **Keine Geheimnisse in `index.html` oder andere öffentlich ausgelieferte Dateien eintragen:** keine Passwörter, API-Schlüssel oder Zugriffstokens.

## Entwicklung und Veröffentlichung

Die Anwendung kann durch Bearbeiten der `index.html` im Branch `main` weiterentwickelt werden. Die Veröffentlichung erfolgt über die für das Repository konfigurierte GitHub-Pages-Bereitstellung. Nach Änderungen die veröffentlichte Seite neu laden und insbesondere auf einem iPhone prüfen:

- laufende Übung unterbrechen und fortsetzen,
- automatische Speicherung und Wiederherstellung,
- Navigation zwischen Aufgaben ohne unerwünschten Sprung zum Wochenüberblick,
- Wochenlogik und Fachsperren nach Testabgabe,
- Auswertung sowie Kopieren, Download und E-Mail-Entwurf.

## Grenzen der Lerninhalte

Die enthaltenen Fragen sind selbst erstelltes Übungsmaterial, keine amtlichen Originalprüfungen. Rechtsgrundlagen und Antworten müssen vor der Prüfung auf den maßgeblichen Rechtsstand geprüft werden. Interaktive Kurzaufgaben ersetzen keine ausführliche Fallbearbeitung im Gutachtenstil.

## Weiterentwicklung

Vorrangig sind Stabilität der Fragenavigation, zuverlässige Speicherung und Prüfung der Wochenlogik sowie des Ergebnisversands. Ein eigenes Login-System ist für den derzeitigen Einsatzzweck nicht vorgesehen.
