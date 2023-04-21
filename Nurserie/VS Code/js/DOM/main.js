// récupérer la valeur du titre principal
let titre = document.querySelector(".titre")
// afficher le titre principal dans la console
console.log(titre.textContent);

// // remplacer le texte du paragraphe 1 par celui du titre principal
// document.querySelector(".para1").textContent = titre.textContent

// changer la couleur du titre principal
titre.style.backgroundColor = "blue";

// Créer un élément de bouton
let bouton = document.createElement("button");

document.querySelector("section").append(bouton)

// Définir le texte du bouton
bouton.innerHTML = "Ne cliquez pas";

// Ajouter un gestionnaire d'événement au bouton si nécessaire
bouton.addEventListener("click", function() {
    alert("ATTENTION : Ce PC s'autodétruira dans 5 sec !");
    document.querySelector(".para1").textContent = titre.textContent;
});

// Récupérer l'image par son ID
let image = document.getElementById("monImage");

// Définir les chemins des images
let image1 = "dragon (2).png";
let image2 = "evil (2).jpg";

// Ajouter un gestionnaire d'événement à l'image
image.addEventListener("click", function() {
  // Alterner entre les deux images
  if (image.getAttribute("src") === "image1") {
    image.setAttribute("src", image2);
  } else {
    image.setAttribute("src", image1);
  }
});

// créer 5 boutons
let bouton1 = document.createElement("button");
let bouton2 = document.createElement("button");
let bouton3 = document.createElement("button");
let bouton4 = document.createElement("button");
let bouton5 = document.createElement("button");

// placer 5 boutons
document.querySelector("section").append(bouton1)
document.querySelector("section").append(bouton2)
document.querySelector("section").append(bouton3)
document.querySelector("section").append(bouton4)
document.querySelector("section").append(bouton5)

// nommer 5 boutons
bouton1.innerHTML = "jaune"
bouton2.innerHTML = "rouge"
bouton3.innerHTML = "bleu"
bouton4.innerHTML = "vert"
bouton5.innerHTML = "blanc"

// appliquer un style aux 5 boutons
bouton1.style.backgroundColor = "yellow"
bouton2.style.backgroundColor = "red"
bouton3.style.backgroundColor = "blue"
bouton4.style.backgroundColor = "green"
bouton5.style.backgroundColor = "white"

// appliquer un effet aux 5 boutons
bouton1.addEventListener("click", function() {
    document.body.style.backgroundColor = "yellow"
})

bouton2.addEventListener("click", function() {
    document.body.style.backgroundColor = "red"

})

bouton3.addEventListener("click", function() {
    document.body.style.backgroundColor = "blue"

})

bouton4.addEventListener("click", function() {
    document.body.style.backgroundColor = "green"

})

bouton5.addEventListener("click", function() {
    document.body.style.backgroundColor = "white"

})

// sélectionner tous les éléments de même classe
let para1 = document.querySelectorAll(".para1")

// appliquer un style à tous les éléments de même classe
para1.forEach(function (x){
    x.style.backgroundColor="blue"
})



