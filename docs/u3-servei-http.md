# PRÀCTICA: INSTALACIÓ D'UN SERVEIDOR APACHE SOBRE UNA MÀQUINA VIRTUAL.

## Característiques de la pràctica
Volem instalar un servidor de http sobre la màquina virtual del nostre ordinador. Tendrà les característiques:
1. El servidor és un apache2
2. Està muntat sobre una maquina virtual al virtual box
3. Ha de ser accessible dins la xarxa d'aula. Actualment hem fet una distribució de 10.0.100.X+1/16
4. Cream les màquines usant [vagrant]https://developer.hashicorp.com/vagrant/docs.

## Instruccions per realitzar la pràctica
Per fer l'instal·lació seguim el manual de [devopscube]https://devopscube.com/vagrant-tutorial-beginners/.

S'ha triat aquest manual per que conté les proves d'instal·lació i comprovació pas a pas, desde local fins a fora de la xarxa.

* Sols s'ha de fer fins a l'instal·lació d'apache i proves.

## Entrega de la pràctica
S'ha de crear un html que amb les pràctiques anteriors i aquesta, on s'han de respondre les preguntes de l'[arxiu] https://docs.google.com/document/d/1cy9ntr3vyZx_EKqyOVfURuP5bXZ8gHDu4ClTY3JtNE8/edit?usp=sharing

### Format d'entrega
L'HTML és el llenguatge de marques que empren el navegadors. Per entregar les pràctiques aprendrem i usarem  aquest llenguatge.Hi ha molt de material per aprendre a la xarxa, la pàgina https://www.w3schools.com/ és la de referència.

Un  document html té un esquema bàsic, pas un exemple per que el modifiqueu i poseu les pràctiques.

Sobre [aquest]https://drive.google.com/file/d/1tIpNRhY9TGHBg0R1HMXjr09ER6tJbBT1/view?usp=sharing esquelet de html documentam les pràctiques.

Consulta i aprèn a la web de referència [w3schools]https://www.w3schools.com/html/. 

### EXERCICIS

manual sencer apache2 (versio httpd) https://www.dedoimedo.com/computers/www.dedoimedo.com-apache-web-server-lm.pdf

| Rule no. 1: don’t panic! The list before you might seem intimidating at the moment, but that is simply because you are not yet familiar with Apache. |

Cerca al manual  apache2 (versio httpd) https://www.dedoimedo.com/computers/www.dedoimedo.com-apache-web-server-lm.pdf la taula de localitzacions del 

1. En quina carpeta es troben els logs?


2. Quins tipus de fitxer log trobam dins la carpeta anterior.


3. Volem saber les vegades que s’ha accedit desde una ip del vostre ordinador d’aula.Quina instrucció usarem. 


4. Ves a la carpeta del server.pid i quin pid té el servidor. Posa les instruccions


5. Quines instruccions s’usen per posar el servidor en marxa, per aturar, per sabetr l'estat i per reiniciar?


6. Fer una copia de l’index.html del servidor, posali nom index-copia.html		


7. Edita un document index.html i posa el teu nom.

# PREGUNTES PER PROVAR I VALORAR ELS CONEIXEMENTS
# Tipus Test Interactiu - Shell i Comandes
<script>
let score = 0;
function checkAnswer(button, isCorrect) {
  // Restableix tots els botons al seu estat inicial
  const buttons = button.parentNode.querySelectorAll('button');
  buttons.forEach(btn => {
    btn.style.backgroundColor = '';
    btn.style.color = '';
    btn.disabled = false; // Permet tornar a provar
  });

  if (isCorrect) {
    // Marca el botó correcte i incrementa l'encert
    button.style.backgroundColor = '#d4edda';
    button.style.color = '#155724';
    button.textContent = button.textContent.replace(" ✅ Correcte!", "") + " ✅ Correcte!";
    updateScore(1);
  } else {
    // Marca el botó incorrecte
    button.style.backgroundColor = '#f8d7da';
    button.style.color = '#721c24';
    button.textContent = button.textContent.replace(" ❌ Incorrecte!", "") + " ❌ Incorrecte!";
  }
}

