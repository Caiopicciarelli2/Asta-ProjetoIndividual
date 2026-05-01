// sessão
function validarSessao() {
    // guarda qual página o usuário está
    let pagina_now = window.location.pathname;
    console.log(pagina_now);

    // linkando os elementos html da page INDEX
    let ul_navLinks = document.getElementById('nav-links-ul');
    let div_navButtons = document.getElementById('nav-buttons');
    let container_sectionLogar = document.getElementById('section-logar');
    let ul_footerLinks = document.getElementById('footer-links-ul')

    // email e nome do BD
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // verifica se o usuário está em uma sessão:
    if (email != null && nome != null) {

        // mudando o comportamento da navbar, após o usuário logar ele consegue navegador por todas as páginas
        ul_navLinks.innerHTML =
            `
            <li>
                <a class="selected" href="./index.html">Home</a>
            </li>
            <li>
                <a href="./historia.html">História</a>
            </li>
            <li>
                <a href="./quiz.html">Quiz</a>
            </li>
            <li>
                <a href="./placar.html">Placar</a>
            </li>
            <li>
                <a href="./status.html">Seu Status</a>
            </li>
        `;

        div_navButtons.innerHTML = 
        `
            <img src="./assets/icones/user-asta.png" style="height: 60px;" title="Clique para ver seu perfil." id="btn-icone-perfil">
        `;

        // removendo a section de logar
        container_sectionLogar.style.display = 'none';

        //mudando o comportamento do footer
        ul_footerLinks.innerHTML = 
        `
                <li>
                    <a href="./historia.html">
                        História
                    </a>
                    <a href="./quiz.html">
                        Quiz
                    </a>
                </li>
                <li>
                    <a href="./placar.html">
                        Placar
                    </a>
                    <a href="./status.html">
                        Seu Status
                    </a>
                </li>
        `;


    // se ele não estiver
    } else if (pagina_now == ('/quiz.html' || '/placar.html' || '/status.html' || 'dash.html')) {
        window.location = "../login.html";
    }
}

function limparSessao() {
    sessionStorage.clear();
    window.location = '../login.html';
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

