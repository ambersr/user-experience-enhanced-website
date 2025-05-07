
# Platform Oncollaboration

Het platform waar radiologen uit Indonesië en Nederland samenkomen om hun kennis te delen en recente ontwikkelingen in hun medische vakgebied te bespreken.

Tijdens sprint 8 lag de focus voor het ontwikkelen van de pagina's op de webinar overzichtspagina en de webinar detailpagina. Alle content wordt dynamisch opgehaald uit een database die ik van de opdrachtgever ontvangen heb.

### Wie is Oncollaboration
Oncollaboration is een ontwerp voor een online platform voor samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten. Oncollaboration is het afstudeerwerk van oud-CMD student Sergio Eijben. Sergio is in opdracht van radiotherapeute Judi van Diessen van het Antoni van Leeuwenhoek ziekenhuis afgestudeerd op de vraag over hoe de samenwerking en kennisdeling tussen Indoneschische en Nederlandse radiotherapeuten te verbeteren.

### Vraag opdrachtgever

Ontwikkel een platform waar de focus op webinars ligt.

## Inhoudsopgave

  * [Beschrijving](#beschrijving)
  * [Gebruik](#gebruik)
  * [Kenmerken](#kenmerken)
  * [Installatie](#installatie)
  * [Bronnen](#bronnen)
  * [Licentie](#licentie)

## Beschrijving
Oncollaboration is een platform waarop radiotherapeuten uit zowel Indonesië als Nederland met elkaar kennis uitwisselen. Op dit platform worden informatieve webinars weergegeven waarop de radiotherapeuten informatie kunnen op doen en delen met andere uit het vakgebied.

### Het ontwikkelde platform
Op dit platform kun je webinars bekijken en eventueel toevoegen aan de watchlist zodat je deze op een later moment kan terugbekijken. Daarnaast bevat het platform een homepagina waarop belangrijke informatie over Oncollaboration gedeeld kan worden en de samenwerking tussen de ziekenhuizen naar voren komen.

- Homepagina: Hier staat belangrijke informatie mbt de samenwerking tussen de ziekenhuizen en extra informatie over Oncollaboration.
- Webinars overzicht pagina: Overzicht van alle webinars. Deze zijn te filteren op categorie en van oud-nieuw.
- Watchlist pagina: Overzicht met alle opgeslagen webinars in de watchlist.
- Profielpagina: Hierop worden alle gegevens van de user weergegeven. Daarnaast worden ook de opgeslagen webinars die in de watchlist staan hier weergegeven.

Linkje naar de website: https://user-experience-enhanced-website-1h6y.onrender.com/
<!-- Bij Beschrijving staat kort beschreven wat voor project het is en wat je hebt gemaakt -->

## Gebruik
### User story


## Kenmerken
In dit project wordt er gebruik gemaakt van Node.js en Express om de webserver te beheren. Voor het genereren van dynamische HTML-pagina's wordt Liquid gebruikt, wat de webpagina's flexibel en makkelijk te onderhouden maakt.

### Route-configuraties
- Homepagina [`/`](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/main/views/index.liquid): De webserver haalt gegevens op via de Directus API en toont deze op de hoofdpagina [`index.liquid`](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/main/views/index.liquid).
- Webinars overzichtspagina [`/webinars/`](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/main/views/webinars.liquid): Hier worden webinars opgehaald en kunnen gebruikers deze filteren op categorie. De data wordt weergegeven in de template [`webinars.liquid`](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/main/views/webinars.liquid).
- Watchlistpagina [`/watchlist/`](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/main/views/watchlist.liquid) : Deze route haalt de webinars op die opgeslagen zijn in de database en toont deze op de [`watchlist.liquid`](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/main/views/watchlist.liquid).

### Data ophalen, opslaan en verwijderen uit database
- Data ophalen via API: De server maakt een API-aanroep om de benodigde gegevens op te halen in JSON-formaat. [Voorbeeld](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L77)
- Data doorgeven aan Liquid: De opgehaalde data wordt doorgegeven aan de Liquid-template via response.render(). [Voorbeeld](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/server.js#L81-L85)
- Data verwerken in Liquid: In de Liquid-template wordt de data met behulp van loops en variabelen verwerkt en weergegeven. [Voorbeeld](https://github.com/ambersr/server-side-rendering-server-side-website/blob/79784183415e43f6b3c67195dfdd1da05259c14e/views/webinar.liquid#L52-L53)
- HTML genereren en tonen: Liquid genereert de HTML, die naar de browser wordt gestuurd en zichtbaar wordt voor de gebruiker.
- Data opslaan wordt uitgevoerd via een POST-aanroep. De server maakt een API-aanroep om de benodigde gegevens op te halen in JSON-formaat en slaat deze op in de database. [Voorbeeld](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/0b078ab3d4ce033dbd3151874ab99308c668009e/server.js#L187-L222)
- Data verwijderen wordt uitgevoerd via een DELETE-aanroep. De server controleert de aanroep en als deze bestaat verwijderd hij de post uit de database. [Voorbeeld](https://github.com/ambersr/the-web-is-for-everyone-interactive-functionality/blob/0b078ab3d4ce033dbd3151874ab99308c668009e/server.js#L187-L222)

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


