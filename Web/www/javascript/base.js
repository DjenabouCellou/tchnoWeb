/**
 * Afficher l'icône de remonter après le scroll
 */

var toTop = document.getElementById("toTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/**
 * lance toast
 */
window.onload = function() {
  console.log("hello");
  let x = document.getElementById("toast");
  x.className = "show";
  this.setTimeout(function() {
    x.className = x.className.replace("show", "");
  }, 3000)
}

/**
 * afficher le formulaire de connexion
 */
var affich_button = document.getElementById("affich_button");
affich_button.addEventListener("click", afficheF);

function afficheF() {
  var formulaire = document.getElementById("form");
  if ((formulaire.style.display == 'none') || (formulaire.style.display == ""))
    formulaire.style.display = 'block';
  else
    formulaire.style.display = 'none';
}