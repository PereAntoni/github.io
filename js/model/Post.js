export class Post{
    #id;
    #titol;
    #data;
    #contingut;
    #url;
    
    constructor(id,titol,data,contingut,url){
        this.#id = id;
        this.#titol = titol;
        this.#data = data;
        this.#contingut = contingut;
        this.#url = url;
    }

    get id()        {return this.#id;}
    set id(value)   {this.#id=value;}

    get titol()     {return this.#titol;}
    set titol(value){this.#titol=value;}

    get data()      {return this.#data;}
    set data(value) {this.#data=value;}

    get contingut()      {return this.#contingut;}
    set contingut(value) {this.#contingut=value;}

    get url()      {return this.#url;}
    set url(value) {this.#url=value;}
}