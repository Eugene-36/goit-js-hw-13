import refs from "./refs.js";
//console.log(refs);
import tem from "../templates/templatesManyCoutry.hbs";

export default {
  query: " ",
  page: 1,
  perPage: 12,
  key: "19822879-41d2f6642d4c25d7fba4c0424",
  baseUrl: "https://pixabay.com/api/",

  get queryValue() {
    return this.query;
  },
  set queryValue(val) {
    return (this.query = val);
  },

  getfetch(place) {
    const search = `${this.baseUrl}?image_type=photo&orientation=horizontal&q=${this.query}&page=${this.page}&per_page=${this.perPage}&key=${this.key}`;

    return fetch(search)
      .then((response) => {
        console.log(response);
        return response.json();
      })

      .then(({ hits }) => {
        if (hits.length < 12 || this.query === "") {
          refs.loadMore.classList.add("isHidden");
        }

        console.log(hits);
        const items = tem(hits);
        place.insertAdjacentHTML("beforeend", items);

        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: "smooth",
        });

        //Добавление кнопки для прогрузки
      });
  },
  setPage() {
    this.page += 1;
    return this.page;
  },
  reset() {
    return (this.page = 1);
  },
};