function updateScore(value) {
  // Actualitza el marcador d'encerts
  score += value;
  document.getElementById('score').textContent = score;
}
</script>
<style>
    button {
        display: grid;
        margin: 2px
        }
</style>

**Encerts: <span id="score">0</span>**
---

### Pregunta 1: Què fa la instrucció `ls`?
<div id="q1">
<button onclick="checkAnswer(this, true)">a) Llista els fitxers i directoris</button>
<button onclick="checkAnswer(this, false)">b) Mostra el contingut d'un fitxer</button>
<button onclick="checkAnswer(this, false)">c) Crea un nou fitxer</button>
<button onclick="checkAnswer(this, false)">d) Esborra un fitxer</button>
</div>

---

### Pregunta 2: Quina comanda mostra el directori actual?
<div id="q2">
<button onclick="checkAnswer(this, false)">a) `ls`</button>
<button onclick="checkAnswer(this, true)">b) `pwd`</button>
<button onclick="checkAnswer(this, false)">c) `cd`</button>
<button onclick="checkAnswer(this, false)">d) `chmod`</button>
</div>

---

### Pregunta 3: Com pots cercar un fitxer amb la paraula "document" al seu nom?
<div id="q3">
<button onclick="checkAnswer(this, true)">a) `ls | grep "document"`</button>
<button onclick="checkAnswer(this, false)">b) `cat | grep "document"`</button>
<button onclick="checkAnswer(this, false)">c) `pwd "document"`</button>
<button onclick="checkAnswer(this, false)">d) `chmod "document"`</button>
</div>

---

### Pregunta 4: Què fa la comanda `cd ..`?
<div id="q4">
<button onclick="checkAnswer(this, true)">a) Puja un nivell en la jerarquia de directoris</button>
<button onclick="checkAnswer(this, false)">b) Canvia al directori arrel</button>
<button onclick="checkAnswer(this, false)">c) Llista els fitxers del directori anterior</button>
<button onclick="checkAnswer(this, false)">d) Reseteja el terminal</button>
</div>

---

### Pregunta 5: Quina comanda es fa servir per canviar els permisos d’un fitxer?
<div id="q5">
<button onclick="checkAnswer(this, false)">a) `ls -l`</button>
<button onclick="checkAnswer(this, true)">b) `chmod`</button>
<button onclick="checkAnswer(this, false)">c) `cd`</button>
<button onclick="checkAnswer(this, false)">d) `pwd`</button>
</div>

---

### Pregunta 6: Com pots redirigir la sortida d’un comandament a un fitxer?
<div id="q6">
<button onclick="checkAnswer(this, false)">a) `ls | fitxer.txt`</button>
<button onclick="checkAnswer(this, true)">b) `ls > fitxer.txt`</button>
<button onclick="checkAnswer(this, false)">c) `ls >> fitxer.txt`</button>
<button onclick="checkAnswer(this, false)">d) `ls < fitxer.txt`</button>
</div>

---

### Pregunta 7: Què fa la comanda `grep`?
<div id="q7">
<button onclick="checkAnswer(this, false)">a) Mostra els permisos d’un fitxer</button>
<button onclick="checkAnswer(this, false)">b) Canvia a un altre directori</button>
<button onclick="checkAnswer(this, true)">c) Cerca patrons dins d’un fitxer</button>
<button onclick="checkAnswer(this, false)">d) Esborra un fitxer</button>
</div>

---

### Pregunta 8: Quin és el significat del símbol `|` (pipe)?
<div id="q8">
<button onclick="checkAnswer(this, true)">a) Redirigeix la sortida d’un comandament com a entrada per a un altre</button>
<button onclick="checkAnswer(this, false)">b) Indica un directori</button>
<button onclick="checkAnswer(this, false)">c) Crea un fitxer nou</button>
<button onclick="checkAnswer(this, false)">d) Canvia els permisos d’un fitxer</button>
</div>

