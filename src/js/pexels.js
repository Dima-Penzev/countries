import axiosFetch from "./fetch/axiosFetch.js";
import pexelsFetch from "./fetch/clientFetch.js";
import classicFetch from "./fetch/classicFetch.js";
import createGalary from "./createGalery.js";
import refs from "./refs.js";
const { searchForm } = refs;

const KEY = "563492ad6f917000010000013484402f85244fed97c321dee080398f";
const perPage = "10";
const BASE_URL = "https://api.pexels.com/";

searchForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let search = e.target.elements.search.value.toLowerCase();
    let queryParams = `v1/search?query=${search}&per_page=${perPage}`;
    // axiosFetch(BASE_URL + queryParams, KEY, createGalary, searchForm)
    pexelsFetch(KEY, search, perPage, createGalary, searchForm)
    // classicFetch(KEY, BASE_URL + queryParams, createGalary, searchForm)
})

