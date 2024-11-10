# SERVEI FTP
El protocol de transferència de fitxers o FTP (de l'anglès File Transfer Protocol) és un programari estandarditzat per enviar fitxers entre ordinadors amb qualsevol sistema operatiu. Forma part de la capa d'aplicació del model TCP/IP.

## Diferències amb l'http
L'HTTP bàsicament corregeix errors a FTP que feien que resultés incòmode per a moltes de les petites transferències de dades de curta durada típiques de les pàgines web.

FTP utilitza una connexió amb estat que manté el directori de treball actual i altres indicadors, i cada transferència de dades requereix una connexió addicional a la qual es transfereixen les dades.[7][8] En mode "passiu", aquesta connexió addicional va del client al servidor, mentre que en mode "actiu", per defecte, aquesta connexió va del servidor al client. A causa de l'aparent inversió de rol en el mode actiu i dels números de port aleatoris per a totes les transferències de dades, els tallafocs i les passarel·les NAT tenen dificultats per gestionar FTP. HTTP és un protocol sense estat i multiplexa el control i la transferència de dades en una única connexió de client a servidor a través de números de port coneguts, cosa que facilita la travessa per passarel·les NAT i la gestió dels tallafocs.

## Com funciona
[llegeix l'explicació](https://www.geeksforgeeks.org/file-transfer-protocol-ftp-in-application-layer/)

