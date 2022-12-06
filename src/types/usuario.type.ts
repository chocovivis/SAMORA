import ClienteType from "./cliente.type";
import EmpleadoType from "./empleado.type";

export default interface UsuarioType {
    idUsuario?: number;
    correo?: string;
    contrasenia?: string;
    estatus?: string;
    rol?: string;
    token_restauracion?: string;
    cliente?: ClienteType[];
    empleado?: EmpleadoType[];
}