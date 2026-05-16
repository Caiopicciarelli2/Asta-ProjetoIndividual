// valida a sessão do usuário, ou seja, ve se ele está logado ou não

let validar_sessao_quiz = validarSessao();

console.log(validar_sessao_quiz)

if (validar_sessao_quiz == 'user') {

    // email e nome do BD
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // linkando os elementos html da page INDEX
    let ul_navLinks = document.getElementById('nav-links-ul');
    let div_navButtons = document.getElementById('nav-buttons');
    let container_perfilUser = document.getElementById('perfil-user');

    // mudando o comportamento da navbar, após o usuário logar ele consegue navegador por todas as páginas
    ul_navLinks.innerHTML =
        `
            <li>
                <a class="nav-redirect" href="./index.html">Home</a>
            </li>
            <li>
                <a class="nav-redirect" href="./historia.html">História</a>
            </li>
            <li>
                <a class="nav-redirect selected" href="./quiz.html">Quiz</a>
            </li>
            <li>
                <a class="nav-redirect" href="./placar.html">Placar</a>
            </li>
            <li>
                <a class="nav-redirect" href="./status.html">Seu Status</a>
            </li>
        `;

    div_navButtons.innerHTML =
        `
            <img src="./assets/icones/user-asta.png" alt="icone_asta" title="Clique para ver seu perfil." id="btn-icone-perfil">
        `;

    // comportamento do perfil_user

    container_perfilUser.innerHTML =
        `
            <i class="fa-solid fa-circle-xmark" id="btn-fechar_perfil"></i>
            <div class="container-perfil-title">
                <div class="perfil-title-left">
                    <img src="./assets/icones/user-asta.png" alt="icone_asta" title="Asta">
                </div>
                <div class="perfil-title-right">
                    <h1>${nome}</h1>
                    <span>Mago do Reino de Clover</span>
                </div>
            </div>
            <div class="divisao-perfil">
                <span></span>
                <img src="./assets/icones/logo.png" alt="logo_nav">
                <span></span>

            </div>
            <div class="content-perfil">
                <div class="content-perfil-info">
                    <i class="fa-solid fa-envelope"></i>
                    <h6>
                        Email: 
                        <span>
                            ${email}
                        </span>
                    </h6>
                </div>
                <div class="content-perfil-button">
                    <button onclick="limparSessao()">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        Logout
                    </button>
                </div>
            </div>
        `;

    // lógica do perfil
    let container_perfil_user = document.getElementById('perfil-user');
    let icone_perfil = document.getElementById('btn-icone-perfil');
    let btn_fechar_perfil_user = document.getElementById('btn-fechar_perfil');

    icone_perfil.addEventListener('click', () => {
        let display_container = getComputedStyle(container_perfil_user).display;

        if (display_container == 'none') {
            container_perfil_user.style.display = 'flex';
        } else {
            container_perfil_user.style.display = 'none';
        }
    })

    btn_fechar_perfil_user.addEventListener('click', () => {
        container_perfil_user.style.display = 'none';
    })

} else if (validar_sessao_quiz == 'admin') {
    // email e nome do BD
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;

    // linkando os elementos html da page INDEX
    let ul_navLinks = document.getElementById('nav-links-ul');
    let div_navButtons = document.getElementById('nav-buttons');
    let container_perfilUser = document.getElementById('perfil-user');

    // mudando o comportamento da navbar, após o usuário logar ele consegue navegador por todas as páginas
    ul_navLinks.innerHTML =
        `
            <li>
                <a class="nav-redirect" href="./index.html">Home</a>
            </li>
            <li>
                <a class="nav-redirect" href="./historia.html">História</a>
            </li>
            <li>
                <a class="nav-redirect selected" href="./quiz.html">Quiz</a>
            </li>
            <li>
                <a class="nav-redirect" href="./placar.html">Placar</a>
            </li>
            <li>
                <a class="nav-redirect" href="./status.html">Seu Status</a>
            </li>
        `;

    div_navButtons.innerHTML =
        `
            <img src="./assets/icones/user-asta.png" alt="icone_asta" title="Clique para ver seu perfil." id="btn-icone-perfil">
            <button class="btn-admin" onclick="redirecionamento_dashboard()">Painel Administrador</button>
        `;

    // comportamento do perfil_user

    container_perfilUser.innerHTML =
        `
            <i class="fa-solid fa-circle-xmark" id="btn-fechar_perfil"></i>
            <div class="container-perfil-title">
                <div class="perfil-title-left">
                    <img src="./assets/icones/user-asta.png" alt="icone_asta" title="Asta">
                </div>
                <div class="perfil-title-right">
                    <h1>${nome}</h1>
                    <span>Mago do Reino de Clover</span>
                </div>
            </div>
            <div class="divisao-perfil">
                <span></span>
                <img src="./assets/icones/logo.png" alt="logo_nav">
                <span></span>

            </div>
            <div class="content-perfil">
                <div class="content-perfil-info">
                    <i class="fa-solid fa-envelope"></i>
                    <h6>
                        Email: 
                        <span>
                            ${email}
                        </span>
                    </h6>
                </div>
                <div class="content-perfil-button">
                    <button onclick="limparSessao()">
                        <i class="fa-solid fa-arrow-right-from-bracket"></i>
                        Logout
                    </button>
                </div>
            </div>
        `;

    // lógica do perfil
    let container_perfil_user = document.getElementById('perfil-user');
    let icone_perfil = document.getElementById('btn-icone-perfil');
    let btn_fechar_perfil_user = document.getElementById('btn-fechar_perfil');

    icone_perfil.addEventListener('click', () => {
        let display_container = getComputedStyle(container_perfil_user).display;

        if (display_container == 'none') {
            container_perfil_user.style.display = 'flex';
        } else {
            container_perfil_user.style.display = 'none';
        }
    })

    btn_fechar_perfil_user.addEventListener('click', () => {
        container_perfil_user.style.display = 'none';
    })
}

