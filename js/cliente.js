export class Cliente {
	constructor(nombreCliente, impuesto) {
		this._nombreCliente = nombreCliente;
		this._impuesto = impuesto;
	}

	set nombreCliente(nombreCliente) {
		this._nombreCliente = nombreCliente;
	}
	get nombreCliente() {
		return this._nombreCliente;
	}
	calculoImpto() {
		return (this._impuesto.montoBrutoAnual - this._impuesto.deducciones) * 0.21;
		// return this._impuesto.deducciones;
	}
}
