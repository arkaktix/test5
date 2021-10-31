//'ok'

console.log();

// funcie https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/function
let math = {
  factit: function factorial(n) {
    console.log(n);
    if (n <= 1) {
      return 1;
    }
    return n * factorial(n - 1);
  },
};

math.factit(3); //3;2;1;

/*  SYNTAX:
function [name]([param1[, param2[, ..., paramN]]]) {
   statements
} */

const getRectArea = function (width, height) {
  return width * height;
};

console.log(getRectArea(3, 4));
// expected output: 12

var text = element.textContent;
element.textContent = "this is some sample text";

const diceNumber = Math.trunc(Math.random() * 6) + 1; //Math.trunc() <= ostrani desatine cisla

document.querySelector(".check").addEventListener("click", function () {});

// do HTML class Add prida, remove odoberie a toggle ak to tam je tak do odoberie a ked nie tak naopak
player0El.classList.toggle("player--active");
diceEl.classList.remove("hidden");
diceEl.classList.add("hidden");

// Scope - rozsah
// Globální scope (prvni)
// Lokální scope (druha)

let prvni = "První text";

if (true) {
  console.log(prvni);
  let druha = "Druhý text";
  console.log(druha);
  console.log(treti);

  if (true) {
    let treti = "Třetí text";
    console.log(treti);
    console.log(druha);
    console.log(prvni);
  }
}

// Máte přístup k proměnným, které jsou definované v daném scope nebo v rodičovském scope

//        Collectory

// These all return either a single element or collection of elements, but get them different ways:

// querySelector returns the first single element in the document that matches the CSS - type selector;
// querySelectorAll returns a collection of all elements in the document that match the selector;
// getElementsByClassName returns a collection of elements that have the specified class (not a selector);
// getElementById * returns the single element in the document that has the specified ID(there can only be one);
// getElementsbyTagName returns a collection of elements that have the specified tag name(type);
// The methods using CSS - type selectors are newer and more versatile.;

// Click on any of the names to go to the MDN documentation page for full details on the function.

<!DOCTYPE html>
<html>
  
<body style="text-align:center;">
  
    <h1 style="color:#006600">
        GeeksforGeeks
    </h1>
  
    <div class="test-btn">text</div>
    <div class="test-btn">text</div>
    <div class="test-btn">text</div>
    <div class="test-btn">text</div>
  
    <button onClick="qselector()">
        querySelector
    </button>
  
    <button onClick="qselectorall()">
        querySelectorAll
    </button>
  
    <script>
        function qselector() {
            document.querySelector(".test-btn")
                .style.color = "#006600";
        }
  
        function qselectorall() {
            var x = document
                .querySelectorAll(".test-btn");
  
            for (var i = 0; i < x.length; i++) {
                x[i].style.color = "#006600";
            }
        } 
    </script>
</body>
  
</html>







//////////////  Skratene unkcie
function () { } /// () =>  skratena funkcia
() => { }



Javascript sk / cz - ok
vývojarí - Sasik, Beran NOOO
Vue.js - Kamenický 
PHP HTML CZ SK - Čampa, Šturala NOOO
Webove aplikace - Sikoras NOOO
Programatori - Madar, Šrubar NOOO

WritableStreamDefaultWriter















//          8 lekcia 












//////////// 8 

//console.log(me);
//console.log(job);
//console.log(year);

// var me = 'Jonas';
// let job = 'teacher';
// const year = 1992;

// FUNCTION

// function addDecl(a, b) {
//   return a + b;
// }

// const addExpr = function (a, b) {
//   return a + b;
// };

// const addArrow = (a, b) => a + b;

// console.log(addDecl(2, 3));
// console.log(addExpr(2, 3));
// console.log(addArrow(2, 3));

// console.log(this);

//              CHANGE TYPES
//
//   Primitive types - numbers, string, boolean,undefine, null...
let lastName = 'Williams';
let oldLastName = lastName;
lastName = 'Davis';
console.log(lastName, oldLastName);

//   Reference types - object, arrays, functions...
const jessica = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
};

const marriedJessica = jessica;
marriedJessica.lastName = 'Davis';
console.log('Befor merrage', jessica);
console.log('Ater marriage', marriedJessica);

//  Copying object to rerefence types
//
const jessica2 = {
  firstName: 'Jessica',
  lastName: 'Williams',
  age: 27,
  family: ['Alice', 'Bob'],
};

const jessicaCopy = Object.assign({}, jessica2);
jessicaCopy.lastName = 'Davis';

jessicaCopy.family.push('Marry');
jessicaCopy.family.push('Otto');

console.log('Befor merrage', jessica2);
console.log('Ater marriage', jessicaCopy);



////////





//                  9 lekcia









