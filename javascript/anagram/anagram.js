export const findAnagrams = (target, candidates) => {
	let targetLC = target.toLowerCase();
	let candidatesLC = candidates.map((word) => word.toLowerCase());

	candidatesLC.forEach((word) => {
		if (word === targetLC) {
			console.log(`${word} exact match`);
			candidatesLC.splice(candidatesLC.indexOf(word), 1);
		}
	});

	candidatesLC.forEach((word) => {
		if (word.length !== targetLC.length) {
			//console.log(`${word} not same length`);
			candidatesLC.splice(candidatesLC.indexOf(word), 1);
		}
	});

	//checking for anagrams now

	let targetLCArray = [...targetLC];
	let discardList = [];

	candidatesLC.forEach((word, index) => {
		let candidateLCListWordArray = [...word];
		console.log({ candidateLCListWordArray });
		candidateLCListWordArray.forEach((letter) => {
			if (!targetLCArray.includes(letter)) {
				console.log({ letter }, 'not found in target');
				if (!discardList.includes(candidatesLC[index])) {
					discardList.push(candidatesLC[index]);
					console.log({ discardList });
				}
			} else {
				console.log({ letter }, 'found in target');
			}
		});
	});

	discardList.forEach((value) => {
		candidatesLC.splice(candidatesLC.indexOf(value), 1);
	});

	// addressing double letters -- anagram letters can only be used once

	/* 	var array = ['I', 'hAve', 'theSe', 'ITEMs'],
			indexOf = (arr, q) =>
				arr.findIndex((item) => q.toLowerCase() === item.toLowerCase());
		^		
https://stackoverflow.com/questions/24718349/how-do-i-make-array-indexof-case-insensitive

				*/

	let answerArray = [];

	indexOf = (array, word) =>
		array.findIndex(
			(item) => word.toLowerCase() === item.toLowerCase()
		);

	candidatesLC.forEach((word) => {
		answerArray.push(candidates[indexOf(candidates, word)]);
	});

	console.log({ candidates }, { candidatesLC }, 'this is line 50', {
		answerArray,
	});

	return answerArray;
};
