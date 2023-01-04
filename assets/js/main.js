/* Verwende die unten aufgeführten Operatoren, um num mit anotherNum zu vergleichen.

Deklariere num = 5 und anotherNum = 8 als neue Variablen, dann gib die folgenden Vergleiche in der Konsole aus:
==
>
<
>=
<= */

let num = 5;
let anotherNum = 8;

console.log(num == anotherNum);
    // (5 ist nicht == 8) => false

/*
* Der equality-Operator (==) überprüft ob zwei Operanden den gleichen Wert haben
* Anders als bei dem strict-equality-Operator (===) wird auch ein true-Wert ausgegeben wenn die Werte nicht vom gleichen Datentyp sind. Vorrausgesetzt der Wert ist der Gleiche.
* ('1' == 1)   => true
* (1 == 1)     => true 
*/

console.log(num > anotherNum);
    // (5 ist nicht > 8) => false

/* 
* Der greater-than-Operator (>) überprüft ob der linke Operand größer ist als der rechte Operand. 
*/

console.log(num < anotherNum);
    // (5 ist < 8) => true

/* 
* Der less-than-Operator (<) überprüft, ob er linke Operand kleiner ist als der rechte Operand.
*/

console.log(num >= anotherNum);
    // (5 ist nicht >= 8) => false

/*
* Der greater-than-or-equal-Operator überprüft, ob der linke Operand größer ist, oder den gleichen Wert hat wie der rechte Operand.
*/

console.log(num <= anotherNum);
    // (5 ist <= 8) => true

/* 
* Der less-than-or-equal-Operator überprüft, ob der linke Operand kleiner ist, oder den gleichen Wert hat wie der rechte Operand.
*/

/* Vergleich num nun mit:
== "5"
!= 8
!= "5" */

console.log(num == "5");
    // (5 ist == "5") => true

/* 
* Das der Integer 'num' und der String "5" den gleichen Wert haben ist das Ergebniss true.
*/

console.log(num != 8);
    // (num ist != 8) => true

/* 
* Es wurde verglichen ob num NICHT den gleichen Wert ist hat 8 => true
*/

console.log(num != "5");
    // (5 ist nicht != 5) => false 

/* 
* In dem Case würde geprüft, ob 5 nicht gleich 5 ist. => false - da 5 == 5 ist
*/


