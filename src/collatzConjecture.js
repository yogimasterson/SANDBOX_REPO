export default function collatzConjecture(num){

	const collNums = [num]

	if (num === 1){
		return collNums
	} else {
		while (num !== 1) {
			if (num % 2 === 0) {
				num = num / 2
				collNums.push(num)
			} else {
				num = 3 * num + 1
				collNums.push(num)
			}
		}
	}
	return collNums
}
