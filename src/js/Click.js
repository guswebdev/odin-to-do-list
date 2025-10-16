import { display } from "./Display.js";

class Click {
  agregarProyecto() {
    console.log("AGREGAR NUEVO PROYECTO");
    display.abrirModalProyecto()
  }
  cerrarModalProyecto(){
    display.cerrarModalProyecto()
  }
  eliminarProyecto() {
    console.log("ELIMINAR PROYECTO");
  }
  editarProyecto() {
    console.log("EDITAR PROYECTO");
    display.$dialogCrearProyecto.showModal()
  }
  agregarTarea() {
    console.log("CREAR NUEVA TAREA");
    display.$dialogCrearTarea.showModal()
  }
  cerrarModalTarea(){
    display.$dialogCrearTarea.close()
  }
  verTarea() {
    console.log("VER TAREA");
    display.$dialogVerTarea.showModal()
  }
  cerrarModalInfoTarea(){
    display.$dialogVerTarea.close()
  }
  eliminarTarea() {
    console.log("ELIMINAR TAREA");
  }
  editarTarea() {
    console.log("EDITAR TAREA");
    display.$dialogCrearTarea.showModal()
  }
}

const click = new Click();

export { click };
