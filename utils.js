// --- Section Utilitaires ---


// Ma table de raretés avec le rapport à la valeur du lancé de dé
export let echelleRarete = [
	{label : "epic", chance : 1},
	{label : "legendaire", chance : 9},
	{label : "rare", chance : 33},
	{label : "commun", chance : 60},
];

export function getRandomInt(max) {
	return Math.floor(Math.random() * max);
}

export function capitalizeFirstLetterInWord(word) {
	let arr = word.split("");
	arr[0] = word.charAt(0).toUpperCase();
	return arr.reduce((acc, curr) => acc + curr, "");
}