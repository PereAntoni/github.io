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


    
    constructor(id,nom,cientific,color,content){
        this.#id = id;
        this.#nom = nom;
        this.#cientific = cientific;
        this.#color=color;
    }

    

    get id()        {return this.#id;}
    set id(value)   {this.#id=value;}

    get titol()     {return this.#titol;}
    set titol(value){this.#titol=value;}

    get data()      {return this.#data;}
    set data(value) {this.#data=value;}

    get url()      {return this.#url;}
    set url(value) {this.#url=value;}


}