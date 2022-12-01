import { ServicioModel } from "../../models/servicio.model";
import ServicioType from "../../types/servicio.type";

export const obtenerServicios = async (filter: string): Promise<ServicioModel[]> => {
  return await ServicioModel.findAll();
};

