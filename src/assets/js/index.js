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
 * Human Readable Date
 * TODO refactor and move to its own js file 
    https://excessivelyadequate.com/posts/timeago.html
 */
(() => {

  const postedDate = document.querySelector('.js-posted-on')
  const postedAgo = document.querySelector('.js-posted-ago')
  let date

  const ago = (date) => {

    const render = (n, unit) => {
      return ( 
        n + " " + unit + ((n == 1) 
        ? "" 
        : "s") + " ago"
      )
    }

    const seconds = Math.floor((new Date() - date) / 1000);
    let interval = Math.floor(seconds / (60 * 60 * 24 * 365));

    if (Math.floor(seconds / (60 * 60 * 24 * 30 * 365)) >= 1) {
      return render(interval, 'year');
    }

    interval = Math.floor(seconds / (60 * 60 * 24 * 30));
    if (interval >= 1) {
      return render(interval, 'month');
    }

    interval = Math.floor(seconds / (60 * 60 * 24));
    if (interval >= 1) {
      return render(interval, 'day');
    }

    interval = Math.floor(seconds / (60 * 60));
    if (interval >= 1) {
      return render(interval, 'hour');
    }

    interval = Math.floor(seconds / 60);
    if (interval >= 1) {
      return render(interval, 'minute');
    }

    interval = Math.floor(seconds);
    return render(interval, 'second');
  }

  if (postedDate || postedAgo) {
    date = Date.parse(postedDate.getAttribute('datetime'))
    postedAgo.textContent = ago(date);
  }
})();





// theme picker
(() => {
  const themePickerButton = document.querySelector('.js-theme-picker-button')

  const STORAGE_KEY = 'user-color-scheme'
  const COLOR_MODE_KEY = '--color-mode'

  const modeToggleButton = document.querySelector('.js-mode-button')

  console.log(modeToggleButton);

  themePickerButton.addEventListener('click', () => {
      let expanded = themePickerButton.getAttribute('aria-expanded') === 'true' ? 'false' : 'true'
      let target = themePickerButton.nextElementSibling

      themePickerButton.setAttribute('aria-expanded', expanded)
      target.hidden = !target.hidden
  })


  // function to extract the --color-mode value:
  const getCSSCustomProp = propKey => {
    let response = getComputedStyle(document.documentElement).getPropertyValue(propKey)
  
    if (response.length) {
      response = response.replace(/\"/g, '').trim()
    }
  
    return response
  }

  // a function that applies the user preference that’s either set in local storage or passed in
  const applySetting = passedSetting => {
    let currentSetting = passedSetting || localStorage.getItem(STORAGE_KEY);
  
    if (currentSetting) {
      document.documentElement.setAttribute('data-user-color-scheme', currentSetting)
      //setButtonLabelAndStatus(currentSetting)
    } else {
      //setButtonLabelAndStatus(getCSSCustomProp(COLOR_MODE_KEY))
    }
  }

  const setButtonLabelAndStatus = currentSetting => {
    modeToggleText.innerText = `Enable ${
      currentSetting === 'dark' ? 'light' : 'dark'
    } mode`;
    modeStatusElement.innerText = `Color mode is now "${currentSetting}"`;
  }

  // the code that toggles the colour mode
  const toggleSetting = () => {
    let currentSetting = localStorage.getItem(STORAGE_KEY);
  
    switch (currentSetting) {
      case null:
        currentSetting = getCSSCustomProp(COLOR_MODE_KEY) === 'dark' ? 'light' : 'dark';
        break;
      case 'light':
        currentSetting = 'dark';
        break;
      case 'dark':
        currentSetting = 'light';
        break;
    }
  
    localStorage.setItem(STORAGE_KEY, currentSetting);
  
    return currentSetting;
  }

  modeToggleButton.addEventListener('click', evt => {
    evt.preventDefault()
  
    applySetting(toggleSetting())
  })
  
  applySetting()



})();


