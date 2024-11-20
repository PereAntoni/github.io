export class Post{
    #codi;
    #nom;
    #cientific;
    #contingut;
    #url;
    
    constructor(codi,nom,cientific,contingut,url){
        this.#codi = codi;
        this.#nom = nom;
        this.#cientific = cientific;
        this.#contingut = contingut;
        this.#url = url;
    }

    get codi()        {return this.#codi;}
    set codi(value)   {this.#codi=value;}

    get nom()     {return this.#nom;}
    set nom(value){this.#nom=value;}

    get cientific()      {return this.#cientific;}
    set cientific(value) {this.#cientific=value;}

    get contingut()      {return this.#contingut;}
    set contingut(value) {this.#contingut=value;}

    get url()      {return this.#url;}
    set url(value) {this.#url=value;}
}