// quiz

let num_questao = 0;
let num_acertos = 0;
let num_erros = 0;
let questoes_totais = 5;

function iniciarQuiz(quizTipo) {
    let ul_navLinks = document.getElementById('nav-links-ul');
    ul_navLinks.innerHTML =
        `
            <li>
                <a class="nav-redirect" onclick="redirect_quiz('home')">Home</a>
            </li>
            <li>
                <a class="nav-redirect" onclick="redirect_quiz('historia')">História</a>
            </li>
            <li>
                <a class="nav-redirect selected" onclick="redirect_quiz('quiz')">Quiz</a>
            </li>
            <li>
                <a class="nav-redirect" onclick="redirect_quiz('placar')">Placar</a>
            </li>
            <li>
                <a class="nav-redirect" onclick="redirect_quiz('status')">Seu Status</a>
            </li>
        `;

    if (quizTipo == 'geral') {
        let container_quiz = document.getElementById('container-quiz');
        container_quiz.innerHTML =
            `

             <div id="quiz-geral-res">
                <div class="quiz-left">
                    <button class="btn-fechar-quiz" onclick="fechar_quiz()">
                        <i class="fa-solid fa-xmark" style="color: inherit;"></i>
                        Desistir do Quiz
                    </button>
                    <div class="titulo-quiz">
                        <h1>
                            QUIZ 
                            <span>GERAL</span>
                        </h1>
                    </div>
                    <div id="quiz-geral-game">
                        <div class="quiz-info-questao">
                            <span>
                                Questão atual: 
                                <span class="quiz-numero-questao"></span> 
                                de
                                <span class="quiz-total-questoes">${questoes_totais}</span>
                                questões.
                            </span>
                        </div>
                        <div class="quiz-info-pergunta">
                            <span class="quiz-pergunta"></span>
                        </div>
                        <div class="quiz-info-alternativas">
                            <span>Escolha <span>uma</span> opção dentre as abaixo:</span>
                        </div>
                        <div class="quiz-alternativas">
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-1" name="option" class="radio" value="alternativaA" />
                                <label for="primeiraOpcao" id="labelOpcaoUm"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-2" name="option" class="radio" value="alternativaB" />
                                <label for="segundaOpcao" id="labelOpcaoDois"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-3" name="option" class="radio" value="alternativaC" />
                                <label for="terceiraOpcao" id="labelOpcaoTres"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-4" name="option" class="radio" value="alternativaD" />
                                <label for="quartaOpcao" id="labelOpcaoQuatro"></label>
                            </span>
                        </div>
                        <div class="quiz-botoes">
                            <button onclick="confirmar_resposta('geral')" class="quiz-confirmar-resposta">Submeter resposta</button>
                            <button onclick="limpar_resposta('geral')" class="quiz-limpar" disabled>Limpar resposta</button>
                            <button onclick="avancar_questao('geral')" class="quiz-avancar-resposta" disabled>Avançar Questão</button>
                            <button onclick="finalizar_quiz('geral')" class="quiz-finalizar" disabled>Finalizar Quiz</button>
                        </div>
                    </div>
                </div>
                <div class="quiz-right">
                    <div class="box-pontuacao">
                        <div class="pontuacao-title">
                        <h1>
                            Progresso Quiz
                        </h1>
                        </div>
                        <div class="quiz-pontuacao-ingame">
                            <h4>
                                Quantidade de acertos: 
                                <span class="quiz-qtd-certas">

                                </span>
                            </h4>
                            <h4>
                                Quantidade de erros: 
                                <span class="quiz-qtd-erradas">

                                </span>
                            </h4>
                        </div>
                        <div class="quiz-resultado">
                            <span class="quiz-info-pontuacao-final">Pontuação Final:
                                <span class="quiz-pontuacao-final">***</span>
                            </span>
                            <span class="quiz-mensagem-final">***</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overlay-content-aviso"></div>
            <div class="content-aviso">
                <div class="content-aviso-info">
                    <p>Você tem certeza que quer desistir do quiz?</p>
                    <h1>Você irá <span>perder todo seu progresso!</span></h1>                
                </div>
                <div class="content-aviso-buttons">
                    <button id="btn-confirm-desistir">
                        Sim, vou desistir.
                    </button>
                    <button id="btn-continuar-quiz">
                        Nunca, Continuarei.
                    </button>
                </div>
            </div>
        `;

    } else if (quizTipo == 'poderes') {
        let container_quiz = document.getElementById('container-quiz');

        container_quiz.innerHTML =
            `
           <div id="quiz-poderes-res">
                <div class="quiz-left">
                    <button class="btn-fechar-quiz" onclick="fechar_quiz()">
                        <i class="fa-solid fa-xmark" style="color: inherit;"></i>
                        Desistir do Quiz
                    </button>
                    <div class="titulo-quiz">
                        <h1>
                            QUIZ 
                            <span>PODERES</span>
                        </h1>
                    </div>
                    <div id="quiz-poderes-game">
                        <div class="quiz-info-questao">
                            <span>
                                Questão atual: 
                                <span class="quiz-numero-questao"></span> 
                                de
                                <span class="quiz-total-questoes">${questoes_totais}</span>
                                questões.
                            </span>
                        </div>
                        <div class="quiz-info-pergunta">
                            <span class="quiz-pergunta"></span>
                        </div>
                        <div class="quiz-info-alternativas">
                            <span>Escolha <span>uma</span> opção dentre as abaixo:</span>
                        </div>
                        <div class="quiz-alternativas">
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-1" name="option" class="radio" value="alternativaA" />
                                <label for="primeiraOpcao" id="labelOpcaoUm"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-2" name="option" class="radio" value="alternativaB" />
                                <label for="segundaOpcao" id="labelOpcaoDois"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-3" name="option" class="radio" value="alternativaC" />
                                <label for="terceiraOpcao" id="labelOpcaoTres"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-4" name="option" class="radio" value="alternativaD" />
                                <label for="quartaOpcao" id="labelOpcaoQuatro"></label>
                            </span>
                        </div>
                        <div class="quiz-botoes">
                            <button onclick="confirmar_resposta('geral')" class="quiz-confirmar-resposta">Submeter resposta</button>
                            <button onclick="limpar_resposta('geral')" class="quiz-limpar" disabled>Limpar resposta</button>
                            <button onclick="avancar_questao('geral')" class="quiz-avancar-resposta" disabled>Avançar Questão</button>
                            <button onclick="finalizar_quiz('geral')" class="quiz-finalizar" disabled>Finalizar Quiz</button>
                        </div>
                    </div>
                </div>
                <div class="quiz-right">
                    <div class="box-pontuacao">
                        <div class="pontuacao-title">
                        <h1>
                            Progresso Quiz
                        </h1>
                        </div>
                        <div class="quiz-pontuacao-ingame">
                            <h4>
                                Quantidade de acertos: 
                                <span class="quiz-qtd-certas">

                                </span>
                            </h4>
                            <h4>
                                Quantidade de erros: 
                                <span class="quiz-qtd-erradas">

                                </span>
                            </h4>
                        </div>
                        <div class="quiz-resultado">
                            <span class="quiz-info-pontuacao-final">Pontuação Final:
                                <span class="quiz-pontuacao-final">***</span>
                            </span>
                            <span class="quiz-mensagem-final">***</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overlay-content-aviso"></div>
            <div class="content-aviso">
                <div class="content-aviso-info">
                    <p>Você tem certeza que quer desistir do quiz?</p>
                    <h1>Você irá <span>perder todo seu progresso!</span></h1>                
                </div>
                <div class="content-aviso-buttons">
                    <button id="btn-confirm-desistir">
                        Sim, vou desistir.
                    </button>
                    <button id="btn-continuar-quiz">
                        Nunca, Continuarei.
                    </button>
                </div>
            </div>
        `;
    } else if (quizTipo == 'personagens') {
        let container_quiz = document.getElementById('container-quiz');

        container_quiz.innerHTML =
            `
             <div id="quiz-personagens-res">
                <div class="quiz-left">
                    <button class="btn-fechar-quiz" onclick="fechar_quiz()">
                        <i class="fa-solid fa-xmark" style="color: inherit;"></i>
                        Desistir do Quiz
                    </button>
                    <div class="titulo-quiz">
                        <h1>
                            QUIZ 
                            <span>PERSONAGENS</span>
                        </h1>
                    </div>
                    <div id="quiz-personagens-game">
                        <div class="quiz-info-questao">
                            <span>
                                Questão atual: 
                                <span class="quiz-numero-questao"></span> 
                                de
                                <span class="quiz-total-questoes">${questoes_totais}</span>
                                questões.
                            </span>
                        </div>
                        <div class="quiz-info-pergunta">
                            <span class="quiz-pergunta"></span>
                        </div>
                        <div class="quiz-info-alternativas">
                            <span>Escolha <span>uma</span> opção dentre as abaixo:</span>
                        </div>
                        <div class="quiz-alternativas">
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-1" name="option" class="radio" value="alternativaA" />
                                <label for="primeiraOpcao" id="labelOpcaoUm"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-2" name="option" class="radio" value="alternativaB" />
                                <label for="segundaOpcao" id="labelOpcaoDois"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-3" name="option" class="radio" value="alternativaC" />
                                <label for="terceiraOpcao" id="labelOpcaoTres"></label>
                            </span>
                            <span class="alternativas-options">
                                <input type="radio" class="alternativa-4" name="option" class="radio" value="alternativaD" />
                                <label for="quartaOpcao" id="labelOpcaoQuatro"></label>
                            </span>
                        </div>
                        <div class="quiz-botoes">
                            <button onclick="confirmar_resposta('geral')" class="quiz-confirmar-resposta">Submeter resposta</button>
                            <button onclick="limpar_resposta('geral')" class="quiz-limpar" disabled>Limpar resposta</button>
                            <button onclick="avancar_questao('geral')" class="quiz-avancar-resposta" disabled>Avançar Questão</button>
                            <button onclick="finalizar_quiz('geral')" class="quiz-finalizar" disabled>Finalizar Quiz</button>
                        </div>
                    </div>
                </div>
                <div class="quiz-right">
                    <div class="box-pontuacao">
                        <div class="pontuacao-title">
                        <h1>
                            Progresso Quiz
                        </h1>
                        </div>
                        <div class="quiz-pontuacao-ingame">
                            <h4>
                                Quantidade de acertos: 
                                <span class="quiz-qtd-certas">

                                </span>
                            </h4>
                            <h4>
                                Quantidade de erros: 
                                <span class="quiz-qtd-erradas">

                                </span>
                            </h4>
                        </div>
                        <div class="quiz-resultado">
                            <span class="quiz-info-pontuacao-final">Pontuação Final:
                                <span class="quiz-pontuacao-final">***</span>
                            </span>
                            <span class="quiz-mensagem-final">***</span>
                        </div>
                    </div>
                </div>
            </div>

            <div class="overlay-content-aviso"></div>
            <div class="content-aviso">
                <div class="content-aviso-info">
                    <p>Você tem certeza que quer desistir do quiz?</p>
                    <h1>Você irá <span>perder todo seu progresso!</span></h1>                
                </div>
                <div class="content-aviso-buttons">
                    <button id="btn-confirm-desistir">
                        Sim, vou desistir.
                    </button>
                    <button id="btn-continuar-quiz">
                        Nunca, Continuarei.
                    </button>
                </div>
            </div>
        `;
    }

    // lógica do web-data-viz, faz o radio ativar quando clica no span
    let options = document.querySelectorAll('.alternativas-options');
    options.forEach(option => {

        option.addEventListener('click', () => {
            let radio = option.querySelector('input');
            radio.checked = true;

            btns_status();
        });

    });
}

