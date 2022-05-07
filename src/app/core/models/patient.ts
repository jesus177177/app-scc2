export class Patient {

    constructor(
        public id: string,
        public nombre: string,
        public apellidos: string,
        public direccion: string,
        public peso: number,
        public fecha: Date,
        public edad: string,
        public talla: number,
        public consultorio: string,
        public imc: number,
        public historias: string[]
    ){}
}