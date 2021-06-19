import refs from "./refs.js";
const { modal, modalContent } = refs;

window.addEventListener("keydown", (e) => {
  if (e.code === "Escape") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});

modal.addEventListener("click", (e) => {
  if (e.target.id === "modal") {
    modal.classList.add("is-hidden");
    modalContent.innerHTML = "";
  }
});