import { expect } from 'chai'
import setSymmetricDifference from '../src/setSymmetricDifference'

describe('setSymmetricDifference()', function(){

	it('should be a function', function(){
		expect(setSymmetricDifference).to.be.a('function')
	})

	it('should return an array of numbers of numbers that do not match', function(){
		const a = [1, 2, 3, 4]
		const b = [2, 4, 6, 8]
		expect(setSymmetricDifference(a, b)).to.deep.equal([1, 3, 6, 8])
	})

	it('should return an array of numbers of numbers that do not match', function(){
		const a = [1, 2, 3, 4]
		const b = [3, 5, 7, 9]
		expect(setSymmetricDifference(a, b)).to.deep.equal([1, 2, 4, 5, 7, 9])
	})
})
