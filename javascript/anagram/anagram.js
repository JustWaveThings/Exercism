export const findAnagrams = (target, candidates) => {
	let targetLC = target.toLowerCase();
	let candidatesLC = candidates.map((word) => word.toLowerCase());
	let excludeList = [];
	let returnList = [];

	candidatesLC.forEach((word) => {
		if (word === targetLC) {
			console.log(`${word} exact match`);
			excludeList.push(word);
		}
	});

	candidatesLC.forEach((word) => {
		if (word.length !== targetLC.length) {
			console.log(`${word} not same length`);
			excludeList.push(word);
		}
	});

	candidatesLC.forEach((word, index) => {
		if (word !== excludeList[index]) {
			returnList.push(word);
		}
	});

	returnList.forEach((word, index) => {
		let returnListWordArray = [...word];
		let targetLCArray = [...targetLC];
		let discardIndex = [];
		let currentWordIndex = 0;

		// I have a word that has passed a test on length and not direct equality('spam' === 'spam'). I now need to compare one word at a time, each of it's letters to the letters in the target word. If any of the letters do not match, I need to throw the whole word out.

		//I have two arrays, each with the word to compare. I will increment a counter in the outside scope to add the indices to remove from the word array if there's a letter that doesn't match.
	});

	//	console.log({ excludeList });
	//	console.log({ candidatesLC });

	return returnList;
};
