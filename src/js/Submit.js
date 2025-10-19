import { crearProyecto } from "./crearProyecto.js";
import { crearTarea } from "./crearTarea.js";
import { proyectos } from "./Data.js";
import { display } from "./Display.js";

class Submit {
  crearProyecto() {
    const formData = new FormData(display.$formProyecto);
    const data = Object.fromEntries(formData);

    const nuevoProyecto = crearProyecto(
      data.tituloProyecto,
      data.descripcionProyecto
    );

    proyectos.idProyectoVista = nuevoProyecto.id;

    proyectos.agregarProyectos(nuevoProyecto);

    display.cerrarModalProyecto();
    display.reiniciarFormProyecto();

    display.limpiarProyectos();
    display.renderProyectos();

    display.limpiarHeader();
    display.renderHeader();
    console.log(proyectos.datos);
  }

  editarProyecto(id) {

    const formData = new FormData(display.$formProyecto);
    const data = Object.fromEntries(formData);

    proyectos.editarProyectos(data, id);

    proyectos.idProyectoVista = id;

    display.cerrarModalProyecto();
    display.reiniciarFormProyecto();

    display.limpiarProyectos();
    display.renderProyectos();

    display.limpiarHeader();
    display.renderHeader();
    console.log(proyectos.datos);
  }
}

const submit = new Submit();

export { submit };
