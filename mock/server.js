const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const { users, countries, regions, cities, manufacturers } = require("./data");

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Авторизация
app.post("/plain/login", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (user) {
    res.status(200).json({ message: "Успешный вход", user });
  } else {
    res.status(401).json({ error: "Неверный логин или пароль" });
  }
});

// Авторизация Гугл
app.post("/google/login", (req, res) => {
  const { tokenId } = req.body;

  const { OAuth2Client } = require("google-auth-library");
  const client = new OAuth2Client(CLIENT_ID);

  async function verify() {
    const ticket = await client.verifyIdToken({
      idToken: tokenId,
      audience: CLIENT_ID,
    });
    const payload = ticket.getPayload();
    console.log(payload);

    res.status(200).json({ message: "Авторизация успешна", user: payload });
  }

  verify().catch(console.error);
});

// Регистрация
app.post("/plain/register", (req, res) => {
  const { email, password } = req.body;
  const user = users.find((u) => u.email === email && u.password === password);
  if (!user) {
    res.status(200).json({ message: "Успешный регистрация", user });
  } else {
    res.status(400).json({ error: "Пользователь уже есть с такими данными" });
  }
});

// Поиск регионов по подстроке
app.get("/countries", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = countries.filter((region) =>
      region.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(countries);
  }
});

// Поиск регионов по подстроке
app.get("/regions", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = regions.filter((region) =>
      region.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(regions);
  }
});

// Поиск регионов по подстроке
app.get("/cities", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = cities.filter((region) =>
      region.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(cities);
  }
});

// Поиск регионов по подстроке
app.get("/manufacturers", (req, res) => {
  const { name } = req.query;
  if (name) {
    const filtered = manufacturers.filter((region) =>
      region.name.toLowerCase().includes(name.toLowerCase())
    );
    res.json(filtered);
  } else {
    res.json(manufacturers);
  }
});

app.listen(3001, () => {
  console.log("Mock server is running on http://localhost:3001");
});
