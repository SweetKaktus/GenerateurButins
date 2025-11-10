import { echelleRarete, getRandomInt, capitalizeFirstLetterInWord } from './utils.js';


// Ma table de loots
let butins = [
	{id: "coffret_joyaux", categorie: "pirate", icon: "", nom: "Coffret de joyaux", rarete: "epic"},
	{id: "medaillon", categorie: "pirate", icon: "", nom: "Medaillon maudit", rarete: "rare"},
	{id: "dent_or", categorie: "pirate", icon: "", nom: "Dent en or", rarete: "commun"},
	{id: "carte_tresor", categorie: "pirate", icon: "", nom: "Carte au trésor", rarete: "legendaire"},
	{id: "piece_requin", categorie: "pirate", icon: "", nom: "Pièce d’or marquée d’un requin", rarete: "commun"},
	{id: "amulette_tete_reduite", categorie: "gobelin", icon: "", nom: "Amulette avec une tête réduite", rarete: "rare"},
	{id: "pique_rouillee", categorie: "gobelin", icon: "", nom: "Pique Rouillée", rarete: "commun"},
	{id: "dynamite", categorie: "gobelin", icon: "", nom: "Baton de dynamite", rarete: "rare"},
	{id: "machine_zarbi", categorie: "gobelin", icon: "", nom: "Machine bizarrement fonctionnelle", rarete: "epic"},
	{id: "coeur_engrenages", categorie: "gobelin", icon: "", nom: "Coeur battant greffé d'engrenages", rarete: "legendaire"},
	{id: "sac_des_pipes", categorie: "bandit de grands chemins", icon: "", nom: "Sac de dés pipés", rarete: "commun"},
	{id: "dague_acier", categorie: "bandit de grands chemins", icon: "", nom: "Dague en acier", rarete: "commun"},
	{id: "bague_argent_certie", categorie: "bandit de grands chemins", icon: "", nom: "Bague en argent certie", rarete: "rare"},
	{id: "faux_documents", categorie: "bandit de grands chemins", icon: "", nom: "Faux documents apposés pour péage", rarete: "rare"},
	{id: "arc", categorie: "bandit de grands chemins", icon: "", nom: "Arc", rarete: "rare"},
	{id: "broche_or", categorie: "vampire", icon: "", nom: "Broche en or d'un autre temps", rarete: "rare"},
	{id: "bague_envoutement", categorie: "vampire", icon: "", nom: "Bague d'envoutement certie d'une eudialyte", rarete: "epic"},
	{id: "sabre", categorie: "vampire", icon: "", nom: "Sabre à lame courbe", rarete: "rare"},
	{id: "bottes_silence", categorie: "vampire", icon: "", nom: "Bottes silencieuses", rarete: "epic"},
	{id: "marteau_corruption", categorie: "vampire", icon: "", nom: "Marteau de corruption vampirique", rarete: "legendaire"},
	{id: "comptes", categorie: "marchand", icon: "", nom: "Comptes des dettes et crédits", rarete: "rare"},
	{id: "coffret_or", categorie: "marchand", icon: "", nom: "Coffret rempli de pièces d'or", rarete: "commun"},
	{id: "parchemin_feu", categorie: "marchand", icon: "", nom: "Parchemin de boule de feu", rarete: "rare"},
	{id: "document_guilde", categorie: "marchand", icon: "", nom: "Document d'appartenance à la guilde des marchands", rarete: "rare"},
	{id: "document_commerce", categorie: "marchand", icon: "", nom: "Docment indiquant le cours des ressources au sein de 2 villes", rarete: "commun"},
	{id: "epee", categorie: "soldat", icon: "", nom: "Épée en acier", rarete: "rare"},
	{id: "chemise_maille", categorie: "soldat", icon: "", nom: "Chemise de maille", rarete: "rare"},
	{id: "medaille_ecusson", categorie: "soldat", icon: "", nom: "Médaille avec l'écuson du seigneur employeur", rarete: "commun"},
	{id: "lettre", categorie: "soldat", icon: "", nom: "Lettre destinée à l'épouse et mère des enfants du soldat", rarete: "epic"},
	{id: "sac_des", categorie: "soldat", icon: "", nom: "Sac de dés pour jouer", rarete: "rare"},
];

// Ma table de raretés avec le rapport à la valeur du lancé de dé
/*let echelleRarete = [
	{label : "legendaire", chance : 1},
	{label : "epic", chance : 9},
	{label : "rare", chance : 33},
	{label : "commun", chance : 60},
];

// --- Section Utilitaires ---

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function capitalizeFirstLetterInWord(word) {
	let arr = word.split("");
	arr[0] = word.charAt(0).toUpperCase();
	return arr.reduce((acc, curr) => acc + curr, "");
}*/



