import ClienteType from "./cliente.type";


export default interface UsuarioType {
    idUsuario?: number;
    correo?: string;
    contrasenia?: string;
    estatus?: string;
    rol?: string;
    token_restauracion?: string;
    cliente?: ClienteType[];
    
}