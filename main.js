// alert("Hello World");

let nachricht = "Hallo Welt";
// alert(nachricht);
nachricht = "neuer Text";
// alert(nachricht);
console.log(nachricht);
const linkColor = "#ff0000";
let eine_variable = "test";
console.log("Variable: eine_variable: ", eine_variable);
let highscore = 75.9944;
console.log("Highscore ist: ", highscore / 20);
let meineNachricht = "test1";
console.log(meineNachricht);
meineNachricht = "test2";
console.log(meineNachricht);
meineNachricht = `Ein mehr
und ein
ganz langer
text
und aus`;

console.log(meineNachricht);

let fullName =`Jeffrey "The Dude" Lebwosky`;
console.log(fullName);

let isOver18 = true;
console.log("über 18?", isOver18);
let age = 17 ;
console.log ("age über 18", age > 18);

let zahlenliste = [2, 11,24,33];
console.log(zahlenliste);
let namensliste = [ "Jane", "John"];
console.log(namensliste[2]);
console.log("Anzahl der Namen: ", namensliste.length);

let benutzer = {
    vorname: "Jane",
    nachname: "Doe",
    alter: 28
};
console.log("Benutzer Alter: ", benutzer.alter);
benutzer.bestzeit = 200;
benutzer["bestzeit ever"] = 100;
console.log(benutzer);

// Benutzer Eingabe
// let alter = prompt("Wie alt bist du?");
// console.log ("Du bist ", alter, " jahre alt");
// console.log("über 18?", alter > 18);
// if (alter > 18) {
//     console.log("Du darfst hinein...");
// } else {
//     console.log("noch nicht 18...");
// }

for (let i=1; i<=10; i++) {
    console.log("Wert von i:", i);
}

function showAge(birthYear) {
    let age = 2018 - birthYear;
    console.log("Du bist ", age, "Jahre alt");
}

showAge(1964);
showAge(1988);

function calcAge(birthYear) {
    return 2018 - birthYear;
}

console.log("Du bist ", calcAge(1990), "Jahre");
console.log("und du ", calcAge(1994), ".");