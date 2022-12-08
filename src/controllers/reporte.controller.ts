import { Request, Response } from "express";
import { isAdmin } from "../libraries/review.library";
import { ReservacionModel } from "../models/reservacion.model";

export async function reporteResponse(req: Request, res: Response) {
  const reservaciones = await ReservacionModel.findAll({
    subQuery: false,
    include: { all: true },
  });

  let cantidadPorMeses = reservaciones.reduce((prev, curr) => {
    let date = curr.getDataValue("createdAt");
    let newDate = formatoFecha(date);

    newDate = newDate.charAt(0).toUpperCase() + newDate.slice(1);
    prev[newDate] = ++prev[newDate] || 1;
    return prev;
  }, {} as Record<string, number>);

  let habitacionMayor = reservaciones.reduce((prev, curr) => {
    let desc = curr.getDataValue("habitacion")?.descripcion || "Genérica";
    prev[desc] = ++prev[desc] || 1;
    return prev;
  }, {} as Record<string, number>);

  // return res.send(habitacionMayor)
  let datosBarra = order(cantidadPorMeses);
  return res.render("reporte", {
    isAdmin: isAdmin(req),
    datosBarra,
    datosLinea: habitacionMayor,
  });
}

export function recordKeys<K extends PropertyKey, T>(object: Record<K, T>) {
  return Object.keys(object) as K[];
}

export function recordEntries<K extends PropertyKey, T>(object: Record<K, T>) {
  return Object.values(object) as [K, T][];
}

const formatoFecha = (fecha: any) => {
  return new Intl.DateTimeFormat("es", {
    month: "long",
  }).format(new Date(fecha));
};

const order = (c: Record<string, number>): Object => {
  let Enero = c.Enero;
  let Febrero = c.Febrero;
  let Marzo = c.Marzo;
  let Abril = c.Abril;
  let Mayo = c.Mayo;
  let Junio = c.Junio;
  let Julio = c.Julio;
  let Agosto = c.Agosto;
  let Septiembre = c.Septiembre;
  let Octubre = c.Octubre;
  let Noviembre = c.Noviembre;
  let Diciembre = c.Diciembre;
  return [
    Enero || 0,
    Febrero || 0,
    Marzo || 0,
    Abril || 0,
    Mayo || 0,
    Junio || 0,
    Julio || 0,
    Agosto || 0,
    Septiembre || 0,
    Octubre || 0,
    Noviembre || 0,
    Diciembre || 0,
  ];
};
