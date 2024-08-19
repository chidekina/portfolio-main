function mostrarConteudo_descricao(){
    let conteudo = document.getElementById("apresentacao__conteudo__descricao");
    let projetos = document.getElementById("apresentacao__conteudo__projetos");
   
    conteudo.style.opacity = "1";
    conteudo.style.height = "40vh";
    projetos.style.opacity = "0";
    projetos.style.height = "0";
}

function mostrarConteudo_projeto(){
    let conteudo = document.getElementById("apresentacao__conteudo__descricao");
    let projetos = document.getElementById("apresentacao__conteudo__projetos");
   
    projetos.style.opacity = "1";
    projetos.style.height = "40vh";
    conteudo.style.opacity = "0";
    conteudo.style.height = "0";
}