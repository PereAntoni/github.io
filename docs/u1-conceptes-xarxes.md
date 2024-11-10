# Conceptes bàsics sobre Xarxes Locals
1. Introducció
2. Components d’una xarxa
3. Classificació de les xarxes
4. Estàndards de xarxa
5. Model OSI
6. Model TCP/IP
7. Internet Protocol (IP)
8. IPv4
9. IPv6
10.Subnetting Tamany fixe
11. VLSM

## 1. Introducció
La comunicació no és més que un intercanvi d'informació, aquest intercanvi
pot ser local o remot.

1. Xarxa: Conjunt de dispositius autònoms, sovint anomenats nodes, amb
capacitat d'interconnexió.

2. Comunicació de dades: Moviment d'informació codificada d'un punt a un
altre per mitjà de sistemes de transmissió elèctrica, òptica o ràdio.

3. Canal de comunicació: Medi usat pels dispositius per comunicar-se.

4. Xarxa de computadors: sistema d'interconnexió entre ordinadors que permet
compartir recursos i informació.

5. Protocol: Conjunt de normes i procediments hard / soft que permeten la
comunicació entre sistemes, controlant que la informació es transmeti
sense error, i organitzant la comunicació.

## 2. Components d’una xarxa
Una xarxa d’àrea local, xarxa local o LAN (de l’anglès local area
network) és la interconnexió de diversos ordinadors i perifèrics.

El terme xarxa local inclou tant el maquinari com el programari necessari
per a la interconnexió dels diferents dispositius i el tractament de la
informació. Hi ha molts components que poden formar part d’una xarxa, per
exemple ordinadors personals, servidors, dispositius de xarxa i cables.

Aquests components es poden agrupar en cinc categories principals:
- Hosts.
- Perifèrics compartits.
- Dispositius de xarxa.
- Medis de xarxa.
- Protocols i regles.

### 2.1 Host

Els hosts envien i reben tràfic dels usuaris.

Host és un nom genèric per la majoria dels dispositius d’usuari final.

Els ordinadors personals i les impressores connectades a la xarxa són
alguns exemples de hosts.

### 2.2 Perifèrics compartits

Els dispositius perifèrics compartits no es comuniquen directament a
través de la xarxa.

Els perifèrics utilitzen al host al que estan connectats per realitzar
totes les operacions de xarxa.

Alguns exemples de perifèrics compartits poden ser les càmeres, els
escàners i les impressores connectades localment.

### 2.3 Dispositius de xarxa
Els dispositius de xarxa es connecten a altres dispositius,
principalment hosts.

- Targetes de xarxa
- Encaminadors (router)
- Commutador (switch)
- Concentrador (hub)
- Punt d’accés: concentrador a una xarxa sense fils
- Repetidors
- Ponts (bridge)
- Altres: telèfons IP, mòdems, etc.

#### 2.3.1 Encaminador (router)

Serveix per interconnectar xarxes diferents.

Els protocols de comunicació de les diferents xarxes han de ser
iguals i compatibles, a les capes superiors.

Dirigeix els paquets que rep fins a la seva destinació després
d’haver trobat la millor ruta, a partir de l’algoritme i la
taula d’encaminament.

Disposa d’una adreça pròpia a escala de xarxa (per exemple,
adreça IP)

#### 2.3.2 Concentrador (hub)

Reb un senyal en un port i el copia a tots els altres ports.

Regenera i reenvia els senyals de xarxa (com un repetidor)

De 8, 16 i 24 ports.

#### 2.3.3 Commutador (switch)

Regenera el senyal i el difon basant-se en les adreces MAC.

Actualment substitueixen als concentradors.

Evita dominis de col·lisió.

#### 2.3.4 Punt d’accès (access point) a una xarxa sense fils.

És un dispositiu que interconnecta dispositius de comunicació sense fils
per formar una xarxa sense fils.

Funciona de manera similar a un switch però sense fils.

#### 2.3.5 Repetidor

Regenera i reenvia els senyals de xarxa a nivell de bits.

Senyal es deteriora i es debilita (senyals elèctrics, polsos de llum, …)

Distàncies més llargues.

#### 2.3.6 Medis de xarxa

- Guiats
-- Coure: ones electromagnètiques
-- Fibra òptica: polsos lluminosos

- No guiats
-- Ones de ràdio: WIFI
-- Ones infrarotges: comandaments
a distància
-- Microones: Bluetooth

#### 2.3.7 Protocol

- Controlen diferents aspectes: construcció de la xarxa física, connexió
dels nodes, format de les dades, etc.

- Actualment l’estàndard de la industria en xarxes és TCP/IP (protocol de
control de transmissió/protocol d’Internet).

- TCP/IP s’utilitza en xarxes comercials i do- mèstiques, i també és el
protocol primari d’Internet.

- Són els protocols TCP/IP els que especifiquen els mecanismes de
formateig, d’encaminament que garantissin que els nostres missatges
siguin entregats als destinataris correctes.


## 3. Classificació de les xarxes
### 3.1 Extensió geogràfica
- PAN
- LAN
- MAN
- NAN
- WAN
### 3.2 Titularitat
- Xarxa privada
- Xarxa pública
### 3.3 Topologia
- Bus
- Estrella
- Anell
- Arbre
- Malla
- Doble anell
- Mixt
### 3.4 Funció del host
- Client/servidor
- Peer to peer

## 4. Estàndards de xarxa
### 4.1 Model OSI
El model de referència OSI es defineix en set capes
numerades, i cada una defineix una funció especifica de la
xarxa:

| **Capa 7: capa d’aplicació.**       |
|-------------------------------------|
| **Capa 6: capa de presentació.**    |
|                                     |
| **Capa 5: capa de sessió.**         |
|                                     |
|                                     |
| **Capa 4: capa de transport.**      |
|                                     |
|                                     |
| **Capa 3: capa de xarxa.**          |
|                                     |
|                                     |
| **Capa 2: capa d’enllaç de dades.** |
|                                     |
|                                     |
| Capa 1: capa física.                |

5. Model OSI
6. Model TCP/IP
7. Internet Protocol (IP)
8. IPv4
9. IPv6
10.Subnetting Tamany fixe
11. VLSM
