const users = [{ email: "1@mail.ru", password: "111111" }];

const countries = [
  { id: 0, name: "Россия" },
  { id: 1, name: "Германия" },
  { id: 2, name: "Германия 2" },
  { id: 3, name: "Германия 3" },
  { id: 4, name: "Германия 4" },
];

const regions = [
  { id: 0, name: "Новосибирская область" },
  { id: 1, name: "Московская область" },
  { id: 2, name: "Самарская область" },
  { id: 3, name: "Тверская область" },
  { id: 4, name: "Челябинская область" },
];

const cities = [
  { id: 0, name: "Новосибирская" },
  { id: 1, name: "Московская" },
  { id: 2, name: "Самарская" },
  { id: 3, name: "Тверская" },
  { id: 4, name: "Челябинская" },
];

const manufacturers = [
  {
    id: 0,
    name: "Производство 1",
    cities: [
      {
        id: 0,
        name: "Новосибирская",
      },
    ],
  },
  {
    id: 1,
    name: "Производство 2",
    cities: [
      {
        id: 0,
        name: "Московская",
      },
    ],
  },
  {
    id: 2,
    name: "Производство 3",
    cities: [
      {
        id: 0,
        name: "Челябинская",
      },
    ],
  },
  {
    id: 3,
    name: "Производство 4",
    cities: [
      {
        id: 0,
        name: "Челябинская",
      },
    ],
  },
  {
    id: 4,
    name: "Производство 5",
    cities: [
      {
        id: 0,
        name: "Московская",
      },
    ],
  },
];

const items = [
  {
    id: 1,
    name: "Эйфелева башня",
    description: "Знаковая достопримечательность Парижа, Франция.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    date_from: "2025-06-01",
    date_to: "2025-06-05",
    is_favourite: true,
  },
  {
    id: 2,
    name: "Колизей",
    description: "Древнеримский амфитеатр в центре Рима.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
    date_from: "2025-06-06",
    date_to: "2025-06-10",
    is_favourite: false,
  },
  {
    id: 3,
    name: "Статуя Свободы",
    description: "Один из символов США, находится в Нью-Йорке.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    date_from: "2025-06-11",
    date_to: "2025-06-14",
    is_favourite: true,
  },
  {
    id: 4,
    name: "Мачу-Пикчу",
    description: "Древний город инков в Перу.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
    date_from: "2025-07-01",
    date_to: "2025-07-04",
    is_favourite: true,
  },
  {
    id: 5,
    name: "Великая китайская стена",
    description: "Огромное оборонительное сооружение в Китае.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/GreatWall_2018.jpg",
    date_from: "2025-07-05",
    date_to: "2025-07-10",
    is_favourite: false,
  },
  {
    id: 6,
    name: "Сиднейская опера",
    description: "Известный оперный театр в Австралии.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sydney_Opera_House_Sails.jpg",
    date_from: "2025-07-12",
    date_to: "2025-07-15",
    is_favourite: true,
  },
  {
    id: 7,
    name: "Тадж-Махал",
    description: "Беломраморный мавзолей в Индии.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    date_from: "2025-08-01",
    date_to: "2025-08-04",
    is_favourite: true,
  },
  {
    id: 8,
    name: "Гора Фудзи",
    description: "Священная гора и символ Японии.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Mount_Fuji_from_Lake_Kawaguchi.jpg",
    date_from: "2025-08-05",
    date_to: "2025-08-09",
    is_favourite: false,
  },
  {
    id: 9,
    name: "Ниагарский водопад",
    description: "Один из крупнейших водопадов в мире.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Niagara_Falls_USA.jpg",
    date_from: "2025-08-10",
    date_to: "2025-08-12",
    is_favourite: false,
  },
  {
    id: 10,
    name: "Петра",
    description: "Древний город в скалах в Иордании.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Petra_Jordan_BW_21.JPG",
    date_from: "2025-09-01",
    date_to: "2025-09-05",
    is_favourite: true,
  },
  {
    id: 11,
    name: "Биг-Бен",
    description: "Знаменитая башня с часами в Лондоне.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Elizabeth_Tower_from_Whitehall.JPG",
    date_from: "2025-09-10",
    date_to: "2025-09-12",
    is_favourite: false,
  },
  {
    id: 12,
    name: "Кристо-Редентор",
    description: "Статуя Иисуса в Рио-де-Жанейро.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
    date_from: "2025-10-01",
    date_to: "2025-10-05",
    is_favourite: true,
  },
  {
    id: 13,
    name: "Саграда Фамилия",
    description: "Недостроенный храм в Барселоне.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sagrada_Familia_01.jpg",
    date_from: "2025-10-06",
    date_to: "2025-10-10",
    is_favourite: true,
  },
  {
    id: 14,
    name: "Гранд-Каньон",
    description: "Один из самых впечатляющих каньонов мира.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Grand_Canyon_view_from_Pima_Point_2010.jpg",
    date_from: "2025-10-15",
    date_to: "2025-10-19",
    is_favourite: false,
  },
  {
    id: 15,
    name: "Чичен-Ица",
    description: "Майянские руины на полуострове Юкатан.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Chichen_Itza_3.jpg",
    date_from: "2025-11-01",
    date_to: "2025-11-03",
    is_favourite: false,
  },
  {
    id: 16,
    name: "Замок Нойшванштайн",
    description: "Сказочный замок в Баварии, Германия.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Schloss_Neuschwanstein_2013.jpg",
    date_from: "2025-11-05",
    date_to: "2025-11-07",
    is_favourite: true,
  },
  {
    id: 17,
    name: "Ангкор-Ват",
    description: "Древний храмовый комплекс в Камбодже.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Angkor_Wat_temple.jpg",
    date_from: "2025-11-10",
    date_to: "2025-11-12",
    is_favourite: true,
  },
  {
    id: 18,
    name: "Лувр",
    description: "Один из крупнейших музеев мира во Франции.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Louvre_Museum_Wikimedia_Commons.jpg",
    date_from: "2025-12-01",
    date_to: "2025-12-03",
    is_favourite: false,
  },
  {
    id: 19,
    name: "Бурдж-Халифа",
    description: "Самое высокое здание в мире, расположено в Дубае.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Burj_Khalifa.jpg",
    date_from: "2025-12-10",
    date_to: "2025-12-12",
    is_favourite: true,
  },
  {
    id: 20,
    name: "Мон-Сен-Мишель",
    description: "Остров-крепость во Франции.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mont_Saint_Michel_2009.jpg",
    date_from: "2025-12-15",
    date_to: "2025-12-18",
    is_favourite: true,
  },
];

