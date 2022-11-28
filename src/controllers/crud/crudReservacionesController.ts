import { ReservacionModel } from "../../models/reservacion.model";
import ReservacionType from "../../types/reservacion.type";

export const obtenerReservaciones = async (filter: string): Promise<ReservacionModel[]> => {
  let where = filter==="TODOS" ? ["PENDIENTE","CANCELADO","FINALIZADO"] :  filter;
  return await ReservacionModel.findAll({ 
    include: { all: true },
    where: {estado: where}
  });
};


export const actualizarReservacion = async (
  payload: Partial<ReservacionType>
): Promise<ReservacionModel> => {
  const reservacion = await ReservacionModel.findByPk(payload.idReservacion);
  if (!reservacion) {
    throw new Error("not found");
  }
  const updatedReservacion = await (reservacion as ReservacionModel).update(
    payload
  );
  return updatedReservacion;
};

export const obtenerReservacionPorId = async (
  idReservacion: number
): Promise<ReservacionModel> => {
  const reservacion = await ReservacionModel.findByPk(idReservacion);
  if (!reservacion) {
    throw new Error("not found");
  }
  return reservacion;
};

export const eliminarReservacion = async (
  idReservacion: number
): Promise<boolean> => {
  const reservacionEliminada = await ReservacionModel.destroy({
    where: { idReservacion },
  });
  return !!reservacionEliminada;
};
