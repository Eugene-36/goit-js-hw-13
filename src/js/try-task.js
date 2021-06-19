// // Пиши код ниже этой строки
// function add(a, b, c) {
//   console.log("Результат сложения равен", a + b + c);
//   //   console.log(b + b + b);
//   //   console.log(c + c + c);
//   // Пиши код выше этой строки
// }

// add(15, 27, 10); //52
// add(10, 20, 30); //60
// add(5, 10, 15); //30

// function makeOrderMessage(orderedQuantity, pricePerDroid, deliveryFee) {
//   // Пиши код ниже этой строки

//   const message = `Вы заказали дроидов на сумму ${
//     orderedQuantity * pricePerDroid + deliveryFee
//   } кредитов. Доставка (${deliveryFee} кредитов) включена в сумму заказа.`;

//   // Пиши код выше этой строки
//   return message;
// }

// console.log(makeOrderMessage(2, 100, 50));
// function getSubscriptionPrice(type) {
//   let price;
//   // Пиши код ниже этой строки

//   switch (
//     type // Дополни эту строку
//   ) {
//     case "starter": // Дополни эту строку
//       price = 0; // Дополни эту строку
//       break;

//     case "professional": // Дополни эту строку
//       price = 20; // Дополни эту строку
//       break;

//     case "organization": // Дополни эту строку
//       price = 50; // Дополни эту строку
//       break;
//   }

//   // Пиши код выше этой строки
//   return price;
// }
// console.log(getSubscriptionPrice("professional")); // 0.1.
// console.log(getSubscriptionPrice("organization")); //0.05
// console.log(getSubscriptionPrice("starter")); // 0.02

// function checkPassword(password) {
//   const ADMIN_PASSWORD = "jqueryismyjam";
//   let message;
//   switch (password) {
//     case "mangohackzor":
//       message = "Доступ запрещен, неверный пароль!";
//       break;

//     case null:
//       message = "Отменено пользователем!";
//       break;

//     case "polyhax":
//       message = "Доступ запрещен, неверный пароль!";
//       break;

//     case ADMIN_PASSWORD:
//       message = "Добро пожаловать!";
//       break;

//     default:
//   }

//   return message;
// }
// console.log(checkPassword("mangohackzor"));
// console.log(checkPassword(null));
// console.log(checkPassword("polyhax"));
// console.log(checkPassword("jqueryismyjam"));
//=======================================================

// function getShippingCost(country) {
//   let message;
//   // Пиши код ниже этой строки
//   switch (country) {
//     case "Австралия":
//       message = "Доставка в Австралия будет стоить 170 кредитов";
//       break;

//     case "Германия":
//       message = "Извините, в вашу страну доставки нет";
//       break;

//     case "Китай":
//       message = "Доставка в Китай будет стоить 100 кредитов";
//       break;

//     case "Чили":
//       message = "Доставка в Чили будет стоить 250 кредитов";
//       break;

//     case "Ямайка":
//       message = "Доставка в Ямайка будет стоить 120 кредитов";
//       break;

//     case "Швеция":
//       message = "Извините, в вашу страну доставки нет";
//       break;

//     default:
//   }
//   // Пиши код выше этой строки
//   return message;
// }

// console.log(getShippingCost("Австралия"));
// console.log(getShippingCost("Германия"));
// console.log(getShippingCost("Китай"));
// console.log(getShippingCost("Чили"));
// console.log(getShippingCost("Ямайка"));
// console.log(getShippingCost("Швеция"));
//======================
// function getSubstring(string, length) {
//   const substring = string.slice(0, length); // Дополни эту строку

//   return substring;
// }

// console.log(getSubstring("Привет мир", 3));
// console.log(getSubstring("Привет мир", 6));
// console.log(getSubstring("Привет мир", 8));
// console.log(getSubstring("Привет мир", 10));
// console.log(getSubstring("Привет мир", 0));
//==================
// function formatMessage(message, maxLength) {
//   let result;
//   console.log(maxLength);
//   var string = message;
//   var length = maxLength;
//   var trimmedString =
//     string.length > length ? string.substring(0, length) + "..." : string;
//   // Пиши код ниже этой строки
//   //result = message.lenght < maxLength ? message : message.substring(0, length - 3) + "...";
//   // Пиши код выше этой строки
//   return trimmedString;

//   // var string = "this is a string";
//   // var length = 20;
//   // var trimmedString =
//   //   string.length > length ? string.substring(0, length - 3) + "..." : string;
// }

// console.log(formatMessage("Curabitur ligula sapien", 16));
// console.log(formatMessage("Curabitur ligula sapien", 23));
// console.log(formatMessage("Vestibulum facilisis purus nec", 20));
// console.log(formatMessage("Vestibulum facilisis purus nec", 30));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 15));
// console.log(formatMessage("Nunc sed turpis a felis in nunc fringilla", 41));
// //===================================================================================

// function checkForSpam(message) {
//   let result = message.toLowerCase();
//   // Пиши код ниже этой строки
//   return result.includes("spam") || result.includes("sale");
//   // Пиши код выше этой строк
// }

