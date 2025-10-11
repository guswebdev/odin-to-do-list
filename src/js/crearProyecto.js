import { Proyecto } from "./Proyecto.js";

const crearProyecto = (titulo, descripcion) => {
  return new Proyecto(titulo, descripcion);
};

export { crearProyecto };
