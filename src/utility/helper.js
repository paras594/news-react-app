export function truncate(str, limit) {
	if (!str) return "";
	if (str.length > limit) {
		const endIndex = limit - 3;
		let newStr = str.slice(0, endIndex) + " ... ";
		return newStr;
	} else {
		return str + " ";
	}
}
