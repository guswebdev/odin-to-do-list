import { display } from "./Display.js";
import { click } from "./Click.js";
import { submit } from "./Submit.js";
import { proyectos } from "./Data.js";
import { ls } from "./LocalStorage.js";

/*
Tareas Pendientes: 
-Trabajar bien con las fechas
-Trabajar con los input de checklist
*/

class Controlador {
  domContentLoaded() {
    ls.crearDatos();

    if (proyectos.datos.length > 0) {
      display.eliminarMensajeHeader();
      display.eliminarMensajeMain();

      display.render();
    }
  }

  click(e) {
    if (e.target.dataset.btn === display.$btnAddProyecto.dataset.btn) {
      click.crearProyecto();
    }

    if (e.target.dataset.btn === display.$btnCerrarModalProyecto.dataset.btn) {
      click.cerrarModalProyecto();
    }
    if (e.target.dataset.btn === display.$btnCerrarModalTarea.dataset.btn) {
      click.cerrarModalTarea();
    }
    if (e.target.dataset.btn === display.$btnCerrarModalInfoTarea.dataset.btn) {
      click.cerrarInfoTarea();
    }

    if (proyectos.datos.length > 0) {
      display.capturarLinksProyectos();
      display.capturarBtnEditarProyecto();
      display.capturarBtnBorrarProyecto();
      display.capturarBtnCrearTarea();
      display.capturarBtnsVerTarea();
      display.capturarBtnsEditarTarea();
      display.capturarBtnsBorrarTarea();

      if (display.$linksProyectos.includes(e.target)) {
        click.cambiarHeader(e.target.dataset.idProyecto);
      }

      if (e.target.dataset.btn === display.$btnEditProyecto.dataset.btn) {
        click.editarProyecto(e.target.dataset.idProyecto);
      }
      if (display.$btnsBorrarProyecto.includes(e.target)) {
        click.borrarProyecto(e.target.dataset.idProyecto);
      }

      if (e.target.dataset.btn === display.$btnAddTarea.dataset.btn) {
        click.crearTarea(e.target.dataset.idProyecto);
      }

      if (display.$btnsVerTarea.includes(e.target)) {
        click.verTarea(
          e.target.closest("tr").dataset.idProyecto,
          e.target.closest("tr").dataset.idTarea
        );
      }
      if (display.$btnsEditTarea.includes(e.target)) {
        click.editarTarea(
          e.target.closest("tr").dataset.idProyecto,
          e.target.closest("tr").dataset.idTarea
        );
      }
      if (display.$btnsBorrarTarea.includes(e.target)) {
        click.borrarTarea(
          e.target.closest("tr").dataset.idProyecto,
          e.target.closest("tr").dataset.idTarea
        );
      }
    }
  }

  submit(e) {
    e.preventDefault();

    if (e.target === display.$formProyecto) {
      if (display.$formProyecto.dataset.method === "crear") {
        submit.crearProyecto();
      } else if (display.$formProyecto.dataset.method === "editar") {
        submit.editarProyecto(e.target.dataset.idProyecto);
      }
    }

    if (e.target === display.$formTarea) {
      if (display.$formTarea.dataset.method === "crear") {
        submit.crearTarea(e.target.dataset.idProyecto);
      } else if (display.$formTarea.dataset.method === "editar") {
        submit.editarTarea(
          e.target.dataset.idProyecto,
          e.target.dataset.idTarea
        );
      }
    }
  }
  change(e) {
    if (e.target.type === "checkbox") {
      if (proyectos.datos.length > 0) {
        proyectos.cambiarEstado(
          e.target.closest("tr").dataset.idProyecto,
          e.target.closest("tr").dataset.idTarea
        );
      }
    }
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.domContentLoaded);
document.addEventListener("click", controlador.click);
document.addEventListener("submit", controlador.submit);
document.addEventListener("change", controlador.change);

export { controlador };