// console.log(checkForSpam("Latest technology news"));
// console.log(checkForSpam("JavaScript weekly newsletter"));
// console.log(checkForSpam("Get best sale offers now!"));
// console.log(checkForSpam("Amazing SalE, only tonight!"));
// console.log(checkForSpam("Trust me, this is not a spam message"));
// console.log(checkForSpam("Get rid of sPaM emails. Our book in on sale!"));
// console.log(checkForSpam("[SPAM] How to earn fast money?"));

//===========================
// function calculateEngravingPrice(message, pricePerWord) {
//   // Пиши код ниже этой строки
//   let total = message.split(" ");

//   let length = total.length * pricePerWord;
//   //let total = length * pricePerWord;

//   console.log(length);
//   // Пиши код выше этой строки
// }

// console.log(calculateEngravingPrice("JavaScript у меня в крови", 10));
// console.log(calculateEngravingPrice("JavaScript у меня в крови", 20));
// console.log(
//   calculateEngravingPrice("Веб-разработка это творческая работа", 40),
// );
// console.log(
//   calculateEngravingPrice("Веб-разработка это творческая работа", 20),
// );
//=======================================================
// function makeArray(firstArray, secondArray, maxLength) {
//   // Пиши код ниже этой строки
//   let newArray = firstArray.concat(secondArray);
//   //console.log(newArray);
//   if (newArray.length >= maxLength) {
//     return newArray.slice(0, maxLength);
//   }
//   // Пиши код выше этой строки
// }
// console.log(makeArray(["Манго", "Поли"], ["Аякс", "Челси"], 3)); //возвращает ['Манго', 'Поли', 'Аякс'].
// console.log(makeArray(["Манго", "Поли", "Хьюстон"], ["Аякс", "Челси"], 4)); //возвращает ['Манго', 'Поли', 'Хьюстон', 'Аякс'].
// console.log(makeArray(["Манго"], ["Аякс", "Челси", "Поли", "Хьюстон"], 3)); //возвращает ['Манго', 'Аякс', 'Челси'].
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 2)); //возвращает ['Земля', 'Юпитер'].
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран"], 4)); //возвращает ['Земля', 'Юпитер', 'Нептун', 'Уран'].
// console.log(makeArray(["Земля", "Юпитер"], ["Нептун", "Уран", "Венера"], 0)); //возвращает [].

///========================================================
// const start = 3;
// const end = 7;

// for (let i = start; i <= end; i += 1) {
//   // Дополни эту строку
//   console.log(i);
// }

// function calculateTotal(number) {
//   // Пиши код ниже этой строки
//   var sum = 0;
//   for (let i = 1; i <= number; i++) {
//     // Дополни эту строку
//     sum += i;
//   }
//   // Пиши код выше этой строки
//   return sum;
// }
// console.log(calculateTotal(1)); //возвращает 1.
// console.log(calculateTotal(3)); //возвращает 6.
// console.log(calculateTotal(7)); //возвращает 28.
// console.log(calculateTotal(18)); //возвращает 171
// console.log(calculateTotal(24)); //возвращает 300.

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки
//   //console.log(order.length);
//   for (i = 0; i < order.length; i++) {
//     total += order[i];
//     //console.log(total);
//   }
//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice());
//==========================================
// function findLongestWord(string) {
//   // Пиши код ниже этой строки
//   var str = string.split(" ");
//   var longest = 0;
//   var word = null;
//   for (var i = 0; i < str.length - 1; i++) {
//     if (longest < str[i].length) {
//       longest = str[i].length;
//       word = str[i];
//     }
//   }
//   return word;
//   // Пиши код выше этой строки
// }
// console.log(findLongestWord("The quick brown fox jumped over the lazy dog"));
// console.log(findLongestWord("Google do a roll"));
// console.log(findLongestWord("May the force be with you"));
//======================================================================
// function createArrayOfNumbers(min, max) {
//   const numbers = [];
//   // Пиши код ниже этой строки
//   for (let i = min; i <= max; i += 1) {
//     numbers.push(i);
//   }
//   // Пиши код выше этой строки
//   return numbers;
// }
// console.log(createArrayOfNumbers(1, 3));
// console.log(createArrayOfNumbers(14, 17));
// console.log(createArrayOfNumbers(29, 34));

//==========================================

// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   let array = [];
//   for (let i = 1; i <= numbers.length; i += 1) {
//     if (numbers[i] > value) {
//       console.log(numbers[i]);
//       array.push(numbers[i]);
//     }
//   }
//   // Пиши код выше этой строки
//   return array;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));

//=============================================================================
// function getCommonElements(array1, array2) {
//   // Пиши код ниже этой строки
//   let newArray = [];
//   for (let i = 0; i <= array1.length; i += 1) {
//     // console.log(i);
//     if (array2.includes(array1[i])) {
//       newArray.push(array1[i]);
//     }
//   }
//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(getCommonElements([1, 2, 3], [2, 4])); //возвращает [2].
// console.log(getCommonElements([1, 2, 3], [2, 1, 17, 19])); //возвращает [1, 2].
// console.log(getCommonElements([24, 12, 27, 3], [12, 8, 3, 36, 27])); //возвращает [12, 27, 3].
// console.log(getCommonElements([10, 20, 30, 40], [4, 30, 17, 10, 40])); // возвращает [10, 30, 40].
// console.log(getCommonElements([1, 2, 3], [10, 20, 30])); //возвращает [].

