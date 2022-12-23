export const isPaired = (input) => {
	let bracketOnlyRegex = /[^(\[)|(\])|(\{)|(\})|(\()|(\))]/g;
	let bracketsOnly = input.replace(bracketOnlyRegex, '');
	let bracketsArray = [...bracketsOnly];
	let openBracketArray = ['(', '[', '{'];
	let closeBracketArray = [')', ']', '}'];
	let comparisonArray = [];

	bracketsArray.forEach((bracket) => {
		if (openBracketArray.includes(bracket)) {
			comparisonArray.push(bracket);
		}
		if (closeBracketArray.includes(bracket)) {
			// close bracket
			let lastElementPushed = comparisonArray.pop(); // normal - gives us an opening bracket of same type
			//now we need to compare line 13's closing bracket to line 14's potentially opening bracket  -- do this by index of the two arrays if the indexes match, then they are a pair. if not, return false
			//
			if (
				openBracketArray.indexOf(lastElementPushed) ===
				closeBracketArray.indexOf(bracket)
			) {
			} else {
				comparisonArray.push(bracket);
			}
		}
	});
	if (comparisonArray.length === 0) {
		return true;
	} else {
		return false;
	}
};
