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
  $btnAddProyecto = d.querySelector(`[data-btn="addProyecto"]`);

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

  $dialogCrearProyecto = d.querySelector(`[data-dialog="crearProyecto"]`);
  $btnCerrarModalProyecto = d.querySelector(`[data-btn="cerrarModalProyecto"]`);
  $btnDeleteProyecto;
  $btnAddTarea = d.querySelector(`[data-btn="addTarea"]`);
  $dialogCrearTarea = d.querySelector(`[data-dialog="crearTarea"]`);
  $btnCerrarModalTarea = d.querySelector(`[data-btn="cerrarModalTarea"]`);
  $btnViewTarea;
  $dialogVerTarea = d.querySelector(`[data-dialog="verTarea"]`);
  $btnCerrarModalInfoTarea = d.querySelector(
    `[data-btn="cerrarModalInfoTarea"]`
  );

  $btnEditTarea;
  $btnDeleteTarea;

  obtenerElementosVerTareas() {
    return (this.$btnViewTarea = d.querySelectorAll(`[data-btn="viewTarea"]`));
  }
  obtenerElementosEditarTareas() {
    return (this.$btnEditTarea = d.querySelectorAll(`[data-btn="editTarea"]`));
  }
  obtenerElementosEliminarTareas() {
    return (this.$btnDeleteTarea = d.querySelectorAll(
      `[data-btn="deleteTarea"]`
    ));
  }

  abrirModalTarea() {
    this.$dialogCrearTarea.showModal();
  }
  cerrarModalTarea() {
    this.$dialogCrearTarea.close();
  }

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
    if (proyectos.datos.length === 0) {
      d.querySelector(`[data-header-inicio]`).classList.add("d-block");
    } else {
      //HAY QUE PROBAR CUANDO HAY DATOS Y SE VACIAN LOS PROYECTOS
      //EFECTIVAMENTE NO FUNCIONA
      //d.querySelector(`[data-header-inicio]`).classList.remove("d-block");
      //d.querySelector(`[data-header-inicio]`).classList.add("d-none");

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
    if (proyectos.datos.length === 0) {
      d.querySelector(`[data-main-inicio]`).classList.add("d-block");
    } else {
      d.querySelector(`[data-main-inicio]`).classList.remove("d-block");
      d.querySelector(`[data-main-inicio]`).classList.add("d-none");

      this.$mainProyectos.appendChild(this.$templateProyectosMainHeader);
    }
  }

  limpiarMainHeader() {
    this.$headerProyectos.firstChild.innerHTML = "";
  }
  /*
  renderMainBody() {
    const objetoEncontrado = proyectos.obtenerObjetoId(proyectos.obtenerId());

    objetoEncontrado.tareas.forEach((el) => {
      this.$templateProyectosMainBody.querySelector(
        "[data-titulo]"
      ).textContent = el.titulo;

      let clone = this.$templateProyectosMainBody.cloneNode(true);

      this.$fragment.appendChild(clone);
    });

    this.$mainProyectos.appendChild(this.$fragment);
  }
*/
  render() {
    this.renderProyectos();
    this.renderHeader();
    this.renderMainHeader();
    //this.renderMainBody();
  }

  crearFormProyecto() {
    this.$formProyecto.dataset.method = "crear";
    this.$formProyecto.querySelector("h2").textContent = `Crear Proyecto`;
    this.$formProyecto.querySelector("button").textContent = `Crear Proyecto`;

    this.$formProyecto.querySelector("#tituloProyecto").value = "";
    this.$formProyecto.querySelector("#descripcionProyecto").value = "";
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
}

const display = new Display();

export { display };
