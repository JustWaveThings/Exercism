export const toRna = (input) => {
	let inputArray1 = [...input];
	let outputArray = [];
	inputArray1.forEach((letter) => {
		switch (letter) {
			case 'G':
				return outputArray.push('C');
			case 'C':
				return outputArray.push('G');
			case 'T':
				return outputArray.push('A');
			case 'A':
				return outputArray.push('U');
			default:
		}
	});
	return outputArray.join('');
};