// function calculateTotalPrice(order) {
//   let total = 0;
//   // Пиши код ниже этой строки

//   for (const array of order) {
//     total += array;
//   }

//   // Пиши код выше этой строки
//   return total;
// }
// console.log(calculateTotalPrice([12, 85, 37, 4]));
// console.log(calculateTotalPrice([164, 48, 291]));
// console.log(calculateTotalPrice([412, 371, 94, 63, 176]));
// console.log(calculateTotalPrice([]));

//===========================================
// function filterArray(numbers, value) {
//   // Пиши код ниже этой строки
//   const filteredNumbers = [];
//   //console.log(numbers);

//   for (const arr of numbers) {
//     if (arr > value) {
//       filteredNumbers.push(arr);
//     }
//   }

//   return filteredNumbers;
//   // Пиши код выше этой строки
// }
// console.log(filterArray([1, 2, 3, 4, 5], 3));
// console.log(filterArray([1, 2, 3, 4, 5], 4));
// console.log(filterArray([1, 2, 3, 4, 5], 5));
// console.log(filterArray([12, 24, 8, 41, 76], 38));
// console.log(filterArray([12, 24, 8, 41, 76], 20));
//===========================================================
// function getEvenNumbers(start, end) {
//   // Пиши код ниже этой строки
//   let newArray = [];
//   for (let i = start; i <= end; i += 1) {
//     if ([i] % 2 === 0) {
//       newArray.push(i);
//     }
//   }
//   return newArray;
//   // Пиши код выше этой строки
// }
// console.log(getEvenNumbers(2, 5)); //2, 4
//===========================================
// function includes(array, value) {
//   // Пиши код ниже этой строки
//   let flag = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (value === array[i]) {
//       return true;
//     }
//   }
//   return false;
//   // Пиши код выше этой строки
// }
// console.log(includes([1, 2, 3, 4, 5], 3)); //true
// console.log(includes([1, 2, 3, 4, 5], 17)); //fals
//===========================================================
// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
//   tags: ["premium", "promoted", "top"],
// };

// const apartment = {
//   imgUrl: "https://via.placeholder.com/640x480",
//   descr: "Просторная квартира в центре",
//   rating: 4.7,
//   price: 5000,
//   tags: ["premium", "promoted", "top", "trusted"],
//   owner: {
//     name: "Генри Сибола",
//     phone: "982-126-1588",
//     email: "henry.carter@aptmail.com",
//   },
// };
// apartment.area = 60;
// apartment.rooms = 3;
// apartment.location = {
//   country: "Ямайка",
//   city: "Кингстон",
// };
// //===========================================================
// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   rating: 8.38,
// };

// for (const key in book) {
//   // Ключ
//   console.log(key);
//   // Значение свойства с таким ключом
//   console.log(book[key]);
// }
//======================================
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const keys = [];
// console.log(keys);
// const values = [];
// console.log(values);
// for (const key in apartment) {
//   keys.push(key);

//   values.push(apartment[key]);
// }
//========================================
// function countProps(object) {
//   console.log(object);
//   let propCount = 0;
//   // Пиши код ниже этой строки
//   for (const key in object) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//       // console.log(key);
//       // console.log(object[key]);
//     }
//   }
//   // Пиши код выше этой строки
//   return propCount;
// }

// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
//========================================================================================
// const apartment = {
//   descr: "Просторная квартира в центре",
//   rating: 4,
//   price: 2153,
// };
// const values = [];
// // Пиши код ниже этой строки
// const keys = Object.keys(apartment);

// for (const key of keys) {
//   values.push(apartment[key]);
// }
//=======================================
// function countProps(object) {
//   // Пиши код ниже этой строки
//   let propCount = 0;
//   const keys = Object.keys(object);
//   console.log(keys);

//   for (const key of keys) {
//     if (object.hasOwnProperty(key)) {
//       propCount += 1;
//     }
//   }

//   return propCount;
//   // Пиши код выше этой строки
// }
// console.log(countProps({}));
// console.log(countProps({ name: "Mango", age: 2 }));
// console.log(countProps({ mail: "poly@mail.com", isOnline: true, score: 500 }));
//-=====================================================================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// console.log(hexColors);
// const rgbColors = [];
// console.log(rgbColors);
// // Пиши код ниже этой строки
// const key = Object.values(colors);
// console.log(key);

// for (const key of colors) {
//   hexColors.push(key.hex);
//   rgbColors.push(key.rgb);
// }

