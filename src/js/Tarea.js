class Tarea {
  constructor(titulo, descripcion, fechaVencimiento, prioridad, estado) {
    this.id = crypto.randomUUID();
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.fechaVencimiento = fechaVencimiento;
    this.prioridad = prioridad;
    this.estado = estado;
  }

  getTarea() {
    console.log(
      `id: ${this.id} | titulo: ${this.titulo} | descripcion: ${this.descripcion} | fecha de vencimiento: ${this.fechaVencimiento} | prioridad: ${this.prioridad} | estado: ${this.estado}`
    );
  }

  setTarea(
    nuevoTitulo,
    nuevaDescripcion,
    nuevaFechaVencimiento,
    nuevaPrioridad,
    nuevoEstado
  ) {
    console.log("Editar Datos de la Tarea");
    this.titulo = nuevoTitulo;
    this.descripcion = nuevaDescripcion;
    this.fechaVencimiento = nuevaFechaVencimiento;
    this.prioridad = nuevaPrioridad;
    this.estado = nuevoEstado;
  }

  eliminarTarea(id) {
    console.log(`Eliminar Tarea con el id: ${id}`);
  }
}

export { Tarea };
