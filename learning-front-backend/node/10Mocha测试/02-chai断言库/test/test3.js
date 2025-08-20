var chai = require('chai');
var expect = chai.expect;

describe('expect Demo', function() {
    it('use expect lib', function () {
        var value = 'hello'
        var number = 3

        // 期望小于5
        expect(number).to.be.at.most(5)
        // 期望大于3
        expect(number).to.be.at.least(3)
        // 期望在1-4之间
        expect(number).to.be.within(1, 4)

        // 期望存在
        expect(value).to.exist
        expect(value).to.be.a('string')
        expect(value).to.equal('hello')
        expect(value).to.not.equal('您好')
        expect(value).to.have.length(5)
    })
});