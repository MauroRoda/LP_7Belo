
(function() {
  "use strict";

  /**
   * função para auxiliar o seletor
   */
  const select = (el, all = false) => {
    el = el.trim()
    if (all) {
      return [...document.querySelectorAll(el)]
    } else {
      return document.querySelector(el)
    }
  }

 
  
  /**
   * Demonstra o carregamento da pagina
   */
  let preloader = select('#preloader');
  if (preloader) {
    window.addEventListener('load', () => {
      preloader.remove()
    });
  }

  
  /**
   * Menu de rolagem para testemunhas
   */
/*   new Swiper('.testimonials-slider', {
    speed: 600,
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false
    },
    slidesPerView: 'auto',
    pagination: {
      el: '.swiper-pagination',
      type: 'bullets',
      clickable: true
    }
  }); */

  /**
   * Animação durante o carregamento da tela
   */
  window.addEventListener('load', () => {
    AOS.init({
      duration: 1000,
      easing: 'ease-in-out',
      once: true,
      mirror: false
    })
  });

})()


/**
   * Função que dispara o Alerta de confirmaçãod e cadastro
   */
function inscricao_cliente() {

  let nome = document.getElementById("nome").value
  let email = document.getElementById("email").value

  window.alert("Parabens "+ nome +"!! Recebemos sua inscrição, agoara você ficará por dentro de todas as novidades");
 
}


/**
   * Comandos para consumo da API dos comentarios
   */
 function fazGet(url){
  let request = new XMLHttpRequest();
  request.open("GET", url, false);
  request.send();
  return request.responseText
}

function crialinha(usuario){

}

function main(){
let Api_testemunhos = fazGet("https://gorest.co.in/public/v2/comments");
let testemunhos = JSON.parse(Api_testemunhos);
console.log("Testemunhos")
console.log(testemunhos)

let tabela = document.getElementById("")


}


main()
