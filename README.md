
# Platform Oncollaboration

Het platform waar radiologen uit Indonesië en Nederland samenkomen om hun kennis te delen en recente ontwikkelingen in hun medische vakgebied te bespreken.

In sprint 10 is er voornamelijk gewerkt aan de performance (laadtijd) van de website. Aan de hand van afbeeldingen responsive maken voor verschillende schermen, lazy loading toe te voegen zodat afbeeldingen pas laden wanneer ze zichtbaar zijn en afbeeldingen een juist formaat mee te geven. Dit zorgt voor een snellere en soepelere gebruikerservaring.

Linkje naar de website: https://user-experience-enhanced-website-1h6y.onrender.com/webinars

### Wie is Oncollaboration
Oncollaboration is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten. Oncollaboration is het afstudeerwerk van oud-CMD student Sergio Eijben. Sergio is in opdracht van radiotherapeute Judi van Diessen van het Antoni van Leeuwenhoek ziekenhuis afgestudeerd op de vraag over hoe de samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten te verbeteren.

### Vraag opdrachtgever

Ontwikkel een platform waarop webinars door radiotherapeuten uit Indonesië en Nederland via webinars kennis op kunnen doen en delen.
## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Oncollaboration is een platform waarop radiotherapeuten uit zowel Indonesië als Nederland met elkaar kennis uitwisselen. Op dit platform worden informatieve webinars weergegeven waarop de radiotherapeuten informatie kunnen op doen en delen met andere uit het vakgebied.

### Ontwerpkeuzes

- **Kleurgebruik**: Blauw als hoofdkleur: Straalt vertrouwen uit en wordt vaak door medische instellingen gebruikt. Felgroene call-to-action knoppen: Vallen goed op en verbeteren de gebruikerservaring.
- **Typografie**: Duidelijke, moderne lettertype met een goed contrast om de leesbaarheid te verbeteren. De koppen zijn vetgedrukt ze extra te laten opvallen.
- **Consistene UI**: De afgeronde randen maken de scheiding tussen elementen subtieler, waardoor de pagina minder hoekig en strenger aanvoelt. En komt ook terug op de website van het AvL ziekenhuis.
- **Branding & Partnerschap**: Beide logo’s in de header: Versterkt de zichtbaarheid van de samenwerking.
<br>
<img width="950" alt="image" src="https://github.com/user-attachments/assets/3dddad5e-67fa-4e84-9920-1d21617f294f" />

<img width="950" alt="image" src="https://github.com/user-attachments/assets/89c6e1f0-5934-4b50-9a82-1afaaff6cfa7" />

### Het ontwikkelde platform
Op dit platform kun je webinars bekijken en eventueel toevoegen aan de watchlist zodat je deze op een later moment kan terugbekijken. Daarnaast bevat het platform een homepagina waarop belangrijke informatie over Oncollaboration gedeeld kan worden en de samenwerking tussen de ziekenhuizen naar voren komen.

