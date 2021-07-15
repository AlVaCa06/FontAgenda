 
export class Usuario {
    constructor (
        public correo: string = '',
        public password: string = '',
        public nombre: string = '',
        public usuario: string = '', 
        public id: number = 0, 
        public rolId: number = 0, 
        public token: string = '',
     ) { }
}
