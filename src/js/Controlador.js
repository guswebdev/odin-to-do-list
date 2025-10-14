import { crearProyecto } from "./crearProyecto.js";
import { crearTarea } from "./crearTarea.js";

import { display } from "./Display.js";
import { click } from "./Click.js";
import { submit } from "./Submit.js";

class Controlador {
  data = [];

  mostrarData() {
    console.log(this.data);
  }

  domContentLoaded() {
    const proyectoDefault = crearProyecto(
      "Projecto Default",
      "Descripcion Default"
    );
    controlador.data.push(proyectoDefault);

    const primerProyecto = crearProyecto(
      "Universidad",
      "Aca voy a escribir mis tareas de la facu"
    );
    controlador.data.push(primerProyecto);

    const segundoProyecto = crearProyecto(
      "Gym",
      "Aca voy a escribir mis rutinas semanales"
    );
    controlador.data.push(segundoProyecto);

    controlador.mostrarData();
    /*
    console.log("Trabajo con poyectos");
    console.log("**************************************************");
    //CREACION DE PROYECTOS
    const proyectoDefault = crearProyecto(
      "Projecto Default",
      "Descripcion Default"
    );

    proyectoDefault.getProyecto();

    const primerProyecto = crearProyecto(
      "Universidad",
      "Aca voy a escribir mis tareas de la facu"
    );

    primerProyecto.getProyecto();

    const segundoProyecto = crearProyecto(
      "Gym",
      "Aca voy a escribir mis rutinas semanales"
    );

    segundoProyecto.getProyecto();
    //CREACION DE PROYECTOS

    //EDICION DE PROYECTOS
    proyectoDefault.setProyecto("Titulo Editado", "Descripcion Editada");
    segundoProyecto.setProyecto("Titulo Editado", "Descripcion Editada");
    //EDICION DE PROYECTOS

    //ELIMINACION DE PROYECTOS
    primerProyecto.eliminarProyecto("id a eliminar");
    //ELIMINACION DE PROYECTOS

    //MOSTRAR PROYECTOS FINALES
    proyectoDefault.getProyecto();
    primerProyecto.getProyecto();
    segundoProyecto.getProyecto();
    //MOSTRAR PROYECTOS FINALES

    console.log("Trabajo con tareas");
    console.log("**************************************************");
    // ------------------------------------------------------------
    //CREACION DE TAREAS
    const tareaDefault = crearTarea(
      "Tarea Default",
      "Descripcion Default",
      "Fecha Default",
      "Prioridad Default",
      "Estado Default"
    );

    tareaDefault.getTarea();

    const primerTarea = crearTarea(
      "Buscar info sobre los querandies",
      "Crear un resumen de la informacion para la presentacion",
      "15/10/2025",
      "Media",
      "Incompleto"
    );

    primerTarea.getTarea();

    const segundaTarea = crearTarea(
      "Escuchar un podcast de Mario Pelaez",
      "Hacer anotaciones para tomar accion",
      "18/10/2025",
      "Alta",
      "Incompleto"
    );

    segundaTarea.getTarea();
    //CREACION DE TAREAS

    //EDICION DE PROYECTOS
    tareaDefault.setTarea(
      "Titulo Editado",
      "Descripcion Editada",
      "Fecha Editada",
      "Prioridad Editada",
      "Estado Editada"
    );
    segundaTarea.setTarea(
      "Titulo Editado",
      "Descripcion Editada",
      "Fecha Editada",
      "Prioridad Editada",
      "Estado Editada"
    );
    //EDICION DE PROYECTOS

    //ELIMINACION DE PROYECTOS
    primerTarea.eliminarTarea("id a eliminar");
    //ELIMINACION DE PROYECTOS

    //MOSTRAR PROYECTOS FINALES
    tareaDefault.getTarea();
    primerTarea.getTarea();
    segundaTarea.getTarea();
    //MOSTRAR PROYECTOS FINALES
    // ------------------------------------------------------------
    */
  }

  click(e) {
    if (e.target.dataset.btn === display.$btnAddProyecto.dataset.btn) {
      click.agregarProyecto();
    }
    if (e.target.dataset.btn === display.$btnDeleteProyecto.dataset.btn) {
      click.eliminarProyecto();
    }
    if (e.target.dataset.btn === display.$btnEditProyecto.dataset.btn) {
      click.editarProyecto();
    }
    if (e.target.dataset.btn === display.$btnAddTarea.dataset.btn) {
      click.agregarTarea();
    }
    if (e.target.dataset.btn === display.$btnViewTarea.dataset.btn) {
      click.verTarea();
    }
    if (e.target.dataset.btn === display.$btnEditTarea.dataset.btn) {
      click.editarTarea();
    }
    if (e.target.dataset.btn === display.$btnDeleteTarea.dataset.btn) {
      click.eliminarTarea();
    }
    if (e.target.dataset.btn === display.$btnCerrarModalProyecto.dataset.btn) {
      click.cerrarModalProyecto();
    }
    if (e.target.dataset.btn === display.$btnCerrarModalTarea.dataset.btn) {
      click.cerrarModalTarea();
    }
    if (e.target.dataset.btn === display.$btnCerrarModalInfoTarea.dataset.btn) {
      click.cerrarModalInfoTarea();
    }
  }

  submit(e) {
    e.preventDefault();
    if (e.target.id === display.$formProyecto.id) {
      submit.enviarFormularioProyecto();
    }
    if (e.target.id === display.$formTarea.id) {
      submit.enviarFormularioTarea();
    }
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.domContentLoaded);
document.addEventListener("click", controlador.click);
document.addEventListener("submit", controlador.submit);

//controlador.mostrarData();
export { controlador };
