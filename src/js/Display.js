import { proyectos } from "./Data.js";

const d = document;

class Display {
  //Atributos
  $headerProyectos = d.querySelector(`[data-header-proyectos]`);
  $mainProyectos = d.querySelector(`[data-main-proyectos]`);
  $containerProyectos = d.querySelector(`[data-container-proyectos]`);
  $formProyecto = d.querySelector("#form-proyecto");
  $formTarea = d.querySelector("#form-tarea");

  $linksProyectos;
  $btnEditProyecto;
  $btnsBorrarProyecto;
  $btnAddTarea;
  $btnsVerTarea;
  $inputsCheckbox;

  $btnAddProyecto = d.querySelector(`[data-btn="addProyecto"]`);
  $btnCerrarModalProyecto = d.querySelector(`[data-btn="cerrarModalProyecto"]`);
  $btnCerrarModalTarea = d.querySelector(`[data-btn="cerrarModalTarea"]`);
  $dialogCrearProyecto = d.querySelector(`[data-dialog="crearProyecto"]`);
  $dialogCrearTarea = d.querySelector(`[data-dialog="crearTarea"]`);
  $spanTituloTarea = d.querySelector(`[data-info-titulo]`);
  $spanDescripcionTarea = d.querySelector(`[data-info-descripcion]`);
  $spanPrioridadTarea = d.querySelector(`[data-info-prioridad]`);
  $spanFechaTarea = d.querySelector(`[data-info-fecha]`);
  $spanEstadoTarea = d.querySelector(`[data-info-estado]`);
  $spanProyectoTarea = d.querySelector(`[data-info-proyecto]`);
  $spanTituloTarea = d.querySelector(`[data-info-titulo]`);
  $spanDescripcionTarea = d.querySelector(`[data-info-descripcion]`);
  $spanPrioridadTarea = d.querySelector(`[data-info-prioridad]`);
  $spanFechaTarea = d.querySelector(`[data-info-fecha]`);
  $spanEstadoTarea = d.querySelector(`[data-info-estado]`);
  $spanProyectoTarea = d.querySelector(`[data-info-proyecto]`);

  $dialogVerTarea = d.querySelector(`[data-dialog="verTarea"]`);
  $btnCerrarModalInfoTarea = d.querySelector(
    `[data-btn="cerrarModalInfoTarea"]`
  );

  $templateProyectosItems = d.querySelector("#template-proyectos-items")
    .content;
  $templateProyectosHeader = d.querySelector("#template-proyectos-header")
    .content;
  $templateProyectosMainHeader = d.querySelector(
    "#template-proyectos-main-header"
  ).content;
  $templateProyectosMainBody = d.querySelector("#template-proyectos-main-body")
    .content;

  $fragment = d.createDocumentFragment();
  //Atributos

  $btnsEditTarea;
  $btnsDeleteTarea;

  //Metodos Publicos
  renderProyectos() {
    if (proyectos.datos.length > 0) {
      proyectos.datos.forEach((el) => {
        this.$templateProyectosItems.querySelector("span").textContent =
          el.titulo;

        this.$templateProyectosItems.querySelector("span").dataset.idProyecto =
          el.id;

        this.$templateProyectosItems.querySelector(
          "span"
        ).dataset.idProyectoVista = "";

        this.$templateProyectosItems.querySelector("i").dataset.idProyecto =
          el.id;

        let clone = this.$templateProyectosItems.cloneNode(true);
        this.$fragment.appendChild(clone);
      });
      this.$containerProyectos.appendChild(this.$fragment);
    }
  }

  limpiarProyectos() {
    this.$containerProyectos.innerHTML = "";
  }

  renderHeader() {
    if (proyectos.datos.length > 0) {
      const datosHeader = proyectos.obtenerObjetoId(proyectos.idProyectoVista);

      this.$templateProyectosHeader.querySelector("h2").textContent =
        datosHeader.titulo;
      this.$templateProyectosHeader.querySelector("p").textContent =
        datosHeader.descripcion;

      this.$templateProyectosHeader.querySelector("i").dataset.idProyecto =
        datosHeader.id;

      let clone = this.$templateProyectosHeader.cloneNode(true);

      this.$headerProyectos.appendChild(clone);
    }
  }

  limpiarHeader() {
    this.$headerProyectos.innerHTML = "";
  }

  renderMainHeader() {
    if (proyectos.datos.length > 0) {
      console.log(this.$templateProyectosMainHeader);
      this.$mainProyectos.appendChild(
        this.$templateProyectosMainHeader.cloneNode(true)
      );
    }
  }

  limpiarMainHeader() {
    this.$headerProyectos.firstChild.innerHTML = "";
  }

  renderMainBody() {
    if (proyectos.datos.length > 0) {
      const objetoEncontrado = proyectos.obtenerObjetoId(
        proyectos.idProyectoVista
      );

      objetoEncontrado.tareas.forEach((el) => {
        this.$templateProyectosMainBody.querySelector("tr").dataset.idProyecto =
          proyectos.idProyectoVista;

        this.$templateProyectosMainBody.querySelector("tr").dataset.idTarea =
          el.id;

        this.$templateProyectosMainBody.querySelector(
          "[data-titulo]"
        ).textContent = el.titulo;

        let clone = this.$templateProyectosMainBody.cloneNode(true);

        this.$fragment.appendChild(clone);
      });

      d.querySelector(`[data-tbody]`).appendChild(this.$fragment);
    }
  }

  limpiarMainBody() {
    d.querySelector(`[data-tbody]`).innerHTML = "";
  }

  render() {
    this.renderProyectos();
    this.renderHeader();
    this.renderMainHeader();
    this.renderMainBody();
  }

