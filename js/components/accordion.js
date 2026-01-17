document.addEventListener('DOMContentLoaded', function() {
    const accordionButtons = document.querySelectorAll('.accordion__button');

    accordionButtons.forEach((button) => {
        const panelId = button.getAttribute('aria-controls');
        
        if (!panelId) {
            return;
        }

        const panel = document.getElementById(panelId);
        const item = button.closest('.accordion__item');

        if (!panel || !item) {
            return;
        }

        const isExpanded = button.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            item.classList.add('accordion__item--open');
        } else {
            item.classList.remove('accordion__item--open');
        }

        button.addEventListener('click', function() {
            const currentExpanded = button.getAttribute('aria-expanded') === 'true';
            
            const newExpanded = !currentExpanded;
            button.setAttribute('aria-expanded', newExpanded.toString());
            
            if (newExpanded) {
                item.classList.add('accordion__item--open');
            } else {
                item.classList.remove('accordion__item--open');
            }
        });
        
        button.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                button.click();
            }
        });
    });
});
