export class IdPost{
    #id;
    #titol;
    #data;
    #url;
    
    constructor(id,titol,data,url,content){
        this.#id = id;
        this.#titol = titol;
        this.#data = data;
        this.#url=url;
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