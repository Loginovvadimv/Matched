
document.addEventListener('DOMContentLoaded', function() {
    const modalTrigger = document.querySelectorAll('[data-modal]'),
    modal = document.querySelector('.modal'),
    modalCloseBtn = document.querySelector('[data-close]'),
    modalInput = document.querySelectorAll('.modal__input');

    modalTrigger.forEach(btn => {
        btn.addEventListener('click', function() {
            modal.classList.add('show');
            modal.classList.remove('hide');
            document.body.style.overflow = 'hidden';
        });
        });

        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                closeModal();
            }
            });

    function closeModal() {
         modal.classList.add('hide');
         modal.classList.remove('show');
         document.body.style.overflow = '';
        }
        
        modalCloseBtn.addEventListener('click', closeModal);

        document.addEventListener('keydown', (e) => {
            if (e.code === "Escape" && modal.classList.contains('show')) { 
                closeModal();
            }
            });

            modalInput.forEach(item => {
                item.addEventListener('click', function(event) {
                    event.target.style.opacity = '1';
                })
            });
            
});

