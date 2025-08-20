function MostrarEsconder(conteudoId) {
    let conteudo = document.getElementById(conteudoId);

    if (conteudo.classList.contains("escondido")) {
        conteudo.classList.remove("escondido");
    } else {
        conteudo.classList.add("escondido");
    }
}
