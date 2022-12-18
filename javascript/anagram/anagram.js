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

	let answerArray = [];

	// comparison of end product to original array.

	let compareCandidates = candidates.map((v) => v.toLowerCase());
	console.log({ compareCandidates });

	candidatesLC.forEach((anagram) => {
		answerArray.push(candidates[compareCandidates.indexOf(anagram)]);
	});

	return answerArray;
};
