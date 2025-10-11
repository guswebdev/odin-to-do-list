class Proyecto {
  constructor(titulo, descripcion) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descripcion = descripcion;
  }

  getProyecto() {
    console.log(`id: ${this.id} | titulo: ${this.titulo} | descripcion: ${this.descripcion}`);
  }

  setProyecto(nuevoTitulo, nuevaDescripcion) {
    console.log("Editar Datos del Proyecto");
    this.titulo = nuevoTitulo;
    this.descripcion = nuevaDescripcion;
  }

  eliminarProyecto(id) {
    console.log(`Eliminar Proyecto con el od: ${id}`);
  }
}

export { Proyecto };
