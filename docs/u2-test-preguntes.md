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
