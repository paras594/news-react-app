import moment from "moment";

export function formatDate(dateStr) {
	let date = moment(dateStr);
	let formattedDate = date.format("Do MMMM, YYYY");

	return formattedDate;
}

export function truncate(str, limit) {
	if (typeof str !== "string") return;
	if (str.length > limit) {
		const endIndex = limit - 3;
		let newStr = str.slice(0, endIndex) + " ... ";
		return newStr;
	} else {
		return str + " ";
	}
}
