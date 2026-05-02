// sessão
function validarSessao() {
    // guarda qual página o usuário está
    let pagina_now = window.location.pathname;
    console.log(pagina_now);

    // email e nome do BD
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // verifica se o usuário está em uma sessão:
    if (email != null && nome != null) {
    return true;

    // se ele não estiver
    } else if (pagina_now == ('/quiz.html' || '/placar.html' || '/status.html' || 'dash.html')) {
        window.location = "../index.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = '../index.html';
}

// carregamento (loading)
function aguardar() {
    var divAguardar = document.getElementById('div_aguardar');
    divAguardar.style.display = 'flex';
}

function finalizarAguardar(texto) {
    var divAguardar = document.getElementById('div_aguardar');
    divAguardar.style.display = 'none';

    var divErrosLogin = document.getElementById('div_erros_login');
    if (texto) {
        divErrosLogin.style.display = 'flex';
        divErrosLogin.innerHTML = texto;
    }
}

