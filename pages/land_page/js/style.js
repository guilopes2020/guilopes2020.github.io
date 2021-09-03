if (document.querySelector('.section-8 .perguntas .title')) {
    document.querySelectorAll('.section-8 .perguntas .title').forEach(item => {
        item.addEventListener('click', () => {
            if (item.querySelector('.fas').classList.contains('fa-angle-right')) {
                item.querySelector('.fas').classList.remove('fa-angle-right');
                item.querySelector('.fas').classList.add('fa-angle-down');
            } else {
                item.querySelector('.fas').classList.remove('fa-angle-down');
                item.querySelector('.fas').classList.add('fa-angle-right');
            }
            if (item.querySelector('.resposta').classList.contains('active') === false) {
                item.querySelector('.resposta').classList.add('active')
            } else {
                item.querySelector('.resposta').classList.remove('active')
            }
        });
    });
}
