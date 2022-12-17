export const findAnagrams = (target, candidates) => {
	let targetLC = target.toLowerCase();
	let candidatesLC = candidates.map((word) => word.toLowerCase());
	let excludeList = [];
	let returnList = [];

	candidatesLC.forEach((word) => {
		if (word === targetLC) {
			//console.log(`${word} exact match`);
			excludeList.push(word);
		}
	});

	candidatesLC.forEach((word) => {
		if (word.length !== targetLC.length) {
			//console.log(`${word} not same length`);
			excludeList.push(word);
		}
	});

	candidatesLC.forEach((word, index) => {
		if (word !== excludeList[index]) {
			returnList.push(word);
		}
	});

	let targetLCArray = [...targetLC];
	let discardList = [];

	returnList.forEach((word, index) => {
		let returnListWordArray = [...word];
		console.log({ returnListWordArray });
		returnListWordArray.forEach((letter) => {
			if (!targetLCArray.includes(letter)) {
				console.log({ letter }, 'not found in target');
				if (!discardList.includes(returnList[index])) {
					discardList.push(returnList[index]);
					console.log({ discardList });
				}
			} else {
				console.log({ letter }, 'found in target');
			}
		});
	});

	discardList.forEach((value) => {
		returnList.splice(returnList.indexOf(value), 1);
		console.log({ returnList });
	});

	//	console.log({ excludeList });
	//	console.log({ candidatesLC });

	return returnList;
};
