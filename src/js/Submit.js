import { crearProyecto } from "./crearProyecto.js";
import { crearTarea } from "./crearTarea.js";
import { proyectos } from "./Data.js";
import { display } from "./Display.js";

class Submit {
  crearProyecto() {
    const data = display.obtenerDatosFormulario(display.$formProyecto);

    const nuevoProyecto = crearProyecto(
      data.tituloProyecto,
      data.descripcionProyecto
    );

    proyectos.idProyectoVista = nuevoProyecto.id;
    proyectos.guardarIdVista();

    proyectos.agregarProyectos(nuevoProyecto);

    display.resetFormProyecto();

    display.eliminarMensajeHeader();
    display.limpiarHeader();
    display.renderHeader();

    display.eliminarMensajeMain();
    display.renderMainHeader();
    display.renderMainBody();
  }

  editarProyecto(id) {
    const data = display.obtenerDatosFormulario(display.$formProyecto);

    proyectos.editarProyectos(data, id);

    proyectos.idProyectoVista = id;
    proyectos.guardarIdVista();

    display.resetFormProyecto();

    display.limpiarHeader();
    display.renderHeader();
  }
  crearTarea(id) {
    const data = display.obtenerDatosFormulario(display.$formTarea);
    const nuevaTarea = crearTarea(
      data.tituloTarea,
      data.descripcionTarea,
      data.formPrioridad,
      data.fechaInput
    );

    proyectos.agregarProyectoTareas(nuevaTarea, id);

    display.resetFormTarea();

    display.capturarInputsCheckbox();
  }
  editarTarea(idProyecto, idTarea) {
    const data = display.obtenerDatosFormulario(display.$formTarea);

    proyectos.editarProyectoTareas(data, idProyecto, idTarea);

    proyectos.idProyectoVista = idProyecto;
    proyectos.guardarIdVista();

    display.resetFormTarea();
  }
}

const submit = new Submit();

export { submit };
