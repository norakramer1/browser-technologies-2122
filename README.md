# Readme for browser technologies 2122
In deze readme staat de documentatie voor opdracht 1 en 2 en alle documentatie voor de eindopdracht

## Inhoud

- [Opdracht 1](#opdracht-1)
- [Bronnen](#Bronnen)
- [Opdracht 2](#opdracht-2)
- [Eindopdracht](#Concept-eindopdracht)
- [Wireflow](#Wireflow)
- [Features](#Features-en-browser-technologies)
- [4 Browsers waar het in getest is en support](#4-Browsers-waar-het-in-getest-is-en-support)
- [Tests zonder Javascript en CSS](#Tests-zonder-Javascript-en-CSS)
- [Use](#How-to-use)
- [Dependencies](#Dependencies)
- [DevDependencies](#DevDependencies)
- [Wishlist](#Wishlist)
- [License](#License)
- [Nog meer bronnen](#Bronnen2)

## Opdracht 1
Voor deze opdracht heb ik informatie opgezocht over Progressive Enhancement en dit in de website gebruikt.

Progressive enhancement is een methode die de focus legt op de content van de webpagina eerst. De content van de pagina (tekst, foto’s, etc) word gescheiden van semantiek van webdesign (HTML etc.) Het doel is om te zorgen dat het web voor iedereen bruikbaar blijft. In de kern moet iedereen de meest belangrijke content op een pagina kunnen zien, dus ook als je de content op een oude computer bekijkt of slecht internet hebt. Mensen met de nieuwste computers en het beste internet kunnen dus een website zien die er misschien mooier uitziet maar dezelfde content laat zien.

Progressive enhancement gaat over nadenken wat de gebruiker minimaal nodig heeft om de content te bekijken en de verbeterde versie te laten zien als de browser dit toelaat.



Met Feature detection word vaak gekeken of de browser de moderne functionaliteit kan hendelen, door de site te testen en te zien of de browser alle content oke laat zien.

### Bronnen:

freeCodeCamp.org. (2018, 7 november). What is Progressive Enhancement, and why it matters. Geraadpleegd op 23 maart 2022, van [FreeCodeCamp](https://www.freecodecamp.org/news/what-is-progressive-enhancement-and-why-it-matters-e80c7aaf834a/)

Progressive Enhancement - MDN Web Docs Glossary: Definitions of Web-related terms | MDN. (2022, 18 februari). Developer.Mozilla.Org. Geraadpleegd op 23 maart 2022, van [MDN web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)


Wikipedia contributors. (2022, 17 maart). Progressive enhancement. Wikipedia. Geraadpleegd op 23 maart 2022, van 
[Wikipedia](https://en.wikipedia.org/wiki/Progressive_enhancement)

## Opdracht 2
Voor breek het web heb ik gekeken naar cookies en local storage en dit gedocumenteerd in deze readme.

1. Cookies niet accepteren

Wat gebeurd er als ze deels uit gaan?
Er gebeurd niet zo veel als de cookies uitstaan op deze website. Er komt een balk rechts-onderin om je te vertellen dat de ‘navigatie ervaring verbeterd word’ als je cookies aanzet. Ik heb met beide getest, met en zonder cookie blocker en ik heb geen merkbaar verschil gezien.

Wat vind je van de cookiewet? Levert het voordelen op?
De cookiewet geeft de bezoeker van een website de de controle om te kiezen of ze wel of geen cookies willen. Aan de gebruiker moet toestemming gevraagd worden of ze wel of niet cookies willen. Een cookiemuur kan gebruikt worden om de gebruiker bijna te dwingen om de cookies te accepteren. Ik vind het idee van de cookiewet goed (bezoeker bewust maken van cookies en ze een keuze geven om ze te accepteren) maar ik denk niet dat een popup op elke website een heel goed idee is. Op dit moment kijkt niemand er naar en vinden mensen het nog al irritant om doorheen te klikken. Ik denk dat dit algemener geregeld moet worden of je voorkeuren op een andere manier aangegeven moeten worden (via browser instellingen?)

Andere oplossingen?
Voorkeuren instellen via de browser?

2. Local storage
Local storage in Javascript is een manier om een klein beetje informatie tijdelijk op te slaan in de browser bij een specifieke domeinnaam. Het word gebruikt om bijvoorbeeld voorkeuren, kleuren of inleginformatie voor korte tijd te bewaren zodat je niet elke keer hoeft in te loggen.

localStorage doet het niet
Ik heb de local storage verwijderd en uitgezet en zag geen verschil. Ook onder de netwerk tab staat niet dat local storage er is.

Voor en nadelen van local storage.

Voordelen: je kunt veel meer data opslaan dan in een cookie. Het is ook gebruiksvriendelijk voor de bezoeker van een website, ze hoeven namelijk niet bijvoorbeeld opnieuw in te loggen maar de browser onthoud informatie en voorkeuren.

Nadelen:
Het kan onveilig zijn, ook localstorage kan misbruikt worden om mensen te tracken of gevaarlijke software ergens op los te laten.

## Concept eindopdracht
Voor de eindopracht heb ik een online poll uitgewerkt. Docenten (of studenten) kunnen een poll aanmaken en anderen kunnen deze meteen invullen en de resultaten zien. Nadat je de poll invult kun je zien hoeveel mensen A of B gekozen hebben. Deze functionaliteit is uitgewerkt in Node.JS zodat de website stabieler is. Vervolgens heb ik met CSS styling toegevoegd en als laatste laag een darkmode toegevoegd met Javascript.

De user story is:
> Ik wil tijdens een college aan studenten een poll kunnen voorleggen met vragen en antwoorden, en de resultaten meteen laten zien.

## Wireflow
![Wireframes app](https://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/wireframes-bt.png)


## Features en browser technologies
1. Nieuwe poll aanmaken
Vul een formulier in met een vraag en 2 antwoorden. Deze word doorgestuurd naar een json file samen met een lege array voor de votes en een unique ID om ze later weer op te halen. 

2. Vul polls in
Daarna kun je de polls die aangemaakt zijn bekijken en invullen. Je kunt de vraag zien en met radio buttons een van de twee antwoorden aanklikken en versturen, deze worden in de lege array met het matchende ID gezet en bewaard. 

3. Resultaten bekijken
Daarna kun je de resultaten zien van de poll. Je ziet hoeveel mensen antwoord A en antwoord B gekozen hebben, deze data was opgeslagen in de array met votes.

## 4 Browsers waar het in getest is en support
### Chrome voor macbook
Ik heb deze website vooral bekeken en getest in Chrome. Dit is de default browser die ik gebruikt voor eigenlijk alles. Hier werkte alles zo als zou moeten. De fonts doen het, de website was snel en er waren geen rare fouten

![website in Chrome Desktop op macbook](https://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/chrome-desktop.png)

### Safari voor macbook 
In Safari ging het iets minder goed dan gedacht. De custom fonts waren niet gesupport. Ik had nog niet over support nagedacht dus hier ga ik nog verder naar kijken. Hij heeft het custom font veranderd met een standaard serif font, dit is gek want ik heb als fallback wel een sans-serif font aangegeven. Verder deed alles het prima, de website was goed te bedienen en snel. 

![website in Safari Desktop op macbook](https://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/safari-desktop.png)

### Chrome voor General Mobile GM5Plus telefoon
Ik heb de website ook geprobeerd op een oude telefoon die ik geleend heb, op deze telefoon draait op Chrome. Ook hier kon je de custom fonts niet bekijken, wel is het hier vervangen door een sans-serif font. Daarnaast is Chrome ook een keer gecrashed toen ik meerdere polls aan wilde maken. Dit kan ook toeval zijn.

![website in Chrome Mobile op android telefoon](hhttps://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/chrome-mobile.png)

### Iphone 8
Als laatste heb ik de de website ook nog getest op mijn eigen telefoon. Ook hier was er een probleem met de fonts maar werkte de rest prima. Hier is het font ook vervangen door een serif font.

![website in Safari Mobile op iphone telefoon](https://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/safari-mobile.png)

## Tests zonder Javascript en CSS
Eerst heb ik de website getest zonder Javascript en er waren geen problemen. Bijna alle features werken via de backend en werken dus ook zonder frontend javascript.

![website op desktop zonder Javascript](https://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/javascript-off.png)

Daarna heb ik de website getest zonder CSS en Javascript. Ook al was het onoverzichtelijk zonder styling was wel alles zichtbaar.

![website op desktop zonder CSS en Javascript](https://github.com/norakramer1/browser-technologies-2122/blob/main/eindopdracht/public/img/css-off.png)

## How to use
1. Clone deze repository door dit in de terminal te plaatsen:
`git clone` https://github.com/norakramer1/eindopdracht/browser-technologies-2122.git

2. Installeer het project door het volgende in de terminal in te voeren:
`npm install`

3. Voer het project uit door dit in de terminal te plaatsen:
`npm start`

4. Maak een poll of vul ze in!

## Dependencies
- [body-parser](https://www.npmjs.com/package/body-parser)
- [ejs](https://ejs.co/)
- [express](http://expressjs.com/) (middleware)
- [uuid](https://www.npmjs.com/package/uuid)

## DevDependencies 
- [Nodemon](https://www.npmjs.com/package/nodemon)

## Wishlist
- Betere styling (my god)
- Drag en drop polls?
- Cleanere code

## license
Dit project gebruikt het MIT license

## Bronnen2
- [Can I Use](https://caniuse.com/)
- [FileSystem in Node](https://nodejs.org/api/fs.html)
- [UUID](https://www.npmjs.com/package/uuid)

