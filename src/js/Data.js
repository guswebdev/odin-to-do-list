import { ls } from "./LocalStorage.js";

class Data {
  //Atributos
  datos = [];
  idProyectoVista = "";

  //Getters y Setter
  get idProyectoVista() {
    return this.idProyectoVista;
  }

  set idProyectoVista(nuevoId) {
    this.idProyectoVista = nuevoId;
  }

  get datos() {
    return this.datos;
  }

  set datos(nuevoProyecto) {
    this.datos = nuevoProyecto;
  }

  //Metodos Privados

  obtenerObjetoId(id) {
    ls.recuperarDatos();
    ls.recuperarIdVista();

    return this.datos.find((objeto) => objeto.id === id);
  }

  obtenerIndexObjetoId(id) {
    ls.recuperarDatos();
    return this.datos.findIndex((objeto) => objeto.id === id);
  }

  obtenerTareaId(arr, idTarea) {
    return arr.find((objeto) => objeto.id === idTarea);
  }
  obtenerIndexTareaId(arr, idTarea) {
    return arr.findIndex((objeto) => objeto.id === idTarea);
  }

  asignarDatosTareas(dato, datoNuevo) {
    dato.titulo = datoNuevo.tituloTarea;
    dato.descripcion = datoNuevo.descripcionTarea;
    dato.prioridad = datoNuevo.formPrioridad;
    dato.fechaVencimiento = datoNuevo.fechaInput;
  }

  //Metodos Publicos

  agregarProyectos(dato) {
    this.datos.push(dato);
    ls.guardarDatos();
  }

  editarProyectos(dato, id) {
    const index = this.obtenerIndexObjetoId(id);

    if (index !== -1) {
      this.datos[index].titulo = dato.tituloProyecto;
      this.datos[index].descripcion = dato.descripcionProyecto;
    }

    ls.guardarDatos();
  }

  eliminarProyecto(id) {
    const index = this.obtenerIndexObjetoId(id);

    if (this.datos.length > 1) {
      this.idProyectoVista = this.datos[index - 1].id;
      ls.guardarIdVista();
    }

    if (index > -1) {
      this.datos.splice(index, 1);
    }

    ls.guardarDatos();
  }

  agregarProyectoTareas(dato, idProyecto) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);

    if (objetoEncontrado) {
      objetoEncontrado.tareas.push(dato);
    }

    ls.guardarDatos();
  }

  editarProyectoTareas(dato, idProyecto, idTarea) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);

    if (objetoEncontrado) {
      const elementoEncontrado = this.obtenerTareaId(
        objetoEncontrado.tareas,
        idTarea
      );

      if (elementoEncontrado) {
        this.asignarDatosTareas(elementoEncontrado, dato);
      }
    }

    ls.guardarDatos();
  }
  eliminarProyectoTareas(idProyecto, idTarea) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);
    if (objetoEncontrado) {
      const index = this.obtenerIndexTareaId(objetoEncontrado.tareas, idTarea);

      if (index > -1) {
        objetoEncontrado.tareas.splice(index, 1);
      }
    }

    ls.guardarDatos();
  }

  cambiarEstado(idProyecto, idTarea) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);

    if (objetoEncontrado) {
      const elementoEncontrado = this.obtenerTareaId(
        objetoEncontrado.tareas,
        idTarea
      );

      if (elementoEncontrado) {
        //this.asignarDatosTareas(elementoEncontrado, dato);
        elementoEncontrado.estado = !elementoEncontrado.estado;
      }
    }

    ls.guardarDatos();
  }

  guardarIdVista() {
    ls.guardarIdVista();
  }
}

const proyectos = new Data();

export { proyectos };
