import refs from "./refs.js";
import searchItemTemplate from "../tamplate/countrySearchItem.hbs";
import modalItemTemplate from "../tamplate/modalCountryItem.hbs";
import arr from "../db/countries.json";
const { searchForm, searchResults, coutriesList, modal, modalContent } = refs;

searchForm.addEventListener("submit", (e) => {
  e.preventDefault();

  let search = e.target.elements.search.value.toLowerCase();

  let country = arr.filter((elem) => elem.name.toLowerCase().includes(search));

  let items = searchItemTemplate(country);

  searchResults.insertAdjacentHTML("afterbegin", items);

  [...searchResults.children].forEach((elem) => {
    elem.addEventListener("click", (e) => {
      let search = e.target.textContent.trim();
      let country = arr.filter((elem) => elem.name === search);

      let items = modalItemTemplate(country);

      modalContent.insertAdjacentHTML("afterbegin", items);
      modal.classList.remove("is-hidden");
    });
  });
});
