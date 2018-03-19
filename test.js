var expect = require('chai').expect
  , merge = require('./')

describe('merge', function() {

  it('should deeply merge objects', function() {
    var from = { a: 1, b: 2, c: { e: 4 } }, to = { a: 1, c: { d: 3 }}
    expect(merge(to)(from)).to.equal(to)
    expect(to).to.eql({ a: 1, b: 2, c: { d: 3, e: 4 }})
  })

})