//===================================
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function getProductPrice(productName) {
//   // Пиши код ниже этой строки
//   const key = Object.values(products);
//   console.log(key);
//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price;
//     }
//   }
//   return null;
//   // Пиши код выше этой строки
// }
// console.log(getProductPrice("Радар"));
// console.log(getProductPrice("Захват"));
// console.log(getProductPrice("Сканер"));
// console.log(getProductPrice("Дроид"));
// console.log(getProductPrice("Двигатель"));

//========================================================
//todo : 19 задача
// const products = [
//   {
//     name: "Радар",
//     price: 1300,
//     quantity: 4,
//   },
//   {
//     name: "Сканер",
//     price: 2700,
//     quantity: 3,
//   },
//   {
//     name: "Дроид",
//     price: 400,
//     quantity: 7,
//   },
//   {
//     name: "Захват",
//     price: 1200,
//     quantity: 9,
//   },
// ];

// function getAllPropValues(propName) {
//   // Пиши код ниже этой строки
//   //console.log(propName);
//   // const value = Object.values(products);
//   // //console.log(value);
//   const key = Object.keys(products[0]);
//   //console.log(key);

//   var vals = [];
//   console.log(vals);
//   for (const key of products) {
//     for (const test in key) {
//       if (test === propName) {
//         vals.push(key[test]);
//       }
//     }
//   }
//   return vals;

//   //return null;
//   // Пиши код выше этой строки
// }
// console.log(getAllPropValues("name"));
// console.log(getAllPropValues("quantity"));
// console.log(getAllPropValues("price"));
// console.log(getAllPropValues("category"));
//==================================================
// const products = [
//   { name: "Радар", price: 1300, quantity: 4 },
//   { name: "Сканер", price: 2700, quantity: 3 },
//   { name: "Дроид", price: 400, quantity: 7 },
//   { name: "Захват", price: 1200, quantity: 9 },
// ];

// function calculateTotalPrice(productName) {
//   // Пиши код ниже этой строки
//   for (const key of products) {
//     if (key.name === productName) {
//       return key.price * key.quantity;
//     }
//   }
//   return 0;
//   // Пиши код выше этой строки
// }
// console.log(calculateTotalPrice("Бластер"));
// console.log(calculateTotalPrice("Радар"));
// console.log(calculateTotalPrice("Дроид")); // там по ключу , а тут именно по значению
// console.log(calculateTotalPrice("Захват"));
// console.log(calculateTotalPrice("Сканер"));

//=================================================================
// const book = {
//   title: "Последнее королевство",
//   author: "Бернард Корнуэлл",
//   genres: ["историческая проза", "приключения"],
//   public: true,
//   rating: 8.38,
// };

// // Деструктуризируем
// const { title, author, rating, coverImage } = book;
// console.log(book); // undefined

// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const { yesterday, today, tomorrow } = highTemperatures;
// console.log(highTemperatures);
// // Пиши код выше этой строки
// const meanTemperature = (yesterday + today + tomorrow) / 3;
//=======================================================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   highYesterday,
//   highToday,
//   highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;
// console.log(highTemperatures);
// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//===============================================================================
// const highTemperatures = {
//   yesterday: 28,
//   today: 26,
//   tomorrow: 33,
// };
// // Пиши код ниже этой строки
// const {
//   yesterday: highYesterday,
//   today: highToday,
//   tomorrow: highTomorrow,
//   highIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
// } = highTemperatures;

// console.log(highTemperatures);

// // Пиши код выше этой строки
// const meanTemperature = (highYesterday + highToday + highTomorrow) / 3;
//-==================================================================
// const colors = [
//   { hex: "#f44336", rgb: "244,67,54" },
//   { hex: "#2196f3", rgb: "33,150,243" },
//   { hex: "#4caf50", rgb: "76,175,80" },
//   { hex: "#ffeb3b", rgb: "255,235,59" },
// ];

// const hexColors = [];
// const rgbColors = [];
// // Пиши код ниже этой строки

// for (const { hex, rgb } of colors) {
//   hexColors.push(hex);
//   rgbColors.push(rgb);
// }
//======================================================================
// const forecast = {
//   today: {
//     low: 28,
//     high: 32,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: 27,
//     high: 31,
//     icon: "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// };
// // Пиши код ниже этой строки

// const {
//   today: {
//     low: lowToday,
//     high: highToday,
//     icon: todayIcon = "https://www.flaticon.com/svg/static/icons/svg/861/861059.svg",
//   },
//   tomorrow: {
//     low: lowTomorrow,
//     high: highTomorrow,
//     icon: tomorrowIcon = "https://www.flaticon.com/svg/static/icons/svg/2204/2204346.svg",
//   },
// } = forecast;

//const tomorrowIcon = forecast.tomorrow.icon;
//================================================================================
// function calculateMeanTemperature(forecast) {
//   const {
//     today: { low: todayLow, high: todayHigh },
//     tomorrow: { low: tomorrowLow, high: tomorrowHigh },
//   } = forecast;

//   // Пиши код выше этой строки
//   return (todayLow + todayHigh + tomorrowLow + tomorrowHigh) / 4;
// }

// console.log(
//   calculateMeanTemperature({
//     today: { low: 28, high: 32 },
//     tomorrow: { low: 25, high: 29 },
//   }),
// );

// console.log(
//   calculateMeanTemperature({
//     today: { low: 37, high: 40 },
//     tomorrow: { low: 33, high: 38 },
//   }),
// );
//=============================================================
// const scores = [89, 64, 42, 17, 93, 51, 26];
// // Пиши код ниже этой строки
// const bestScore = Math.max(...scores);
// const worstScore = Math.min(...scores);

// console.log(bestScore);
// console.log(worstScore);
//=================================================================
// const firstGroupScores = [64, 42, 93];
// const secondGroupScores = [89, 14, 51, 26];
// const thirdGroupScores = [29, 47, 18, 97, 81];
// // Пиши код ниже этой строки
// const allScores = [
//   ...firstGroupScores,
//   ...secondGroupScores,
//   ...thirdGroupScores,
// ];
// const bestScore = Math.max(...allScores);
// const worstScore = Math.min(...allScores);
// console.log(allScores);
//==================================================================
// const defaultSettings = {
//   theme: "light",
//   public: true,
//   withPassword: false,
//   minNumberOfQuestions: 10,
//   timePerQuestion: 60,
// };
// const overrideSettings = {
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// // Пиши код ниже этой строки
// const finalSettings = {
//   ...defaultSettings,
//   ...overrideSettings,
//   public: false,
//   withPassword: true,
//   timePerQuestion: 30,
// };
// console.log(finalSettings);
//====================================================================
// function makeTask(data) {
//   const completed = false;
//   const category = "Общее";
//   const priority = "Обычный";
//   // Пиши код ниже этой строки

//   const first = ({} = data);
//   console.log(first);
//   // const second = { category: "Домашнее", priority: "Низкий", ...data };
//   // const third = { category: "Финансы", text: "Забрать проценты" };

//   // const fourth = { priority: "Низкий", text: "Выбрать шампунь" };
//   // const fivth = { text: "Выбрать шампунь" };
//   // Пиши код выше этой строки

//   // const first = { propA: 5, propB: 10, propC: 50 };
//   // const second = { propC: 15 };

//   // const third = { propB: 20, ...first, ...second };
//   // console.log(third); // { propA: 5, propB: 10, propC: 15 }

//   // const fourth = { ...first, ...second, propB: 20 };
//   // console.log(fourth); // { propA: 5, propB: 20, propC: 15 }

//   // const fifth = { ...first, propB: 20, ...second };
//   // console.log(fifth); // { propA: 5, propB: 20, propC: 15 }
// }
// console.log(makeTask({})); //возвращает { category: 'Общее', priority: 'Обычный', completed: false }.
// console.log(
//   makeTask({ category: "Домашнее", priority: "Низкий", text: "Вынести мусор" }),
// ); //возвращает { category: 'Домашнее', priority: 'Низкий', text: 'Вынести мусор', completed: false }.
// console.log(makeTask({ category: "Финансы", text: "Забрать проценты" })); //возвращает { category: 'Финансы', priority: 'Обычный', text: 'Забрать проценты', completed: false }.
// console.log(makeTask({ priority: "Низкий", text: "Выбрать шампунь" })); //возвращает { category: 'Общее', priority: 'Низкий', text: 'Выбрать шампунь', completed: false }.
// console.log(makeTask({ text: "Купить хлеб" })); //возвращает { category: 'Общее', priority: 'Обычный', text: 'Купить хлеб', completed: false }.

//=========================================================
//todo: пример наследования прототипов

// const animal = {
//   legs: 4,
// };
// const dog = Object.create(animal);
// dog.name = "Манго";

// console.log(dog); // { name: 'Манго', __proto__: animal }
// console.log(animal.isPrototypeOf(dog)); // true
//===============================================
// const ancestor = {
//   name: "Paul",
//   age: 83,
//   surname: "Dawson",
//   heritage: "Irish",
// };
// // Пиши код ниже этой строки

// const parent = Object.create(ancestor);
// parent.name = "Stacey";
// parent.surname = "Moore";
// parent.age = 54;

// const child = Object.create(parent);
// child.name = "Jason";
// child.age = 27;
//===============================================

// function Car(brand, model, price) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const audi = new Car("Audi", "Q3", 36000);

// const bmw = new Car("BMW", "X5", 58900);
// console.log(bmw);
// const nissan = new Car("Nissan", "Murano", 31700);

//===================================================================
// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });

// const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 });
// console.log(bmw);
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });
//================================================================================