- **Homepagina:** Hier staat belangrijke informatie mbt de samenwerking tussen de ziekenhuizen en extra informatie over Oncollaboration. [Linkje naar de pagina](https://user-experience-enhanced-website-1h6y.onrender.com/)
- **Webinars overzicht pagina:** Overzicht van alle webinars. Deze zijn te filteren op categorie en van oud-nieuw. [Linkje naar de pagina](https://user-experience-enhanced-website-1h6y.onrender.com/webinars)
- **Watchlist pagina:** Overzicht met alle opgeslagen webinars in de watchlist. [Linkje naar de pagina](https://user-experience-enhanced-website-1h6y.onrender.com/watchlist)
- **Profielpagina:** Hierop worden alle gegevens van de user weergegeven. Daarnaast worden ook de opgeslagen webinars die in de watchlist staan hier weergegeven. [Linkje naar de pagina](https://user-experience-enhanced-website-1h6y.onrender.com/profile)

### Belangrijke (nieuwe) features:
- Performance verbetering
  
De website is geoptimaliseerd om de laadtijd te verbeteren. Er zijn aanpassingen doorgevoerd om layout shifts te voorkomen, afbeeldingen te optimaliseren voor verschillende schermgroottes en alleen de juiste formaten te laden. Daarnaast is lazy loading geïmplementeerd, zodat afbeeldingen pas worden geladen wanneer ze in beeld komen tijdens het scrollen.

Webinar afbeelding format aangepast:

https://github.com/ambersr/user-experience-enhanced-website/blob/72f0874a3012ca2e1e3c18f2d5bfd4608712b0ea/views/index.liquid#L67-L70

Lazy load toegevoegd op images:

https://github.com/ambersr/user-experience-enhanced-website/blob/72f0874a3012ca2e1e3c18f2d5bfd4608712b0ea/views/partials/foot.liquid#L5-L10

Responsive images:

https://github.com/ambersr/user-experience-enhanced-website/blob/ef17eda69256bdac72a958ddede6618af13a900d/views/index.liquid#L15-L48

- Profielpagina
  
Nieuw ontwerp gemaakt voor de profielpagina. Het proces hiervan is hier te volgen. De profielpagina bevat gegevens van de user en de opgeslagen webinars in de watchlist worden hier ook weergegeven.

<img width="1470" alt="image" src="https://github.com/user-attachments/assets/12d4d473-fbf2-4b92-a80b-fd0d6a86d7c9" />

- Counter in navigatie menu
  
Zodra een webinar wordt toegevoegd veranderd het aantal webinars in het navigatie menu naar het juiste aantal webinars in de watchlist.

https://github.com/user-attachments/assets/1d1bf3ef-3ae1-4cf9-abfa-1ae8261949dc

## Kenmerken
In dit project wordt er gebruik gemaakt van Node.js en Express om de webserver te beheren. Voor het genereren van dynamische HTML-pagina's wordt Liquid gebruikt, wat de webpagina's flexibel en makkelijk te onderhouden maakt.

### Route-configuraties
- Homepagina [`/`](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L39-L64): De webserver haalt gegevens op via de Directus API en toont deze op de hoofdpagina [`index.liquid`](https://github.com/ambersr/user-experience-enhanced-website/blob/main/views/index.liquid).
- Webinars overzichtspagina [`/webinars/`](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L66-L111): Hier worden webinars opgehaald en kunnen gebruikers deze filteren op categorie. De data wordt weergegeven in de template [`webinars.liquid`](https://github.com/ambersr/user-experience-enhanced-website/blob/main/views/webinars.liquid).
- Watchlistpagina [`/watchlist/`](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L156-L188) : Deze route haalt de webinars op die opgeslagen zijn in de database en toont deze op de [`watchlist.liquid`](https://github.com/ambersr/user-experience-enhanced-website/blob/main/views/watchlist.liquid).
- Profilepagina [`/profile`](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L124-L154): Deze route haalt de webinars op die worden opgeslagen in de database en toont deze op de [`profile.liquid`](https://github.com/ambersr/user-experience-enhanced-website/blob/main/views/profile.liquid).

### Data ophalen, opslaan en verwijderen uit database
- Data ophalen via API: De server maakt een API-aanroep om de benodigde gegevens op te halen in JSON-formaat. [Voorbeeld](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L43)
- Data doorgeven aan Liquid: De opgehaalde data wordt doorgegeven aan de Liquid-template via response.render(). [Voorbeeld](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L58-L63)
- Data verwerken in Liquid: In de Liquid-template wordt de data met behulp van loops en variabelen verwerkt en weergegeven. [Voorbeeld](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/partials/webinar-card.liquid#L2)
- HTML genereren en tonen: Liquid genereert de HTML, die naar de browser wordt gestuurd en zichtbaar wordt voor de gebruiker.
- Data opslaan wordt uitgevoerd via een POST-aanroep. De server maakt een API-aanroep om de benodigde gegevens op te halen in JSON-formaat en slaat deze op in de database. [Voorbeeld](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L192-L234)
- Data verwijderen wordt uitgevoerd via een DELETE-aanroep. De server controleert de aanroep en als deze bestaat verwijderd hij de post uit de database. [Voorbeeld](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/server.js#L192-L234)

### UI States

### Filter webinar
- **Ideal state:** Wanneer een categorie is geselecteerd en er webinars beschikbaar zijn binnen die categorie, wordt de juiste webinar weergegeven.

**Implementatie:** Dit wordt gerealiseerd met een `if` en `else` tag. Als er één of meerdere webinars beschikbaar zijn, worden deze getoond binnen de geselecteerde categorie. Voorbeeld in mijn code. [Voorbeeld in mijn code](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/webinars.liquid#L62-L70)

- **Empty state:** Wanneer er geen webinars beschikbaar zijn voor een bepaalde categorie, wordt dit duidelijk gecommuniceerd via een melding. De gebruiker krijgt het advies om een andere categorie te kiezen, zodat de volgende stap in het proces wordt gestimuleerd. 

Implementatie: Aan de hand van een `if` en `else` tag. Als er geen webinars beschikbaar zijn laat dan de fallback zien. [Voorbeeld in mijn liquid](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/webinars.liquid#L62-L70)

<img width="264" alt="image" src="https://github.com/user-attachments/assets/e5c3fda7-0efb-4b97-a747-b98a22302a90" />

### Watchlistpagina

-**Ideal state:** Wanneer er een webinar toegevoegd is aan de watchlist wordt alleen deze webinar(s) laten zien.

Implementatie: Aan de hand van een `if` en `else` tag uitgevoerd. Wanneer 1 of meer webinars in de watchlist zijn toon dan de webinars die zijn toegevoegd aan de watchlist. [Voorbeeld in mijn liquid](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/watchlist.liquid#L16-L18)

- **Empty state:** Bij de empty state wordt er aan de hand van een tekst en een icon weergegeven

Implementatie: Uitgevoerd met een `if` en `else` tag. Wanneer er geen webinars zijn toegevoegd aan de watchlist, wordt een fallback weergegeven. Hierin wordt de gebruiker geïnformeerd dat er nog geen webinars in de watchlist staan. Daarnaast wordt de gebruiker gestimuleerd om naar de webinarpagina te gaan via een knop, zodat er eenvoudig webinars aan de watchlist kunnen worden toegevoegd. [Voorbeeld in mijn liquid](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/watchlist.liquid#L16-L25)

<img width="312" alt="image" src="https://github.com/user-attachments/assets/6cb1198a-2f01-49b4-94a7-975a781f440d" />

### Webinar kaartjes

- **Ideal state:** Wanneer er nog geen actie is ondernomen om een webinar toe te voegen aan de watchlist, wordt de knop standaard weergegeven als "Add to watchlist".

**Implementatie:** Dit wordt gerealiseerd met `if` en `else` tags. Als de ID van de webinar nog niet in de watchlist staat, wordt het label "Add to watchlist" weergegeven. [Voorbeeld in mijn liquid](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/partials/webinar-card.liquid#L57-L60)

- **Loading state:** Zodra de gebruiker op "Add to watchlist" of "Remove from watchlist" klikt, verandert het label naar "Loading", inclusief een laadicoon. Dit geeft visuele feedback dat de actie wordt verwerkt, zoals het toevoegen of verwijderen van een webinar uit de watchlist.

**Implementatie:** Dit wordt uitgevoerd met client-side JavaScript, waarbij de klasse "loading" aan de knop wordt toegevoegd tijdens het laden. Met keyframes wordt een animatie toegepast op het laadicoon. [Voorbeeld javascript code](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/public/scripts/watchlist.js#L22) & [voorbeeld CSS code](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/public/styles/styles.css#L481-L509)

- **Success state:** Wanneer een webinar succesvol is toegevoegd aan de watchlist, verandert de knop van "Add to watchlist" naar "Remove from watchlist", inclusief een aangepast icoon. Dit laat de gebruiker zien dat de actie is voltooid en de webinar zich nu in de watchlist bevindt.

Implementatie: Dit wordt gerealiseerd met `if` en `else` tags. Zodra de webinar-ID is opgeslagen in de database, wordt het label en icoon aangepast naar "Remove from watchlist". [Voorbeeld in mijn liquid](https://github.com/ambersr/user-experience-enhanced-website/blob/11273b57823109aa31b87fdcc7bf8462fdf00670/views/partials/webinar-card.liquid#L57-L63)
  
<img width="679" alt="image" src="https://github.com/user-attachments/assets/1de40e76-1294-46b3-a6a2-d17fec3e93f5" />


## Installatie
De meeste informatie is te vinden bij het kopje kenmerken. Voor verdere gebruik van mijn project zijn dit nog een paar handige benodigdheden.

#### `npm i` of `npm install`
Hiermee installeer je de benodigde packages zoals express & cookie-parser.

#### `npm start`
Hiermee start je het project.

Open vervolgens [http://localhost:8000](http://localhost:8000) om het project te zien in de browser.

Om edits te zien moet je de pagina refreshen omdat het geen hot-reload bevat.

## Bronnen
- Design Styling: [Design challenge](https://github.com/fdnd-agency/oncollaboration/wiki/Design-Challenge)
- Content: [Repository Oncollaboration](https://github.com/fdnd-agency/oncollaboration)

## Licentie

This project is licensed under the terms of the [MIT license](./LICENSE).


