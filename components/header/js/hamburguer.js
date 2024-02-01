define(function () {
  const rootStyle = getComputedStyle(document.documentElement);
  const secondaryColor = rootStyle.getPropertyValue("--secondary-color").trim();
  const hamburguerButton = document.querySelector(".hamburguer__icon");
  const hamburguerContent = document.querySelector(".hamburguer__content");
  const hamburguerItemDropdown = document.querySelectorAll(".hamburguer__content__main__item a");

  function handleHamburguerContentVisibility() {
    hamburguerContent.style.display =
      hamburguerContent.style.display === "block" ? "none" : "block";
  }

  function toggleHamburguerIconColor() {
    hamburguerButton.style.color =
      hamburguerContent.style.display === "block" ? secondaryColor : "";
  }

  function showHamburguerMenu() {
    handleHamburguerContentVisibility();
    toggleHamburguerIconColor();
  }

  function toggleSubmenuIcon(submenuDropdown, submenuIcon) {
    if (submenuDropdown.style.display === "block") {
      if (submenuIcon) submenuIcon.textContent = "remove";
    } else {
      if (submenuIcon) submenuIcon.textContent = "add";
    }
  }

  function handleSubmenuDropdownVisibility(submenuDropdown) {
    submenuDropdown.style.display =
      submenuDropdown.style.display === "block" ? "none" : "block";
  }

  function handleSubmenuActions(submenuDropdown, submenuIcon) {
    if (submenuDropdown) {
      handleSubmenuDropdownVisibility(submenuDropdown);
      toggleSubmenuIcon(submenuDropdown, submenuIcon);
    }
  }

  function handleSubmenuDropdownClick(event) {
    const menuDropdownItem = event.target.closest(
      ".hamburguer__content__main__item a"
    );
    const submenuDropdown = menuDropdownItem.nextElementSibling;
    const submenuIcon = menuDropdownItem.querySelector(
      ".material-symbols-outlined"
    );

    handleSubmenuActions(submenuDropdown, submenuIcon);

    event.preventDefault();
  }

  function setupDropdownListeners(dropdowns) {
    dropdowns.forEach(function (dropdown) {
      dropdown.addEventListener("click", handleSubmenuDropdownClick);
    });
  }

  function handleHamburguerContentOutsideClick(event) {
    if(!event.target.closest(".hamburguer__content") && !event.target.closest(".hamburguer__icon")) {
      if(hamburguerContent.style.display === "block") {
        hamburguerContent.style.display = "none";
        hamburguerButton.style.color = "";
        resetSubmenus();
      }
    }
  }

  function resetSubmenus() {
    hamburguerItemDropdown.forEach(function (dropdown) {
      const submenuDropdown = dropdown.nextElementSibling;
      if(submenuDropdown) {
        submenuDropdown.style.display = "none";
      }

      const submenuIcon = dropdown.querySelector(".material-symbols-outlined");
      if(submenuIcon) {
        submenuIcon.textContent = "add";
      }
    });
  }

  function initHamburguer() {
    hamburguerButton.addEventListener("click", showHamburguerMenu);
    setupDropdownListeners(hamburguerItemDropdown);
    document.addEventListener("click", handleHamburguerContentOutsideClick);
  }

  return {
    initHamburguer: initHamburguer,
  };
});
