/* globals before it describe */

'use strict'

var assert = require('assert')
var dragonpay = require('../')
var configure = require('configure.json')

describe('test switch api', function () {
  // load configure

  before(function () {
    dragonpay.configure(configure)
  })

  it('make digest', function (done) {
    var digest = ''
    var message = dragonpay.makeMessage(
      'merchant_txt_id',
      Number(1234567.89),
      'USD',
      'ordered items',
      'abc@def.com'
    )
    assert.strictEqual(digest, dragonpay.generateDigest(message))
    done()
  })
})
