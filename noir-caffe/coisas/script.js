document.addEventListener("DOMContentLoaded", () => {
    carregarAtividades();
});

function alterarFoto() {
    alert("Funcionalidade para alterar a foto de perfil.");
    // Aqui você pode implementar a lógica para o upload de uma nova foto
}

function editarPerfil() {
    alert("Funcionalidade para editar o perfil.");
    // Aqui você pode implementar a lógica para editar o perfil do usuário
}

function carregarAtividades() {
    const atividades = [
        "Comentou em uma postagem.",
        "Curtiu uma foto.",
        "Compartilhou um artigo.",
        "Atualizou a bio."
    ];

    const listaAtividades = document.getElementById("lista-atividades");
    atividades.forEach(atividade => {
        const li = document.createElement("li");
        li.textContent = atividade;
        listaAtividades.appendChild(li);
    });
}