const itemsDetail = [
  {
    id: 1,
    name: "Эйфелева башня",
    description: "Знаковая достопримечательность Парижа, Франция.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a8/Tour_Eiffel_Wikimedia_Commons.jpg",
    date_from: "2025-06-01",
    date_to: "2025-06-05",
    is_favourite: true,
    country: "Франция",
    region: "Иль-де-Франс",
    city: "Париж",
    manufacturer: "Гюстав Эйфель",
  },
  {
    id: 2,
    name: "Колизей",
    description: "Древнеримский амфитеатр в центре Рима.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d5/Colosseo_2020.jpg",
    date_from: "2025-06-06",
    date_to: "2025-06-10",
    is_favourite: false,
    country: "Италия",
    region: "Лацио",
    city: "Рим",
    manufacturer: "Император Веспасиан",
  },
  {
    id: 3,
    name: "Статуя Свободы",
    description: "Один из символов США, находится в Нью-Йорке.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/a/a1/Statue_of_Liberty_7.jpg",
    date_from: "2025-06-11",
    date_to: "2025-06-14",
    is_favourite: true,
    country: "США",
    region: "Нью-Йорк",
    city: "Нью-Йорк",
    manufacturer: "Фредерик Огюст Бартольди",
  },
  {
    id: 4,
    name: "Мачу-Пикчу",
    description: "Древний город инков в Перу.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/e/eb/Machu_Picchu%2C_Peru.jpg",
    date_from: "2025-07-01",
    date_to: "2025-07-04",
    is_favourite: true,
    country: "Перу",
    region: "Куско",
    city: "Урубамба",
    manufacturer: "Империя Инков",
  },
  {
    id: 5,
    name: "Великая китайская стена",
    description: "Огромное оборонительное сооружение в Китае.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/10/GreatWall_2018.jpg",
    date_from: "2025-07-05",
    date_to: "2025-07-10",
    is_favourite: false,
    country: "Китай",
    region: "Хэбэй",
    city: "Бадалин",
    manufacturer: "Династия Мин",
  },
  {
    id: 6,
    name: "Сиднейская опера",
    description: "Известный оперный театр в Австралии.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/f/f7/Sydney_Opera_House_Sails.jpg",
    date_from: "2025-07-12",
    date_to: "2025-07-15",
    is_favourite: true,
    country: "Австралия",
    region: "Новый Южный Уэльс",
    city: "Сидней",
    manufacturer: "Йорн Утзон",
  },
  {
    id: 7,
    name: "Тадж-Махал",
    description: "Беломраморный мавзолей в Индии.",
    image: "https://upload.wikimedia.org/wikipedia/commons/d/da/Taj-Mahal.jpg",
    date_from: "2025-08-01",
    date_to: "2025-08-04",
    is_favourite: true,
    country: "Индия",
    region: "Уттар-Прадеш",
    city: "Агра",
    manufacturer: "Шах-Джахан",
  },
  {
    id: 8,
    name: "Гора Фудзи",
    description: "Священная гора и символ Японии.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/16/Mount_Fuji_from_Lake_Kawaguchi.jpg",
    date_from: "2025-08-05",
    date_to: "2025-08-09",
    is_favourite: false,
    country: "Япония",
    region: "Чубу",
    city: "Фудзиномия",
    manufacturer: "Природа",
  },
  {
    id: 9,
    name: "Ниагарский водопад",
    description: "Один из крупнейших водопадов в мире.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/1/11/Niagara_Falls_USA.jpg",
    date_from: "2025-08-10",
    date_to: "2025-08-12",
    is_favourite: false,
    country: "США / Канада",
    region: "Онтарио / Нью-Йорк",
    city: "Ниагара-Фолс",
    manufacturer: "Природа",
  },
  {
    id: 10,
    name: "Петра",
    description: "Древний город в скалах в Иордании.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Petra_Jordan_BW_21.JPG",
    date_from: "2025-09-01",
    date_to: "2025-09-05",
    is_favourite: true,
    country: "Иордания",
    region: "Маан",
    city: "Петра",
    manufacturer: "Набатеи",
  },
  {
    id: 11,
    name: "Биг-Бен",
    description: "Знаменитая башня с часами в Лондоне.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/d/d2/Elizabeth_Tower_from_Whitehall.JPG",
    date_from: "2025-09-10",
    date_to: "2025-09-12",
    is_favourite: false,
    country: "Великобритания",
    region: "Англия",
    city: "Лондон",
    manufacturer: "Чарльз Барри",
  },
  {
    id: 12,
    name: "Кристо-Редентор",
    description: "Статуя Иисуса в Рио-де-Жанейро.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Cristo_Redentor_-_Rio_de_Janeiro%2C_Brasil.jpg",
    date_from: "2025-10-01",
    date_to: "2025-10-05",
    is_favourite: true,
    country: "Бразилия",
    region: "Рио-де-Жанейро",
    city: "Рио-де-Жанейро",
    manufacturer: "Пол Ландовски",
  },
  {
    id: 13,
    name: "Саграда Фамилия",
    description: "Недостроенный храм в Барселоне.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/99/Sagrada_Familia_01.jpg",
    date_from: "2025-10-06",
    date_to: "2025-10-10",
    is_favourite: true,
    country: "Испания",
    region: "Каталония",
    city: "Барселона",
    manufacturer: "Антонио Гауди",
  },
  {
    id: 14,
    name: "Гранд-Каньон",
    description: "Один из самых впечатляющих каньонов мира.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/5/5c/Grand_Canyon_view_from_Pima_Point_2010.jpg",
    date_from: "2025-10-15",
    date_to: "2025-10-19",
    is_favourite: false,
    country: "США",
    region: "Аризона",
    city: "Гранд-Каньон",
    manufacturer: "Природа",
  },
  {
    id: 15,
    name: "Чичен-Ица",
    description: "Майянские руины на полуострове Юкатан.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/94/Chichen_Itza_3.jpg",
    date_from: "2025-11-01",
    date_to: "2025-11-03",
    is_favourite: false,
    country: "Мексика",
    region: "Юкатан",
    city: "Тинум",
    manufacturer: "Майя",
  },
  {
    id: 16,
    name: "Замок Нойшванштайн",
    description: "Сказочный замок в Баварии, Германия.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/7/70/Schloss_Neuschwanstein_2013.jpg",
    date_from: "2025-11-05",
    date_to: "2025-11-07",
    is_favourite: true,
    country: "Германия",
    region: "Бавария",
    city: "Хоэншвангау",
    manufacturer: "Людвиг II",
  },
  {
    id: 17,
    name: "Ангкор-Ват",
    description: "Древний храмовый комплекс в Камбодже.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/3/30/Angkor_Wat_temple.jpg",
    date_from: "2025-11-10",
    date_to: "2025-11-12",
    is_favourite: true,
    country: "Камбоджа",
    region: "Сиемреап",
    city: "Ангкор",
    manufacturer: "Империя Кхмеров",
  },
  {
    id: 18,
    name: "Лувр",
    description: "Один из крупнейших музеев мира во Франции.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/2/23/Louvre_Museum_Wikimedia_Commons.jpg",
    date_from: "2025-12-01",
    date_to: "2025-12-03",
    is_favourite: false,
    country: "Франция",
    region: "Иль-де-Франс",
    city: "Париж",
    manufacturer: "Филипп II Август",
  },
  {
    id: 19,
    name: "Бурдж-Халифа",
    description: "Самое высокое здание в мире, расположено в Дубае.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/9/93/Burj_Khalifa.jpg",
    date_from: "2025-12-10",
    date_to: "2025-12-12",
    is_favourite: true,
    country: "ОАЭ",
    region: "Дубай",
    city: "Дубай",
    manufacturer: "Adrian Smith (SOM)",
  },
  {
    id: 20,
    name: "Мон-Сен-Мишель",
    description: "Остров-крепость во Франции.",
    image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b6/Mont_Saint_Michel_2009.jpg",
    date_from: "2025-12-15",
    date_to: "2025-12-18",
    is_favourite: true,
    country: "Франция",
    region: "Нормандия",
    city: "Мон-Сен-Мишель",
    manufacturer: "Бенедиктинцы",
  },
];

module.exports = {
  users,
  countries,
  regions,
  cities,
  manufacturers,
  items,
  itemsDetail,
};
