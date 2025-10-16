import { crearProyecto } from "./crearProyecto.js";
import { crearTarea } from "./crearTarea.js";
import { data } from "./Data.js";
import { display } from "./Display.js";

class Submit {
  enviarFormularioProyecto() {
    console.log("ENVIAR FORMULARIO DE PROYECTO");

    const formData = new FormData(display.$formProyecto);
    const datosFormulario = Object.fromEntries(formData);

    let datosProyecto = crearProyecto(
      datosFormulario.tituloProyecto,
      datosFormulario.descripcionProyecto
    );

    data.agregarData(datosProyecto);
    data.mostrarData();
    display.reiniciarFormProyecto();
    display.cerrarModalProyecto();
  }
  enviarFormularioTarea() {
    console.log("ENVIAR FORMULARIO DE TAREA");

    const formData = new FormData(display.$formTarea);
    const datosFormulario = Object.fromEntries(formData);

    let datosTarea = crearTarea(
      datosFormulario.tituloTarea,
      datosFormulario.descripcionTarea,
      datosFormulario.formPrioridad,
      datosFormulario.fechaInput
    );
    data.agregarData(datosTarea);
    data.mostrarData();
    display.reiniciarFormTarea();
    display.cerrarModalTarea();
  }
}

const submit = new Submit();

export { submit };
