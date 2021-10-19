//On charge les informations utiles
const statut = document.querySelector("h2");
let jeuActif = true;
let joueurActif = "X";
let etatJeu = ["", "", "", "", "", "", "", "", ""];

const conditionsVictoire = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

//Messages
const gagne = () =>`Lejoueur ${joueurActif} a gagné`;
const egalité = () => "Egalité";
const tourJoueur = () => `c'est au tour du joueur ${joueurActif}`;

statut.innerHTML = tourJoueur();

//Action
document.querySelectorAll(".case").forEach(cell => cell.addEventListener('click', gestionClicCase));

document.querySelector('#recommencer').addEventListener('click', recommencer);

function gestionClicCase() {
    console.log(this)
}
function recommencer(){
    console.log("recommencer")
}