// function Car({ brand, model, price }) {
//   this.brand = brand;
//   this.model = model;
//   this.price = price;
// }

// Car.prototype.getPrice = function () {
//   return this.price;
// };

// Car.prototype.changePrice = function (newPrice) {
//   this.price = newPrice;
// };

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });

// console.log(audi.getPrice()); // mango@mail.com
// audi.changePrice(500);
// console.log(audi.getPrice()); // mango@supermail.com

//console.log(audi);
//=================================================================

// function Storage(items) {
//   this.items = items;
//   Storage.prototype.getItems = function () {
//     return this.items;
//   };
//   Storage.prototype.addItem = function (newItem) {
//     if (!this.items.includes(newItem)) {
//       this.items.push(newItem);
//       return this.items;
//     }
//   };
//   Storage.prototype.removeItem = function (oldItem) {
//     if (this.items.includes(oldItem)) {
//       const oldItemIndex = this.items.indexOf(oldItem);
//       this.items.splice(1, 1);
//     }
//   };
// }

// // Пиши код выше этой строки
// const storage = new Storage(["Нанитоиды", "Пролонгер", "Антигравитатор"]);
// //console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор"]
// storage.addItem("Дроид");
// //console.log(storage.getItems()); // ["Нанитоиды", "Пролонгер", "Антигравитатор", "Дроид"]
// storage.removeItem("Пролонгер");
// //console.log(storage.getItems()); // ["Нанитоиды", "Антигравитатор", "Дроид"]

