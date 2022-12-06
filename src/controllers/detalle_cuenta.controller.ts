import { Request, Response } from "express";
import { DetalleCuentaModel } from "../models/detalle_cuenta.model";
import { DetalleCuentaServicioModel } from "../models/detalle_cuenta_servicio.model";
import { ServicioModel } from "../models/servicio.model";
let servicios = [];

export async function detalleCuentaReservacionResponse(
  req: Request,
  res: Response
) {
  const idReservacion = req.params.idReservacion;
  let cuenta = await DetalleCuentaModel.findOne({
    include: "reservacion",
    where: { idReservacion: idReservacion },
  });

  if (!cuenta) {
    cuenta = await DetalleCuentaModel.create({
      totalFinal: 0,
      estado: true,
      idReservacion: Number(idReservacion),
    });
  }

  servicios = await ServicioModel.findAll();
  let idDetalleCuenta = cuenta?.getDataValue("idDetalleCuenta");

  let serviciosCuenta = await DetalleCuentaServicioModel.findAll({
    include: { all: true },
    where: { idDetalleCuenta },
  });

  console.log(
    "Todos los detalles cuenta:",
    JSON.stringify({ cuenta, serviciosCuenta, servicios })
  );
  // return res.send({ cuenta, serviciosCuenta, servicios });

  return res.render("detalle_cuenta", { cuenta, serviciosCuenta, servicios });
}

export function quitarServicioResponse(req: Request, res: Response) {
  const id = req.params.idServicion;
  // return res.send(id)
  res.status(200).json(id);
}

// servicios.forEach(element => {
//   let idServicio = element.getDataValue('idServicio');
//   DetalleCuentaServicioModel.create({
//     idDetalleCuenta,
//     idServicio,
//   })
// });
