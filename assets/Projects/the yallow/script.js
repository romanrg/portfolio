const mobile = document.getElementsByClassName('wrapper__change--mobile')[0];
const desktop = document.getElementsByClassName('wrapper__change--desktop')[0];
const representation = document.getElementsByClassName('wrapper')[0];
mobile.addEventListener('click', ()=> {
    representation.classList.add('wrapper__mobile');
    representation.classList.remove('wrapper__desktop');  
});

desktop.addEventListener('click', ()=> {
    representation.classList.add('wrapper__desktop');
    representation.classList.remove('wrapper__mobile');  
});