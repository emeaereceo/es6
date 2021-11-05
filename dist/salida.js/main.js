"use strict";

var _cliente = require("./cliente.js");

var _impuesto = require("./impuesto.js");

var imp = new _impuesto.Impuesto(110000, 10000);
var cli = new _cliente.Cliente('Pedro', imp);
console.log(cli);
console.log(cli.calculoImpto());