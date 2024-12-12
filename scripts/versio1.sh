#Versió 1 del joc ENDEVINA
#Pere Antoni Bennàssar

echo "Bon dia. Som al joc ENDEVINA"



esigual() {
    echo "Som a la funció esigual"
    if ($1 = $2)
    then 
        echo igual
    else
        echo diferents 
    fi
}


esigual 2 3
