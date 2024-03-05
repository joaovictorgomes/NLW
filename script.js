function iniciaModal(modalID) {
    const modal = document.getElementById(modalID);
    if(modal) {
        modal.classList.add('mostrar');
        modal.addEventListener('click' , (e) => {
        if(e.target.id == modalID || e.target.className == 'fechar') {
         modal.classList.remove('mostrar')
         }  
        });
    }
}

const img = document.querySelector('.imagem')

img.addEventListener('click', function() {
    iniciaModal('modal-bio')
});

console.log(img);