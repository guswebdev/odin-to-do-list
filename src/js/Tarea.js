import { format } from "date-fns";

class Tarea {
  constructor(titulo, descripcion, prioridad, fechaVencimiento) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaVencimiento = format(
      fechaVencimiento.replaceAll("-", "/"),
      "dd/MM/yyyy"
    );
    this.prioridad = prioridad;
    this.estado = false;
  }
}

export { Tarea };
