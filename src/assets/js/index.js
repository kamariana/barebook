/**
 * Toggle Fullscreen Navigation
 */
(() => {

  const openNavigation = document.querySelectorAll('.js-open-nav')
  const closeNavigation = document.querySelector('.js-close-nav')
  const fullscreenNavigation = document.querySelector('.js-fullscreen-nav')
  
  const open = () => {
    fullscreenNavigation.classList.add('is-open')
  }

  const close = () => {
    fullscreenNavigation.classList.remove('is-open')
  }

  openNavigation.forEach(nav => {
    nav.addEventListener('click', open)
  })

  if (closeNavigation) {
    closeNavigation.addEventListener('click', close)
  }

})();



/**
 * Tabbed
 */
 (function() {
  /**
   * Variables - Get all the relevant elements
   */
  const tabbed = document.querySelector(".js-tabbed");
  const tablist = tabbed.querySelector(".js-tabs");

  let tabs = [...tabbed.querySelectorAll(".js-tab")];
  let panels = [...tabbed.querySelectorAll(".js-tab-panel")];

  /**
   * Functions
   */
  const switchTab = (activeTab, targetTab) => {
    targetTab.focus();
    targetTab.removeAttribute("tabindex");
    targetTab.setAttribute("aria-selected", "true");

    activeTab.removeAttribute("aria-selected");
    activeTab.setAttribute("tabindex", "-1");

    // get the index of the active and target tabs
    const activeIndex = tabs.indexOf(activeTab);
    const targetIndex = tabs.indexOf(targetTab);

    // hide and show the panels
    panels[activeIndex].hidden = true;
    panels[targetIndex].hidden = false;
  };

  const getNextTab = index => {
    if (index !== tabs.length - 1) {
      return tabs[index + 1];
    }
  };

  const getPreviousTab = index => {
    if (index !== 0) {
      return tabs[index - 1];
    }
  };

  // Events
  const handleClickEvent = e => {
    e.preventDefault();
    const activeTab = tabbed.querySelector("[aria-selected]");
    const targetTab = e.currentTarget;

    if (targetTab !== activeTab) {
      switchTab(activeTab, targetTab);
    }
  };

  const handleKeyEvent = e => {
    const { key } = e;
    const activeTab = e.currentTarget;

    // not arrow left and right? Exist
    if (key !== "ArrowLeft" && key !== "ArrowRight") {
      return;
    }

    // not on a tab? Exist
    if (!e.target.matches(".js-tab")) {
      return;
    }

    // get the index of the active tab
    const index = tabs.indexOf(activeTab);
    let targetTab;

    // is it the right arrow? then show next tab
    if (key === "ArrowRight") {
      targetTab = getNextTab(index);
    }

    // is it the left arrow? then show prev tab
    if (key === "ArrowLeft") {
      targetTab = getPreviousTab(index);
    }

    if (targetTab) {
      switchTab(activeTab, targetTab);
    }
  };

  /**
   * Add tabs semantics and events
   * 1. Add role="tablist" to the tabs parent
   * 2. Handle clicking for mouse user
   * 3. handle keydown for keyboard users
   */
  tablist.setAttribute("role", "tablist"); // 1

  tabs.forEach((tab, index) => {
    tab.setAttribute("role", "tab");
    tab.setAttribute("id", `tab-${index + 1}`);
    tab.setAttribute("tabindex", "-1");

    tab.addEventListener("click", handleClickEvent); // 2
    tab.addEventListener("keydown", handleKeyEvent); // 3
  });

  /**
   * Add panel semantics and hide tab panels
   * 1. Add role="tabpanel"
   * 2.
   */
  panels.forEach((panel, index) => {
    const id = panel.getAttribute("id");

    panel.setAttribute("role", "tabpanel");
    panel.setAttribute("tabindex", "-1");
    panel.setAttribute("aria-labelledby", `${tabs[index].id}`);
    panel.hidden = true;
  });

  // Initially activate the first tab and show the first tab panel
  tabs[0].removeAttribute("tabindex");
  tabs[0].setAttribute("aria-selected", "true");
  panels[0].hidden = false;
})();



/**
 * Hide navbar on scroll down and show on scroll up
 */

(() => {

  const navbar = document.querySelector('.js-navbar')
  let currentPosition = 0

  window.addEventListener('scroll', (event) => {
      let top = window.scrollY

      if (currentPosition < top && top > 16) {
        navbar.classList.add('on-scroll-down')
        navbar.classList.remove('on-scroll-up')
      } else {
        navbar.classList.remove('on-scroll-down')
        navbar.classList.add('on-scroll-up')
      }

      currentPosition = top

      if (currentPosition === 0) {
        navbar.classList.remove('on-scroll-up', 'on-scroll-down')
      }
  })

})();