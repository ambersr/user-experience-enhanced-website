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

// ----------------------------------------- GET routes -----------------------------------------

// Functie fetch omzetten naar JSON
async function fetchJson(url) {
  const response = await fetch(url);
  const responseJSON = await response.json();
  return responseJSON
}

// Route voor url /
app.get('/', async function (req, res) {

  // Fetches alle webinars, alle contourings & watchlist
  const webinarsResponseJSON = await fetchJson(webinarsLink + webinarsField);
  const contouringsResponseJSON = await fetchJson(contouringsLink + contouringsField);
  const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);

  // Haalt alle text waarden uit de array watchlist database, deze worden omgezet naar een string. 
  // De strings worden in een set gestopt zodat er een lijst is met alle unieke ID's
  const watchlistIds = new Set(watchlistResponseJSON.data.map(item => String(item.text)));

  console.log(watchlistIds)
  
  // Zet de Set om naar een Array, want Liquid kan niet met Sets werken
  // Hierdoor krijg je een array met alle unieke 'text' waarden als strings
  const watchlistArray = Array.from(watchlistIds);

  res.render("index.liquid", {
    webinars: webinarsResponseJSON.data,
    contourings: contouringsResponseJSON.data,
    watchlistIds: watchlistArray
  })
});

// Route voor url /webinars
app.get("/webinars", async function (req, res) {
  // Haalt de 'category' parameter op, of gebruikt een lege string als die er niet is.
  // Haalt de 'sort' parameter op, of gebruikt "new-old" als die er niet is.
  const categoryFilter = req.query.category || ""; 
  const sortOption = req.query.sort || "new-old";

  // Fetches alle webinars, categorieën en watchlist 
  const webinarsResponseJSON = await fetchJson(webinarsLink + webinarsField);
  const categoryResponseJSON = await fetchJson(categoryLink);
  const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);

  // Haalt alle text waarden uit de array watchlist database, deze worden omgezet naar een string. 
  // De strings worden in een set gestopt zodat er een lijst is met alle unieke ID's
  const watchlistIds = new Set(watchlistResponseJSON.data.map(item => String(item.text)));

  // Zet de Set om naar een Array, want Liquid kan niet met Sets werken
  // Hierdoor krijg je een array met alle unieke 'text' waarden als strings
  const watchlistArray = Array.from(watchlistIds);

  // Lijst met alle webinars
  let filteredWebinars = webinarsResponseJSON.data;

  // Sorteren op categorie
  if (categoryFilter) {
    // Filter de webinars op basis van de opgegeven categorie.
    filteredWebinars = filteredWebinars.filter(webinar => 
      // Controleer of het webinar minstens 1 categorie heeft die overeenkomt met categoryFilter.
      // Some geeft true als 1 of meer categorieën voldoen.
      webinar.categories.some(category => category.avl_categories_id.name === categoryFilter)
    );
  }

  // Sorteren op datum
  filteredWebinars.sort((a, b) => {
    const dateA = new Date(a.date); // Zet datum van webinar A om naar een Date-object
    const dateB = new Date(b.date); // Zet datum van webinar B om naar een Date-object

    // Als sorteeroptie "new-old" is: nieuw eerst (dateB - dateA)
    // Anders: oud eerst (dateA - dateB)
    return sortOption === "new-old" ? dateB - dateA : dateA - dateB;
  });

  res.render('webinars.liquid', {
    webinars: filteredWebinars,
    categories: categoryResponseJSON.data,
    selectedCategory: categoryFilter, // Zorgt dat de juiste radio button gecheckt blijft
    selectedSort: sortOption,
    watchlistIds: watchlistArray
  });
})

// Route voor url /profile
app.get('/profile', async function (req, res) {

  // Fetches alle webinars en watchlist 
  const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);
  const webinarsResponseJSON = await fetchJson(webinarsLink + webinarsField);

  // Haalt alle text waarden uit de array watchlist database, deze worden omgezet naar een string. 
  // De strings worden in een set gestopt zodat er een lijst is met alle unieke ID's
  const watchlistWebinarIds = new Set(watchlistResponseJSON.data.map(item => String(item.text)));

  // Filter alleen webinars die in de watchlist staan
  const webinarsInWatchlist = webinarsResponseJSON.data.filter(webinar =>
    // Controleer of het ID van het webinar aanwezig is in de watchlist (de Set van IDs)
    // Het ID wordt omgezet naar een string, omdat de Set 'string' waarden bevat
    watchlistWebinarIds.has(String(webinar.id))
  );

  // Zet de Set om naar een Array, want Liquid kan niet met Sets werken
  // Hierdoor krijg je een array met alle unieke 'text' waarden als strings
  const watchlistArrays = Array.from(watchlistWebinarIds);

  res.render("profile.liquid", {
    webinars: webinarsInWatchlist,
    watchlistIds: watchlistArrays
  });
});

app.get('/watchlist', async function (req, res) {

  // Fetches alle webinars en watchlist 
  const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);
  const webinarsResponseJSON = await fetchJson(webinarsLink + webinarsField);

  // Haalt alle text waarden uit de array watchlist database, deze worden omgezet naar een string. 
  // De strings worden in een set gestopt zodat er een lijst is met alle unieke ID's
  const watchlistWebinarIds = new Set(watchlistResponseJSON.data.map(item => String(item.text)));

  // Filter alleen webinars die in de watchlist staan
  const webinarsInWatchlist = webinarsResponseJSON.data.filter(webinar =>
    // Controleer of het ID van het webinar aanwezig is in de watchlist (de Set van IDs)
    // Het ID wordt omgezet naar een string, omdat de Set 'string' waarden bevat
    watchlistWebinarIds.has(String(webinar.id))
  );

  // Zet de Set om naar een Array, want Liquid kan niet met Sets werken
  // Hierdoor krijg je een array met alle unieke 'text' waarden als strings
  const watchlistArrays = Array.from(watchlistWebinarIds);

  res.render("watchlist.liquid", {
    webinars: webinarsInWatchlist,
    watchlistIds: watchlistArrays
  });
});

