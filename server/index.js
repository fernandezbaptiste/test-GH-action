const express = require("express");
const path = require("path");
const config = require("../skills/hello-world/config.json");

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, "../client")));

function getTimeOfDay() {
  const hour = new Date().getHours();
  if (hour < 12) return "morning";
  if (hour < 18) return "afternoon";
  return "evening";
}

const timeGreetings = {
  en: { morning: "Good morning", afternoon: "Good afternoon", evening: "Good evening" },
  fr: { morning: "Bonjour", afternoon: "Bon après-midi", evening: "Bonsoir" },
  es: { morning: "Buenos días", afternoon: "Buenas tardes", evening: "Buenas noches" },
  de: { morning: "Guten Morgen", afternoon: "Guten Tag", evening: "Guten Abend" },
  ja: { morning: "おはようございます", afternoon: "こんにちは", evening: "こんばんは" },
};

app.get("/api/greet", (req, res) => {
  const lang = req.query.lang || config.default_language;
  const name = req.query.name || "World";

  if (!config.supported_languages.includes(lang)) {
    return res.status(400).json({ error: `Unsupported language: ${lang}` });
  }

  const timeOfDay = getTimeOfDay();
  const greeting = timeGreetings[lang][timeOfDay];

  res.json({ greeting: `${greeting}, ${name}!`, language: lang, timeOfDay });
});

app.listen(PORT, () => {
  console.log(`Greeting server running at http://localhost:${PORT}`);
});