//=============================================================================

// function StringBuilder(baseValue) {
//   this.baseValue = baseValue;
//   // console.log(this.baseValue);

//   StringBuilder.prototype.getValue = function () {
//     return this.baseValue;
//     //return baseValue;
//     //console.log(baseValue);
//   };
//   StringBuilder.prototype.padStart = function (left) {
//     const l = left;
//     return l;
//     //return beginning.concat(this.baseValue);
//     // return beginning + baseValue;
//     // const result = this.baseValue.concat(beginning);
//     // return result;
//     // if (StringBuilder.prototype.hasOwnProperty("padStart")) {
//     // }
//   };
//   StringBuilder.prototype.padEnd = function (right) {
//     //console.log(end);
//     // if (StringBuilder.prototype.hasOwnProperty("padEnd")) {
//     //   console.log(baseValue + this.baseValue + "^");
//     // }
//   };
//   StringBuilder.prototype.padBoth = function (both) {
//     //console.log(both);
//   };
// }
// console.log(StringBuilder.prototype.isPrototypeOf(builder));
// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// //console.log(builder);
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

//======================================================
//todo: Конструктор и prototype записанные через класс (сахар)

// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
// }
// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });
// const bmw = new Car({ brand: "BMW", model: "X5", price: 58900 });
// const nissan = new Car({ brand: "Nissan", model: "Murano", price: 31700 });

//====================================================================================
// class Car {
//   constructor({ brand, model, price }) {
//     this.brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getPrice() {
//     return this.price;
//   }
//   changePrice(newPrice) {
//     this.price = newPrice;
//   }
// }

//===============================================================
// class Car {
//   #brand;
//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.model = model;
//     this.price = price;
//   }
//   getBrand() {
//     return this.#brand;
//   }

//   changeBrand(newBrand) {
//     this.#brand = newBrand;
//   }
// }

// const audi = new Car({ brand: "Audi", model: "Q3", price: 36000 });

//=========================================================================
// class Storage {
//   #items;
//   constructor(items) {
//     console.log(items);
//     this.#items = items;
//   }
//   getItems() {
//     console.log(this.#items);
//   }
//   addItem(newItem) {
//     this.item = this.#items.push(newItem);
//   }
//   removeItem(item) {
//     const itemIndex = this.#items.indexOf(item);
//     this.#items.splice(itemIndex, 1);
//   }
// }

//==============================================================

// class StringBuilder {
//   #value;
//   constructor(baseValue) {
//     this.#value = baseValue;
//   }
//   getValue() {
//     return this.#value;
//   }
//   padEnd(str) {
//     this.#value += str;
//   }
//   padStart(str) {
//     this.#value = str + this.#value;
//   }
//   padBoth(str) {
//     this.padStart(str);
//     this.padEnd(str);
//   }
// }

// // Пиши код выше этой строки
// const builder = new StringBuilder(".");
// console.log(builder.getValue()); // '.'
// builder.padStart("^");
// console.log(builder.getValue()); // '^.'
// builder.padEnd("^");
// console.log(builder.getValue()); // '^.^'
// builder.padBoth("=");
// console.log(builder.getValue()); // '=^.^='

//==================================================
// class Car {
//   #model;
//   #price;
//   #brand;

//   constructor({ brand, model, price }) {
//     this.#brand = brand;
//     this.#model = model;
//     this.#price = price;
//   }

//   get brand() {
//     return this.brand;
//   }

//  set brand(newBrand) {
//     this.brand = newBrand;
//   }

//   get model() {
//     return this.model;
//   }

//  set model(newModel) {
//     this.model = newModel;
//   }

//   get price() {
//     return this.price;
//   }

//  set price(newPrice) {
//     this.price = newPrice;
//   }
// }

//===================================================

// class Car {
//   // Пиши код ниже этой строки
//   static MAX_PRICE = {
//     max: 50000,
//   };
//   #price;

//   constructor({ price }) {
//     this.#price = price;
//   }

//   get price() {
//     return this.#price;
//   }

//   set price(newPrice) {
//     console.log(newPrice);
//     if (newPrice > Car.MAX_PRICE.max) {
//       return;
//     }

