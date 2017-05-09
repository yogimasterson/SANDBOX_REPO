export default function setIntersection(set1, set2){

	let intersection = new Set([...set1].filter(x => set2.includes(x)))

	return Array.from(intersection)
}
