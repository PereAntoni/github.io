# Qüestionari sobre configuració del servidor Apache: Errors comuns

1. **Quin error es pot cometre en configurar un servidor Apache per HTTPS sense tenir un certificat vàlid?**
   - A) El servidor no funcionarà correctament.
   
   - B) Els fitxers no es carregaran en HTTPS.
   - C) HTTPS funciona, però amb un avís de seguretat.
   - D) HTTPS es configura automàticament sense problemes.

2. **Quina d'aquestes opcions pot provocar que Apache no arrenqui després d’una modificació al fitxer `httpd.conf`?**
   - A) Ús incorrecte d’una directiva sense incloure el mòdul requerit.
   - B) Arxius de log no configurats.
   - C) Absència del fitxer de configuració SSL.
   - D) Instal·lar Apache sense permisos d'usuari root.

3. **Quin error apareix sovint si el port 80 o 443 està ocupat per un altre servei?**
   - A) Error 404
   - B) Error de sintaxi
   - C) Error de vinculació de socket (Address already in use)
   - D) Error d’autenticació

4. **Quina comanda hauries d’executar després de modificar `apache2.conf` per aplicar els canvis?**
   - A) `service apache2 start`
   - B) `service apache2 stop`
   - C) `systemctl reload apache2`
   - D) `apache2 reset`

5. **Què indica l’error “403 Forbidden” quan es carrega una pàgina Apache?**
   - A) El fitxer de configuració `httpd.conf` té un error.
   - B) El directori arrel té permisos restrictius.
   - C) El port 80 no està obert.
   - D) La IP no està configurada.

6. **Quin error comet un usuari si es troba amb “500 Internal Server Error” després de canviar `htaccess`?**
   - A) Ha establert permisos massa alts al directori.
   - B) No ha activat el mòdul `mod_rewrite`.
   - C) Ha editat `httpd.conf` en comptes de `htaccess`.
   - D) Ha activat el mòdul SSL sense certificat.

7. **Quina és la causa comuna de l’error "AH00558: apache2: Could not reliably determine the server's fully qualified domain name"?**
   - A) Falta la configuració de `ServerName` a `apache2.conf`.
   - B) No està activat el mòdul SSL.
   - C) El fitxer `htaccess` té sintaxi incorrecta.
   - D) Els permisos del servidor són massa restrictius.

8. **Quina comanda serveix per comprovar si el fitxer de configuració Apache té errors de sintaxi?**
   - A) `apachectl test`
   - B) `apache2 check`
   - C) `apachectl configtest`
   - D) `systemctl check apache2`

9. **Quina d'aquestes configuracions podria generar un error si no s'activa abans en Apache?**
   - A) `ServerName`
   - B) `DocumentRoot`
   - C) `AllowOverride All`
   - D) `Listen 80`

10. **Quin error es genera si `https` es configura en un VirtualHost sense tenir el mòdul SSL activat?**
    - A) Error 500
    - B) El servidor redirigeix automàticament a HTTP
    - C) Error d'inici del servei per absència del mòdul SSL
    - D) El servidor ignora la configuració i es manté en HTTP

---

