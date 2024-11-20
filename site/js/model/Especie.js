export class Especie{
    #id;
    #nom;
    #cientific;
    #nivell;
    #insitencia;
    #resistencia;
    #color;
    #h1;
    #h2;
    #h3;
    #imatge;

    constructor(id,nom,cientific,color){
        this.#id = id;
        this.#nom = nom;
        this.#cientific = cientific;
        this.#color=color;
    }

    
    


    get id()        {return this.#id;}
    set id(value)   {this.#id=value;}
}