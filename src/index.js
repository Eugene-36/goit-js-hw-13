import fetchObj from "./js/fetch-pag";
//onsole.log(fetchObj);
import "./styles.css";
import x from "./js/refs.js";

// console.log(x.form);

const { form, searchBtn, container, input } = x;

console.log(form, searchBtn, container, input);

fetchObj.getfetch();