//     this.#price = newPrice;
//   }
//   // Пиши код выше этой строки
// }

// const audi = new Car({ price: 35000 });
// console.log(audi.price); // 35000

// audi.price = 49000;
// console.log(audi.price); // 49000

// audi.price = 51000;
// console.log(audi.price); // 49000
//=========================================================
// const changeEven = (numbers, value) => {
//   // Пиши код ниже этой строки
//   numbers.forEach((element) => {
//     if (element % 2 === 0) {
//       console.log((element = element + value));
//     }
//   });
//   // Пиши код выше этой строки
// };

// function changeEven(numbers, value) {
//   // Пиши код ниже этой строки
//   //let arr = numbers.slice();
//   const newNumbers = numbers.map((element) => {
//     if (element % 2 === 0) {
//       return element + value;
//     }
//     return element;
//   });

//   // Пиши код выше этой строки
//   return newNumbers;
// }
// console.log(changeEven([1, 2, 3, 4, 5], 10));
// console.log(changeEven([2, 8, 3, 7, 4, 6], 10));

//const numbers = [1, 2, 3, 4, 5];
//============================================
// import db from "./db.js";
// console.log(db);

// const users = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: ["Jacklyn Lucas", "Linda Chapman"],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];

// // const getUsersWithEyeColor = (array, color) =>
// //   array.filter((el) => (el.name = el.eyeColor === color));

// // const getUsersWithEyeColor = (array, color) => {
// //   return array
// //     .filter(({ eyeColor }) => eyeColor === color)
// //     .flatMap((el) => el.friends);
// // };

// const getUsersWithFriend = (users) => {
//   let res = users.flatMap((el) => el.friends);
//   let s = res.filter(
//     (friends, index, array) => array.indexOf(friends) === index,
//   );

//   //
//   return s;
// };
// console.log(getUsersWithFriend(users));

// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
// ];
// const BOOK_TITLE = "Сон смешного человека";
// const AUTHOR = "Роберт Шекли";
// // Пиши код ниже этой строки

// const bookWithTitle = books.find((el) => el.title === BOOK_TITLE);
// console.log(bookWithTitle);
// const bookByAuthor = books.find((el) => el.author === AUTHOR);
// console.log(bookByAuthor);
//=================================================================
// const players = [
//   { name: "Манго", playtime: 1270, gamesPlayed: 4 },
//   { name: "Поли", playtime: 469, gamesPlayed: 2 },
//   { name: "Аякс", playtime: 690, gamesPlayed: 3 },
//   { name: "Киви", playtime: 241, gamesPlayed: 1 },
// ];
// // Пиши код ниже этой строки

// const totalAveragePlaytimePerGame = players.reduce((total, average) => {
//   console.log(total + average.playtime / average.gamesPlayed);
// }, 0);

//========================================================================
// let array = [
//   {
//     name: "Moore Hensley",
//     email: "moorehensley@indexia.com",
//     eyeColor: "blue",
//     friends: ["Sharron Pace"],
//     isActive: false,
//     balance: 2811,
//     gender: "male",
//   },
//   {
//     name: "Sharlene Bush",
//     email: "sharlenebush@tubesys.com",
//     eyeColor: "blue",
//     friends: ["Briana Decker", "Sharron Pace"],
//     isActive: true,
//     balance: 3821,
//     gender: "female",
//   },
//   {
//     name: "Ross Vazquez",
//     email: "rossvazquez@xinware.com",
//     eyeColor: "green",
//     friends: ["Marilyn Mcintosh", "Padilla Garrison", "Naomi Buckner"],
//     isActive: false,
//     balance: 3793,
//     gender: "male",
//   },
//   {
//     name: "Elma Head",
//     email: "elmahead@omatom.com",
//     eyeColor: "green",
//     friends: ["Goldie Gentry", "Aisha Tran"],
//     isActive: true,
//     balance: 2278,
//     gender: "female",
//   },
//   {
//     name: "Carey Barr",
//     email: "careybarr@nurali.com",
//     eyeColor: "blue",
//     friends: ["Jordan Sampson", "Eddie Strong", "Adrian Cross"],
//     isActive: true,
//     balance: 3951,
//     gender: "male",
//   },
//   {
//     name: "Blackburn Dotson",
//     email: "blackburndotson@furnigeer.com",
//     eyeColor: "brown",
//     friends: [
//       "Jacklyn Lucas",
//       "Linda Chapman",
//       "Adrian Cross",
//       "Solomon Fokes",
//     ],
//     isActive: false,
//     balance: 1498,
//     gender: "male",
//   },
//   {
//     name: "Sheree Anthony",
//     email: "shereeanthony@kog.com",
//     eyeColor: "brown",
//     friends: ["Goldie Gentry", "Briana Decker"],
//     isActive: true,
//     balance: 2764,
//     gender: "female",
//   },
// ];
// const calculateTotalBalance = (users) => {
//   return users.reduce((sum, key) => {
//     return sum + key.balance;
//   }, 0);
// };

