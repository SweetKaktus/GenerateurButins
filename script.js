// Implémentation de la logique

let butins = [
	{id: "coffret_joyaux", categorie: "pirate", nom: "Coffret de joyaux", rarete: "legendaire"},
	{id: "medaillon", categorie: "pirate", nom: "Medaillon maudit", rarete: "rare"},
	{id: "dent_or", categorie: "pirate", nom: "Dent en or", rarete: "commun"},
	{id: "carte_tresor", categorie: "pirate", nom: "Carte au trésor", rarete: "epic"},
	{id: "piece_requin", categorie: "pirate", nom: "Pièce d’or marquée d’un requin", rarete: "commun"},
	{id: "amulette_tete_reduite", categorie: "gobelin", nom: "Amulette avec une tête réduite", rarete: "rare"},
	{id: "pique_rouillee", categorie: "gobelin", nom: "Pique Rouillée", rarete: "commun"},
	{id: "dynamite", categorie: "gobelin", nom: "Baton de dynamite", rarete: "rare"},
	{id: "machine_zarbi", categorie: "gobelin", nom: "Machine bizarrement fonctionnelle", rarete: "legendaire"},
	{id: "coeur_engrenages", categorie: "gobelin", nom: "Coeur battant greffé d'engrenages", rarete: "epic"},
	{id: "sac_des_pipes", categorie: "bandit de grands chemins", nom: "Sac de dés pipés", rarete: "commun"},
	{id: "dague_acier", categorie: "bandit de grands chemins", nom: "Dague en acier", rarete: "commun"},
	{id: "bague_argent_certie", categorie: "bandit de grands chemins", nom: "Bague en argent certie", rarete: "rare"},
	{id: "faux_documents", categorie: "bandit de grands chemins", nom: "Faux documents apposés pour péage", rarete: "rare"},
	{id: "arc", categorie: "bandit de grands chemins", nom: "Arc", rarete: "rare"},
	{id: "broche_or", categorie: "vampire", nom: "Broche en or d'un autre temps", rarete: "rare"},
	{id: "bague_envoutement", categorie: "vampire", nom: "Bague d'envoutement certie d'une eudialyte", rarete: "legendaire"},
	{id: "sabre", categorie: "vampire", nom: "Sabre à lame courbe", rarete: "rare"},
	{id: "bottes_silence", categorie: "vampire", nom: "Bottes silencieuses", rarete: "legendaire"},
	{id: "marteau_corruption", categorie: "vampire", nom: "Marteau de corruption vampirique", rarete: "epic"},
	{id: "comptes", categorie: "marchand", nom: "Comptes des dettes et crédits", rarete: "rare"},
	{id: "coffret_or", categorie: "marchand", nom: "Coffret rempli de pièces d'or", rarete: "commun"},
	{id: "parchemin_feu", categorie: "marchand", nom: "Parchemin de boule de feu", rarete: "rare"},
	{id: "document_guilde", categorie: "marchand", nom: "Document d'appartenance à la guilde des marchands", rarete: "rare"},
	{id: "document_commerce", categorie: "marchand", nom: "Docment indiquant le cours des ressources au sein de 2 villes", rarete: "commun"},
	{id: "epee", categorie: "soldat", nom: "Épée en acier", rarete: "rare"},
	{id: "chemise_maille", categorie: "soldat", nom: "Chemise de maille", rarete: "rare"},
	{id: "medaille_ecusson", categorie: "soldat", nom: "Médaille avec l'écuson du seigneur employeur", rarete: "commun"},
	{id: "lettre", categorie: "soldat", nom: "Lettre destinée à l'épouse et mère des enfants du soldat", rarete: "legendaire"},
	{id: "sac_des", categorie: "soldat", nom: "Sac de dés pour jouer", rarete: "rare"},
	
];
	
let echelleRarete = [
	{label : "epic", chance : 1},
	{label : "legendaire", chance : 9},
	{label : "rare", chance : 33},
	{label : "commun", chance : 60},
];

let categorieChoisie = "gobelin";

let nombreAdversaires = 4;

let mon_loot = butins.filter((loot) => loot.categorie === categorieChoisie).map(loot => loot.nom);

function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

function getRarity(echelleRarete, rarityCheck) {
	let ma_rarete = echelleRarete.find(r => r<rarityCheck);
	console.log(ma_rarete)
}

// Je veux garder la meilleure rareté possible only
function looter(categorieChoisie, nombreAdversaires) {
	let final_loot = [];
	// Permet de gérer le nombre d'adversaire à loot
	for (let i = 0 ; i < nombreAdversaires ; i++) {
		// Permet de gérer le nombre de loot par adversaire
		for (let j = 0 ; j < 2 ; j++) {
			// Permet de distinguer si l'on tire pour le premier ou le second loot par perso
			if (j === 0) {console.log("Premier loot :");}
			else {console.log("Second loot : ");}
			
			let roll_dice = getRandomInt(100); // Ce dé est tiré pour la rareté du loot
			let ma_rarete = roll_dice <= 60 ? echelleRarete.find(r => roll_dice <= r.chance).label : "pas de loot !"; // La rareté finale
			console.log("Resultat Dé", roll_dice); // Contrôle résultat dé pour vérifier la cohérence avec la suite de l'algo
			console.log("Meilleure rareté", ma_rarete); // Contrôle de la concordance du nv de rareté avec le dice result
			let butins_possibles = butins.filter(loot => loot.categorie === categorieChoisie)
			.filter(loot => loot.rarete === ma_rarete).map(loot => loot.nom); // Permet de stocker les butins possibles 
			// selon la catégorie et le nv de rareté
			console.log(butins_possibles); // Contrôle des butins possibles
			let choose_loot = butins_possibles[getRandomInt(butins_possibles.length)]; // Permet de choisir un butin parmis 
			// les butins possibles
			console.log("Le loot sur lequel je tombe: ", choose_loot); // Contrôle du loot tiré
			// Structure de contrôle me permettant d'ajouter le loot seulement si le dé de rareté est en dessous de 60
			if (choose_loot !== undefined) {
				final_loot.push(choose_loot); // Ajoute l'item au loot total du joueur ou du groupe
			}
		}
	}
	return final_loot // Retourne le loot total afin qu'il soit utilisé ensuite.
}

let mon_butin = looter(categorieChoisie, nombreAdversaires);

console.log("Mon butin final : ", mon_butin);