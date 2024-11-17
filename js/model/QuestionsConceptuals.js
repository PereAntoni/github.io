export class QuestionsConceptuals{
    #id;
    #titol;
    #descripcio;
    #imatge;
    #url;
    
    constructor(id,titol,descripcio,imatge,url){
        this.#id = id;
        this.#titol = titol;
        this.#descripcio = descripcio;
        this.#imatge = imatge;
        this.#url = url;
    }

    get id()        {return this.#id;}
    set id(value)   {this.#id=value;}

    get titol()     {return this.#titol;}
    set titol(value){this.#titol=value;}

    get descripcio()      {return this.#descripcio;}
    set descripcio(value) {this.#descripcio=value;}

    get imatge()      {return this.#imatge;}
    set imatge(value) {this.#imatge=value;}

    get url()      {return this.#url;}
    set url(value) {this.#url=value;}
}