---

### Pregunta 9: Com pots mostrar el contingut d’un fitxer?
<div id="q9">
<button onclick="checkAnswer(this, false)">a) `ls`</button>
<button onclick="checkAnswer(this, true)">b) `cat`</button>
<button onclick="checkAnswer(this, false)">c) `chmod`</button>
<button onclick="checkAnswer(this, false)">d) `pwd`</button>
</div>

---

### Pregunta 10: Què indica el directori `/`?
<div id="q10">
<button onclick="checkAnswer(this, true)">a) El directori arrel</button>
<button onclick="checkAnswer(this, false)">b) El directori personal</button>
<button onclick="checkAnswer(this, false)">c) Un directori buit</button>
<button onclick="checkAnswer(this, false)">d) Un fitxer executat recentment</button>
</div>

### Contingut de usuaris.txt
```
user1:x:1001:1001:Usuari 1:/home/user1:/bin/bash
user2:x:1002:1002:Usuari 2:/home/user2:/bin/bash
admin:x:0:0:Administrador:/root:/bin/bash
guest:x:1003:1003:Usuari Convidat:/home/guest:/bin/false
backup:x:1004:1004:Usuari Còpies:/var/backups:/bin/bash
```

### Pregunta 11: Què fa la comanda cat usuaris.txt?
<div id="q11">
<button onclick="checkAnswer(this, true)">a) Mostra el contingut del fitxer a la consola</button>
<button onclick="checkAnswer(this, false)">b) Crea un nou fitxer amb el nom usuaris.txt</button>
<button onclick="checkAnswer(this, false)">c) Esborra el fitxer usuaris.txt</button>
<button onclick="checkAnswer(this, false)">d) Canvia els permisos del fitxer usuaris.tx</button>
</div>

### Pregunta	12	. 	Com cercaries al fitxer usuaris.txt els usuaris que tenen /bin/bash com a shell?	

<div id='q12'>			
<button onclick='checkAnswer(this, true)'	>		a) grep "/bin/bash" usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		b) grep "bash" usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		c) ls -l /bin/bash usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		d) cat bash | usuaris.txt	</button>
</div>				
				
### Pregunta	13		Quina comanda mostra només els usuaris administradors (amb UID 0)?	
<div id='q13'>			
<button onclick='checkAnswer(this, true)'	>		a) grep ":0:" usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		b) grep "admin" usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		c) grep "/root" usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		d) grep "x:0:" usuaris.txt	</button>
</div>				
				
### Pregunta	14		Com pots comptar quants usuaris hi ha al fitxer usuaris.txt?	
<div id='q14'>			
<button onclick='checkAnswer(this, true)'	>		a) cat usuaris.txt | wc -l	</button>
<button onclick='checkAnswer(this, false)'	>		b) grep "user" usuaris.txt | wc -l	</button>
<button onclick='checkAnswer(this, false)'	>		c) ls usuaris.txt | wc -l	</button>
<button onclick='checkAnswer(this, false)'	>		d) grep "x:" usuaris.txt | wc -c	</button>
</div>				
				
### Pregunta	15		Quin comandament llistarà només els usuaris convidats?	
<div id='q15'>			
<button onclick='checkAnswer(this, false)'	>		a) grep "guest" usuaris.txt	</button>
<button onclick='checkAnswer(this, false)'	>		b) grep "Usuari" usuaris.txt	</button>
<button onclick='checkAnswer(this, true)'	>		c) cat usuaris.txt | grep "/home/guest"	</button>
<button onclick='checkAnswer(this, false)'	>		d) ls | grep "guest"	</button>
</div>				
				
### Pregunta	16		Què fa la comanda > sortida.txt després d'executar un comandament?	
<div id='q16'>			
<button onclick='checkAnswer(this, true)'	>		a) Sobreescriu el fitxer sortida.txt amb la sortida del comandament	</button>
<button onclick='checkAnswer(this, false)'	>		b) Afegeix la sortida del comandament al fitxer sortida.txt	</button>
<button onclick='checkAnswer(this, false)'	>		c) Crea un nou fitxer buit	</button>
<button onclick='checkAnswer(this, false)'	>		d) No fa res, només redirigeix errors	</button>
</div>				
				
