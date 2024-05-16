const express = require('express');
const routes = require('./routes'); // Új modul importálása
const path = require('path');

const app = express();
const port = process.env.PORT || 5000; // Port beolvasása a .env fájlból, alapértelmezett érték: 8000

// Statikus fájlok kiszolgálása
app.use(express.static(path.join(__dirname, 'public')));

app.set('view engine', 'ejs'); // EJS beállítása
app.use(routes); // Új modul használata az útvonalakhoz

app.listen(port, (err) => {
  if (err) {
    console.log('Hiba történt a szerver indításakor');
  } else {
    console.log(`Az alkalmazás fut a(z) ${port}-es porton`);
  }
});