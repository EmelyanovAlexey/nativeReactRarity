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

const cards = [
  {
    id: 0,
    name: "Jäger, Thomas & Co.",
    description:
      "Центральный мотив включает в себя сложный цветочный узор, выполненный вручную с использованием ярких цветов, которые сохранили свою яркость на протяжении многих лет. Вокруг основного дизайна расположены детализированные бордюрные узоры, типичные для стиля",
    production_years: "string",
    photo_links:
      "https://i.pinimg.com/originals/5d/e2/42/5de24294bad21ec99931f4c362354f22.jpg",
  },
];

module.exports = { users, countries, regions, cities, manufacturers, cards };
