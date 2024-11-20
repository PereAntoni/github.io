# SERVEI FTP

> El protocol de transferència de fitxers o FTP (de l'anglès File Transfer Protocol) és un programari estandarditzat per enviar fitxers entre ordinadors amb qualsevol sistema operatiu. Forma part de la capa d'aplicació del model TCP/IP.

## Descripció

FTP és un protocol de comunicació estàndard. Hi ha diversos altres protocols com HTTP 
que s'utilitzen per transferir fitxers entre ordinadors, però no tenen claredat i 
enfocament en comparació amb FTP. A més, els sistemes implicats en la connexió són heterogenis,
 és a dir, es diferencien en sistemes operatius, directoris, estructures, 
 jocs de caràcters, etc. L'FTP protegeix l'usuari d'aquestes diferències i 
 transfereix les dades de manera eficient i fiable. 
 
 FTP pot transferir fitxers ASCII, EBCDIC o imatges. L'ASCII és el format de compartició de fitxers predeterminat, en aquest, cada caràcter està codificat per NVT ASCII. En ASCII o EBCDIC la destinació ha d'estar preparada per acceptar fitxers en aquest mode. El format de fitxer d'imatge és el format predeterminat per transformar fitxers binaris.

![](https://media.geeksforgeeks.org/wp-content/uploads/20240110113246/File-Transfer-Protocol-and-HTTPS-gif-2.gif)

FTP utilitza una connexió amb estat que manté el directori de treball actual i altres indicadors, i cada transferència de dades requereix una connexió addicional a la qual es transfereixen les dades.

En mode "passiu", aquesta connexió addicional va del client al servidor, mentre que en mode "actiu", per defecte, aquesta connexió va del servidor al client. A causa de l'aparent inversió de rol en el mode actiu i dels números de port aleatoris per a totes les transferències de dades, els tallafocs i les passarel·les NAT tenen dificultats per gestionar FTP. HTTP és un protocol sense estat i multiplexa el control i la transferència de dades en una única connexió de client a servidor a través de números de port coneguts, cosa que facilita la travessa per passarel·les NAT i la gestió dels tallafocs.

## Per a què serveix FTP?

FTP és especialment útil per a:

- **Transferència de fitxers grans**: FTP pot transferir fitxers grans d'una sola vegada; per tant, és aplicable a l'allotjament de llocs web, a la còpia de seguretat de servidors o a l'ús compartit de fitxers en grans quantitats.
- **Gestió remota de fitxers** : els fitxers d'un servidor remot es poden carregar, descarregar, suprimir, canviar el nom i copiar-se segons les eleccions dels usuaris.
- **Automatització de transferències de fitxers** : FTP és un gran protocol per a l'execució de transferències de fitxers en scripts i ocupacions predefinits.
- **Accés a fitxers públics**: FTP anònim significa que tothom, independentment de la seva identitat, pot descarregar alguns fitxers sense necessitat de permisos.

## Tipus d'FTP

Hi ha diferents maneres mitjançant les quals un servidor i un client fan una transferència de fitxers mitjançant FTP. Alguns d'ells s'esmenten a continuació:

**FTP anònim**: l'FTP anònim està habilitat en alguns llocs els fitxers dels quals estan disponibles per a l'accés públic. Un usuari pot accedir a aquests fitxers sense tenir cap nom d'usuari o contrasenya. En lloc d'això, el nom d'usuari s'estableix com a anònim i la contrasenya és per al convidat per defecte. Aquí, l'accés dels usuaris és molt limitat. 

Per exemple, es pot permetre a l'usuari copiar els fitxers però no navegar pels directoris.

**FTP protegit amb contrasenya**: aquest tipus d'FTP és similar a l'anterior, però el canvi és l'ús del nom d'usuari i la contrasenya.

**FTP Secure (FTPS)**: També s'anomena FTP Secure Sockets Layer (FTP SSL). És una versió més segura de la transferència de dades FTP. Sempre que s'estableix una connexió FTP, s'habilita la seguretat de la capa de transport (TLS).
FTP sobre SSL/TLS explícit (FTPES): FTPES ajuda a actualitzar la connexió FTP del port 21 a una connexió xifrada.

**Secure FTP (SFTP)**: SFTP no és un protocol FTP, però és un subconjunt del protocol Secure Shell, ja que funciona al port 22.

## Utilitats bàsiques

FTP és especialment útil per a:

- **Transferència de fitxers grans**: FTP pot transferir fitxers grans d'una sola vegada; per tant, és aplicable a l'allotjament de llocs web, a la còpia de seguretat de servidors o a l'ús compartit de fitxers en grans quantitats.

- **Gestió remota de fitxers** : els fitxers d'un servidor remot es poden carregar, descarregar, suprimir, canviar el nom i copiar-se segons les eleccions dels usuaris.

- **Automatització de transferències de fitxers**: FTP és un gran protocol per a l'execució de transferències de fitxers en scripts i ocupacions predefinits.

- **Accés a fitxers públics**: FTP anònim significa que tothom, independentment de la seva identitat, pot descarregar alguns fitxers sense necessitat de permisos.

## Utilització del servei

- **Connectar-se al servidor FTP**: es pot connectar al servidor mitjançant l'adreça, el nom d'usuari i la contrasenya mitjançant un client FTP o una interfície de línia d'ordres. És possible que la informació anònima no necessiti un nom d'usuari i una contrasenya.

- **Navegació als directoris**: algunes ordres inclouen ls que s'utilitza per llistar directoris i cd que s'utilitza per canviar directoris.
- **Transferir fitxers**: la transferència de fitxers es pot fer mitjançant les ordres com ara get per descarregar fitxers i put per carregar fitxers.
- **Gestionar fitxers**: 
    1. Eliminar fitxers
    2. canvi de nom (Canvi de nom) i la còpia (Copia) de fitxers.
- **Tancar la connexió**: un cop s'hagi realitzat la transferència de fitxers, amb l'instrucció exit.

## Com funciona l'FTP?

FTP és un protocol de servidor client que té dos canals de comunicació, un canal d'ordres per al control de converses i un canal de dades per al contingut dels fitxers.

A continuació s'esmenten els passos en què funciona FTP:

- Un usuari ha d'iniciar sessió al servidor FTP primer, pot haver-hi alguns servidors on podeu accedir al contingut sense iniciar sessió, coneguts com a FTP anònim.
- El client pot iniciar una conversa amb el servidor, després de sol·licitar descarregar un fitxer.
- L'usuari pot iniciar diferents funcions com carregar, esborrar, canviar el nom, copiar fitxers, etc. al servidor.

![](https://media.geeksforgeeks.org/wp-content/uploads/FTP.jpg)

FTP pot funcionar en diferents modes com els modes actiu i passiu, pots mirarl'explicació al [link](https://www.geeksforgeeks.org/difference-between-active-and-passive-ftp/).

## Tipus de connexions del protocol FTP

- Connexió de Control
- Connexió de dades

### Connexió de Control
Per enviar informació de control com la identificació d'usuari, contrasenya, ordres per canviar el directori remot, ordres per recuperar i emmagatzemar fitxers, etc., FTP utilitza una connexió de control. La connexió de control s'inicia al port número 21. 

### Connexió de Dades
Per enviar el fitxer real, FTP utilitza una connexió de dades. S'inicia una connexió de dades al port número 20. 

FTP envia la informació de control fora de banda, ja que utilitza una connexió de control independent. Alguns protocols envien les seves línies de capçalera de sol·licitud i resposta i les dades a la mateixa connexió TCP. Per aquest motiu, es diu que envien la seva informació de control en banda. HTTP i SMTP en són exemples. 

![](https://media.geeksforgeeks.org/wp-content/uploads/20240103125657/FTP-Connections-660.png)

## Sessió FTP
Quan s'inicia una sessió FTP entre un client i un servidor, el **client inicia una connexió TCP de control** amb el costat del servidor. El **client envia informació de control**. Quan el **servidor ho rep**, inicia una connexió de dades al costat del client. 

Però la connexió de control roman activa durant tota la sessió de l'usuari. Com sabem, HTTP és sense estat. Però FTP ha de mantenir un estat sobre el seu usuari durant tota la sessió. 

## Clients FTP
FTP funciona en un model **client-servidor** . El client FTP és un programa que s'executa a l'ordinador de l'usuari per permetre a l'usuari parlar i obtenir fitxers d'ordinadors remots. És un conjunt d'ordres que estableix la connexió entre dos hosts, ajuda a transferir els fitxers i després tanca la connexió. 

Algunes de les ordres són: 
- obtenir el nom del fitxer (recuperar el fitxer del servidor)
- canviar el nom del fitxer (recuperar diversos fitxers del servidor)
- pujar o baixar fitxer 


## Tipus de dades FTP
El tipus de dades d'un fitxer, que determina com es representa el fitxer en general, és la primera informació que es pot proporcionar al respecte. L'estàndard FTP especifica les quatre categories següents de dades:

### ASCII: 
Descriu un fitxer de text ASCII en el qual cada línia s'indica amb el tipus de marcador de final de línia esmentat anteriorment.
### EBCDIC: 
per als fitxers que utilitzen el conjunt de caràcters EBCDIC d'IBM, aquest tipus és conceptualment idèntic a ASCII.
### Imatge: 
aquest és el mode "caixa negra" que vaig descriure anteriorment; el fitxer no té una estructura interna formal i es transfereix un byte alhora sense cap processament.
### Local: 
els fitxers que contenen dades en bytes lògics amb un nombre de bits diferent de vuit es poden gestionar amb aquest tipus de dades.

## Respostes protocol FTP
Algunes de les respostes FTP són:

- 200 - Comandament d'acord.
- 530 - No s'ha iniciat sessió.
- 331: el nom d'usuari està bé, cal una contrasenya.
- 221 – Connexió de control de tancament del servei.
- 551 – Acció sol·licitada avortada: tipus de pàgina desconegut.
- 502 - L'ordre no s'ha implementat.
- 503 – Mala seqüència d'ordres.
- 504: l'ordre no s'ha implementat per a aquest paràmetre.

## Característiques de TFTP 
- FTP utilitza TCP com a protocol de capa de transport.
- És bo per a transferències de fitxers senzilles, com ara durant el temps d'arrencada.
- Els errors en la transmissió (paquets perduts, errors de suma de verificació) han de ser gestionats pel servidor TFTP.
- Només utilitza una connexió a través del conegut port 69.
- TFTP utilitza un protocol de pas de bloqueig senzill (cal reconèixer cada paquet de dades). Per tant, el rendiment és limitat.

## Problemes de seguretat de FTP
- La informació no podia passar per un túnel segur ja que FTP no estava pensat per fer-ho. Per tant, el xifratge no està present. Un pirata informàtic no hauria de lluitar amb el xifratge per accedir o alterar les dades que es puguin utilitzar si pogués interceptar una transacció FTP.

- Fins i tot amb l'emmagatzematge al núvol FTP, les dades encara es poden interceptar i fer-ne un mal ús si el sistema del proveïdor de serveis és atacat.

- Com a resultat, les dades enviades mitjançant FTP són un objectiu per a la falsificació, l'sniffing, la força bruta i altres tipus d'atacs que es mouen una mica lentament. Un pirata informàtic pot examinar una transmissió FTP i intentar aprofitar qualsevol defecte simplement escanejant ports.

- El fet que FTP utilitzi contrasenyes de text clar (contrasenyes que no s'han xifrat) és un dels seus principals errors de seguretat. Dit d'una altra manera, "Jerry1992" apareix exactament com "Jerry1992". La contrasenya real s'amaga mitjançant un algorisme en protocols més segurs. Com a resultat, "Jerry1992" pot aparèixer com "dj18387saksng8937d9d8d7s6a8d89".  - Contrasenyes com aquesta no estan assegurades per FTP, la qual cosa fa que els actors maliciosos puguin trencar-les amb més facilitat.

## Ports FTP?
FTP funciona amb dos ports:

- **Port 21**: Com s'ha esmentat anteriorment, aquí és on s'emeten les ordres.
- **Port 20**: Aquest és el port especial necessari per a la connexió de dades on es fa la transferència real del fitxer.


## Com canviar els números de port FTP

Per canviar els números de port FTP predeterminats, seguiu aquests passos:

- Configuració del servidor d'accés: connecteu el tauler de control del vostre servidor FTP així com el fitxer de configuració del servidor FTP utilitzat.
- Modificar el número de port: esbrineu la configuració del port possible des del fitxer de configuració. Altereu el port de control, el port predeterminat és 21 i el de les dades és 20.
- Reinicieu el servei FTP: Finalment, un cop hàgiu desat els vostres canvis, heu d'aturar i reiniciar el servei FTP perquè es pugui implementar la nova configuració del port.
- Actualitza la configuració del client: assegureu-vos que tots els clients FTP que es connecten amb el servidor rebin els nous números de port.


## Avantatges de FTP
- L'ús compartit de fitxers també entra en la categoria dels avantatges de l'FTP, ja que els fitxers entre dues màquines es poden compartir a la xarxa.
- La velocitat és un dels principals avantatges de l'FTP.
- Com que no hem d'acabar totes les operacions per obtenir el fitxer sencer, és més eficient.
Utilitzant el nom d'usuari i la contrasenya, hem d'iniciar sessió al servidor FTP. Com a resultat, FTP es podria considerar més segur.
- Podem moure els fitxers d'anada i tornada mitjançant FTP. Suposem que sou el gerent de l'empresa i proporcioneu informació a tots els empleats, i tots responen al mateix servidor.

## Inconvenients de FTP
- El límit de mida dels fitxers és l'inconvenient de l'FTP, només es poden transferir fitxers de 2 GB.
- Més d'un receptor no és compatible amb FTP.
- L'FTP no xifra les dades, aquest és un dels majors inconvenients de l'FTP.
- FTP no està segur, utilitzem identificadors d'inici de sessió i contrasenyes que el fan segur, però els pirates informàtics poden atacar-los.

## Diferència entre FTP i SFTP


| FTP | SFTP |
|-----|------|
| Significa Protocol de transferència de fitxers. | Significa Secure File Transfer Protocol. |
| A FTP, no es proporciona un canal segur per transferir els fitxers entre els amfitrions. | A SFTP, es proporciona un canal segur per transferir els fitxers entre els amfitrions. |
| Normalment funciona al port no-21. | Normalment funciona al port no-22. |
| No xifra les dades abans d'enviar-les | Ha xifrat les dades abans d'enviar-les. |
| Fa la càrrega i descàrrega d'arxius sense cap seguretat. | Manté la seguretat total de les dades mitjançant l'ús de [claus SSH](https://www.geeksforgeeks.org/introduction-to-ssh-secure-shell-keys/) . |

## Reptes de seguretat FTP
L'FTP no s'ha dissenyat tenint en compte la seguretat, la qual cosa comporta diverses vulnerabilitats:

- Manca de xifratge: Això es deu al fet que les dades com ara els noms d'usuari i les contrasenyes es transmeten sense xifratge i, per tant, són fàcilment vulnerables a diferents atacs.

- Vulnerabilitats als atacs: les transmissions FTP són vulnerables a atacs com ara la falsificació, l'sniffing, la força bruta i altres atacs lents. Van suggerir que les dades poden ser interceptades i canviades fàcilment pels pirates informàtics .
- Contrasenyes de text clar: malauradament, l'autenticació del client FTP utilitza contrasenyes no xifrades, cosa que les fa vulnerables a la pirateria.

## Conclusió

FTP segueix sent un mètode potent i eficaç per transferir fitxers entre sistemes i encara preval en els casos de transferència de fitxers grans i en el curs de sistemes automatitzats. No obstant això, no inclou millores de seguretat que el fan bastant inadequat per a l'intercanvi d'informació sensible. En el cas de les transferències, s'han de fomentar els modes més segurs com SFTP o FTPS, ja que fan que les transferències siguin segures. Per tant, malgrat aquests inconvenients, FTP segueix sent útil fins als nostres dies, ja que és senzill i estabilitzat.

## Preguntes freqüents sobre FTP
- Diferenciar entre FTP i SFTP?

-    FTP és un mètode insegur i transfereix les dades en text sense format, mentre que SFTP és un mètode segur que transfereix les dades en text xifrat.


- Què és la connexió FTP passiva?

-    En FTP passiu, el client inicia tant les connexions de control com de dades al servidor.


- Quin és el port predeterminat per a FTP?

-    El port predeterminat per a FTP és 21. El port predeterminat s'utilitza per a la connexió de control quan la transferència de dades es produeix a altres ports.


- Anomeneu els dos modes de transferència de dades FTP?

-  Mode actiu
-  Mode passiu

- Quina diferència hi ha entre FTP i SFTP?

-    El protocol de transmissió de fitxers convencional s'anomena FTP. És un mètode senzill per compartir fitxers a través d'Internet. S'afegeix un grau addicional de seguretat a les transferències de fitxers amb SFTP, o Secure File Transfer Protocol, una alternativa a FTP.






Document original [geeks for geeks](https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/)

