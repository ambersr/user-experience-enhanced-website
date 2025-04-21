// Importeer packages
import express from 'express'
import { Liquid } from 'liquidjs';

// Express app setup
const app = express()

// Statische bestanden
app.use(express.urlencoded({extended: true}))
app.use(express.static('public'))

// Stel Liquid in als 'view engine'
const engine = new Liquid();
app.engine('liquid', engine.express());
app.set('views', './views')

// Lokaal server port opzetten
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}`)
})