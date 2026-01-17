document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.header__mobile-toggle');
    const mobileMenu = document.querySelector('.header__mobile-menu');
    const mobileMenuLinks = document.querySelectorAll('.header__mobile-menu-item a');

    if (!toggleButton || !mobileMenu) {
        return;
    }

    let scrollPosition = 0;

    function openMenu() {
        scrollPosition = window.pageYOffset || document.documentElement.scrollTop;

        toggleButton.setAttribute('aria-expanded', 'true');
        toggleButton.setAttribute('aria-label', 'Закрыть меню');
        mobileMenu.setAttribute('aria-hidden', 'false');

        document.body.style.overflow = 'hidden';
        document.body.style.position = 'fixed';
        document.body.style.top = `-${scrollPosition}px`;
        document.body.style.width = '100%';
        document.documentElement.style.overflow = 'hidden';
    }

    function closeMenu() {
        toggleButton.setAttribute('aria-expanded', 'false');
        toggleButton.setAttribute('aria-label', 'Открыть меню');
        mobileMenu.setAttribute('aria-hidden', 'true');

        document.body.style.overflow = '';
        document.body.style.position = '';
        document.body.style.top = '';
        document.body.style.width = '';
        document.documentElement.style.overflow = '';
        
        window.scrollTo(0, scrollPosition);
    }

    function toggleMenu() {
        const isExpanded = toggleButton.getAttribute('aria-expanded') === 'true';
        if (isExpanded) {
            closeMenu();
        } else {
            openMenu();
        }
    }

    toggleButton.addEventListener('click', toggleMenu);

    mobileMenuLinks.forEach(link => {
        link.addEventListener('click', closeMenu);
    });

    document.addEventListener('keydown', function(event) {
        if (event.key === 'Escape' && toggleButton.getAttribute('aria-expanded') === 'true') {
            closeMenu();
        }
    });

    document.addEventListener('click', function(event) {
        if (
            toggleButton.getAttribute('aria-expanded') === 'true' &&
            !mobileMenu.contains(event.target) &&
            !toggleButton.contains(event.target)
        ) {
            closeMenu();
        }
    });
});
