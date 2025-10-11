import { Tarea } from "./Tarea.js";

const crearTarea = (
  titulo,
  descripcion,
  fechaVencimiento,
  prioridad,
  estado
) => {
  return new Tarea(titulo, descripcion, fechaVencimiento, prioridad, estado);
};

export { crearTarea };
