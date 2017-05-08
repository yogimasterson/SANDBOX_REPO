import { expect } from 'chai'
import setUnion from '../src/setUnion'

describe('setUnion()', function(){

  it('should be a function', function(){
    expect(setUnion).to.be.a('function')
  })

  it('should return the setUnion of a number to the nth position', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 6, 8])
  })

  it('should return the setUnion of a number to the nth position', function(){
    const a = [1, 2, 3, 4]
    const b = [3, 5, 7, 9]
    expect(setUnion(a, b)).to.deep.equal([1, 2, 3, 4, 5, 7, 9])
  })
})
