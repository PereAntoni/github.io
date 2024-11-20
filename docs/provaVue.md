<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>EXAMEN TEST</title>
</head>
<body>
    <header id="capsalera">
        capsalera
        <div class="titol"></div>
    <header>
    <main id="cos">
        <div id="formulari">
            part de formulari-v2       
        </div>
        
    </main>
<script type="module">
    import {idPostService} from '../js/service/idPostService.js'

    console.log("som dins script")
    function pintarCapsalera(model){
        const titol = document.createElement("h1");
        titol.innerHTML="MODEL EXAMEN " + model;
        document.querySelector("#capsalera").appendChild(titol);
        console.log("som dins pintar capsalera");
    }

    function prova(){
        console.log("som dins prova, cridat de async");
    }
async function llistatPosts(){
        const  lPosts =  new idPostService();
        let llista = await lPosts.getPosts();
        console.log("llista: " + llista.length)
        //console.log(llistatPosts.mostra())
        //llistatPosts.deletePost(1);
        //console.log("llPosts: " + llistatPosts.getLlistat)

        

        const anterior = document.querySelector("table");
        if(anterior){anterior.remove()}
        
        const anteriorEsquerra = document.querySelector("#costatEsquerra");
        if(anteriorEsquerra){anteriorEsquerra.remove()}

        const anteriorDreta = document.querySelector("#costatDreta");
        if(anteriorDreta){anteriorDreta.remove()}



        const costatEsquerra = document.createElement("div");
        
        costatEsquerra.id= "costatEsquerra";
        document.querySelector("#cos").appendChild(costatEsquerra);


        const taula = document.createElement("table");
        const trHeader = taula.insertRow(0);
        taula.id="llistatPosts"
        /*const thId = trHeader.insertCell(0);
        thId.appendChild(document.createTextNode('id'));
        trHeader.appendChild(thId);*/

        const thTitol = trHeader.insertCell(0);
        thTitol.appendChild(document.createTextNode('títol'));
        trHeader.appendChild(thTitol);

        const thUrl = trHeader.insertCell(1);
        thUrl.appendChild(document.createTextNode('url'));
        trHeader.appendChild(thUrl);

        /*const thData = trHeader.insertCell(2);
        thData.appendChild(document.createTextNode('data Creació'));
        trHeader.appendChild(thData);*/

        const thEdita = trHeader.insertCell(2);
        thEdita.appendChild(document.createTextNode('Editar'));
        trHeader.appendChild(thEdita);

        const thEsborra = trHeader.insertCell(2);
        thEsborra.appendChild(document.createTextNode('Esborrar'));
        trHeader.appendChild(thEsborra);

        

        for(const post of llista){
            const trHeader = taula.insertRow(-1);

            /*const trId = trHeader.insertCell(0);
            trId.appendChild(document.createTextNode(post.id));
            trHeader.appendChild(trId);*/

            const trTitol = trHeader.insertCell(0);
            trTitol.appendChild(document.createTextNode(post.titol));
            trHeader.appendChild(trTitol);

            const trUrl = trHeader.insertCell(1);
            const linkUrl = document.createElement("a");
            linkUrl.setAttribute("href",post.url);
            linkUrl.appendChild(document.createTextNode(post.url));
            trUrl.appendChild(linkUrl);
            trHeader.appendChild(trUrl);

           /* const trData = trHeader.insertCell(3);
            trData.appendChild(document.createTextNode(post.data));
            trHeader.appendChild(trData);*/

            const trEditar = trHeader.insertCell(2);
            const botoEditar = document.createElement("button");
            botoEditar.appendChild(document.createTextNode("Editar"));
            botoEditar.addEventListener('click',function(){
                window.open("bloggerForm.html?idPost="+post.id);
            })
            trEditar.appendChild(botoEditar);
            
            
            
            const trEsborrar = trHeader.insertCell(3);
            const botoEsborrar = document.createElement("button");
            botoEsborrar.appendChild(document.createTextNode("Esborrar"));
            botoEsborrar.addEventListener('click',function(){
                if (confirm("Vols esborrar el post " + post.id + "," + post.titol )){
                    console.log(post.id)
                    borraActualitza(lPosts,post)
                }else{
                    alert("No")
                }
            })
            trEsborrar.appendChild(botoEsborrar);
        }
            document.querySelector("#cos").appendChild(taula);
            
            const costatDreta = document.createElement("div");
            costatDreta.id= "costatDreta";
            document.querySelector("#cos").appendChild(costatDreta);
        
    }


    (async()=>{
        console.log("som dins async");
        const url = new URL(document.location);
        const idPost = url.searchParams.get("idPost");
        console.log("URL: " + url);
        console.log("idPost:" + idPost)
        pintarCapsalera(idPost)
        prova();
        await llistatPosts(); 
    }
    )()

</script>   
</body>
</html>