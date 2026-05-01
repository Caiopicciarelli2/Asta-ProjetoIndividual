// valida a sessão do usuário, ou seja, ve se ele está logado ou não

//limparSessao();
validarSessao();

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



