class Display {
  $btnAddProyecto = document.querySelector(`[data-btn="addProyecto"]`);
  $dialogCrearProyecto = document.querySelector(
    `[data-dialog="crearProyecto"]`
  );
  $btnCerrarModalProyecto = document.querySelector(
    `[data-btn="cerrarModalProyecto"]`
  );
  $btnDeleteProyecto = document.querySelector(`[data-btn="deleteProyecto"]`);
  $btnEditProyecto = document.querySelector(`[data-btn="editProyecto"]`);
  $btnAddTarea = document.querySelector(`[data-btn="addTarea"]`);
  $dialogCrearTarea = document.querySelector(`[data-dialog="crearTarea"]`);
  $btnCerrarModalTarea = document.querySelector(
    `[data-btn="cerrarModalTarea"]`
  );
  $btnViewTarea = document.querySelector(`[data-btn="viewTarea"]`);
  $dialogVerTarea = document.querySelector(`[data-dialog="verTarea"]`);
  $btnCerrarModalInfoTarea = document.querySelector(
    `[data-btn="cerrarModalInfoTarea"]`
  );
  $btnEditTarea = document.querySelector(`[data-btn="editTarea"]`);
  $btnDeleteTarea = document.querySelector(`[data-btn="deleteTarea"]`);

  mostrarElemento() {
    console.log(this.$btnAddTarea.dataset.btn);
  }
}

const display = new Display();

export { display };
