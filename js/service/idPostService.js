
import { IdPost } from "../model/idPost.js";
export class idPostService{

    #posts;

    constructor(){
        this.#posts = [];
    }

    async getPosts(){
        await fetch("http://gimnesia.net/api/especie/read.php",{
            method: 'get',
            headers: {
                //'Authorization': localStorage.getItem('token')
                //'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        
        })
            .then(r=>r.json())
            .then(r=>{
                console.log(r)
                for(let i=0; i<r.items.length; i++) {
                    const infoPost = this.#fromJSON(r.records[i]);
                    this.#posts.push(infoPost);
                    
                }
                console.log("ACONSEGUIM ELS POSTS")
                for(let i=0; i<this.#posts.length; i++) {
                    console.log("posts:"+ i + ": " + this.#posts[i].titol + ", " + this.#posts[i].id);
                }
            })
        return this.#posts;
    }

    mostra(){
        console.log("MOSTRA EL CONTINGUT DE"+ this.#posts.length + "#POSTS")
        for (let i; i<this.#posts.length;i++){
            console.log(i + ": " + this.#posts[i].IdPost)
        }
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

    #fromJSON(json){
        return new IdPost(
            json.codi,
            json.nom,
            json.cientific
            )
    }

    getLlista(){
        const llista=[]
        for (const post of this.#posts){
            llista.push(post)
        }
        return llista;
    }

    async peticioBlog(){
        //console.log("El valor del token és "+ localStorage.getItem('token'));
        const peticioFetch = await fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts",{
            method: 'get',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer '+localStorage.getItem('token')
            }
        
        })
        const response = await peticioFetch.json();
        console.log(response);
        return response;

        
    }

    insertPost(){
        console.log("ENTRAT A INSERTAR: ")
        fetch("https://www.googleapis.com/blogger/v3/blogs/5061924546610576807/posts",{
            method: 'post',
            headers: {
                //'Authorization': localStorage.getItem('token')
                'Authorization': 'Bearer '+localStorage.getItem('token')
            
            }
        
        })
        .then(r=>console.log(r))
        

    }
}