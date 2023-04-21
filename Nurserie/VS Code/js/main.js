// let nom = "Parent";
// console.log("Mon nom est : "+nom);
// let prénom = "Rémi";
// console.log("Mon prénom est : "+prénom);
// let age = 31;
// console.log(`Mon age est : ${age} ans`);
// let métier = "Data Analyst";
// console.log("Mon métier est : "+métier);
// console.log(`Mon profil est : ${nom} ${prénom} ${age} ans ${métier}`);

// // 2 méthodes pour faire une phrase contenant plusieurs variables
// // méthode classique:
// console.log("Bonjour, je m'appelle" +prénom+ " " +nom+ ", j'ai " +age+ " ans, et je voudrais devenir " +métier)
// // méthode moderne:
// console.log(`Bonjour, je m'appelle ${prénom} ${nom}, j'ai ${age} ans, et je voudrais devenir ${métier}`)

// // Déterminer le nombre de caractères:
// // (utilisée par exemple pour imposer à l'utilisateur un minimum de caractères pour les mots de passe)
// console.log(`Mon nom est composé de ${nom.length} caractères`);

// // afficher la variable en majuscule et en minuscule
// console.log(`Mon nom est ${nom.toUpperCase()}`)
// console.log(`Mon nom est ${nom.toLowerCase()}`)

// // afficher les caractères choisis d'une variable
// console.log(`Les trois premières lettres de mon nom sont ${nom.substring(0,3)}`);

// // cumuler les fonctions précédentes
// console.log(`mes initiales sont : ${nom.substring(0,1).toUpperCase()} et ${prénom.substring(0,1).toUpperCase()}`);

// // découper le mot :
// console.log(nom.split(""));
// console.log(nom.split(" "));  
// console.log(nom.split("e"));

// // avec un nouveau tableau a 6 entrées
// //  - supprimer le premier élément de ce tableau
// //  - ajouter 'Y', 'Z' a la fin
// //  - afficher le 3eme élément dans la console
// //  - afficher l'index de 'Y'

// const lettres = ["S", "T", "U", "V", "W", "X"];
// console.log(lettres);
// lettres.shift();
// lettres.push("Y", "Z")
// console.log(lettres);
// console.log(lettres[2]);
// console.log(lettres.indexOf("Y"));


// const utilisateur = "Doe"
// console.log(`Bienvenue ${utilisateur}`);

// const nb1 = 1
// const nb2 = 2
// const somme = nb1+nb2
// console.log(nb1);
// console.log(nb2);
// console.log(`${nb1} + ${nb2} = ${somme}`);

// const personne = {
//     prenom: "Rémi",
//     nom: "Parent",
//     age: 31,
//     passions: ["basket", "chiens", "jeux videos"],
//     adresse: {
//     numero: 123,
//     rue: "rue Nationale",
//     ville: "Lille",
//     pays: "France"
//     }
//     };

// console.log(personne);
// console.log(`Bonjour, je m'appelle ${personne.prenom} ${personne.nom}. J'ai ${personne.age} ans. J'habite au ${personne.adresse.numero} ${personne.adresse.rue} à ${personne.adresse.ville} en ${personne.adresse.pays}`);

// personne.passions.push("foot");
// console.log(personne);

// personne.adresse.numero = 456
// personne.adresse.rue = "rue Internationale"
// personne.adresse.ville = "Lila"
// personne.adresse.pays = "Suisse"
// console.log(personne);

// 

// OPERATEUR TERNAIRE
// let age = 31
// console.log(`comme vous avez ${age} ans, vous êtes ${age >= 18 ? "majeur" : "mineur"}`);

// const todos = [
//     {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//     },
//     {
//     id: 2,
//     text: "Balade au vieux Lille"
//     ,
//     isCompleted: true,
//     },
//     {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//     },
//     {
//         id: 4,
//         text: "Regarder la TV",
//         isCompleted: false,
//         },
//     ];
    
//     console.log(`la tache ${todos[2].id} est ${todos[2].text}. Elle comporte ${todos[2].text.length} charactères, et elle est ${todos[2].isCompleted == true ? "complétée" : "non complétée"}`);
    
//     let txt1 = "How're u today ?"
//     let txt2 = "welcome to HTML !"
//     console.log(`${txt1} comporte ${txt1.length} charactères et ${txt2} comporte ${txt2.length} charactères donc le txt1 est ${txt1.length > txt2.length ? "plus long que" : txt1.length < txt2.length ? "moins long que"  : "de même longueur que"} le txt2`);
    
    
// MESSAGE POP UP INVITANT L'UTILISATEUR A ECRIRE QQCHOSE POUR LE SAUVEGARDER DANS LA CONSOLE
    // let test = prompt("dites nous tout")
    // console.log(test);

