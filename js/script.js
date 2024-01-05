'use strict';



// element toggle function
const elementToggleFunc = function (elem) { elem.classList.toggle("active"); }



// sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { elementToggleFunc(sidebar); });



// comments variables
const commentsItem = document.querySelectorAll("[data-comments-item]");
const floatingDivContainer = document.querySelector("[data-floating-div-container]");
const floatingDivCloseBtn = document.querySelector("[data-floating-div-close-btn]");
const overlay = document.querySelector("[data-overlay]");
// floating-div variable
const floatingDivImg = document.querySelector("[data-floating-div-img]");
const floatingDivTitle = document.querySelector("[data-floating-div-title]");
const floatingDivText = document.querySelector("[data-floating-div-text]");
// floating-div toggle function
const commentsfloatingDivFunc = function () {
  floatingDivContainer.classList.toggle("active");
  overlay.classList.toggle("active");
}
// add click event to all floating-div items
for (let i = 0; i < commentsItem.length; i++) {
  commentsItem[i].addEventListener("click", function () {
    floatingDivImg.src = this.querySelector("[data-comments-avatar]").src;
    floatingDivImg.alt = this.querySelector("[data-comments-avatar]").alt;
    floatingDivTitle.innerHTML = this.querySelector("[data-comments-title]").innerHTML;
    floatingDivText.innerHTML = this.querySelector("[data-comments-text]").innerHTML;
    commentsfloatingDivFunc();
  });
}
// add click event to floating-div close button
floatingDivCloseBtn.addEventListener("click", commentsfloatingDivFunc);
overlay.addEventListener("click", commentsfloatingDivFunc);



// custom select variables for mobile and pc
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

select.addEventListener("click", function () { elementToggleFunc(this); });

// add event in all select items
for (let i = 0; i < selectItems.length; i++) {
  selectItems[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
}

// filter variables
const filterItems = document.querySelectorAll("[data-filter-item]");

const filterFunc = function (selectedValue) {
  for (let i = 0; i < filterItems.length; i++) {
    if (selectedValue === "all") {
      filterItems[i].classList.add("active");
    } else if (selectedValue === filterItems[i].dataset.category) {
      filterItems[i].classList.add("active");
    } else {
      filterItems[i].classList.remove("active");
    }
  }
}

// add event in all filter button items for large screen
let lastClickedBtn = filterBtn[0];

for (let i = 0; i < filterBtn.length; i++) {
  filterBtn[i].addEventListener("click", function () {
    let selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    filterFunc(selectedValue);

    lastClickedBtn.classList.remove("active");
    this.classList.add("active");
    lastClickedBtn = this;
  });
}



// contact form variables to lock or unlock the submit button
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// add event to all form input field
for (let i = 0; i < formInputs.length; i++) {
  formInputs[i].addEventListener("input", function () {
    // check all input field have value or not
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
}



// page navigation variables to switch about, resume, portfolio, blog and contact form pages
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// add event to all nav link
for (let i = 0; i < navigationLinks.length; i++) {
  navigationLinks[i].addEventListener("click", function () {
    for (let i = 0; i < pages.length; i++) {
      if (this.innerHTML.toLowerCase() === pages[i].dataset.page) {
        pages[i].classList.add("active");
        navigationLinks[i].classList.add("active");
        window.scrollTo(0, 0);
      } else {
        pages[i].classList.remove("active");
        navigationLinks[i].classList.remove("active");
      }
    }
  });
}