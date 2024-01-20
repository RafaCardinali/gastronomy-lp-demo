define(function () {
  const header = document.querySelector(".flexbox-container");
  const main = document.querySelector("main");
  const newClassHeader = "is-sticky";
  const newClassMain = "header-is-sticky";
  let isMobile = false;

  if (
    /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
      navigator.userAgent
    )
  ) {
    isMobile = true;
  }

  function getCurrentScroll() {
    return window.scrollY;
  }

  function toggleClassHeader() {
    const currentScroll = getCurrentScroll();
    if (isMobile === false) {
      currentScroll > 42
        ? header.classList.add(newClassHeader)
        : header.classList.remove(newClassHeader);
    } else {
      header.classList.add(newClassHeader);
    }
  }

  function toggleClassMain() {
    const currentScroll = getCurrentScroll();
    if (isMobile === false) {
      currentScroll > 42
        ? main.classList.add(newClassMain)
        : main.classList.remove(newClassMain);
    } else {
      main.classList.add(newClassMain);
    }
  }

  function initToggleClassMain() {
    window.addEventListener("scroll", toggleClassMain);
  }

  function initToggleClassHeader() {
    window.addEventListener("scroll", toggleClassHeader);
  }

  function initAllToggleClass() {
    initToggleClassHeader();
    initToggleClassMain();

    // Applies the functions when the page is loaded
    toggleClassHeader();
    toggleClassMain();
  }
   return {
    initAllToggleClass: initAllToggleClass
   }
});