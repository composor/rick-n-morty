export const search = (nameKey, myArray) => {
	const patt = new RegExp(nameKey);
	let result = [];
	
	if (!nameKey.replace(/\s/g, '').length) return myArray;
	for (var i=0; i < myArray.length; i++) {
		if (patt.test(myArray[i].keywords.toLowerCase())) {
    	result.push(myArray[i]);
    }
  }
	if (result.length > 0) {
		if (result.length > 0) return result;
		return [result];
	}
	return result;
}