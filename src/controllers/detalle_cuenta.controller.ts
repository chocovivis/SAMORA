import { Request, Response } from "express";
import { DetalleCuentaModel } from "../models/detalle_cuenta.model";
import { ServicioModel } from "../models/servicio.model";

export async function detalleCuentaReservacionResponse(
  req: Request,
  res: Response
) {
  const idReservacion = req.params.idReservacion;
  let servicios = await ServicioModel.findAll();
  let detallesCuenta = await DetalleCuentaModel.findOne({
    include: { all: true },
    where: { idReservacion: idReservacion },
  });
  await detallesCuenta?.update({servicios})
  // detallesCuenta!.setAttributes("servicios", servicios);
  // await detallesCuenta!.save({ fields: ["servicios"] });

  console.log("Todos los detalles cuenta:", JSON.stringify(detallesCuenta));
  return res.send(detallesCuenta);
  // res.status(200).json(detallesCuenta);

  return res.render("detalle_cuenta", { detallesCuenta });
}
