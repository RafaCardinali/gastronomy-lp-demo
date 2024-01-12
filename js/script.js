const rootStyle = getComputedStyle(document.documentElement);
const secondaryColor = rootStyle.getPropertyValue('--secondary-color').trim();
const hamburguerButton = document.querySelector('.hamburguer__icon');
const hamburguerContent = document.querySelector('.hamburguer__content');
const hamburguerItemDropdown = document.querySelectorAll('.hamburguer__content__main__item a');

function handleHamburguerContentVisibility () {
    hamburguerContent.style.display = hamburguerContent.style.display === 'block' ? 'none' : 'block';
};

function toggleHamburguerIconColor () {
    hamburguerButton.style.color = hamburguerContent.style.display === 'block' ? secondaryColor : '';
}

function showHamburguerMenu() {
    handleHamburguerContentVisibility();
    toggleHamburguerIconColor();
}

hamburguerButton.addEventListener('click', showHamburguerMenu);

function toggleSubmenuIcon (submenuDropdown, submenuIcon) {
    if (submenuDropdown.style.display === 'block') {
        if (submenuIcon) submenuIcon.textContent = 'remove';
    } else {
        if (submenuIcon) submenuIcon.textContent = 'add';
    }
}

function handleSubmenuDropdownVisibility(submenuDropdown) {
    submenuDropdown.style.display = submenuDropdown.style.display === 'block' ? 'none' : 'block';
}

function handleSubmenuActions(submenuDropdown, submenuIcon) {
    if (submenuDropdown) {
        handleSubmenuDropdownVisibility(submenuDropdown);
        toggleSubmenuIcon(submenuDropdown, submenuIcon);
    }
}

function handleSubmenuDropdownClick(event) {
    const menuDropdownItem  = event.target.closest('.hamburguer__content__main__item a');
    const submenuDropdown = menuDropdownItem.nextElementSibling;
    const submenuIcon = menuDropdownItem.querySelector('.material-symbols-outlined');

    handleSubmenuActions(submenuDropdown, submenuIcon);

    event.preventDefault();
}

function setupDropdownListeners(dropdowns) {
    dropdowns.forEach(function(dropdown) {
        dropdown.addEventListener('click', handleSubmenuDropdownClick);
    });
}

setupDropdownListeners(hamburguerItemDropdown);