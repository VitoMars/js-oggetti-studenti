// Descrizione:
// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
// Creare un array di oggetti di studenti.
// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.

// Creare un oggetto che descriva uno studente, con le seguenti proprietà: nome, cognome e età.
var studente = {
  nome: "Vito",
  cognome: "Marseglia",
  eta: 25,
};

// Stampare a schermo attraverso un ciclo for-in tutte le proprietà dell'oggetto.
for (var key in studente) {
  console.log(key + " : " + studente[key]);
}

// Creare un array di oggetti di studenti.
var studenti = [
  {
    nome: "Mario",
    cognome: "Rossi",
    eta: 25,
  },
  {
    nome: "Luca",
    cognome: "Verdi",
    eta: 30,
  },
];

// Ciclare su tutti gli studenti e stampare per ognuno di essi, nome e cognome.
for (var key in studenti) {
  console.log(studenti[key].nome + " " + studenti[key].cognome);
}

// Dare la possibilità all’utente, attraverso 3 prompt(), di aggiungere un nuovo oggetto studente inserendo nell’ordine: nome, cognome e età.
var nuovoStudente = {};

nuovoStudente.nome = prompt("Inserisci il nome:");
nuovoStudente.cognome = prompt("Inserisci il cognome:");
nuovoStudente.eta = parseInt(prompt("Inserisci l' eta:"));

studenti.push(nuovoStudente);
console.log(studenti);
