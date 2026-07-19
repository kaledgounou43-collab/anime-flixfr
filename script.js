function ouvrirMenu() {
    document.getElementById("menu").style.right = "0";
    document.getElementById("overlay").style.display = "block";
}

function fermerMenu() {
    document.getElementById("menu").style.right = "-300px";
    document.getElementById("overlay").style.display = "none";
}

function ouvrirRecherche() {

    let recherche = document.getElementById("recherche");

    if(recherche.style.display === "block"){
        recherche.style.display = "none";
    }else{
        recherche.style.display = "block";
    }

}
