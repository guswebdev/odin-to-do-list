import { display } from "./Display.js";
import { proyectos } from "./Data.js";

class Click {
  crearProyecto() {
    display.crearFormProyecto();
    display.abrirModalProyecto();
  }

  cambiarHeader(id) {
    
    proyectos.idProyectoVista = id;
    proyectos.guardarIdVista()

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

    display.limpiarProyectos();
    display.renderProyectos();

    if (proyectos.datos.length === 0) {
      display.limpiarHeader();
      display.agregarMensajeHeader();
      display.agregarMensajeMain();
    } else {
      display.limpiarHeader();
      display.renderHeader();

      display.limpiarMainBody();
      display.renderMainBody();
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
    display.crearFormTarea();
    display.abrirModalTarea();
  }

  verTarea(idProyecto, idTarea) {
    display.cargarInformacionTarea(idProyecto, idTarea);
    display.abrirInfoTarea();
  }

  editarTarea(idProyecto, idTarea) {
    display.editarFormTarea(idProyecto, idTarea);
    display.abrirModalTarea();
  }

  borrarTarea(idProyecto, idTarea) {
    proyectos.eliminarProyectoTareas(idProyecto, idTarea);

    display.limpiarMainBody();
    display.renderMainBody();
  }
}

const click = new Click();

export { click };
