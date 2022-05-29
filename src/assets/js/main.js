
(function() {
  "use strict";


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



