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
const egalite = () => "Egalité";
const tourJoueur = () => `c'est au tour du joueur ${joueurActif}`;

statut.innerHTML = tourJoueur();

//Action
document.querySelectorAll(".case").forEach(cell => cell.addEventListener('click', gestionClicCase));

document.querySelector('#recommencer').addEventListener('click', recommencer);


function gestionClicCase() {
    //On récupère l'index de la case cliquée
    const indexCase = parseInt(this.dataset.index);
    
    if(etatJeu[indexCase] !== "" || !jeuActif){
        return
    }
    //On enregistre et on affiche le clic du joueur
    etatJeu[indexCase] = this.innerHTML = joueurActif;
    
    verifGagne();

}

function verifGagne(){
    let tourGagnant = false;

    for (let conditionsVictoir of conditionsVictoire){
        let val1 = etatJeu[conditionsVictoir[0]];
        let val2 = etatJeu[conditionsVictoir[1]];
        let val3 = etatJeu[conditionsVictoir[2]];
        
        if(val1 === ""|| val2 === ""|| val3 === ""){
            continue;
        }
        if(val1===val2 && val2 === val3){
            tourGagnant = true;
            break;
        }
    };
    //Cas gagnant
    if(tourGagnant){
        statut.innerHTML = gagne();
        jeuActif = false;
        return
    }
    //Cas d'égalité
    if(!etatJeu.includes("")){
        statut.innerHTML = egalite()
        jeuActif = false;
        return
    }

    //changement de joueur
    joueurActif = joueurActif=="X"? "O":"X"
    statut.innerHTML = tourJoueur()
    
}

function recommencer(){
    jeuActif = true;
    joueurActif = joueurActif=="X"? "O":"X";
    statut.innerHTML = tourJoueur();
    etatJeu = ["", "", "", "", "", "", "", "", ""];
    document.querySelectorAll(".case").forEach(cell => cell.innerHTML = "");

}
