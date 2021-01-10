import fetchObj from "./js/fetch-pag";
import libs from "./js/libs.js";
import "./styles.css";
import x from "./js/refs.js";

const { form, searchBtn, container, input, loadMore } = x;

console.log(form, searchBtn, container, input);

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = e.target.elements.query.value;
  fetchObj.getfetch(inputValue, container);

  container.innerHTML = "";

  // Чистка инпута
  input.value = "";
  loadMore.classList.remove("isHidden");
});

loadMore.addEventListener("click", () => {
  fetchObj.setPage();
  console.log("все ок ");

  fetchObj.getfetch(undefined, container);
});
