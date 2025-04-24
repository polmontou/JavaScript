// you can write js here
console.log('exo-2');
const myDate = new Date();
const messageSemaine = "Pas encore!";
const messageWeekEnd = "Profite, ça passe vite";
let jourActuel;
let heureActuelle;
let testWE;
let isTesting = false;

if (isTesting) {
    jourActuel = parseInt(prompt("Choix jour : 0 - Dimanche // 6 - Samedi","number"));
    heureActuelle = parseInt(prompt("Choix heure","number"));
    //jourActuel === 6 || jourActuel === 0 ? console.log(messageWeekEnd) : console.log(messageSemaine);
    //(jourActuel === 5 && heureActuelle >= 17) || jourActuel === 6 || jourActuel === 0 ? console.log(messageWeekEnd) : console.log(messageSemaine);
    testWE = ((jourActuel === 1 && heureActuelle < 9) || (jourActuel === 5 && heureActuelle <= 17) || jourActuel === 6 || jourActuel === 0);
    testWE ? console.log(messageWeekEnd) : console.log(messageSemaine);      
} else {
    jourActuel = myDate.getDay();
    heureActuelle = myDate.getHours();
    //jourActuel === 6 || jourActuel === 0 ? console.log(messageWeekEnd) : console.log(messageSemaine);
    //(jourActuel === 5 && heureActuelle >= 17) || jourActuel === 6 || jourActuel === 0 ? console.log(messageWeekEnd) : console.log(messageSemaine);
    (jourActuel === 1 && heureActuelle < 9) || (jourActuel === 5 && heureActuelle <= 17) || jourActuel === 6 || jourActuel === 0 ? console.log(messageWeekEnd) : console.log(messageSemaine);      
}