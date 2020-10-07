function criarPost(){

    
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
   
    if(titulo.value === "" || autor.value === "" || conteudo.value === ""){
        alert ("Preencha todos os campos!")        
        
    } else {


    let post = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value,
       
    }

    arrayDePost = []
    arrayDePost.push(post)

    let novoPost = document.getElementById("container-de-posts")

    novoPost.innerHTML += `<h1 onclick="criarPost()">${post.titulo}</h1>`
    novoPost.innerHTML += `<h4 onclick="criarPost()">${post.autor}</h4>`
    novoPost.innerHTML += `<p onclick="criarPost()">${post.conteudo}</p>`
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    }

    function fixarPost() {
        if(arrayDePost.length === 1){
            let coletaneaPost = document.getElementById("coletanea-posts")
            coletaneaPost.innerHTML += `<p>${arrayDePost.value}</p>`
        }
    }
}

    
