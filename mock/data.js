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

module.exports = { users, countries, regions, cities, manufacturers };
