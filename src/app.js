import './scss/style.scss';



let panelButton = document.getElementById('panel__btn');
let panel = document.getElementsByClassName('panel')[0];

panelButton.addEventListener('click', (e)=> {
    panel.classList.toggle('panel--expanded');
    panel.classList.toggle('panel--close');
})
const _C = document.querySelector('.carousel__container');
const N = _C.children.length;
_C.style.setProperty('--n', N)
let x0 = null;
let i = 0;
function lock(e) { x0 = unify(e).clientX };
function move(e) {
    if(x0 || x0 === 0) {
      let dx = unify(e).clientX - x0, s = Math.sign(dx);    
      if((i > 0 || s < 0) && (i < N - 1 || s > 0))
        _C.style.setProperty('--i', i -= s);      
      x0 = null
    }
  };


function unify(e) { return e.changedTouches ? e.changedTouches[0] : e };


 
_C.addEventListener('mousedown', lock, false);
_C.addEventListener('touchstart', lock, false);

_C.addEventListener('mouseup', move, false);
_C.addEventListener('touchend', move, false);

_C.addEventListener('touchmove', e => {e.preventDefault()}, false)






































