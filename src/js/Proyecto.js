class Proyecto {
  constructor(titulo, descripcion) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.tareas = [];
  }
}

export { Proyecto };
