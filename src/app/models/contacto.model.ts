export class Contacto {
    constructor(
        public id: number = 0,
        public nombre: string = '',
        public telefono: string = '',
        public contacto: string = '', 
        public fechacumple: Date = new Date(),
        public anios: number = 0, 
    ) { }
}
