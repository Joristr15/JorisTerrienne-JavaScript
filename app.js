// app.js
var scoreJoueur = 0;
var scoreOrdinateur = 0;
var nbPartie = 1;
const coups = ['rock', 'paper', 'scissors'];
const coupsOrdi = {
    pierre: 'Rock',
    feuille: 'Paper',
    ciseaux: 'Scissors'
  };

// Écoutez les events sur les boutons
document.getElementById('rock').addEventListener('click', play);
document.getElementById('paper').addEventListener('click', play);
document.getElementById('scissors').addEventListener('click', play);

function play(event) {
    const choixJoueur = event.target.id;

    const choixOrdinateur = coups[Math.floor(Math.random() * coups.length)];

    document.getElementById('choix-ordinateur').innerHTML = `Choix de l'ordinateur : ${choixOrdinateur}.`;
    
    if (choixJoueur === choixOrdinateur) {
        document.getElementById('NbPartie').innerHTML = `Manche ${nbPartie} : EGALITE`;
    }else if (
        (choixJoueur === 'rock' && choixOrdinateur === 'scissors' ) || 
        (choixJoueur === 'paper' && choixOrdinateur === 'rock')  ||
        (choixJoueur === 'scissors' && choixOrdinateur === 'paper')
    ){
        document.getElementById('NbPartie').innerHTML = `Manche ${nbPartie} : GAGNE`;
        scoreJoueur++;
        document.getElementById('j-score').innerHTML = `${scoreJoueur}`;
        nbPartie++
    }else {
        scoreOrdinateur++;
        document.getElementById('NbPartie').innerHTML = `Manche ${nbPartie} : PERDU`;
        document.getElementById('o-score').innerHTML = `${scoreOrdinateur}`;
        nbPartie++
    }

    if (scoreJoueur == 3 || scoreOrdinateur == 3){
        if(scoreJoueur > scoreOrdinateur) {
            document.getElementById('NbPartie').innerHTML = "PARTIE TERMINE : VOUS AVEZ GAGNE";
            var scoreJoueur = 0;
            var scoreOrdinateur = 0;
            var nbPartie = 1;
        }else {
            document.getElementById('NbPartie').innerHTML = "PARTIE TERMINE : VOUS AVEZ PERDU";
        }
    }
}
