import { Request, Response } from "express";

export function detalle_cuentaResponse(req: Request, res: Response) {
  const data = { title: "detalle-cuentas" };
  let services=[
    {
        id:1,
        service:"taxi",
        price:70
    },
    {
        id:2,
        service:"massage",
        price:70
    },
    {
        id:3,
        service:"restaurant",
        price:70
    },
    {
        id:4,
        service:"bar",
        price:70
    },
    {
        id:5,
        service:"taxi",
        price:70
    },
]

  return res.render("detalle_cuenta", {services});
}
