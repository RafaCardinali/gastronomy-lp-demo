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

  function toggleClasses(element, stickyClass) {
    const currentScroll = getCurrentScroll();
    if (!isMobile) {
        currentScroll > topbarHeigth ? element.classList.add(stickyClass) : element.classList.remove(stickyClass);
    } else {
        element.classList.add(stickyClass);
    }
  }

  function toggleStickyClasses() {
    toggleClasses(header, stickyHeaderClass);
    toggleClasses(main, stickyMainClass);
  }

  function initToggleStickyClasses() {
    window.addEventListener("scroll", function() {
        toggleStickyClasses();
    });

    toggleStickyClasses();
}

  function initStickyHeader() {
    initToggleStickyClasses();
  }

   return {
    initStickyHeader: initStickyHeader
   }
}); 