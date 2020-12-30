class Productos {
    
    constructor(codigoP, nombreP, precioP) {
        this.codigo = codigoP;
        this.nombre = nombreP;
        this.precio = precioP;
    }

    get mostrarCodigo() {
        return this.codigo;
    }
    get mostrarNombre() {
        return this.nombre;
    }
    get mostrarPrecio() {
        return this.precio;
    }

}

let productoUno = new Productos("1", "Computadora", "50000");
let productoDos = new Productos("2", "Monitor", "25000");
let productoTres = new Productos("3", "Impresora", "42000");

let listaProd = [productoUno, productoDos, productoTres];

for (i in listaProd) {
   document.write(listaProd[i].mostrarCodigo+" "+listaProd[i].mostrarNombre+" "+listaProd[i].mostrarPrecio+"<br>");
}