// SWITCH 
    // let roues = +prompt ("combien de roues a votre véhicule ?")
    
    // let TypeOfVehicule = ""
    // switch (roues) {
    //     case 2:
    //     TypeOfVehicule="scooter";    
    //         break;
    //     case 4:
    //     TypeOfVehicule="4x4";
    //         break;
    //     case 6:
    //     TypeOfVehicule="camion";
    //         break;
    //     default:
    //     TypeOfVehicule="inconnu";
    // }
    
    // console.log(`Vous avez indiquez que votre véhicule a ${roues} roues. Il s'agit donc d'un ${TypeOfVehicule}`);


// SWITCH (true) = COMPARAISON
// let salaire = prompt("bonjour, quel est votre salaire en euros ?");

// let grade = ''
// switch (true) {
//     case salaire<=1800 && salaire>0:
//     grade="junior";    
//         break;
//     case salaire<=2500 && salaire>1800:
//         grade="confirmé";
//         break;
//     case salaire>=3200 && salaire>2500:
//         grade="senior";
//         break;
//     default:
//     grade="inconnu";
// }
// console.log(`avec votre salaire de ${salaire} euros, votre grade est ${grade}`);

// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// let texte = ""
// for(let i = 0 ; fruits[i] ; i++ ) {
//     texte += `${fruits[i]} comporte ${fruits[i].length} charactères.<br>`
//     console.log(texte);
// }
// document.write(texte)


// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// let tab=[]
// for(let i = 0 ; i < fruits.length ; i++ ) {
//     tab.push(fruits[i].length)
// }
// console.log(tab);


// const todos = [
//     {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//     },
//     {
//     id: 2,
//     text: "Balade au vieux Lille"
//     ,
//     isCompleted: true,
//     },
//     {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//     },
//     {
//         id: 4,
//         text: "Regarder la TV",
//         isCompleted: false,
//         },
//     ];

// let text1 = ""
// for(let i = 0 ; todos[i] ; i++ ) {
//     text1 += `la tache "${todos[i].text}" est ${todos[i].isCompleted == true ? "complétée" : "non complétée"}.<br>`
// }
// console.log(text1)
// document.write(text1)


// // Créer un tableau vide pour stocker les nombres aléatoires
// var nombres = [];

// // Générer 10 nombres aléatoires et les ajouter au tableau
// for (var i = 0; i < 10; i++) {
//   var nombreAleatoire = Math.floor(Math.random() * 11);
//   nombres.push(nombreAleatoire);
// }

// // Afficher le tableau dans la console pour vérifier le résultat
// console.log(nombres);


// afficher le text du todos dans une boucle while
// const todos = [
//     {
//     id: 1,
//     text: "Faire les courses",
//     isCompleted: true,
//     },
//     {
//     id: 2,
//     text: "Balade au vieux Lille"
//     ,
//     isCompleted: true,
//     },
//     {
//     id: 3,
//     text: "Préparer le diner",
//     isCompleted: false,
//     },
//     {
//         id: 4,
//         text: "Regarder la TV",
//         isCompleted: false,
//         },
//     ];

// let i = 0;
// while (i < todos.length) {
// document.write(todos[i].text + "<br>");
// i++;
// }

// Générer une demande à l'utilisateur de choisir un nombre entre 0 et 10. Afficher ok sinon redemander
// let nb = +prompt("bonjour, choisissez un nombre compris entre 0 et 10")
// while(nb < 0 || nb > 10){
//   alert("ce n'est pas un nombre entre 0 et 10")
//   nb = +prompt("bonjour, choisissez un nombre compris entre 0 et 10")
// }
// alert("ok")

// afficher chacun des fruits dans la console avec une fonction forEach ET EXCLURE la pastèque
// let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
// fruits.forEach(function (jus) {
//   if (jus !== "pastèque") {
//   document.write(jus + "<br>");
//   }
//   });

// reverse les mots du tableau fruits dans un nouveau tableau stiurf
//   let fruits = ["mangue", "pastèque", "poire", "orange", "ananas"];
//   let stiurf = []
//   fruits.forEach(function(mot) {
//     let motInverse = "";
//     for (let i = mot.length - 1; i >= 0; i--) {
//       motInverse += mot[i];
//     }
//     stiurf.push(motInverse)
//   });
//   console.log(stiurf);


// créer une fonction convertisseur de min en sec
// function conversion(min) {
//     return min * 60;
//   }
  
//   let min = +prompt("Bonjour, choisissez un nombre de minutes entre 0 et 60 :");
  
//   if (min >= 0 && min <= 60) {
//     let sec = conversion(min);
//     if (min === 0) {
//       alert(`${min} minute fait ${sec} seconde`);
//     } else if (min === 1) {
//       alert(`${min} minute fait ${sec} secondes`);
//     } else {
//       alert(`${min} minutes font ${sec} secondes`);
//     }
//   } else {
//     alert("Nombre invalide. Veuillez réessayer.");
//   }

function produit(nb1,nb2,nb3) {
    return nb1*nb2+nb3;

}
// produit de variables
let A = 5
let B = 10
let C = 15
let résultat = produit(A, B, C)
// OU produit de nombre quelconque
let résultat = produit(1, 2, 3)
document.write(résultat);