define(function(require){
    var m1 = require('./module/m1');
    m1.foo();
    var m4 = require('./module/m4');
    m4.m4();
})