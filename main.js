function mostrarConteudo_descricao(){
    let conteudo = document.getElementById("apresentacao__conteudo__descricao");
    let projetos = document.getElementById("apresentacao__conteudo__projetos");
    let w = parseInt(window.innerWidth);

    if(w <= 600){
        
    }
    else if(w > 600 && w <= 768){}
    else if(w > 768 && w <= 1024){}
    
    conteudo.style.opacity = "1";
    conteudo.style.height = "auto";
    projetos.style.opacity = "0";
    projetos.style.height = "0";
}

function mostrarConteudo_projeto(){
    let conteudo = document.getElementById("apresentacao__conteudo__descricao");
    let projetos = document.getElementById("apresentacao__conteudo__projetos");
   
    projetos.style.opacity = "1";
    projetos.style.height = "auto";
    conteudo.style.opacity = "0";
    conteudo.style.height = "0";
}