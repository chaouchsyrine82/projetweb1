function passValidation() {
    var password1 = document.getElementById("motdupasse").value;
    var password2 = document.getElementById("confirmationmdp").value;

    return password1 === password2;
}

function prenomValidation(prenom) {
    var prenomError = document.getElementById("prenomError");

    if (prenom.length >= 4) {
        prenomError.innerHTML = "Pr�nom correct";
        prenomError.style.color = "green";
        return true;
    } else {
        prenomError.innerHTML = "Pr�nom invalide (au moins 4 caract�res)";
        prenomError.style.color = "red";
        return false;
    }
}

function telephoneValidation(telephone) {
    var telephoneError = document.getElementById("telephoneError");

    if (/^\d+$/.test(telephone)) {
        telephoneError.innerHTML = "Num�ro de t�l�phone correct";
        telephoneError.style.color = "green";
        return true;
    } else {
        telephoneError.innerHTML = "Num�ro de t�l�phone invalide (doit contenir uniquement des chiffres)";
        telephoneError.style.color = "red";
        return false;
    }
}
function nameValidation(nom) {
    var nomError = document.getElementById("nomError");

    if (/^[A-Za-z�-��-��-�\s]{3,}$/.test(nom)) {
        nomError.innerHTML = "Nom correct";
        nomError.style.color = "green";
        return true;
    } else {
        nomError.innerHTML = "Nom invalide (au moins 3 lettres)";
        nomError.style.color = "red";
        return false;
    }
}

// Fonction pour valider l'email
function emailValidation(email) {
    var emailError = document.getElementById("emailError");

    if (/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
        emailError.innerHTML = "Email correct";
        emailError.style.color = "green";
        return true;
    } else {
        emailError.innerHTML = "Email invalide";
        emailError.style.color = "red";
        return false;
    }
}


document.getElementById("form").addEventListener("submit", function (event) {

    event.preventDefault();


    var nom = document.getElementById("nom").value;
    if (nom.length < 3) {
        alert("Nom invalide (au moins 3 caract�res)");
        return;
    }


    var prenom = document.getElementById("prenom").value;
    if (!prenomValidation(prenom)) {
        alert("Pr�nom invalide (au moins 4 caract�res)");
        return;
    }


    var telephone = document.getElementById("telephone").value;
    if (!telephoneValidation(telephone)) {
        alert("Num�ro de t�l�phone invalide (doit contenir uniquement des chiffres)");
        return;
    }


    var email = document.getElementById("email").value;
    if (!emailValidation(email)) {
        alert("Email invalide");
        return;
    }


    if (!passValidation()) {
        document.getElementById("passwordError").innerHTML = "Les mots de passe ne sont pas identiques";
    } else {
        document.getElementById("passwordError").innerHTML = "";
    }
});


document.getElementById("prenom").addEventListener("keyup", function () {
    prenomValidation(this.value);
});


document.getElementById("telephone").addEventListener("keyup", function () {
    telephoneValidation(this.value);
});

document.getElementById("email").addEventListener("keyup", function () {
    emailValidation(this.value);
});
