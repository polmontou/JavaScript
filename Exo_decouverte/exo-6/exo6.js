// Cours 8 de Codecademy
console.log("exo-6");

var joeInfo = {
    name: "Joe's house",
    rooms: 5,
    garage: false,
    bathrooms: 1 + 2,
    cars: ['Clio', 'Van'],
};
// ! Ne faites pas de modification au dessus de cette ligne !

// 1. Afficher le nombre de voitures de Joe
joeInfo.cars.length;

// 2. Changer le nombre de salles de bains de Joe : il n'en possède qu'une. Afficher le nouveau nombre de salles de bain.
console.log(joeInfo.bathrooms = 1);
// 3. Joe vient d'acquérir un garage. Afficher cette nouvelle information. 
console.log(joeInfo.garage = true);

let team = {
    players : [
        {
            firstName: 'Pablo',
            lastName:'Sanchez',
            age: 11
        },
        {
            firstName: 'Tony',
            lastName: 'Parker',
            age: 13
        },
        {
            firstName: 'Stephen',
            lastName: 'Curry',
            age: 15
        }
    ],
    games : [
        {
            opponent: "Broncos",
            teamPoints: 42,
            opponentPoints: 27
        },
        {
            opponent: "Nets",
            teamPoints: 92,
            opponentPoints: 87
        },
        {
            opponent: "Spurs",
            teamPoints: 59,
            opponentPoints: 31
        }
    ],
    addPlayer (firstNameAdded, lastNameAdded, ageAdded) {
        team.players[team.players.length] = {
            firstName: firstNameAdded,
            lastName: lastNameAdded,
            age: ageAdded
        }
    },
    addGame (opponentAdded, teamPointsAdded, opponentPointsAdded) {
        team.games[team.games.length] = {
            opponent: opponentAdded,
            teamPoints: teamPointsAdded,
            opponentPoints: opponentPointsAdded
        }
    }
};

team.addPlayer('James','Harden',13);
team.addPlayer('LeBron','James',25);
team.addPlayer('Kevin','Durant',17);
team.addPlayer('Michael','Jordan',56);
team.addPlayer('Victor','Wembanyama',22);
team.addPlayer('James','Lebron',25);
team.addGame('Celtics', 150, 320);
team.addGame('Thunder', 102, 15);
team.addGame('Mavericks', 84, 82);
team.addGame('Pistons', 74, 81);
team.addGame('Lakers', 140, 58);

//points marqués
let totalPointsMarques = 0;
for (let match of team.games) {
    totalPointsMarques += match.teamPoints;
}
console.log(totalPointsMarques);

//moyenne points adversaire
let totalPointsAdversaires = 0;
let compteurMatch = 0;

for (let match of team.games) {
    totalPointsAdversaires += match.opponentPoints; 
    compteurMatch ++;
}
let moyennePointsAdversaire = totalPointsAdversaires / compteurMatch;
console.log(moyennePointsAdversaire);


//joueur le plus âgé
let joueurPlusAge;
let age = 0;
for (let joueur of team.players) {
    if (joueur.age > age) {
        age = joueur.age;
        joueurPlusAge = joueur.firstName + " " + joueur.lastName;
    }
}
console.log(joueurPlusAge);


//trie ordre alphabétique

