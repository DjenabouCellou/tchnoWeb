var slideIndex = 1;
var charge=0;

var affich_button = document.getElementById("affich_button");

affich_button.addEventListener("click", afficheF);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("mySlides");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  myIndex++;
  currentSlide(myIndex);
  if (myIndex > x.length) {myIndex = 1}
  x[myIndex-1].style.display = "block";
  setTimeout(carousel, 3000); // Change image chaque 3 seconds
}

function disparait() {

	if (typeof this.compteur == 'undefined') {
		this.compteur = 0;
	}
  if(this.compteur == 0) {
    document.getElementById("avertissement").style.display = 'none';
    this.compteur++;
  }
}


//partie Ajax
function afficheF(){
  var formulaire = document.getElementById("form");
  if((formulaire.style.display == 'none') || (formulaire.style.display == ""))
    formulaire.style.display = 'block';
  else
    formulaire.style.display = 'none';
}


function loadFile() {

  var xhr = new XMLHttpRequest();
  var sVar1 = encodeURIComponent(document.getElementById("username").value);
  var sVar2 = encodeURIComponent(document.getElementById("userpwd").value);

  // On souhaite juste récupérer le contenu du fichier, la méthode GET suffit amplement

  xhr.addEventListener('readystatechange', function() { // On gère ici une requête asynchrone

    if (xhr.readyState == 4 && xhr.status == 200) { // Si le fichier est chargé sans erreur
      document.getElementById("message").innerHTML = '<span>' + xhr.responseText + '</span>'; // Et on affiche !

    }
    else {
      document.getElementById("message").innerHTML = '<span>' + xhr.responseText + '</span>';
    }
  });
  xhr.open("GET", "../htbin/login.py?username="+sVar1+"&userpwd=" + sVar2);

  xhr.send(null); // La requête est prête, on envoie tout !

}


/*partie modal*/

function lanceModal(elem) {
  var modal = document.getElementById('myModal');

  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementsByClassName('image')[elem];
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
          img.onclick = function(){
          modal.style.display = "block";
          modalImg.src = this.src;
          captionText.innerHTML = this.alt;
      }

      // Get the <span> element that closes the modal
      var span = document.getElementsByClassName("close")[0];

      // When the user clicks on <span> (x), close the modal
      span.onclick = function() {
          modal.style.display = "none";
    }
  }
