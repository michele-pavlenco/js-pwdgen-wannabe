alert( "ciao, crea la tua password personalizzata");
let userName = (prompt ("Qualè il tuo nome ?"));
console.log(userName);

let userSurname = (prompt ("Qualè il tuo cognome?"));
console.log(userSurname);

let userColor = (prompt ("Qualè il tuo colore preferito?"));
console.log(userColor);

document.getElementById("password").innerHTML += userName + userSurname + userColor + 21;

/* 
A[ciao] -->|ok| B(Inserisci nome)
B -->|ok| C(Inserisci cognome)
C -->|ok| D(Inserisci colore preferito)
D -->|Add 21| E[Pasword] */
