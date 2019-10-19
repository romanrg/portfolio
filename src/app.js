import './scss/style.scss';

(function Panel(){
  let panelButton = document.getElementById('panel__btn');
  let panel = document.getElementsByClassName('panel')[0];
  
  panelButton.addEventListener('click', (e)=> {
      panel.classList.toggle('panel--expanded');
      panel.classList.toggle('panel--close');
  })
  
})();






































