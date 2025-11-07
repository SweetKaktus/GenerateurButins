// Implémentation de la logique

let butins = [
	{id: "coffret_joyaux", categorie: "Pirate", nom: "Coffret de joyaux", rarete: "legendaire"},
	{id: "medaillon", categorie: "Pirate", nom: "Medaillon maudit", rarete: "rare"},
	{id: "dent_or", categorie: "Pirate", nom: "Dent en or", rarete: "commun"},
	{id: "carte_tresor", categorie: "Pirate", nom: "Carte au trésor", rarete: "epic"},
	{id: "piece_requin", categorie: "Pirate", nom: "Pièce d’or marquée d’un requin", rarete: "commun"},
	{id: "amulette_tete_reduite", categorie: "Gobelin", nom: "Amulette avec une tête réduite", rarete: "rare"},
	{id: "pique_rouillee", categorie: "Gobelin", nom: "Pique Rouillée", rarete: "commun"},
	{id: "dynamite", categorie: "Gobelin", nom: "Baton de dynamite", rarete: "rare"},
	{id: "machine_zarbi", categorie: "Gobelin", nom: "Machine bizarrement fonctionnelle", rarete: "legendaire"},
	{id: "coeur_engrenages", categorie: "Gobelin", nom: "Coeur battant greffé d'engrenages", rarete: "epic"},
	{id: "sac_des_pipes", categorie: "Bandit de grands chemins", nom: "Sac de dés pipés", rarete: "commun"},
	{id: "dague_acier", categorie: "Bandit de grands chemins", nom: "Dague en acier", rarete: "commun"},
	{id: "bague_argent_certie", categorie: "Bandit de grands chemins", nom: "Bague en argent certie", rarete: "rare"},
	{id: "faux_documents", categorie: "Bandit de grands chemins", nom: "Faux documents apposés pour péage", rarete: "rare"},
	{id: "arc", categorie: "Bandit de grands chemins", nom: "Arc", rarete: "rare"},
	{id: "broche_or", categorie: "Vampire", nom: "Broche en or d'un autre temps", rarete: "rare"},
	{id: "bague_envoutement", categorie: "Vampire", nom: "Bague d'envoutement certie d'une eudialyte", rarete: "legendaire"},
	{id: "sabre", categorie: "Vampire", nom: "Sabre à lame courbe", rarete: "rare"},
	{id: "bottes_silence", categorie: "Vampire", nom: "Bottes silencieuses", rarete: "legendaire"},
	{id: "marteau_corruption", categorie: "Vampire", nom: "Marteau de corruption vampirique", rarete: "epic"},
	{id: "comptes", categorie: "Marchand", nom: "Comptes des dettes et crédits", rarete: "rare"},
	{id: "coffret_or", categorie: "Marchand", nom: "Coffret rempli de pièces d'or", rarete: "commun"},
	{id: "parchemin_feu", categorie: "Marchand", nom: "Parchemin de boule de feu", rarete: "rare"},
	{id: "document_guilde", categorie: "Marchand", nom: "Document d'appartenance à la guilde des marchands", rarete: "rare"},
	{id: "document_commerce", categorie: "Marchand", nom: "Docment indiquant le cours des ressources au sein de 2 villes", rarete: "commun"},
	{id: "epee", categorie: "Soldat", nom: "Épée en acier", rarete: "rare"},
	{id: "chemise_maille", categorie: "Soldat", nom: "Chemise de maille", rarete: "rare"},
	{id: "medaille_ecusson", categorie: "Soldat", nom: "Médaille avec l'écuson du seigneur employeur", rarete: "commun"},
	{id: "lettre", categorie: "Soldat", nom: "Lettre destinée à l'épouse et mère des enfants du Soldat", rarete: "legendaire"},
	{id: "sac_des", categorie: "Soldat", nom: "Sac de dés pour jouer", rarete: "rare"},
];
	
let echelleRarete = [
	{label : "epic", chance : 1},
	{label : "legendaire", chance : 9},
	{label : "rare", chance : 33},
	{label : "commun", chance : 60},
];

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRarity(echelleRarete, rarityCheck) {
	let maRarete = echelleRarete.find(r => r<rarityCheck);
	console.log(maRarete)
}

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
	optionCat.innerHTML = mesCategories[i];
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
for (let i = 0 ; i < 3 ; i++) {
	let myTh = document.createElement("th");
	myTh.textContent = i === 0 ? "Icon" : i === 1 ? "Nom" : "Rareté";
	myTh.scope = "col"; // l'attribut est présent dans la doc, je dois me renseigner sur son utilité.
	trEntete.appendChild(myTh);
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
		rarete.innerHTML = monLoot[loot].rarete;
		row.appendChild(icon);
		row.appendChild(nom);
		row.appendChild(rarete);
		tableauLoot.appendChild(row);
	}


})