### Pregunta	17		Quina diferència hi ha entre grep "bash" usuaris.txt > resultat.txt i grep "bash" usuaris.txt >> resultat.txt?	
<div id='q17'>			
<button onclick='checkAnswer(this, true)'	>		a) > sobreescriu el fitxer i >> afegeix contingut al fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		b) > crea un fitxer nou i >> només llista resultats	</button>
<button onclick='checkAnswer(this, false)'	>		c) No hi ha cap diferència	</button>
<button onclick='checkAnswer(this, false)'	>		d) > mostra errors i >> només mostra resultats	</button>
</div>				
				
### Pregunta	18		Què fa la comanda /ls -l ?	
<div id='q18'>			
<button onclick='checkAnswer(this, true)'	>		a) Mostra el contingut del directori arrel en format detallat	</button>
<button onclick='checkAnswer(this, false)'	>		b) Llista tots els fitxers de manera recursiva	</button>
<button onclick='checkAnswer(this, false)'	>		c) Mostra els permisos d'un fitxer específic	</button>
<button onclick='checkAnswer(this, false)'	>		d) Accedeix al directori arrel	</button>
</div>				
<div id='c18'>[dubte](https://es.stackoverflow.com/questions/456445/que-significa-2-en-bash)</div>				
### Pregunta	19		Per a què serveix la comanda cd /home?	
<div id='q19'>			
<button onclick='checkAnswer(this, true)'	>		a) Canvia al directori /home	</button>
<button onclick='checkAnswer(this, false)'	>		b) Llista el contingut del directori /home	</button>
<button onclick='checkAnswer(this, false)'	>		c) Esborra el directori /home	</button>
<button onclick='checkAnswer(this, false)'	>		d) Mostra la ruta completa del directori /home	</button>
</div>				
				
### Pregunta	20		Com pots redirigir la sortida d'un error a un fitxer específic?	
<div id='q20'>			
<button onclick='checkAnswer(this, true)'	>		a) comandament 2> error.txt	</button>
<button onclick='checkAnswer(this, false)'	>		b) comandament > error.txt	</button>
<button onclick='checkAnswer(this, false)'	>		c) comandament >> error.txt	</button>
<button onclick='checkAnswer(this, false)'	>		d) comandament | error.txt	</button>
</div>				
				
### Pregunta	21		Quin comandament utilitzaries per combinar la sortida de dos fitxers en un sol fitxer?	
<div id='q21'>			
<button onclick='checkAnswer(this, true)'	>		a) cat fitxer1 fitxer2 > combinat.txt	</button>
<button onclick='checkAnswer(this, false)'	>		b) grep fitxer1 fitxer2 > combinat.txt	</button>
<button onclick='checkAnswer(this, false)'	>		c) ls fitxer1 fitxer2 > combinat.txt	</button>
<button onclick='checkAnswer(this, false)'	>		d) pwd fitxer1 fitxer2 > combinat.txt	</button>
</div>				
				
### Pregunta	22		Com pots buscar de manera insensible a majúscules i minúscules amb grep?	
<div id='q22'>			
<button onclick='checkAnswer(this, true)'	>		a) grep -i "text" fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		b) grep -c "text" fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		c) grep -v "text" fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		d) grep "text" fitxer	</button>
</div>				
				
### Pregunta	23		Què fa ls -l | grep "test"?	
<div id='q23'>			
<button onclick='checkAnswer(this, true)'	>		a) Llista els fitxers del directori que contenen la paraula "test"	</button>
<button onclick='checkAnswer(this, false)'	>		b) Esborra els fitxers que contenen la paraula "test"	</button>
<button onclick='checkAnswer(this, false)'	>		c) Mostra només els directoris que contenen "test"	</button>
<button onclick='checkAnswer(this, false)'	>		d) Redirigeix la sortida al fitxer "test"	</button>
</div>				
				