// Je veux garder la meilleure rareté possible only
function looter(categorieChoisie, nombreAdversaires) {
	let finalLoot = [];
	// Permet de gérer le nombre d'adversaire à loot
	for (let i = 0 ; i < nombreAdversaires ; i++) {
		// Permet de gérer le nombre de loot par adversaire
		for (let j = 0 ; j < 2 ; j++) {
			// Permet de distinguer si l'on tire pour le premier ou le second loot par perso
			// if (j === 0) {console.log("Premier loot :");}
			// else {console.log("Second loot : ");}
			
			let rollDice = getRandomInt(100)+1; // Ce dé est tiré pour la rareté du loot
			let maRarete = rollDice <= 60 ? echelleRarete.find(r => rollDice <= r.chance).label : "pas de loot !"; // La rareté finale
			// console.log("Resultat Dé", rollDice); // Contrôle résultat dé pour vérifier la cohérence avec la suite de l'algo
			// console.log("Meilleure rareté", maRarete); // Contrôle de la concordance du nv de rareté avec le dice result
			let butinsPossibles = butins.filter(loot => loot.categorie === categorieChoisie)
			.filter(loot => loot.rarete === maRarete);//.map(loot => loot.nom); // Permet de stocker les butins possibles 
			// selon la catégorie et le nv de rareté
			//console.log(butinsPossibles); // Contrôle des butins possibles
			let chooseLoot = butinsPossibles[getRandomInt(butinsPossibles.length)]; // Permet de choisir un butin parmis 
			// les butins possibles
			//console.log("Le loot sur lequel je tombe: ", chooseLoot); // Contrôle du loot tiré
			// Structure de contrôle me permettant d'ajouter le loot seulement si le dé de rareté est en dessous de 60
			if (chooseLoot !== undefined) {
				finalLoot.push(chooseLoot); // Ajoute l'item au loot total du joueur ou du groupe
			}
		}
	}
	return finalLoot // Retourne le loot total afin qu'il soit utilisé ensuite.
}




// --- Interaction avec le DOM ---

let chooseCat = document.getElementById("chooseCat");
let enemyNumber = document.getElementById("enemyNumber");
let generateLoot = document.getElementById("generateLoot");


let mesCategories = [...new Set(butins.map(loot => loot.categorie))];
// Inscrire les catégories dans l'UI
for (let i in mesCategories) {
	let optionCat = document.createElement("option");
	optionCat.value = mesCategories[i];
	optionCat.innerHTML = capitalizeFirstLetterInWord(mesCategories[i]);
	chooseCat.appendChild(optionCat);
}

// --- Gestion du tableau ---

// se baser sur la doc officielle de la balise <table>
let sectionAffichageLoot = document.querySelector(".affichageLoot"); // ma section dédiée au tablea

let tableauLoot = document.createElement("table"); // mon tableau

let thead = document.createElement("thead"); // Entête du tableau
let trEntete = document.createElement("tr"); // ligne de l'entête du tableau
thead.appendChild(trEntete); // Ajoute la ligne de l'entête à l'entête du tableau

// Boucle me permettant d'ajouter le nom de chaque colonne en quelques lignes de code seulement
for (let i = 0 ; i < Object.keys(butins[0]).length ; i++) {
	let myTh = document.createElement("th");
	let nomCol = Object.keys(butins[0])[i];
	if (nomCol !== "categorie" && nomCol !== "id") {
		myTh.textContent = capitalizeFirstLetterInWord(nomCol);
		myTh.scope = "col"; // l'attribut est présent dans la doc, je dois me renseigner sur son utilité.
		trEntete.appendChild(myTh);
	}
	
	
}



tableauLoot.appendChild(thead);

sectionAffichageLoot.appendChild(tableauLoot);



generateLoot.addEventListener("click", () => {
	while (tableauLoot.lastChild !== thead) {
		tableauLoot.removeChild(tableauLoot.lastChild);
	}
	let categorieChoisie, nombreAdversaires, monLoot;
	categorieChoisie = chooseCat.options[chooseCat.selectedIndex].value;
	nombreAdversaires = parseInt(enemyNumber.value);
	monLoot = looter(categorieChoisie, nombreAdversaires);

	for (let loot in monLoot) {
		let row = document.createElement("tr"); 
		let icon = document.createElement("td");
		let nom = document.createElement("td");
		let rarete = document.createElement("td");
		nom.innerHTML = monLoot[loot].nom;
		// rarete.innerHTML = capitalizeFirstLetterInWord(monLoot[loot].rarete);

		// Amélioration sur la rareté suggérée par claude pour coller avec le CSS
		let rareteText = capitalizeFirstLetterInWord(monLoot[loot].rarete);
		rarete.innerHTML = rareteText;
		rarete.classList.add(monLoot[loot].rarete);
		
		row.appendChild(icon);
		row.appendChild(nom);
		row.appendChild(rarete);
		tableauLoot.appendChild(row);
	}
})