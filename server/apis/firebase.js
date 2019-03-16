const express = require('express')

var name = 'NHP';
var FireBase = {
  hello: function() {
    console.log(`Hello ${name}`)
  }
}
module.exports = FireBase;
