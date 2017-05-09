import { expect } from 'chai'
import setComplement from '../src/setComplement'

describe('setComplement()', function(){

  it('should be a function', function(){
    expect(setComplement).to.be.a('function')
  })

  it('should return the numbers in the second array that are not paired with anything from the first', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setComplement(a, b)).to.deep.equal([6, 8])
  })

  it('should return the numbers in the second array that are not paired with anything from the first', function(){
    const a = [1, 2, 3, 4]
    const b = [3, 5, 7, 9]
    expect(setComplement(a, b)).to.deep.equal([5, 7, 9])
  })
})