### Pregunta	24		Quina instrucció mostra el nombre total de línies d'un fitxer?	
<div id='q24'>			
<button onclick='checkAnswer(this, true)'	>		a) wc -l fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		b) ls -l fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		c) grep -l fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		d) pwd -l fitxer	</button>
</div>				
				
### Pregunta	25		Per què s'utilitza chmod 755 fitxer?	
<div id='q25'>			
<button onclick='checkAnswer(this, true)'	>		a) Per canviar els permisos del fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		b) Per mostrar el contingut del fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		c) Per moure el fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		d) Per redirigir el fitxer	</button>
</div>				
				
### Pregunta	26		Què fa la comanda grep -v "bash" usuaris.txt?	
<div id='q26'>			
<button onclick='checkAnswer(this, true)'	>		a) Mostra les línies que no contenen "bash"	</button>
<button onclick='checkAnswer(this, false)'	>		b) Mostra les línies que contenen "bash"	</button>
<button onclick='checkAnswer(this, false)'	>		c) Redirigeix la sortida al fitxer "usuaris.txt"	</button>
<button onclick='checkAnswer(this, false)'	>		d) Llista tots els usuaris que tenen "bash"	</button>
</div>				
				
### Pregunta	27		Com pots mostrar els permisos d'un fitxer?	
<div id='q27'>			
<button onclick='checkAnswer(this, true)'	>		a) ls -l fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		b) chmod fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		c) grep fitxer	</button>
<button onclick='checkAnswer(this, false)'	>		d) pwd fitxer	</button>
</div>				
				
### Pregunta	28		Com es pot combinar la sortida d'un comandament amb l'entrada d'un altre?	
<div id='q28'>			
<button onclick='checkAnswer(this, false)'	>		a) Amb cat |	</button>
<button onclick='checkAnswer(this, false)'	>		b) Amb >>	</button>
<button onclick='checkAnswer(this, false)'	>		c) Amb >	</button>
<button onclick='checkAnswer(this, true)'	>		d) Amb |	</button>
</div>				
				
### Pregunta	29		Què indica el símbol / en la jerarquia de directoris?	
<div id='q29'>			
    <button onclick='checkAnswer(this, false)'	>		a) Directori actual	</button>
    <button onclick='checkAnswer(this, true)'	>		b) Directori arrel	</button>
    <button onclick='checkAnswer(this, false)'	>		c) Directori anterior	</button>
    <button onclick='checkAnswer(this, false)'	>		d) Directori home	</button>
</div>				
				
### Pregunta	30		Com pots saber quina és la teva ubicació actual en el sistema?	
<div id='q30'>			
    <button onclick='checkAnswer(this, false)'	>		a) cd	</button>
    <button onclick='checkAnswer(this, false)'	>		b) ls -l	</button>
    <button onclick='checkAnswer(this, true)'	>		c) pwd	</button>
    <button onclick='checkAnswer(this, false)'	>		d) chmod	</button>
</div>



Test Tipus - Shell Instruccions
Preguntes

1. Què fa la instrucció ls?
a. Mostra el contingut d'un fitxer
b. Llista els fitxers i directoris
c. Crea un nou fitxer
d. Esborra un fitxer
Resposta correcta: b

Què afegeix l'opció -l a la instrucció ls?

a) Mostra informació detallada sobre els fitxers
b) Esborra els fitxers llistats
c) Llista només els directoris
d) Copia els fitxers a un altre lloc
Resposta correcta: a

Quin és l'efecte de l'ordre chmod?

a) Mostra les propietats d'un fitxer
b) Canvia els permisos d'un fitxer o directori
c) Mou fitxers entre directoris
d) Llista els processos actius al sistema
Resposta correcta: b

Com es pot buscar una paraula específica dins d’un fitxer amb grep?

a) grep paraula fitxer
b) grep fitxer paraula
c) ls paraula | fitxer
d) chmod paraula fitxer
Resposta correcta: a

