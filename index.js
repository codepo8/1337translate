const leettranslate = () => {};
leettranslate.fullmap = {
	'e': '3',
	'l': '1',
	'o': '0',
	't': '7',
	'a': '4',
	's': '5',
	'b': '8',
	'g': '9',
	'i': '!',
	'z': '2'
};
leettranslate.lightmap = {
	'e': '3',
	'l': '1',
	'o': '0',
	't': '7',
	'a': '4',
	's': '5',
};
leettranslate.toleet = (text, light) =>{
	let map = light ? leettranslate.lightmap : leettranslate.fullmap;
	return text.split('').map(char => {
		if (map[char.toLowerCase()]) {
			return map[char.toLowerCase()];
		}
		return char;
	}).join('');
}   
leettranslate.totext = (text, light = false) => {
	let map = light ? leettranslate.lightmap : leettranslate.fullmap;
	return text.split('').map(char => {
		for (let key in map) {
			if (map[key] === char) {
				return key;
			}
		}
		return char;
	}).join('');
}   
export { leettranslate };