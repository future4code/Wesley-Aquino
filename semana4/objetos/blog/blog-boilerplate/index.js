function criarPost(){

    
    const titulo = document.getElementById("titulo-post")
    const autor = document.getElementById("autor-post")
    const conteudo = document.getElementById("conteudo-post")
    const imagem = document.getElementById("imagem-post")
   
    if(titulo.value === "" || autor.value === "" || conteudo.value === ""){
        alert ("Preencha todos os campos!")        
        
    } else {


    let post = {
        titulo: titulo.value,
        autor: autor.value,
        conteudo: conteudo.value,
        imagem: imagem.value,       
    }

    arrayDePost = []
    arrayDePost.push(post)

    let novoPost = document.getElementById("container-de-posts")

    novoPost.innerHTML = `<p onclick="criarPost()">${post.titulo}\n${post.autor}\n${post.conteudo}</p>`
    novoPost.innerHTML = `<img onclick="criarPost()" src=${post.imagem}>`
    titulo.value = ""
    autor.value = ""
    conteudo.value = ""
    imagem.value = ""
    

    if(arrayDePost.length > 0){       
        let coletaneaPost = document.getElementById("coletanea-post")
        coletaneaPost.innerHTML += `<p>${post.titulo}\n${post.autor}\n${post.conteudo}</p>`
        coletaneaPost.innerHTML += `<img src=${post.imagem}>`        
        }
    }      

}
       