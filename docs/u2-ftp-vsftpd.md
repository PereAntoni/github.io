# INSTAL·LACIÓ SERVIDOR FTP

## Caracterítiques de la pràctica

Volem instal·lar un servidor FTP (File Transfer Protocol) sobre una màquina virtual.

1. **Prèvia**: La màquina virtual ja conté el servidor http apache2.
2. **Instal·lació servei**: Instal·lam el servidor vsftpd.
3. **Prova**: Provam l'usuari root del sistema operatiu
3. **Primera configuració**: Cream un usuari anònim
4. **Integram un usuari** "gestorweb" tipus CRUD (create, read, update, delete) sobre la carpeta html d'Apache2.

[LINK ERRORS COMUNS](https://www.siteground.es/kb/errores-comunes-ftp/)

## 1. Prèvia
Abans de començar es molt convenient tenir l'escriptori preparat per poder executar el filezilla i dos CMD.

La nostra màquina virtual ja té una ip de xarxa dins la xarxa local.

1. Sobre un cmd ens conectam a la nostra màquina virtual. 
2. Entram a la carpeta on tenim la màquina.
3. Feim un vagrant up per posar la màquina en marxa.
4. Esperam i després ens connectam amb vagrant ssh. 
5. Feim les actualitzacions del apt-get o apt
    - sudo apt-get upgrade
    - sudo apt-get update
    - Comprovam que no hagi donat missatges d'error

## 2i3. Instal·lació i primera prova

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
## 3. Còpia de l'arxiu de configuració.

La primera tasca és fer una còpia de l'arxiu de configuració que es troba a /etc/vsftpd.conf

El manual de configuració del vsftpd és a [manualWeb](https://security.appspot.com/vsftpd.html) i hi podem trobar 
les configuracions bàsiques del servidor.

Per algunes tasques podem fer cerques al web.

Aquest primer exercici ens permet provar amb usuari que no necessita estar creat dins del sistema operatiu del servidor. És l'usuari anonymous.

    1. Abans de tocar la configuració del sistema és MOLT CONVENIENT fer una còpia de l'arxiu de configuració inicial del vsftpd

        - sudo cp /etc/vsftpd.conf /etc/vsftpd-conf-default


## 4. Creació usuari anònim.

Per activar l'usuari anònim ho feim dins la configuració que trobam a /etc/vsftpd.conf

Editam el document fent servir l'editor nano:

        - sudo nano /etc/vsftpd.conf

Es fan les proves de funcionament.

## 5. Creació usuari CRUD

Hem de crear un usuari amb privilegis sobre la carpeta d'apache2. Seguim el [tutorial](https://ca.ubunlog.com/vsftpd-instal%c2%b7lar-un-servidor-ftp-Ubuntu/)

### 5.1 Consideracions d'usuaris

Volem saber com gestiona el SO un usuari. 

Miram el [manual](https://www.hostinger.es/tutoriales/como-ver-usuarios-en-linux#Requisitos_previos_para_ver_usuarios_de_Linux) i contestam les preguntes sobre el nostre arxiu html, document de text o paper.

    1. Quina instrucció mostra tots els usuaris del sistema?
    2. Volem veure la línia que té l'usuari vagrant, quina instrucció empram?
    3. Volem veure la línia que té l'usuari gestor, quina instrucció empram?
    4. Com llistam amb getent? Que fa aquesta instrucció?
    5. Som es llisten els grups amb getent?
    6. Quines utilitats podem emprar per tenir un GUI del sistema? 
    7. Posa la direcció i fes un comentari d'una GUI de les anteriors.
    8. Quina opció mostra sols el nom quan llistam usuaris?
    9. Podem ordenar alfabeticament els usuaris del sistema?
    10. Quins són els quatre consells per gestionar usuaris de forma segura?
    11. On podem trobar les carpetes dels usuaris?

Significat de cada línia[web](https://e-mc2.net/blog/sobre-el-archivo-etcpasswd/)







## 6. Usuari amb accés a una carpeta del servidor.
Una vegada provat el funcionament de nous usuaris. Ara volem que un usuari tengui accés a la gestió (CRUD) sobre la carpeta pública de apache2.

- Per això hem de canviar el directori home de l'usuari.

| usermod --home /var/www usuari |
----------------------------------

- Podem comprovar que l'ha canviat correctament amb l'instrucció ` cat /etc/passwd | grep usuari ` (on usuari és el nom d'usuari que volem comprovar).

- Per veure si funciona podem provar desde un programa ftp i ens conectam. 

- En cas de veure tot el sistema de fitxers del sistema operatiu del servidor: encapsulam els usuaris al `/etc/vsftpd.conf `
` chroot_local_user=YES #ENCAPSULAM ´ 
` chroot_local_user=NO #VEIM TOTS ELS DIRECTORIS HOME ´

- Al ftxer `/etc/vsftpd.conf ` hem d'afegir la línia ` allow_writeable_chroot=YES `.

- I donar permisos d'escriptura i lectura al seu grup.



## 6. Crear com a sftp

Cercam el punt i seguim el [tutorial](https://ca.ubunlog.com/vsftpd-instal%c2%b7lar-un-servidor-ftp-Ubuntu/)
