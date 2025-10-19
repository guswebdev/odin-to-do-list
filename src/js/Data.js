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
    return this.datos.find((objeto) => objeto.id === id);
  }

  obtenerIndexObjetoId(id) {
    return this.datos.findIndex((objeto) => objeto.id === id);
  }

  obtenerTareaId(arr, idTarea) {
    return arr.find((objeto) => objeto.id === idTarea);
  }
  obtenerIndexTareaId(arr, idTarea) {
    return arr.findIndex((objeto) => objeto.id === idTarea);
  }

  asignarDatosTareas(dato, datoNuevo) {
    dato.titulo = datoNuevo.titulo;
    dato.descripcion = datoNuevo.descripcion;
    dato.prioridad = datoNuevo.prioridad;
    dato.fechaVencimiento = datoNuevo.fechaVencimiento;
  }

  //Metodo Auxiliar
  /*
  obtenerId() {
    return this.datos[0].id;
  }
  */
  obtenerIdTarea() {
    return this.datos[0].tareas[0].id;
  }

  //Metodos Publicos

  agregarProyectos(dato) {
    this.datos.push(dato);
  }

  editarProyectos(dato, id) {
    const index = this.obtenerIndexObjetoId(id);

    if (index !== -1) {
      this.datos[index].titulo = dato.tituloProyecto;
      this.datos[index].descripcion = dato.descripcionProyecto;
    }
  }

  eliminarProyecto(id) {
    const index = this.obtenerIndexObjetoId(id);

    if (this.datos.length > 1) {
      this.idProyectoVista = this.datos[index - 1].id;
    }

    if (index > -1) {
      this.datos.splice(index, 1);
    }
  }

  agregarProyectoTareas(dato, idProyecto) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);

    if (objetoEncontrado) {
      objetoEncontrado.tareas.push(dato);
    }
  }

  mostrarProyectoTareas(idProyecto, idTarea) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);

    if (objetoEncontrado) {
      const elementoEncontrado = this.obtenerTareaId(
        objetoEncontrado.tareas,
        idTarea
      );

      if (elementoEncontrado) {
        console.dir(elementoEncontrado);
      }
    }
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
  }
  eliminarProyectoTareas(idProyecto, idTarea) {
    const objetoEncontrado = this.obtenerObjetoId(idProyecto);
    if (objetoEncontrado) {
      const index = this.obtenerIndexTareaId(objetoEncontrado.tareas, idTarea);

      if (index > -1) {
        objetoEncontrado.tareas.splice(index, 1);
      }
    }
  }
}

const proyectos = new Data();

export { proyectos };
