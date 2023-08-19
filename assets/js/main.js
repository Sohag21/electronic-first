
/*===== POPUP =====*/
let popup = document.getElementById("popup");
let popupMobile = document.getElementById("popupMobile");
let list = document.getElementById("submenuList");
let link = document.getElementById("submenuLink");
let main = document.getElementById("main");

function openModal(){
  popup.classList.toggle("open-modal");
  list.classList.toggle("nav__submenu-list2");
  link.classList.toggle("nav__submenu-link2");
}

main.addEventListener("click", () => {
  popup.classList.remove("open-modal");
  list.classList.remove("nav__submenu-list2");
  link.classList.remove("nav__submenu-link2");
});

function openModalMobile(){
  popupMobile.classList.toggle("open-modal");
  list.classList.toggle("nav__submenu-list2");
  link.classList.toggle("nav__submenu-link2");
}

/*===== SEARCH =====*/
let submenuList = document.getElementById("submenuList");
let searchField = document.getElementById("searchField");
let openSearchBtn = document.getElementById("openSearchBtn");
let closeSearchBtn = document.getElementById("closeSearchBtn");


function openSearch(){
  submenuList.classList.add("submenuList-none");
  searchField.classList.add("search__field-open");
  openSearchBtn.classList.add("openSearch-none");
  closeSearchBtn.classList.add("search__btn2-open");
}    

function closeSearch(){
  submenuList.classList.remove("submenuList-none");
  searchField.classList.remove("search__field-open");
  openSearchBtn.classList.remove("openSearch-none");
  closeSearchBtn.classList.remove("search__btn2-open");
}
  

/*===== FOR MOBILE SCREEN =====*/
let submenuListMobile = document.getElementById("submenuListMobile");
let searchFieldMobile = document.getElementById("searchFieldMobile");
let openSearchBtnMobile = document.getElementById("openSearchBtnMobile");
let closeSearchBtnMobile = document.getElementById("closeSearchBtnMobile");

function openSearchMobile(){
  submenuListMobile.classList.add("submenuList-none");
  searchFieldMobile.classList.add("search__field-open");
  openSearchBtnMobile.classList.add("openSearch-none");
  closeSearchBtnMobile.classList.add("search__btn2-open");
}

function closeSearchMobile(){
  submenuListMobile.classList.remove("submenuList-none");
  searchFieldMobile.classList.remove("search__field-open");
  openSearchBtnMobile.classList.remove("openSearch-none");
  closeSearchBtnMobile.classList.remove("search__btn2-open");
}


/*===== TOGGLE =====*/
let navToggleBtn = document.getElementById("nav-toggle");
let navToggleBtn2 = document.getElementById("nav-toggle2");

function navToggle(){
  navMobile.classList.toggle("nav-responsive");
  navToggleBtn.classList.toggle("nav-toggle-close");
  navToggleBtn2.classList.toggle("nav-toggle-open");
}
