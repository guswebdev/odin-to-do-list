import { Tarea } from "./Tarea.js";

const crearTarea = (titulo, descripcion, prioridad, fechaVencimiento) => {
  return new Tarea(titulo, descripcion, prioridad, fechaVencimiento);
};

export { crearTarea };
