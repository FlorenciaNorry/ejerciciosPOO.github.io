class rectangulos{
    constructor(altoR, anchoR){
        this.alto = altoR;
        this.ancho = anchoR;
    }

    get mostrarAlto(){
        return this.alto;
    }

    get mostrarAncho(){
        return this.ancho;
    }

    set modificarAlto(nuevoAlto){
        this.alto = nuevoAlto;
    }
  
    set modificarAncho(nuevoAncho){
        this.ancho = nuevoAncho;
    }

    calcular(base,altura){
        let perimetro = 0;
        let area =0;
        perimetro = ((2*base)+(2*altura));
        document.write(`<br>El perimetro es : ${perimetro}`);
        area = ((base*altura)/2);
        document.write(`<br>El area es : ${area}`);
    }
}



let base = prompt("Ingrese la altura");
let altura = prompt("Inrese el ancho");

let Cuadrado = new rectangulos(base, altura);

document.write("La altura ingresada es :" +  Cuadrado.mostrarAlto);
document.write("<br>La base ingresada es : " + Cuadrado.mostrarAncho);

Cuadrado.calcular(base,altura);

Cuadrado.modificarAlto = "4";
document.write("<br>El alto se modifica por : " + Cuadrado.mostrarAlto);

Cuadrado.modificarAncho = "2";
document.write("<br>El alto se modifica por : " + Cuadrado.mostrarAncho);
