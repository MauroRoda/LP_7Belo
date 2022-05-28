
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
  /* ***************** NAO ESTA FUNCIONANDO APÒS COLOCAR NO ANGUALR */
  /* new Swiper('.testimonials-slider', {
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

  let name = document.getElementById("name").value
  let email = document.getElementById("email").value

  window.alert("Parabens "+ name +"!! Recebemos sua inscrição, agoara você ficará por dentro de todas as novidades");
 
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



function main(){
let data = fazGet("https://gorest.co.in/public/v2/comments");
let comments = JSON.parse(data);

/**
   * comentario 1
   */
  let person1 = comments[1];
  nome_com1 = person1.name;
  Tx_com1 = person1.body;
  console.log("Sou a " + nome_com1);
  console.log("Meu comentario é " + Tx_com1);

/**
   * comentario 2
   */
 let person2 = comments[2];
 nome_com2 = person2.name;
 Tx_com2 = person2.body;
 console.log("Sou a " + nome_com2);
 console.log("Meu comentario é " + Tx_com2);

/**
   * comentario 3
   */
 let person3 = comments[3];
 nome_com3 = person3.name;
 Tx_com3 = person3.body;
 console.log("Sou a " + nome_com3);
 console.log("Meu comentario é " + Tx_com3);

/**
   * comentario 4
   */
 let person4 = comments[4];
 nome_com4 = person4.name;
 Tx_com4 = person4.body;
 console.log("Sou a " + nome_com4);
 console.log("Meu comentario é " + Tx_com4);



}

 
main()