Quina diferència hi ha entre > i >>?

a) > sobreescriu el contingut i >> afegeix contingut
b) > copia fitxers i >> els mou
c) > crea directoris i >> els esborra
d) Cap diferència, són equivalents
Resposta correcta: a

Per a què serveixen les "tuberies" (|) en Shell?

a) Connectar la sortida d'un comandament amb l'entrada d'un altre
b) Redirigir la sortida a un fitxer
c) Especificar permisos
d) Ordenar directoris
Resposta correcta: a

Quina instrucció mostra el directori actual?

a) pwd
b) ls -l
c) cd ..
d) chmod
Resposta correcta: a

Com pots crear un fitxer buit amb Shell?

a) touch fitxer
b) ls fitxer
c) chmod fitxer
d) pwd fitxer
Resposta correcta: a

Quina instrucció permet canviar de directori?

a) cd
b) ls
c) pwd
d) chmod
Resposta correcta: a

Per a què serveix / en el Shell?

a) Indica el directori arrel
b) Especifica un permís
c) Mostra el contingut d'un fitxer
d) Reanomena un fitxer
Resposta correcta: a

Preguntes addicionals
Quin comandament utilitzaries per veure fitxers ocults?

a) ls -a
b) ls -l
c) cd ..
d) chmod
Resposta correcta: a

Com esborres un fitxer amb Shell?

a) rm fitxer
b) ls -l fitxer
c) cd fitxer
d) chmod fitxer
Resposta correcta: a

Quin és l'efecte de ls /?

a) Llista els fitxers del directori arrel
b) Mostra els permisos del directori arrel
c) Canvia al directori arrel
d) Esborra el directori arrel
Resposta correcta: a

Què fa el comandament cd ..?

a) Canvia al directori superior
b) Esborra el directori actual
c) Llista el contingut del directori actual
d) Reanomena el directori actual
Resposta correcta: a

Per redirigir la sortida d'un comandament a un fitxer utilitzaries:

a) >
b) >>
c) |
d) Totes són correctes
Resposta correcta: d

Com s'afegeix contingut a un fitxer existent sense sobreescriure’l?

a) >> fitxer
b) > fitxer
c) | fitxer
d) chmod fitxer
Resposta correcta: a

Quina ordre permet veure l'ús d'un directori específic?

a) du
b) ls
c) pwd
d) chmod
Resposta correcta: a

Com mostres només les línies que contenen una paraula específica en un fitxer?

a) grep "paraula" fitxer
b) ls "paraula" fitxer
c) chmod "paraula" fitxer
d) pwd "paraula" fitxer
Resposta correcta: a

Per a què serveix el comandament mv?

a) Mou o reanomena fitxers i directoris
b) Llista els fitxers d'un directori
c) Redirigeix la sortida a un fitxer
d) Esborra un fitxer
Resposta correcta: a

Com mostres els processos actius al sistema?

a) ps
b) ls -l
c) pwd
d) grep
Resposta correcta: a





### Pregunta 12: Com cercaries al fitxer usuaris.txt els usuaris que tenen /bin/bash com a shell?

a) grep "/bin/bash" usuaris.txt
b) grep "bash" usuaris.txt
c) ls -l /bin/bash usuaris.txt
d) cat bash | usuaris.txt
Resposta correcta: a

Quina comanda mostra només els usuaris administradors (amb UID 0)?

a) grep ":0:" usuaris.txt
b) grep "admin" usuaris.txt
c) grep "/root" usuaris.txt
d) grep "x:0:" usuaris.txt
Resposta correcta: a

Com pots comptar quants usuaris hi ha al fitxer usuaris.txt?

a) cat usuaris.txt | wc -l
b) grep "user" usuaris.txt | wc -l
c) ls usuaris.txt | wc -l
d) grep "x:" usuaris.txt | wc -c
Resposta correcta: a

Quin comandament llistarà només els usuaris convidats?

