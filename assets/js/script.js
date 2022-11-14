// Liaison des éléments

const inputTexte = document.getElementById('saisie-tache');
const iconAjout = document.querySelector('.icone-ajout');
// querySelection c'est pour aller chercher ton élément de ton fichier css
const listeAFaire = document.querySelector('.liste-afaire');
const listeFait = document.querySelector('.liste-fait');
const iconeTrash = document.querySelector('.icone-trash');


// Déclaration des évènements
iconAjout.addEventListener('click', AjouterTache);
inputTexte.addEventListener('keydown', 
    function(e) {
        if (e.keyCode === 13) {
            AjouterTache();
        }
    }
);

iconeTrash.addEventListener('click', viderPoubelle);

function AjouterTache() {
    let texteTache = inputTexte.value;

    // pour ne pas pouvoir mettre une tache vide en faisant que appuyer sur +
    if (texteTache) {
        // Création du nouvel élément
        let nouvelleTache = document.createElement('li');
        // innerHTML = désigne le contenu qui se trouve entre la balise entrante et la balise fermante.
        nouvelleTache.innerHTML = texteTache;
        // Pour mettre une main quand on passe sur une tache
        nouvelleTache.classList.add("tache");
        // Pour que quand on appuie ça ajoute la fonction terminer tache
        nouvelleTache.addEventListener('click', TerminerTache);
        // append = pour ajouter quelque chose
        listeAFaire.append(nouvelleTache);
        // pour effacer la tache que l'on vient de rentrer
        inputTexte.value = "";
    }
}

function TerminerTache(e) {
    // ajouter un élément qui vient déclencer l'action
    let tache = e.target;
    // classlist = aller chercher la classe dans le css
    listeFait.classList.add('fait');
    // on va enlever un element
    tache.removeEventListener('click', TerminerTache);
    // pour ajouter quelque chose
    listeFait.append(tache);
}

function viderPoubelle() {
    let tache = listeFait.querySelectorAll('li');

    for (let i = 0; i < tache.length; i++) {
        tache[i].remove();
    }

    // autre solution

    // listeFait.innerHTML = "";
}