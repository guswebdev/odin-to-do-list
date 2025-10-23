import { proyectos } from "./Data.js";

class LocalStorage {
  crearDatos() {
    if (localStorage.getItem("data")) {
      this.recuperarDatos();
    } else {
      this.guardarDatos();
    }

    if (localStorage.getItem("idProyectoVista")) {
      this.recuperarIdVista();
    } else {
      this.guardarIdVista();
    }
  }

  guardarDatos() {
    localStorage.setItem("data", JSON.stringify(proyectos.datos));
  }

  recuperarDatos() {
    proyectos.datos = JSON.parse(localStorage.getItem("data"));
  }

  guardarIdVista() {
    localStorage.setItem(
      "idProyectoVista",
      JSON.stringify(proyectos.idProyectoVista)
    );
  }

  recuperarIdVista() {
    proyectos.idProyectoVista = JSON.parse(
      localStorage.getItem("idProyectoVista")
    );
  }
}

const ls = new LocalStorage();

export { ls };
