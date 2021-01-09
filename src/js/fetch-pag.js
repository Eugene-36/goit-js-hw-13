import refs from "./refs.js";
//console.log(refs);

export default {
  query: "kitten",
  page: 1,
  perPage: 4,
  key: "19822879-41d2f6642d4c25d7fba4c0424",
  baseUrl: `https://pixabay.com/api/`,

  getfetch() {
    fetch(this.baseUrl).then((response) => console.log(response));
  },
};
