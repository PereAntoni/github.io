import { Post } from "../model/Post.js";
export class PostService{
    #post
    

    constructor(){
        this.#post;
    }

    setPost(id,titol,contingut){
        this.idPost=id;
        this.title=titol;
        this.content=contingut;
    }

    async updatePost(){
        //console.log("El valor del token és "+ localStorage.getItem('token'));
        console.log("ENTRAT A ACTUALITZAR")
        console.log("el titol: " + this.titol)
        console.log("El contingut" + this.contingut)
        //console.log("el post id és " + id + titol + contingut)
        const peticioFetch = await fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts/" + this.idPost,{
            method: 'put',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            },
            body: JSON.stringify(this)
        
        })
        const r = await peticioFetch.json();
        console.log(r)
        this.#post = await this.#fromJSON(r) 
        return this.#post;   
    }

    
    async getPost(idPost){
        console.log("ENTRAT A GET POST")
        
        //console.log("El valor del token és "+ localStorage.getItem('token'));
        const peticioFetch = await fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts/"+ idPost,{
            method: 'get',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        
        })
        const r = await peticioFetch.json()
        this.#post = await this.#fromJSON(r)  
        //.then(r=>r.json())
        //.then(r=>this.#post = this.#fromJSON(r))
        console.log("dins getPost->" + this.#post.id)
        return this.#post;
    }

    #fromJSON(json){
        return new Post(
            json.id,
            json.title,
            json.published,
            json.content
        )
    }
 

    async insertPost(){
        console.log("ENTRAT A INSERTAR......: ")
        const peticioFetch = await fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts",{
            method: 'post',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        
        })
        const r = await peticioFetch.json()
        this.#post = await this.#fromJSON(r)  
        //.then(r=>r.json())
        //.then(r=>this.#post = this.#fromJSON(r))
        console.log("dins insertPost->" + this.#post)
        return this.#post;

    }

    deletePost(postId){
        /*
        https://www.googleapis.com/blogger/v3/blogs/blogId/posts/postId

        DELETE https://www.googleapis.com/blogger/v3/blogs/8070105920543249955/posts/6819100329896798058
        Authorization: 
        */
        console.log("ENTRAT A BORRAR: "+ postId)
        
        const borra = "https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts/" + postId; 
        console.log(borra)
        fetch(borra,{
            method: 'delete',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer ' + localStorage.getItem('token')
            }
        
        })
        .then (r=>console.log(r))
    }

    async traduirPost(texte,de,a){
        const peticioFetch = await fetch("https://theteacher.codiblau.com/public/google/translate",{
            method: 'post',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                languageFrom: de,
                languageTo: a,
                text: texte
            })
            
        
        })
        this.traduccio = await peticioFetch.text();
        //console.log(r.json())
        
        console.log(this.traduccio)
        return this.traduccio; 
    }
   
}