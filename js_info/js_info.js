"use strict";

/*
                                            4. Let a Const 
*/

// const COLOR_RED = '#F00';
// const COLOR_GREEN = '#0F0';
// const COLOR_BLUE = '#00F';
// const COLOR_ORANGE = '#FF7F00';

// // ...when we need to pick a color
// let color = COLOR_ORANGE;
// alert(color); // #FF7F00

/*
                                            5. Data types 
*/

// let message = "hello";
// message = 123456;

// console.log(message);

// typeof undefined; // "undefined"
// typeof 0; // "number"
// typeof 10n; // "bigint"
// typeof true; // "boolean"
// typeof "foo"; // "string"
// typeof Symbol("id"); // "symbol"
// typeof Math; // "object"  (1)
// typeof null; // "object"  (2)
// typeof alert; // "function"  (3)

/*
                                            6. Interaction: alert, prompt, confirm
*/
// allert
// alert("Hello");

// prompt == dovoluje zadat premennu ktoru vrati do premennej
// let age = prompt("How old are you?", 100);
// alert(`You are ${age} years old!`); // You are 100 years old!

// Confirm  == kliknutim na ok da true, cancel/esc da false
// let isBoss = confirm("Are you the boss?");
// alert(isBoss); // true if OK is pressed

/*
                                            7. Type Conversions
*/

// String
// let value = true;
// alert(typeof value); // boolean

// value = String(value); // now value is a string "true"
// alert(typeof value); // string

// Number
// let str = "123";
// alert(typeof str); // string
// let num = Number(str); // becomes a number 123
// alert(typeof num); // number

/*
                                            8. Basic operators, maths 
*/
//alert( 2 ** 2 ); // 2² = 4

// String
// let s = "my" + "string";
// alert(s); // mystring

// Increment++
let counter = 2;
counter++; // works the same as counter = counter + 1, but is shorter
console.log(counter); // 3

// decrement--
let counterB = 2;
counterB--; // works the same as counter = counter - 1, but is shorter
console.log(counterB); // 1

let counterA = 1;
let a = ++counterA; // (*)
console.log(a); // 2

//    Priklad
let a = 1,
  b = 1;
alert(a); // 2, incremented once
alert(b); // 2, incremented once
alert(++a); // 2, prefix form returns the new value
alert(b++); // 1, postfix form returns the old value

/*

                                             10. ie else sttatmantes

*/

//  Boolean
if (0) { // 0 is falsy
    ...
  }

if (1) { // 1 is truthy
    ...
  }


  // ELSE if
  let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

  if (year < 2015) {
    alert( 'Too early...' );
  } else if (year > 2015) {          // dalsia posmienka
    alert( 'Too late' );  
  } else {                         // vsetky dalsie moznosti
    alert( 'Exactly!' );     
  }

// 
let accessAllowed;
let age = prompt('How old are you?', '');

if (age >= 18) {
  accessAllowed = true;
} else {
  accessAllowed = false;
}
alert(accessAllowed);
/*   Toto je presne ten isnty zapis if 

let age = prompt('How old are you?', '');

let accessAllowed = age >= 18 ? true : false;     // if podmienka (ak age je 18 a viac tak je true ak nie tak false)
alert(accessAllowed);                             //     let result = condition ? value1 : value2;

*/
//        zjednodusene podmienky

let age = prompt('age?', 18);

let message = (age < 3) ? 'Hi, baby!' :
  (age < 18) ? 'Hello!' :
  (age < 100) ? 'Greetings!' :
  'What an unusual age!';

alert( message );


//       Dalsi priklad pouzitia 

let company = prompt('Which company created JavaScript?', '');
(company == 'Netscape') ?
   alert('Right!') : alert('Wrong.');

/*

                                             11. Logical operators: || &&

*/
//      || (OR)

alert( true || true );   // true
alert( false || true );  // true
alert( true || false );  // true
alert(false || false); // false

//      && (AND)

alert( true && true );   // true
alert( false && true );  // false
alert( true && false );  // false
alert( false && false ); // false

//      ! (NOT)

alert( !true ); // false
alert( !0 ); // true

//      ?? 

|| returns the first truthy value.
?? returns the first defined value.

