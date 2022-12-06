import ServicioType from "./servicio.type";

export default interface DetalleCuentaServicioType {
  id?: number;
  idDetalleCuenta?: number;
  idServicio?: number;
  precio?: number;
  servicio?: ServicioType[];
}
