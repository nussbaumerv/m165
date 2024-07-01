# KN08: Datenabfrage und -Manipulation 
## A) Daten hinzufügen (20%)
[Script File](insert.txt)

## B) Daten abfragen (20%)
### Szenario 1: Alle Acts mit ihren Songs finden.
Anwendungsfall: Ich möchte alle Acts finden und die Songs auflisten, die sie aufführen.

Cypher-Statements:
```
MATCH (a:Act)
OPTIONAL MATCH (a)-[:HAS_SONGS]->(s:Song)
RETURN a.name AS Act, s.name AS Song, s.popularityIndex AS Popularität
ORDER BY a.name;

```

### Szenario 2: Finde alle Openairs mit ihren Sponsoren und Acts
Anwendungsfall: Ich möchte alle Openair-Veranstaltungen finden und die Sponsoren und Acts auflisten, die daran beteiligt sind.


Cypher-Statements:
```
MATCH (o:Openair)
OPTIONAL MATCH (o)-[:HAS_SPONSORS]->(s:Sponsor)
OPTIONAL MATCH (o)-[:HAS_ACTS]->(a:Act)
RETURN o.name AS Openair, s.name AS Sponsor, a.name AS Act
ORDER BY o.date;
```

### Szenario 3: Finde Acts mit Songs in einer bestimmten Sprache
Anwendungsfall: Ich möchte Acts finden, die Songs in der Sprache "Deutsch" aufführen.

Cypher-Statements:
```
MATCH (a:Act)-[:HAS_SONGS]->(s:Song)
WHERE s.language = "German"
RETURN a.name AS Act, s.name AS Song
ORDER BY a.name;
```
### Szenario 4: Finde Openairs mit Sponsoren, deren Werbebudget größer als 100.000 ist.
Anwendungsfall: Ich möchten Openairs finden, die von Sponsoren mit einem Werbebudget von mehr als 100.000 gesponsert werden.

Cypher-Statements:
```
MATCH (o:Openair)-[hs:HAS_SPONSORS]->(s:Sponsor)
WHERE s.adsBudget > 100000
RETURN o.name AS Openair, s.name AS Sponsor, s.adsBudget AS Budget, hs.sponsorFee AS SponsorFee
ORDER BY s.adsBudget DESC;
```

### Erklährung
Das MATCH-Statement in Neo4j wird verwendet, um Muster in der Datenbank zu finden. Es sucht nach Knoten und deren Beziehungen (Kanten) basierend auf angegebenen Kriterien.
<br>

Die OPTIONAL MATCH-Klausel in Neo4j ermöglicht es, Muster in der Datenbank zu finden, bei denen das gefundene Muster optional sein kann. Das bedeutet, dass, selbst wenn das Muster nicht gefunden wird, die übrigen Teile des Musters in das Ergebnis einbezogen werden, jedoch mit NULL-Werten für die nicht gefundenen Teile. Sie wird verwendet, um sicherzustellen, dass bestimmte Beziehungen oder Muster vorhanden sein können, aber nicht erforderlich sind, um das Ergebnis zurückzugeben.


## C) Daten löschen (20%)
Wie man hier sehen kann funktioniert die delete methode alleine nicht. Das kommt daher, da man mit dem delet befehl nur die node löscht. Die geht ja nicht, da die nodes ja noch relationships habe. Deshalb wird der fehler ausgegeben.
![alt text](image.png)
[Delete Method](delete.txt)

Bei der Detatch methode funktioniert es hingegen. Dies kommt daher, da durch das hinzufügen des Detach befehles zuerst die relationship zwischen den nodes aufgelöst. Deshalb kann der node danach problemlos gelöscht werden.
![alt text](image-1.png)
[Detach Method](detach.txt)

## D) Daten verändern (20%)

## E) Zusätzliche Klauseln (20%)