  crearFormProyecto() {
    this.$formProyecto.dataset.method = "crear";
    this.$formProyecto.querySelector("h2").textContent = `Crear Proyecto`;
    this.$formProyecto.querySelector("button").textContent = `Crear Proyecto`;

    this.$formProyecto.querySelector("#tituloProyecto").value = "";
    this.$formProyecto.querySelector("#descripcionProyecto").value = "";
  }
  crearFormTarea() {
    this.$formTarea.dataset.idProyecto = proyectos.idProyectoVista;
    this.$formTarea.dataset.method = "crear";
    this.$formTarea.querySelector("h2").textContent = `Crear Tarea`;
    this.$formTarea.querySelector("button").textContent = `Crear Tarea`;

    this.$formTarea.querySelector("#tituloTarea").value = "";
    this.$formTarea.querySelector("#descripcionTarea").value = "";
    this.$formTarea.querySelector("#fechaInput").value = "";
  }

  editarFormProyecto(id) {
    this.$formProyecto.dataset.method = "editar";
    this.$formProyecto.dataset.idProyecto = id;

    this.$formProyecto.querySelector("h2").textContent = `Editar Proyecto`;
    this.$formProyecto.querySelector("button").textContent = `Editar Proyecto`;

    const datosFormulario = proyectos.obtenerObjetoId(id);

    console.log(datosFormulario);

    this.$formProyecto.querySelector("#tituloProyecto").value =
      datosFormulario.titulo;
    this.$formProyecto.querySelector("#descripcionProyecto").value =
      datosFormulario.descripcion;
  }

  editarFormTarea(idProyecto, idTarea) {
    this.$formTarea.dataset.method = "editar";
    this.$formTarea.dataset.idProyecto = idProyecto;
    this.$formTarea.dataset.idTarea = idTarea;

    this.$formTarea.querySelector("h2").textContent = `Editar Tarea`;
    this.$formTarea.querySelector("button").textContent = `Editar Tarea`;

    const proyecto = proyectos.obtenerObjetoId(idProyecto);
    const tarea = proyectos.obtenerTareaId(proyecto.tareas, idTarea);

    this.$formTarea.querySelector("#tituloTarea").value = tarea.titulo;
    this.$formTarea.querySelector("#descripcionTarea").value =
      tarea.descripcion;
    this.$formTarea.querySelector(
      `input[value="${tarea.prioridad}"]`
    ).checked = true;
    this.$formTarea.querySelector("#fechaInput").value = tarea.fechaVencimiento;
  }

  reiniciarFormProyecto() {
    this.$formProyecto.reset();
  }
  reiniciarFormTarea() {
    this.$formTarea.reset();
  }

  abrirModalProyecto() {
    this.$dialogCrearProyecto.showModal();
  }
  cerrarModalProyecto() {
    this.$dialogCrearProyecto.close();
  }

  abrirModalTarea() {
    this.$dialogCrearTarea.showModal();
  }
  cerrarModalTarea() {
    this.$dialogCrearTarea.close();
  }

  abrirInfoTarea() {
    this.$dialogVerTarea.showModal();
  }
  cerrarInfoTarea() {
    this.$dialogVerTarea.close();
  }

  capturarLinksProyectos() {
    this.$linksProyectos = Array.from(
      d.querySelectorAll(`[data-id-proyecto-vista]`)
    );
  }
  capturarBtnEditarProyecto() {
    this.$btnEditProyecto = d.querySelector(`[data-btn="editProyecto"]`);
  }
  capturarBtnBorrarProyecto() {
    this.$btnsBorrarProyecto = Array.from(
      d.querySelectorAll(`[data-btn="deleteProyecto"]`)
    );
  }
  capturarBtnCrearTarea() {
    this.$btnAddTarea = d.querySelector(`[data-btn="addTarea"]`);
  }

  capturarInputsCheckbox() {
    this.$inputsCheckbox = Array.from(
      d.querySelectorAll('input[type="checkbox"]')
    );
  }
  capturarBtnsVerTarea() {
    this.$btnsVerTarea = Array.from(
      d.querySelectorAll(`[data-btn="viewTarea"]`)
    );
  }

  capturarBtnsEditarTarea() {
    this.$btnsEditTarea = Array.from(
      d.querySelectorAll(`[data-btn="editTarea"]`)
    );
  }

  agregarMensajeHeader() {
    this.$headerProyectos.innerHTML = `<p data-header-inicio="" class="d-block">
            Crea un nuevo proyecto para comenzar
          </p>`;
  }

  eliminarMensajeHeader() {
    this.$headerProyectos.innerHTML = "";
  }
  eliminarMensajeMain() {
    this.$mainProyectos.innerHTML = "";
  }
  agregarMensajeMain() {
    this.$mainProyectos.innerHTML = `<p data-main-inicio="" class="d-block">
            Aca apareceran las tareas de cada proyecto
          </p>`;
  }

  cargarInformacionTarea(idProyecto, idTarea) {
    const proyecto = proyectos.obtenerObjetoId(idProyecto);

    const tarea = proyectos.obtenerTareaId(proyecto.tareas, idTarea);

    this.$spanTituloTarea.textContent = tarea.titulo;
    this.$spanDescripcionTarea.textContent = tarea.descripcion;
    this.$spanPrioridadTarea.textContent = tarea.prioridad;
    this.$spanFechaTarea.textContent = tarea.fechaVencimiento;
    this.$spanEstadoTarea.textContent = tarea.estado
      ? `Tarea Completa`
      : `Tarea Incompleta`;
    this.$spanProyectoTarea.textContent = proyecto.titulo;
  }
}

const display = new Display();

export { display };
