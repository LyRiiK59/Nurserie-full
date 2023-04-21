// EXO 1
// Créer un champ de saisie et un bouton
var input = document.createElement("input");
input.type = "text";
input.placeholder = "Entrez votre nom";
document.body.appendChild(input);

var button = document.createElement("button");
button.textContent = "Valider";
document.body.appendChild(button);

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
button.addEventListener("click", function() {
  // Récupérer la valeur du champ de saisie
  var nom = input.value;
  
  // Afficher un message de bienvenue avec la valeur saisie
  alert("Bienvenue, " + nom + " !");
});




// EXO 2
// Créer deux champs de saisie
var input1 = document.createElement("input");
input1.type = "number";
input1.placeholder = "Entrez un nombre";
document.body.appendChild(input1);

var input2 = document.createElement("input");
input2.type = "number";
input2.placeholder = "Entrez un autre nombre";
document.body.appendChild(input2);

// Créer un bouton pour calculer la somme
var button = document.createElement("button");
button.textContent = "Calculer la somme";
document.body.appendChild(button);

// Ajouter un gestionnaire d'événement pour le clic sur le bouton
button.addEventListener("click", function() {
  // Récupérer les valeurs des champs de saisie
  var valeur1 = Number(input1.value);
  var valeur2 = Number(input2.value);
  
  // Calculer la somme des deux valeurs
  var somme = valeur1 + valeur2;
  
  // Afficher la somme dans une boîte de dialogue
  alert(`${valeur1}+${valeur2} = ${somme}`);
});