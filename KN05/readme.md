#  KN05: Administration von MongoDB 
##  A) Rechte und Rollen (40%) 
![alt text](image.png)
Nach dem ändern auf OpenairDB funktionierte es nicht mehr.

```
use OpenairDB

db.createUser({
    user: 'flurin',
    pwd: '12345678',
    roles: [
        {role: "read", db: "OpenairDB"}
    ]
})

```
```
use admin

db.createUser({
    user: 'valentin',
    pwd: '12345678',
    roles: [
        {role: 'readWrite', db: 'OpenairDB'}
    ]
})


```

![alt text](image-1.png)

### flurin (r)
![alt text](image-3.png)
### valentin (rw)
![alt text](image-2.png)

##  B) Backup und Restore (40%)
### Variante 1
Before delete
![alt text](image-4.png)
Snapshot
![alt text](image-5.png)
Löschung von Openairs
![alt text](image-6.png)
Restore des Volumes und anhängen an Instanz.
![alt text](image-7.png)

Erfolgreich restored
![alt text](image-8.png)

Ich musste keine befehle ausführen. Ich habe alles in der AWS UI gemacht.


### Variante 2
#### Dump von DB
`sudo mongodump --db OpenairDB --out /backup --username valentin --password 12345678 --authenticationDatabase admin`

![alt text](image-9.png)

#### Löschung der Openairs Tabelle
Before:
![alt text](image-10.png)
After:
![alt text](image-11.png)

#### Restore
`sudo mongorestore --db OpenairDB /backup/OpenairDB --username valentin --password 12345678 --authenticationDatabase admin`
![alt text](image-12.png)
After:![alt text](image-13.png)

## C) Skalierung (20%)
### Replikation
Replikation in MongoDB bedeutet das Kopieren von Daten von einem Server (Primär) zu einem oder mehreren anderen Servern (Sekundär). Dies dient hauptsächlich der Erhöhung der Verfügbarkeit und Zuverlässigkeit der Daten.

![alt text](image-14.png)

### Partition (Sharding)
Sharding ist das Aufteilen von Daten in kleinere, verteilte Segmente, die auf verschiedenen Servern gespeichert werden. Dies dient hauptsächlich der Skalierung und Leistungssteigerung grosser Datenmengen.

![alt text](image-15.png)

### Empfehlung an meine Firma (Google)
Bei meiner Firma, also der Suchmaschiene Google empfehle ich die Implementierung von Sharding zur Handhabung grosser Datenmengen und zur Verbesserung der Leistung. Kombiniert mit Replikation innerhalb der Shards, um Ausfallsicherheit und Verfügbarkeit zu gewährleisten.

