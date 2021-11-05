import { Cliente } from './cliente.js';
import { Impuesto } from './impuesto.js';

const imp = new Impuesto(110000, 10000);
const cli = new Cliente('Pedro', imp);
console.log(cli);
console.log(cli.calculoImpto());
