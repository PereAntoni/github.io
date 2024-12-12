#!/bin/bash

# Generar un nombre aleatori entre 1 i 100
nombre_secret=$((RANDOM % 100 + 1))

# Mostrar un missatge inicial
echo "Benvingut al joc d'endevinar el nombre!"
echo "He pensat un nombre entre 1 i 100. Pots endevinar quin és?"

# Inicialitzar variables
intent=0

# Bucle del joc
while true; do
    # Augmentar el nombre d'intents
    ((intent++))
    
    # Demanar a l'usuari que introdueixi un nombre
    read -p "Introdueix un nombre: " entrada
    
    # Comprovar si és un nombre vàlid
    if ! [[ "$entrada" =~ ^[0-9]+$ ]]; then
        echo "Si us plau, introdueix un nombre vàlid!"
        continue
    fi
    
    # Convertir l'entrada a un nombre enter
    entrada=$((entrada))
    
    # Comprovar si l'usuari ha encertat, està per sobre o per sota
    if ((entrada < nombre_secret)); then
        echo "El nombre és més gran!"
    elif ((entrada > nombre_secret)); then
        echo "El nombre és més petit!"
    else
        echo "Felicitats! Has endevinat el nombre en $intent intents."
        break
    fi
done

# Finalitzar el joc
echo "Gràcies per jugar!"
