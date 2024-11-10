# INSTAL·LACIÓ SERVIDOR FTP

## Caracterítiques de la pràctica

Volem instal·lar un servidor FTP (File Transfer Protocol) sobre una màquina virtual.

1. La maquina virtual ja conté el servidor http apache2.
2. Instal·larem el servidor vsftpd
3. Integrarem un usuari "gestorweb" tipus CRUD (create, read, update, delete) sobre la carpeta html d'Apache2.

## 1. Prèvia
Abans de començar es molt convenient tenir l'escriptori preparat per poder executar el filezilla i dos CMD.

    1. Sobre un cmd ens conectam a la nostra màquina virtual. 
    2. Entram a la carpeta on tenim la màquina.
    3. Feim un vagrant up per posar la màquina en marxa.
    4. Esperam i després ens connectam amb vagrant ssh. 
    5. Feim les actualitzacions del apt-get o apt
        - sudo apt-get upgrade
        - sudo apt-get update
        - Comprovam que no hagi donat missatges d'error

## 2. Instal·lació i primera prova
Després d'actualitzar el repositori apt ens disposam a fer l'instal·lació del servei FTP.
    1. Executam la instal·lació
        - sudo apt-get install vsftpd"
    2. Posam en marxa el servidor ftp
        - sudo service vsftpd start.
        - sudo service vsftpd status.
    3. Provam que funciona
        - Desde el Filezilla que ja tenim obert posam:
            - direcció 10.0.100.x+1 (on x= la teva posició dins l'aula * 10) 
            - usuari: vagrant
            - password: vagrant
            - port: 21 (o el deixam per defecte)
        - Ens avisa de que la connexió no es privada i li donam ok.

|El vsftpd utilitza els usuaris del sistema on està allotjat, i en aquest cas, està allotjat a una màquina virtual que té l'usuari vagrant amb el password vagrant.|
## 3. Donam servei d'usuari anonymous.
Aquest primer exercici ens permet provar amb usuari que no necessita estar creat dins del sistema operatiu del servidor. És l'usuari anonymous.
    1. Abans de tocar la configuració del sistema és MOLT CONVENIENT fer una còpia de l'arxiu de configuració inicial del vsftpd
        - sudo cp /etc/vsftpd.conf /etc/vsftpd-conf-default
    2. Ara podem editar el document fer servir l'editor nano:
        - sudo /etc/vsftpd.conf
    
