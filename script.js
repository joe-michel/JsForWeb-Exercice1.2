
// import some polyfill to ensure everything works OK
import "babel-polyfill"

// import bootstrap's javascript part
import 'bootstrap';

// import the style
import "./style.scss";

/*
  Put the JavaScript code you want below.
*/


document.querySelector(".Plus").addEventListener("click", ()  => {
	let value = parseInt(document.querySelector(".nbr1").value) + parseInt(document.querySelector(".nbr2").value);
   	document.querySelector(".resultat").innerText = value;
});

document.querySelector(".Minus").addEventListener("click", ()  => {
	let value = parseInt(document.querySelector(".nbr1").value) - parseInt(document.querySelector(".nbr2").value);
   	document.querySelector(".resultat").innerText = value;
});

document.querySelector(".Multi").addEventListener("click", ()  => {
	let value = parseInt(document.querySelector(".nbr1").value) * parseInt(document.querySelector(".nbr2").value);
   	document.querySelector(".resultat").innerText = value;
});

document.querySelector(".Divide").addEventListener("click", ()  => {
	let value = parseInt(document.querySelector(".nbr1").value) / parseInt(document.querySelector(".nbr2").value);
   	document.querySelector(".resultat").innerText = value;
});
