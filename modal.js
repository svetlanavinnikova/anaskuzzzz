const body = document.getElementById('body'),
    modal = document.querySelectorAll('.modal'),
    modalBtns = document.querySelectorAll('.modal-btn');

let unlock = true;

if (modalBtns.length > 0) {
    for (let index = 0; index < modalBtns.length; index++) {
        
        const modalBtn = modalBtns[index];

        modalBtn.addEventListener('click', function(e) {
            const modalName = 'm-' + modalBtn.getAttribute('id');
            const currentModal = document.getElementById(modalName);
            modalOpen(currentModal);
            e.preventDefault();
        });
    }
}

const modalCloseBtns = document.querySelectorAll('.modal-close');
if (modalCloseBtns.length > 0) {
    console.log(modalCloseBtns);
    for (let index = 0; index < modalCloseBtns.length; index++) {
        console.log(index);
        const el = modalCloseBtns[index];
        console.log(el);
        el.addEventListener('click', function(e) {
            modalClose(el.closest('.modal'))
            e.preventDefault();
        });
    }
}

function modalOpen(currentModal) {
    if (currentModal && unlock) {
        currentModal.classList.add('modal--open');
        bodyLock()
        currentModal.addEventListener('click', function (e) {
            if (!e.target.closest('.modal__container')) {
                modalClose(e.target.closest('.modal'))
            }
        });
    }
}

function bodyLock() {
    body.classList.add('no-scroll')
}

function bodyUnlock() {
    body.classList.remove('no-scroll')
}

function modalClose (modalActive) {
    if (unlock) {
        modalActive.classList.remove('modal--open');
        bodyUnlock()
    }
}