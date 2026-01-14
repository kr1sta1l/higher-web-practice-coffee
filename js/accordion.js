document.addEventListener('DOMContentLoaded', function() {
    const accordionItems = document.querySelectorAll('.accordion__item');

    accordionItems.forEach((item, index) => {
        const button = item.querySelector('.accordion__button');
        const panel = item.querySelector('.accordion__panel');

        if (button && panel) {
            const isExpanded = button.getAttribute('aria-expanded') === 'true';
            if (!isExpanded) {
                item.classList.remove('accordion__item--open');
            } else {
                item.classList.add('accordion__item--open');
            }

            button.addEventListener('click', function() {
                const isOpen = item.classList.contains('accordion__item--open');
                
                if (isOpen) {
                    item.classList.remove('accordion__item--open');
                    button.setAttribute('aria-expanded', 'false');
                } else {
                    item.classList.add('accordion__item--open');
                    button.setAttribute('aria-expanded', 'true');
                }
            });
            
            button.addEventListener('keydown', function(e) {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    button.click();
                }
            });
        }
    });
});
