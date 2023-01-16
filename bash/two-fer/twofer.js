const twofer = (t) =>
	t !== undefined
		? `One for ${t}, one for me.`
		: `One for you, one for me.`;

console.log(twofer('jerry'));
