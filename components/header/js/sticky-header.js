define(function () {
  const header = document.querySelector(".flexbox-container");
  const main = document.querySelector("main");
  const stickyHeaderClass = "sticky-header";
  const stickyMainClass = "sticky-main";
  let isMobile = false;
  const topbarHeigth = 42;

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
    if (!isMobile) {
      currentScroll > topbarHeigth
        ? header.classList.add(stickyHeaderClass)
        : header.classList.remove(stickyHeaderClass);
    } else {
      header.classList.add(stickyHeaderClass);
    }
  }

  function toggleClassMain() {
    const currentScroll = getCurrentScroll();
    if (!isMobile) {
      currentScroll > topbarHeigth
        ? main.classList.add(stickyMainClass)
        : main.classList.remove(stickyMainClass);
    } else {
      main.classList.add(stickyMainClass);
    }
  }

  function initEventListeners() {
    window.addEventListener("scroll", toggleClassMain);
    window.addEventListener("scroll", toggleClassHeader);
  }

  function initStickyHeader() {
    initEventListeners();

    // Applies the functions when the page is loaded
    toggleClassHeader();
    toggleClassMain();
  }

   return {
    initStickyHeader: initStickyHeader
   }
}); 