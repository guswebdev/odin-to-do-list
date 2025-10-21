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

    display.limpiarMainBody();
    display.renderMainBody();
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

    if (proyectos.datos.length === 0) {
      display.limpiarHeader();
      display.agregarMensajeHeader();
      display.agregarMensajeMain();
    } else {
      display.limpiarHeader();
      display.renderHeader();
    }
  }
  cerrarModalProyecto() {
    display.cerrarModalProyecto();
  }
  cerrarModalTarea() {
    display.cerrarModalTarea();
  }
  cerrarInfoTarea() {
    display.cerrarInfoTarea();
  }

  crearTarea() {
    console.log("CREAR TAREA");
    display.crearFormTarea();
    display.abrirModalTarea();
  }

  verTarea(idProyecto, idTarea) {
    console.log("VER INFORMACION TAREA");
    display.cargarInformacionTarea(idProyecto, idTarea);
    display.abrirInfoTarea();
  }

  editarTarea(idProyecto, idTarea) {
    display.editarFormTarea(idProyecto, idTarea);
    display.abrirModalTarea();
  }
}

const click = new Click();

export { click };
