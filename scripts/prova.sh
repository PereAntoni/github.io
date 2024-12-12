#!/bin/bash
echo "HE CANVIAT AIXO"
# Definim la funció
function demo {
    #aquesta variable (local) sols 
    #es veu dins la funció
  local greet=123
  #echo "This is my function"
  return $greet
}

# Call the function
output=$(demo)

# Check the exit status
echo "The exit status of the demo function is: $?"
echo $output