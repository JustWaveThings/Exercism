export const findAnagrams = (target, candidates) => {
	let targetLC = target.toLowerCase();
	let candidatesLC = candidates.map((word) => word.toLowerCase());
	let discardList = [];

	candidatesLC.forEach((word, index) => {
		if (word === targetLC) {
			console.log({ word }, { index }, 'exact match');
			discardList.push(candidatesLC[index]);
		}
	});

	candidatesLC.forEach((word, index) => {
		if (word.length !== targetLC.length) {
			//console.log(`${word} not same length`);
			discardList.push(candidatesLC[index]);
		}
	});

	//checking for anagrams now

	let targetLCArray = [...targetLC];
	console.log({ targetLCArray }, 'before the first forEach');
	candidatesLC.forEach((word, index) => {
		let candidateLCListWordArray = [...word];
		targetLCArray = [...targetLC];
		console.log({ candidateLCListWordArray });
		candidateLCListWordArray.forEach((letter) => {
			if (!targetLCArray.includes(letter)) {
				console.log({ letter }, 'not found in target');
				if (!discardList.includes(candidatesLC[index])) {
					discardList.push(candidatesLC[index]);
					console.log({ discardList });
				}
			} else {
				console.log({ targetLCArray }, ' before splice');
				targetLCArray.splice(targetLCArray.indexOf(letter), 1);
				console.log({ letter }, 'found in target');
				console.log({ targetLCArray }, ' after splice');
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

	return answerArray;
};
