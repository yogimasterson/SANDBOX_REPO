import { expect } from 'chai'
import isPalindrome from '../src/isPalindrome'

describe('isPalindrome()', function(){

  it('should be a function', function(){
    expect(isPalindrome).to.be.a('function')
  })

  it('should return true if the word is spelled the same in reverse', function(){
    expect(isPalindrome('radar')).to.be.true
  })

  it('should return false if the word is not spelled the same in reverse', function(){
    expect(isPalindrome('bananas')).to.be.false
  })

  it('should return true if multiple words that are separated by commas and symbols can spell out the same words if spelled in revers', function(){
    expect(isPalindrome('A man, a plan, a canal: Panama')).to.be.true
  })
})
