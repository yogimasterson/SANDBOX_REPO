export default function setComplement(set1, set2){

	const universe = new Set(set2.concat(set1))
	const bSet = new Set(set1)

	let complement = new Set(Array.from(universe).filter((member) => ! bSet.has(member)))

	let final = Array.from(complement)

	return final
}