// const getTotalFriendCount = (users) => {
//   return users.reduce((sum, el) => {
//     return sum + el.friends.length;
//   }, 0);
// };

// console.log(getTotalFriendCount(array));

//=================================================

// const releaseDates = [2016, 1967, 2008, 1984, 1973, 2012, 1997];
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
// ];
// // Пиши код ниже этой строки

// const ascendingReleaseDates = [...releaseDates].sort();
// console.log(ascendingReleaseDates);
// const alphabeticalAuthors = [...authors].sort();
// console.log(alphabeticalAuthors);

//=====================================================
// const authors = [
//   "Ли Танит",
//   "Бернард Корнуэлл",
//   "Роберт Шекли",
//   "Федор Достоевский",
//   "Говард Лавкрафт",
// ];
// // Пиши код ниже этой строки

// const authorsInAlphabetOrder = [...authors].sort((a, b) => a.localeCompare(b));
// console.log(authorsInAlphabetOrder);
// const authorsInReversedOrder = [...authors].sort((a, b) => b.localeCompare(a));
// console.log(authorsInReversedOrder);

//=====================================================================================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 7.94 },
//   { title: "Враг Божий", author: "Бернард Корнуэлл", rating: 8.67 },
// ];
// // Пиши код ниже этой строки

// const sortedByAuthorName = [...books].sort((fr, sc) =>
//   fr.author.localeCompare(sc.author),
// );

// const sortedByReversedAuthorName = [...books].sort((fr, sc) =>
//   sc.author.localeCompare(fr.author),
// );

// const sortedByAscendingRating = [...books].sort(
//   (fr, sc) => fr.rating - sc.rating,
// );

// const sortedByDescentingRating = [...books].sort(
//   (fr, sc) => sc.rating - fr.rating,
// );
//=======================================

// const sortByDescendingFriendCount = (users) => {
//   console.log(users);
//   return users.sort((f, l) => l.friends - f.friends);
// };

// console.log(sortByDescendingFriendCount(array));
//======================================================
// const books = [
//   { title: "Последнее королевство", author: "Бернард Корнуэлл", rating: 8.38 },
//   { title: "На берегу спокойных вод", author: "Роберт Шекли", rating: 8.51 },
//   { title: "Сон смешного человека", author: "Федор Достоевский", rating: 7.75 },
//   { title: "Красна как кровь", author: "Ли Танит", rating: 8.14 },
//   { title: "Сны В Ведьмином Доме", author: "Говард Лавкрафт", rating: 8.67 },
// ];
// const MIN_BOOK_RATING = 8;
// // Пиши код ниже этой строки

// const names = [...books]
//   .filter((el) => el.rating > MIN_BOOK_RATING)
//   .flatMap((l) => l.author)
//   .sort((fr, sc) => fr.localeCompare(sc));
// // .sort((a, b) => a.author - b.author)
// // .filter((el) => el.rating > MIN_BOOK_RATING);
// // .fliter((el) => el.rating > MIN_BOOK_RATING);

// console.log(names);

// ['Бернард Корнуэлл', 'Говард Лавкрафт', 'Ли Танит', 'Роберт Шекли']

//===============================================================================

// const getNamesSortedByFriendCount = (users) => {
//   console.log(users);
//   return [...users]
//     .flatMap((l) => l.friends)
//     .filter((friends, index, array) => array.indexOf(friends) === index)
//     .sort((fr, sc) => fr.localeCompare(sc));
//   // .flatMap((el) => el.friends)
//   // .filter((friends, index, array) => array.indexOf(friends) === index);

//   // .map((n) => n.name)
// };
// console.log(getNamesSortedByFriendCount(array));

//================================================================

// const getTotalBalanceByGender = (users, gender) => {
//   console.log(gender);
//   return users
//     .filter((el) => el.gender === gender)
//     .reduce((t, b) => {
//       return t + b.balance;
//     }, 0);
// };

// console.log(getTotalBalanceByGender(array, "male"));

//===============================================================
// function elapsedSeconds(startDate, endDate) {
//   console.log(startDate);
//   let res = endDate - startDate;
//   let seconds = Math.round(res);
//   //let quantity = (seconds = (+n).toFixed(4).replace(/\.0+$/, ""));
//   //return parseFloat(quantity);
// }
// console.log(elapsedSeconds(1000, 5000));
// function removeExclamationMarks(s) {
//   console.log(s.replace(/!/g, ""));
//   return "";
// }
// console.log(removeExclamationMarks("Hello World!")); //, ", "Hello World""

// // Write function bmi that calculates body mass index (bmi = weight / height2).

//=================================================================================
//[humanYears,catYears,dogYears]
function firstNonConsecutive(arr) {
  for (let i = 0; i < arr.length; i++) {
    // const element = arr[figure - 1];
    // const last = arr[figure.length - 1];
    // console.log("первый", last);
    // console.log("последний", element);
    if (arr[i - 1].length > arr[i].length) {
      alert(arr[i - 1] + " has a greater length than " + arr[i]);
    }
  }
}

console.log(firstNonConsecutive([1, 2, 3, 4, 6, 7, 8])); //6
