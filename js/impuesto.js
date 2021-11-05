// const tramoImpto = 0.21;
export class Impuesto {
	constructor(montoBrutoAnual, deducciones) {
		this._montoBrutoAnual = montoBrutoAnual;
		this._deducciones = deducciones;
	}
	// Setter
	set montoBrutoAnual(montoBrutoAnual) {
		this._montoBrutoAnual = montoBrutoAnual;
	}
	// Getter
	get montoBrutoAnual() {
		return this._montoBrutoAnual;
	}

	// Setter
	set deducciones(deducciones) {
		this._deducciones = deducciones;
	}
	// Getter
	get deducciones() {
		return this._deducciones;
	}
}
