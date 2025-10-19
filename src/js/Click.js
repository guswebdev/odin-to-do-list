import { display } from "./Display.js";
import { proyectos } from "./Data.js";

class Click {
  crearProyecto() {
    display.crearFormProyecto();
    display.abrirModalProyecto();
  }

  cambiarHeader(id) {
    proyectos.idProyectoVista = id;

    display.limpiarHeader();
    display.renderHeader();
  }

  editarProyecto(id) {
    display.editarFormProyecto(id);
    display.abrirModalProyecto();
  }

  borrarProyecto(id) {
    proyectos.eliminarProyecto(id);
    console.log(proyectos.datos);
    display.limpiarProyectos();
    display.renderProyectos();

    display.limpiarHeader();
    display.renderHeader();
  }
}

const click = new Click();

export { click };
