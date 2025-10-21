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

    display.eliminarMensajeHeader();
    display.limpiarHeader();
    display.renderHeader();

    display.eliminarMensajeMain();
    display.renderMainHeader();
    display.renderMainBody();
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
  crearTarea(id) {
    const formData = new FormData(display.$formTarea);
    const data = Object.fromEntries(formData);

    console.log(data);

    const nuevaTarea = crearTarea(
      data.tituloTarea,
      data.descripcionTarea,
      data.formPrioridad,
      data.fechaInput
    );

    proyectos.agregarProyectoTareas(nuevaTarea, id);
    console.log(proyectos.datos);

    display.cerrarModalTarea();
    display.reiniciarFormTarea();

    display.limpiarMainBody();
    display.renderMainBody();

    display.capturarInputsCheckbox();
  }
  editarTarea(idProyecto, idTarea) {
    const formData = new FormData(display.$formTarea);
    const data = Object.fromEntries(formData);

    proyectos.editarProyectoTareas(data, idProyecto, idTarea);

    proyectos.idProyectoVista = idProyecto;

    display.cerrarModalTarea();
    display.reiniciarFormTarea();

    display.limpiarMainBody();
    display.renderMainBody();
  }
}

const submit = new Submit();

export { submit };