// Priklad
let height = 0;
alert(height || 100); // 100
alert(height ?? 100); // 0



The result of a ?? b is:
if a is defined, then a,
if a isn’t defined, then b.



/*

                                             13. Loops: while and for

*/
//          The “while” loop

let i = 0;
while (i < 3) { // shows 0, then 1, then 2
  alert( i );
  i++;
}

//          The “do…while” loop

// syntax:
do {
    // loop body
  } while (condition);


// priklad

let i = 0;
do {
  alert( i );
  i++;
} while (i < 3);


//          The "for" loop

// syntax:
for (begin; condition; step) {
    // ... loop body ...
  }

// priklad  
  for (let i = 0; i < 3; i++) { // shows 0, then 1, then 2
    alert(i);
  }

  begin         i = 0	    Executes once upon entering the loop.
  condition	    i < 3	    Checked before every loop iteration. If false, the loop stops.
  body	        alert(i)	Runs again and again while the condition is truthy.
  step	        i++	        Executes after the body on each iteration.






/*

                                             13. Swich

*/
// syntax:
  switch(x) {
    case 'value1':  // if (x === 'value1')
      ...
      [break]
  
    case 'value2':  // if (x === 'value2')
      ...
      [break]
  
    default:   // if no case is matched then the default code is executed (if it exists).
      ...
      [break]
  }

// priklad
let a = 2 + 2;

switch (a) {
  case 3:
    alert( 'Too small' );
    break;
  case 4:
    alert( 'Exactly!' ); 
    break;
  case 5:
    alert( 'Too big' );
    break;
  default:
    alert( "I don't know such values" );
}



/*

                                             16. function expression

*/

function ask(question, yes, no) {
  if (confirm(question)) yes()
  else no();
}

function showOk() {
  alert( "You agreed." );
}

function showCancel() {
  alert( "You canceled the execution." );
}

// usage: functions showOk, showCancel are passed as arguments to ask
ask("Do you agree?", showOk, showCancel);




/*

Priklad na vek a potom dole v 17. Arrow function je skrateny tvar
*/
let age = prompt("What is your age?", 18);
let welcome;

if (age < 18) {                     // let welcome = (age < 18) ?
  welcome = function() {            // function() { alert("Malo rokov mas!"); } :
    alert("Malo rokov mas!");
  };
} else {                            // function() { alert("Greetings!"); };
  welcome = function() {
    alert("Greetings!");
  };
}
welcome(); // ok now 


/*

                                             17. Arrow function == > SKRATENE Fumkcie

*/
let age = prompt("What is your age?", 18);

let welcome = (age < 18) ?
  () => alert('Malo rokov mas!') :      // function() { alert("Malo rokov mas!"); } :
  () => alert("Greetings!");            // function() { alert("Greetings!"); };
welcome();

// priklad sum 
let sum = (a, b) => {  // the curly brace opens a multiline function
  let result = a + b;
  return result; // if we use curly braces, then we need an explicit "return"
};

alert( sum(1, 2) ); // 3


// Otazka skratene funkcie 
function ask(question, yes, no){ 
  confirm(question) ? yes() : no();
}

ask(
  "Do you agree?",
  () => { alert("You agreed."); },
  () => { alert("You canceled the execution."); }
);


/*
                      Funkcie
*/

let game = function (name, score) {
  console.log(name);
  console.log(score);
};
game("David", 50); // Vypise david a 50 na dalsi riadok

///                 objekty

let person1 = {
  name: "David Šetek",
  age: 34,
  city: "České Budějovice",
};

let person2 = {
  name: "Harry Potter",
  age: 12,
  city: "London",
};

let person3 = {
  name: "Jana Oranžová",
  age: 18,
  city: "Praha",
};

let personInfo = function (person) {
  console.log(
    `Jmenuje se ${person.name} a je mu ${person.age} let. Pochází z ${person.city}.`
  );
};

personInfo(person1);
personInfo(person2);
personInfo(person3);


/*



                                             OBJEKTY







*/


let user = {     // an object
  name: "John",  // by key "name" store value "John"
  age: 30        // by key "age" store value 30
};

// get property values of the object:
alert( user.name ); // John
alert( user.age ); // 30














