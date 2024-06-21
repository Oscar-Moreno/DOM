// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

// - Partiendo de este HTML selecciona en JavaScript el h3 y utilizándolo como punto de partida imprime la información de todos los elementos que hay en formato "familia": Soy un h3 con el id... y la clase... mi padre es un header con.... mi hermano es un h1 con....


 const elementH3 = document.getElementById('start-point');

console.log('Soy un h3 con el id ' + elementH3.id + ' y la clase' + elementH3.className + ' mi padre es un header con el id ' + elementH3.parentElement.id + ' y la clase ' + elementH3.parentElement.className + ' y mi hermano es un h1 con ' + elementH3.parentElement.children[0].id + ' que tiene la clase ' + elementH3.parentElement.children[0].className);





// - Partiendo de esta lista, intercambia los textos de los li, deberás tener este resultado sin modificar a mano el HTML. Importante, no hay que mover el <li> sólo cambiar el contenido.
const firstUl = document.getElementById ('first-list');
const secondUl = document.getElementById ('second-list');

const first = firstUl.textContent;
const second = secondUl.textContent;

firstUl.textContent= second;
secondUl.textContent= first;
 







// Usando este HTML muestra por consola el número de etiquetas que hay de cada cosa.
//   - Hay 1 Header
//   - Hay 1 h1
//   - Hay 2 nav
// ...

const headerCount = document.querySelectorAll('header')
console.log('Hay '+ headerCount.length + ' headers')

const h1Count = document.querySelectorAll('h1')
console.log('Hay '+ h1Count.length + ' h1')

const h2Count = document.querySelectorAll('h2')
console.log('Hay '+ h2Count.length + ' h2')

const navCount = document.querySelectorAll('nav')
console.log('Hay '+ navCount.length + ' nav')

const ulCount = document.querySelectorAll('ul')
console.log('Hay '+ ulCount.length + ' ul')

const liCount = document.querySelectorAll('li')
console.log('Hay '+ liCount.length + ' li')

const sectionCount = document.querySelectorAll('section')
console.log('Hay '+ sectionCount.length + ' section')

const articleCount = document.querySelectorAll('article')
console.log('Hay '+ articleCount.length + ' article')

const pCount = document.querySelectorAll('p')
console.log('Hay '+ pCount.length + ' p')

const imgCount = document.querySelectorAll('img')
console.log('Hay '+ imgCount.length + ' img')

const aCount = document.querySelectorAll('a')
console.log('Hay '+ aCount.length + ' a')

const spanCount = document.querySelectorAll('span')
console.log('Hay '+ spanCount.length + ' span')

const footerCount = document.querySelectorAll('footer')
console.log('Hay '+ footerCount.length + ' footer')

