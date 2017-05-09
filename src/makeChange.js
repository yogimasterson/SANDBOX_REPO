export default function makeChange({price, amountGiven}) {

	let changeAmount = amountGiven - price

	const coinChange = {
		quarters: 0,
		dimes: 0,
		nickels: 0,
		pennies: 0
	}

	while (changeAmount >= 25) {
		coinChange.quarters ++
		changeAmount -= 25
	}

	while (changeAmount >= 10) {
		coinChange.dimes ++
		changeAmount -= 10
	}

	while (changeAmount >= 5) {
		coinChange.nickels ++
		changeAmount -= 5
	}

	while (changeAmount >= 1) {
		coinChange.pennies ++
		changeAmount -= 1
	}

	return coinChange
}
