const http = require("http")
const port = 3000
const quotes = [
  "Le code est poésie.",
  "Apprendre en faisant est la meilleure méthode.",
  "Chaque erreur est une leçon.",
  "Ne jamais abandonner.",
  "La simplicité est la sophistication ultime.",
  "Ce qui est difficile aujourd’hui sera facile demain.",
  "Un bon développeur ne cesse jamais d’apprendre.",
  "La pratique vaut plus que la théorie.",
  "Casser pour comprendre, reconstruire pour maîtriser.",
  "Le debug fait partie du jeu."
];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}

const server = http.createServer((req,res) =>
{
    if(req.url === "/quote")
    {
        console.log(req.url)
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html; charset=utf-8")
        res.end(quotes[getRandomInt(quotes.length -1)])
    }
    else
    {
        res.statusCode = 200
        res.setHeader("Content-Type", "text/html")
        res.end("Hello world")
    }

})

server.listen(3000, () =>
{
    console.log(`http://localhost:${port}`)
})
