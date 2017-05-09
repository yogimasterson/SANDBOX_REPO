import { expect } from 'chai'
import setIntersection from '../src/setIntersection'

describe('setIntersection()', function(){

  it('should be a function', function(){
    expect(setIntersection).to.be.a('function')
  })

  it('should return an array of only numbers that match with another number within the other array', function(){
    const a = [1, 2, 3, 4]
    const b = [2, 4, 6, 8]
    expect(setIntersection(a, b)).to.deep.equal([2, 4])
  })

  it('should return an array of only numbers that match with another number within the other array', function(){
    const a = [1, 2, 3, 4]
    const b = [3, 5, 7, 9]
    expect(setIntersection(a, b)).to.deep.equal([3])
  })
})
