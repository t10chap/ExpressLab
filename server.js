  const express = require('express');
  const app = express();

  const bootStrap = require('bootstrap');

  // $('body').alert('This alert came from Bootstrap');

  // Allow CORS: we'll use this today to reduce security so we can more easily test our code in the browser.
  app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

  app.use(express.static('public'));
  app.use(express.static('vendor'));

 // server.js
  const albums = [
    {
      title: 'Cupid Deluxe',
      artist: 'Blood Orange'
    },
    {
      title: 'M3LL155X - EP',
      artist: 'FKA twigs'
    },
    {
      title: 'Fake History',
      artist: 'letlive.'
    }
  ];

  const taquerias = [
    { name: "La Taqueria" },
    { name: "El Farolito" },
    { name: "Taqueria Cancun" }
  ];

// returns taquerias in JSON format
  app.get('/api/taquerias', (req,res) => {
    res.json(taquerias);
  });
// Root path that displays index.html
  app.get('/', (req, res) => res.sendFile('views/index.html' , { root: __dirname}));
// pathway to see the list of albums in json format
  app.get('/api/albums', (req,res) => {
    res.json(albums);
  });
// tells the app which port to listen to
  app.listen(process.env.PORT || 3000,  () => console.log('Example app listening at http://localhost:3000/'));
