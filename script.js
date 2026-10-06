(function () {
  var botao = document.querySelector('.menu-btn');
  var menu = document.getElementById('menu');

  function fechar() {
    menu.classList.remove('aberto');
    botao.setAttribute('aria-expanded', 'false');
    botao.setAttribute('aria-label', 'Abrir menu');
  }

  botao.addEventListener('click', function () {
    var aberto = menu.classList.toggle('aberto');
    botao.setAttribute('aria-expanded', aberto ? 'true' : 'false');
    botao.setAttribute('aria-label', aberto ? 'Fechar menu' : 'Abrir menu');
  });

  menu.querySelectorAll('a').forEach(function (link) {
    link.addEventListener('click', fechar);
  });

  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') fechar();
  });

  var ano = document.getElementById('ano');
  if (ano) ano.textContent = new Date().getFullYear();
})();
