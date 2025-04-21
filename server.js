// ----------------------------------------- Setup Express/Liquid -----------------------------------------

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

// ----------------------------------------- Algemene API's -----------------------------------------

// Algemene API linkjes
const messagesLink = "https://fdnd-agency.directus.app/items/avl_messages";
const webinarsLink = "https://fdnd-agency.directus.app/items/avl_webinars";
const categoryLink = "https://fdnd-agency.directus.app/items/avl_categories";
const contouringsLink = "https://fdnd-agency.directus.app/items/avl_contourings";
const webinarsField = "?fields=id,duration,title,slug,date,video,thumbnail,.*.*,speakers.*.*,categories.avl_categories_id.*,resources.*.*";
const contouringsField = "?fields=title,image_scan,user_id.fullname,categories.avl_categories_id.*";
const messagesFilter = "?filter[for][_eq]=Watchlist Amber"

// Lokaal server port opzetten
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}`)
})