import { display } from "./Display.js";
import { click } from "./Click.js";
import { submit } from "./Submit.js";

import { proyectos } from "./Data.js";
import { crearProyecto } from "./crearProyecto.js";
import { crearTarea } from "./crearTarea.js";

class Controlador {
  domContentLoaded() {
    console.log(proyectos.datos);

    display.render();
  }

  click(e) {
    console.log(e.target);
    if (e.target.dataset.btn === display.$btnAddProyecto.dataset.btn) {
      click.crearProyecto();
    }

    if (proyectos.datos.length > 0) {
      display.capturarLinksProyectos();
      display.capturarBtnEditarProyecto();
      display.capturarBtnBorrarProyecto();

      if (display.$linksProyectos.includes(e.target)) {
        click.cambiarHeader(e.target.dataset.idProyecto);
      }

      if (e.target.dataset.btn === display.$btnEditProyecto.dataset.btn) {
        click.editarProyecto(e.target.dataset.idProyecto);
      }
      if (display.$btnsBorrarProyecto.includes(e.target)) {
        click.borrarProyecto(e.target.dataset.idProyecto);
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
  }
}

const controlador = new Controlador();

document.addEventListener("DOMContentLoaded", controlador.domContentLoaded);
document.addEventListener("click", controlador.click);
document.addEventListener("submit", controlador.submit);

export { controlador };