// ----------------------------------------- POST routes -----------------------------------------

// POST voor url /
app.post("/", async function (req, res) {
  // Haal de textField (webinar.id) en forField uit de request body
  const { textField, forField } = req.body;

  try {
    // Haal de watchlist op
    const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);

    // Zoek in de watchlist of het item al bestaat door te controleren op textField (webinar.id)
    const existingItem = watchlistResponseJSON.data.find(item => item.text === textField);

    if (existingItem) {
      // Als het item al bestaat in de watchlist, verwijder het dan
      await fetch(`${messagesLink}/${existingItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Verwijderd uit watchlist: ${textField}`);
    } else {
      // Voeg het item toe als het niet bestaat
      await fetch(messagesLink, {
        method: "POST",
        body: JSON.stringify({
          text: textField,
          for: forField
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Toegevoegd aan watchlist: ${textField}`);
    }

    // Stuur de gebruiker terug naar de watchlist pagina
    res.redirect(303, "/");
  } catch (error) {
    console.error("Fout bij toggle van de watchlist:", error);
    res.status(500).send("Er is een fout opgetreden.");
  }
});

// POST voor url /webinars
app.post("/webinars", async function (req, res) {
  // Haal de textField (webinar.id) en forField uit de request body
  const { textField, forField } = req.body;

  try {
    // Haal de watchlist op
    const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);

    // Zoek in de watchlist of het item al bestaat door te controleren op textField (webinar.id)
    const existingItem = watchlistResponseJSON.data.find(item => item.text === textField);

    if (existingItem) {
      // Als het item al bestaat in de watchlist, verwijder het dan
      await fetch(`${messagesLink}/${existingItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Verwijderd uit watchlist: ${textField}`);
    } else {
      // Voeg het item toe als het niet bestaat
      await fetch(messagesLink, {
        method: "POST",
        body: JSON.stringify({
          text: textField,
          for: forField
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Toegevoegd aan watchlist: ${textField}`);
    }

    // Stuur de gebruiker terug naar de watchlist pagina
    res.redirect(303, "/webinars");
  } catch (error) {
    console.error("Fout bij toggle van de watchlist:", error);
    res.status(500).send("Er is een fout opgetreden.");
  }
});

// POST voor url /watchlist
app.post("/watchlist", async function (req, res) {
  // Haal de textField (webinar.id) en forField uit de request body
  const { textField, forField } = req.body; // textField is de webinar.id

  try {
    // Haal de huidige watchlist op
    const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);

    // Zoek in de watchlist of het item al bestaat door te controleren op textField (webinar.id)
    const existingItem = watchlistResponseJSON.data.find(item => item.text === textField);

    if (existingItem) {
      // Als het item al bestaat in de watchlist, verwijder het dan
      await fetch(`${messagesLink}/${existingItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Verwijderd uit watchlist: ${textField}`);
    } else {
      // Voeg het item toe als het niet bestaat
      await fetch(messagesLink, {
        method: "POST",
        body: JSON.stringify({
          text: textField,
          for: forField
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Toegevoegd aan watchlist: ${textField}`);
    }

    // Stuur de gebruiker terug naar de watchlist pagina
    res.redirect(303, "/watchlist");
  } catch (error) {
    console.error("Fout bij toggle van de watchlist:", error);
    res.status(500).send("Er is een fout opgetreden.");
  }
});

// POST voor url /profile
app.post("/profile", async function (req, res) {
  // Haal de textField (webinar.id) en forField uit de request body
  const { textField, forField } = req.body; // textField is de webinar.id

  try {
    // Haal de huidige watchlist op
    const watchlistResponseJSON = await fetchJson(messagesLink + messagesFilter);

    // Zoek in de watchlist of het item al bestaat door te controleren op textField (webinar.id)
    const existingItem = watchlistResponseJSON.data.find(item => item.text === textField);

    if (existingItem) {
      // Als het item al bestaat in de watchlist, verwijder het dan
      await fetch(`${messagesLink}/${existingItem.id}`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Verwijderd uit watchlist: ${textField}`);
    } else {
      // Voeg het item toe als het niet bestaat
      await fetch(messagesLink, {
        method: "POST",
        body: JSON.stringify({
          text: textField,
          for: forField
        }),
        headers: {
          "Content-Type": "application/json;charset=UTF-8"
        }
      });
      console.log(`Toegevoegd aan watchlist: ${textField}`);
    }

    // Stuur de gebruiker terug naar de watchlist pagina
    res.redirect(303, "/profile");
  } catch (error) {
    console.error("Fout bij toggle van de watchlist:", error);
    res.status(500).send("Er is een fout opgetreden.");
  }
});

// ----------------------------------------- Server port -----------------------------------------

// Lokaal server port opzetten
app.set('port', process.env.PORT || 8000)

app.listen(app.get('port'), function () {
  // Toon een bericht in de console
  console.log(`Daarna kun je via http://localhost:${app.get('port')}`)
})