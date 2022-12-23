export const transpose = (input) => {
	if (input.length === 0) {
		return [];
	}

	const longestLine = Math.max(
		...input.map((element) => element.length)
	);

	const padding = input.map((element) =>
		element.padEnd(longestLine, ' ')
	);

	const letters = padding.map((string) => string.split(''));

	const transposed = letters[0].map((_, i) =>
		letters.map((row) => row[i])
	);

	let stringJoined = transposed.map((element) => element.join(''));

	let veryEnd = stringJoined.map((element, index) => {
		if (index === stringJoined.length - 1) {
			element = element.trimEnd();
		}
		return element;
	});

	return veryEnd;
};