a) grep "guest" usuaris.txt
b) grep "Usuari" usuaris.txt
c) cat usuaris.txt | grep "/home/guest"
d) ls | grep "guest"
Resposta correcta: c

Què fa la comanda > sortida.txt després d'executar un comandament?

a) Sobreescriu el fitxer sortida.txt amb la sortida del comandament
b) Afegeix la sortida del comandament al fitxer sortida.txt
c) Crea un nou fitxer buit
d) No fa res, només redirigeix errors
Resposta correcta: a

Quina diferència hi ha entre grep "bash" usuaris.txt > resultat.txt i grep "bash" usuaris.txt >> resultat.txt?

a) > sobreescriu el fitxer i >> afegeix contingut al fitxer
b) > crea un fitxer nou i >> només llista resultats
c) No hi ha cap diferència
d) > mostra errors i >> només mostra resultats
Resposta correcta: a

Què fa la comanda ls -l /?

a) Mostra el contingut del directori arrel en format detallat
b) Llista tots els fitxers de manera recursiva
c) Mostra els permisos d'un fitxer específic
d) Accedeix al directori arrel
Resposta correcta: a

Per a què serveix la comanda cd /home?

a) Canvia al directori /home
b) Llista el contingut del directori /home
c) Esborra el directori /home
d) Mostra la ruta completa del directori /home
Resposta correcta: a

Com pots redirigir la sortida d'un error a un fitxer específic?

a) comandament 2> error.txt
b) comandament > error.txt
c) comandament >> error.txt
d) comandament | error.txt
Resposta correcta: a

Quin comandament utilitzaries per combinar la sortida de dos fitxers en un sol fitxer?

a) cat fitxer1 fitxer2 > combinat.txt
b) grep fitxer1 fitxer2 > combinat.txt
c) ls fitxer1 fitxer2 > combinat.txt
d) pwd fitxer1 fitxer2 > combinat.txt
Resposta correcta: a

Com pots buscar de manera insensible a majúscules i minúscules amb grep?

a) grep -i "text" fitxer
b) grep -c "text" fitxer
c) grep -v "text" fitxer
d) grep "text" fitxer
Resposta correcta: a

Què fa ls -l | grep "test"?

a) Llista els fitxers del directori que contenen la paraula "test"
b) Esborra els fitxers que contenen la paraula "test"
c) Mostra només els directoris que contenen "test"
d) Redirigeix la sortida al fitxer "test"
Resposta correcta: a

Quina instrucció mostra el nombre total de línies d'un fitxer?

a) wc -l fitxer
b) ls -l fitxer
c) grep -l fitxer
d) pwd -l fitxer
Resposta correcta: a

Per què s'utilitza chmod 755 fitxer?

a) Per canviar els permisos del fitxer
b) Per mostrar el contingut del fitxer
c) Per moure el fitxer
d) Per redirigir el fitxer
Resposta correcta: a

Què fa la comanda grep -v "bash" usuaris.txt?

a) Mostra les línies que no contenen "bash"
b) Mostra les línies que contenen "bash"
c) Redirigeix la sortida al fitxer "usuaris.txt"
d) Llista tots els usuaris que tenen "bash"
Resposta correcta: a

Com pots mostrar els permisos d'un fitxer?

a) ls -l fitxer
b) chmod fitxer
c) grep fitxer
d) pwd fitxer
Resposta correcta: a

Com es pot combinar la sortida d'un comandament amb l'entrada d'un altre?

a) Mitjançant |
b) Amb >>
c) Amb >
d) Amb cat
Resposta correcta: a

Què indica el símbol / en la jerarquia de directoris?

a) Directori arrel
b) Directori actual
c) Directori anterior
d) Directori home
Resposta correcta: a

Com pots saber quina és la teva ubicació actual en el sistema?

a) pwd
b) ls -l
c) cd
d) chmod
Resposta correcta: a

[![Binder](https://mybinder.org/badge_logo.svg)](https://mybinder.org/v2/gh/USERNAME/REPOSITORY/BRANCH)

# Tipus Test Interactiu - Shell





