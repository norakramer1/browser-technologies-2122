# Readme for browser technologies 2122
In the readme i will put research on assignments 1 and 2 

## 1 NPM install Progressive enhancement
Voor deze opdracht heb ik informatie opgezocht over Progressive Enhancement en dit in de website gebruikt.

Progressive enhancement is een methode die de focus legt op de content van de webpagina eerst. De content van de pagina (tekst, foto’s, etc) word gescheiden van semantiek van webdesign (HTML etc.) Het doel is om te zorgen dat het web voor iedereen bruikbaar blijft. In de kern moet iedereen de meest belangrijke content op een pagina kunnen zien, dus ook als je de content op een oude computer bekijkt of slecht internet hebt. Mensen met de nieuwste computers en het beste internet kunnen dus een website zien die er misschien mooier uitziet maar dezelfde content laat zien.

Progressive enhancement gaat over nadenken wat de gebruiker minimaal nodig heeft om de content te bekijken en de verbeterde versie te laten zien als de browser dit toelaat.



Met Feature detection word vaak gekeken of de browser de moderne functionaliteit kan hendelen, door de site te testen en te zien of de browser alle content oke laat zien.

### Bronnen:

freeCodeCamp.org. (2018, 7 november). What is Progressive Enhancement, and why it matters. Geraadpleegd op 23 maart 2022, van [FreeCodeCamp](https://www.freecodecamp.org/news/what-is-progressive-enhancement-and-why-it-matters-e80c7aaf834a/)

Progressive Enhancement - MDN Web Docs Glossary: Definitions of Web-related terms | MDN. (2022, 18 februari). Developer.Mozilla.Org. Geraadpleegd op 23 maart 2022, van [MDN web Docs](https://developer.mozilla.org/en-US/docs/Glossary/Progressive_Enhancement)


Wikipedia contributors. (2022, 17 maart). Progressive enhancement. Wikipedia. Geraadpleegd op 23 maart 2022, van 
[Wikipedia](https://en.wikipedia.org/wiki/Progressive_enhancement)

## 2 Breek het web
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
