// --- Section Utilitaires ---


// Ma table de raretés avec le rapport à la valeur du lancé de dé
export let echelleRarete = [
	{label : "legendaire", chance : 1},
	{label : "epic", chance : 9},
	{label : "rare", chance : 33},
	{label : "commun", chance : 60},
];

export function getRandomInt(max) {
    let arr = new Uint32Array(1);
	window.crypto.getRandomValues(arr);
	let randomValue = arr[0] % max; 
    return randomValue;	
}

export function capitalizeFirstLetterInWord(word) {
	let arr = word.split("");
	arr[0] = word.charAt(0).toUpperCase();
	return arr.reduce((acc, curr) => acc + curr, "");
}
