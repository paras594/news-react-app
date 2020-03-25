import moment from "moment";
import { useLocation } from "react-router-dom";

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

export function isHome() {
	const location = useLocation();
	const fullpath = location.pathname + location.hash;
	const urlRegex = new RegExp("^/#w*", "i");

	if (urlRegex.test(fullpath)) return true;
	if (location.pathname === "/") return true;
	return false;
}

export function capitalize(str) {
	return str.charAt(0).toUpperCase() + str.slice(1);
}

export function random() {
	return Math.round(Math.random());
}

export function trim(str) {
	return str.replace(/^\s\s*/, "").replace(/\s\s*$/, "");
}
