// function exibirAquarios() {
//     JSON.parse(sessionStorage.AQUARIOS).forEach(item => {
//         document.getElementById("cardAquarios").innerHTML += `
//                     <div class="card-aquario">
//                         <div class="title-aquario">
//                             <h1>${item.descricao}</h1>
//                         </div>
//                         <div class="desc-aquario">
//                         <div class="temperatura">
//                             <p id="temp_aquario_${item.id}">-°C</p>
//                         </div>
//                         <div class="cor-alerta" id="card_${item.id}"></div>
//                     </div>
//                     </div>
//                     `
//     });
// }