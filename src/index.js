import css from "./css/styles.css";
import normalize from "./css/modern-normalize.css";
import modalCss from "./css/modal.css";
import refs from "./js/refs.js";
import arr from "./db/countries.json";
import searchItemTemplate from "./tamplate/countrySearchItem.hbs";
import modalItemTemplate from "./tamplate/modalCountryItem.hbs"
// console.log(refs.searchForm);
console.log("arr", arr);
const { searchForm, searchResults, coutriesList, modal, modalContent } = refs;

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    // console.log(e.target);
    // console.dir(e.target);
    // console.log(e.target.elements.search.value);
    let search = e.target.elements.search.value.toLowerCase();

    let country = arr.filter(elem => elem.name.toLowerCase().includes(search))
    console.log(country);

    let items = searchItemTemplate(country);
    // console.log(items);

    searchResults.insertAdjacentHTML('afterbegin', items)

    // теперь вешаем слушатель события на каждый элем
    console.log([...searchResults.children]);
    [...searchResults.children].forEach(elem => {
        elem.addEventListener('click', (e) => {
            console.log(e.target.textContent.trim());
            let search = e.target.textContent.trim();
            let country = arr.filter(elem => elem.name === search)
            console.log(country);

            let items = modalItemTemplate(country);
            console.log(items);

            modalContent.insertAdjacentHTML('afterbegin', items);
            modal.classList.remove('is-hidden');
        })
    })
});

window.addEventListener('keydown', (e) => {
    if (e.code === "Escape") {
        modal.classList.add('is-hidden');
        modalContent.innerHTML = '';
    };
});

modal.addEventListener('click', (e) => {
    if (e.target.id === "modal") {
        modal.classList.add('is-hidden');
        modalContent.innerHTML = '';
    };
})



