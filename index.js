const header = document.querySelector(".header");
const section1 = document.querySelector(".section-1");
const btnUser = document.querySelector(".js-button-user");
const btnClose = document.querySelector(".btn--close-modal");

const modal = document.querySelector(".modal");
const overlay = document.querySelector(".overlay");

console.log(section1);

const initialCoords = section1.getBoundingClientRect();
console.log(initialCoords);

window.addEventListener("scroll", function () {
  if (window.scrollY > initialCoords.top) header.classList.add("sticky");
  else header.classList.remove("sticky");
});

function openModal(e) {
  e.preventDefault();
  modal.classList.remove("hidden");
  overlay.classList.remove("hidden");
}

function closeModal() {
  modal.classList.add("hidden");
  overlay.classList.add("hidden");
}

btnUser.addEventListener("click", openModal);
btnClose.addEventListener("click", closeModal);

overlay.addEventListener("click", closeModal);

document.addEventListener("keydown", function (e) {
  if (e.key === "Escape") {
    closeModal();
  }
});
