const rootStyle = getComputedStyle(document.documentElement);
const secondColor = rootStyle.getPropertyValue('--second-color').trim();
const hamburguer = document.querySelector('.hamburguer__icon');
const menu = document.querySelector('.hamburguer__content');

hamburguer.addEventListener('click', function () {
    if (menu.style.display === 'block') {
        menu.style.display = 'none';
        hamburguer.style.color = '';
    } else {
        menu.style.display = 'block';
        hamburguer.style.color = secondColor;
    }
});

const dropdowns = document.querySelectorAll('.hamburguer__content__main__item a');
dropdowns.forEach(function(dropdown) {
    dropdown.addEventListener('click', function(event) {
        const parentLink = event.target.closest('.hamburguer__content__main__item a');
        const submenu = parentLink.nextElementSibling;
        const icon = parentLink.querySelector('.material-symbols-outlined');
        if (submenu) {
            if (submenu.style.display === 'block') {
                submenu.style.display = 'none';
                if (icon) icon.textContent = 'add';
            } else {
                submenu.style.display = 'block';
                if (icon) icon.textContent = 'remove';
            }
        }

        event.preventDefault();
    });
});