function fechar_quiz() {
    let content_aviso = document.querySelector('.content-aviso');
    let overlay_content_aviso = document.querySelector('.overlay-content-aviso');

    overlay_content_aviso.style.display = 'flex';
    content_aviso.style.display = 'flex';

    let btn_confirmar = document.querySelector('#btn-confirm-desistir');
    let btn_continuar_quiz = document.querySelector('#btn-continuar-quiz');

    btn_confirmar.addEventListener('click', () => {
        window.location.reload();
    });

    btn_continuar_quiz.addEventListener('click', () => {
        overlay_content_aviso.style.display = 'none';
        content_aviso.style.display = 'none';
    });
}

function redirect_quiz(tipoRedirect) {
    fechar_quiz();

    let btn_confirmar = document.querySelector('#btn-confirm-desistir');

    btn_confirmar.onclick = () => {

        if (tipoRedirect == 'home') {
            window.location.href = './index.html';

        } else if (tipoRedirect == 'historia') {
            window.location.href = './historia.html';

        } else if (tipoRedirect == 'quiz') {
            window.location.href = './quiz.html'

        } else if (tipoRedirect == 'placar') {
            window.location.href = './placar.html';

        } else if (tipoRedirect == 'status') {
            window.location.href = './status.html';
        }
    };
}

let resposta_submetida = false;

function btns_status() {

    let radios = document.querySelectorAll('input[name="option"]');

    let btn_limpar = document.querySelector('.quiz-limpar');
    let btn_avancar = document.querySelector('.quiz-avancar-resposta');

    let tem_checked = false;

    radios.forEach(radio => {
        if (radio.checked) {
            tem_checked = true;
        }
    });

    // botão limpar
    btn_limpar.disabled = !tem_checked;

    // botão avançar
    btn_avancar.disabled = !resposta_submetida;
}

function limpar_resposta() {
    let radios = document.querySelectorAll('input[name="option"]');

    radios.forEach(radio => {
        radio.checked = false;
    });

    resposta_submetida = false;

    btns_status();
}

function confirmar_resposta(quizTipo) {
    let radios = document.querySelectorAll('input[name="option"]');
    let tem_checked = false;

    radios.forEach(radio => {
        if (radio.checked) {
            tem_checked = true;
        }
    });

    if (!tem_checked) {
        alert('Selecione uma alternativa!')
        return;
    }

    resposta_submetida = true;

    btns_status();
}


function avancar_questao(quizTipo) {
    
}

function finalizar_quiz(quizTipo) {

}

