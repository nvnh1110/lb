/*================ MENU ==================*/
const menuBtn = document.querySelector(".menu-btn");
const menu = document.querySelector(".menu-container");
const dropdowns = document.querySelectorAll(".dropdown > div");
const subDropdowns = document.querySelectorAll(".sub-dropdown > div");

//Toggle variable
let menuOpen = false;
//Set click event to menu button
menuBtn.addEventListener("click", () => {
  //Toggle mega menu show class
  menu.classList.toggle("mega-menu-show");
  //If the menu open variable is false
  if (menuOpen === false) {
    //Set the close icon to the menu button
    menuBtn.innerHTML = `
      <i class="ri-close-line"></i>
    `;
    //Set menu open to true
    menuOpen = true;
  } else {
    //Set the menu icon to the menu button
    menuBtn.innerHTML = `
      <i class="ri-menu-3-line"></i>
    `;
    //Set menu open to false
    menuOpen = false;
  }
});

//Select all dropdowns
dropdowns.forEach((dropdown) => {
  //Add click event
  dropdown.addEventListener("click", (e) => {
    //Toggle dropdown menu show class
    dropdown.nextElementSibling.classList.toggle("menu-show");
  });
});

//Select all sub dropdowns
subDropdowns.forEach((subDropdown) => {
  //Add click event
  subDropdown.addEventListener("click", (e) => {
    //Toggle sub dropdown menu show class
    subDropdown.nextElementSibling.classList.toggle("sub-menu-show");
  });
});

/*======== DONATE ========*/
const donateButton = document.getElementById("donate-button"),
  donateClose = document.getElementById("donate-close"),
  donateContent = document.getElementById("donate-content");
if (donateButton) {
  donateButton.addEventListener("click", () => {
    donateContent.classList.add("show");
  });
}
if (donateClose) {
  donateClose.addEventListener("click", () => {
    donateContent.classList.remove("show");
  });
}
/*=============== SEARCH ===============*/
const searchButton = document.getElementById("search-button"),
  searchClose = document.getElementById("search-close"),
  searchContent = document.getElementById("search-content");
if (searchButton) {
  searchButton.addEventListener("click", () => {
    searchContent.classList.add("show-search");
  });
}
if (searchClose) {
  searchClose.addEventListener("click", () => {
    searchContent.classList.remove("show-search");
  });
}

/*============== = Q&A ===================*/
const faqs = document.querySelectorAll(".faq");

faqs.forEach((faq) => {
  faq.addEventListener("click", () => {
    faq.classList.toggle("open");

    // change icon
    const icon = faq.querySelector(".faq__icon i");
    if (icon.className === "ri-question-line") {
      icon.className = "ri-question-answer-line";
    } else {
      icon.className = "ri-question-line";
    }
  });
});

/*========== TESTIMONIAL SWIPER ==========*/
let swiperTestimonial = new Swiper(".testimonial__swiper", {
  loop: true,
  spaceBetween: 16,
  slidesPerView: "auto",
  centeredSlides: "auto",

  breakpoints: {
    1150: {
      slidesPerView: 3,
      centeredSlides: false,
    },
  },
});
/*========== SHOW SCROLL UP BUTTON ==========*/
const scrollUp = () => {
  const scrollUpBtn = document.getElementById("scroll-up");
  // Hiện nút khi cuộn xuống quá 350px
  if (window.scrollY >= 350) {
    scrollUpBtn.classList.add("show-scroll");
  } else {
    scrollUpBtn.classList.remove("show-scroll");
  }
};
window.addEventListener("scroll", scrollUp);

/*========== SCROLL TO TOP SMOOTHLY WHEN CLICKING BUTTON ==========*/
document.getElementById("scroll-up").addEventListener("click", function (e) {
  e.preventDefault();
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

/*========== SCROLL SECTIONS ACTIVE LINK ==========*/
const sections = document.querySelectorAll("section[id]");

const scrollActive = () => {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 58;
    const sectionId = current.getAttribute("id");
    const sectionLink = document.querySelector(
      `.nav__menu a[href*="${sectionId}"]`
    );

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      sectionLink?.classList.add("active-link");
    } else {
      sectionLink?.classList.remove("active-link");
    }
  });
};
window.addEventListener("scroll", scrollActive);
/*========== DARK LIGHT THEME ==========*/
const themeButton = document.getElementById("theme-button");
const darkTheme = "dark-theme";
const iconTheme = "ri-sun-line";

// Previously selected topic (if user selected)
const selectedTheme = localStorage.getItem("selected-theme");
const selectedIcon = localStorage.getItem("selected-icon");

// We obtain the current theme that the interface has by validating the dark-theme class
const getCurrentTheme = () =>
  document.body.classList.contains(darkTheme) ? "dark" : "light";
const getCurrentIcon = () =>
  themeButton.classList.contains(iconTheme) ? "ri-moon-line" : "ri-sun-line";

// We validate if the user previously chose a topic
if (selectedTheme) {
  // If the validation is fulfilled, we ask what the issue was to know if we activated or deactivated the dark
  document.body.classList[selectedTheme === "dark" ? "add" : "remove"](
    darkTheme
  );
  themeButton.classList[selectedIcon === "ri-moon-line" ? "add" : "remove"](
    iconTheme
  );
}

// Activate / deactivate the theme manually with the button
themeButton.addEventListener("click", () => {
  // Add or remove the dark / icon theme
  document.body.classList.toggle(darkTheme);
  themeButton.classList.toggle(iconTheme);
  // We save the theme and the current icon that the user chose
  localStorage.setItem("selected-theme", getCurrentTheme());
  localStorage.setItem("selected-icon", getCurrentIcon());
});
