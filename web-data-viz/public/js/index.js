// valida a sessão do usuário, ou seja, ve se ele está logado ou não

//limparSessao();
validarSessao();

// lógica do perfil
let container_perfil_user = document.getElementById('perfil-user');
let icone_perfil = document.getElementById('btn-icone-perfil');

icone_perfil.addEventListener('click', ()=>{
    container_perfil_user.style.display = 'flex';
})



