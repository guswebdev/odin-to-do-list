class Data {
  data = [];

  mostrarData() {
    console.log(this.data);
  }
  agregarData(dato) {
    this.data.push(dato);
  }
}

const data = new Data();

export { data };
