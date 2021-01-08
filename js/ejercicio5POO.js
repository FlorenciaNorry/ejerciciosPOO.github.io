class Persona {
    constructor(nombreP, edadP, dniP, sexoP, alturaP, NacP) {
        this.nombre = nombreP;
        this.edad = edadP;
        this.dni = dniP;
        this.sexo = sexoP;
        this.altura = alturaP;
        this.Nac = NacP;
    }

    mostrareneracion() {
        let SilentGenration = "Silent Generation(Niños de Post Guerra) - Rasgo caracteristico: Austeridad: Conflictos Bélicos";
        let BabyBom = "Baby Boom - Paz y explocion demografica - Rasgo caracteristico: Ambicion";
        let GeneracionX = "Generacion X - Crisis del 73 y transicion española - Rasgo caracteristico: Obseción por el exito";
        let GeneracionY = "Generación Y - Inicio de la digitalización - Rasgo caracteristico: Frustración";
        let GeneracionZ = "Generacion Z - Expanción masiva de internet - Rasgo caracteristico: Irreverencia";

        if (this.Nac > 1930 && this.Nac <= 1948) {
            document.write(SilentGenration);
        } else if (this.Nac > 1949 && this.Nac <= 1968) {
            document.write(BabyBom);
        } else if (this.Nac > 1969 && this.Nac <= 1980) {
            document.write(GeneracionX);
        }else if (this.Nac > 1981 && this.Nac <= 1993) {
            document.write(GeneracionY);
        }else if (this.Nac > 1994 && this.Nac <= 2010) {
            document.write(GeneracionZ);
        }else{

        }

    }


    esMayorDeEdad() {
        if (this.edad > 18) {
            document.write("<br>Es mayor de edad<br>");
        } else {
            document.write("<br>Es menor de edad<br>");
        }
    }

    generarDni(dni) {
        dni = Math.floor((Math.random() * 50000000) + 0);
        this.dni = dni;
    }

    mostrarDatos() {
        document.write(
            "Nombre : " + this.nombre +
            "<br>Edad: " + this.edad +
            "<br>Dni: " + this.dni +
            "<br>Sexo: " + this.sexo +
            "<br>Altura" + this.altura +
            "<br>Fecha nac: " + this.Nac
        );
    }
}

let Inombre = prompt("Ingresar nombre");
let Iedad = prompt("Ingresar edad");;
let Isexo = prompt("Ingresar sexo");
let Ialtura = prompt("Ingresar altura");
let IFechaNac = prompt("Ingresar año de nacimiento");


let pers = new Persona(Inombre, Iedad, "", Isexo, Ialtura, IFechaNac);
pers.generarDni();
pers.mostrarDatos();
pers.esMayorDeEdad();
pers.mostrareneracion();






//pasando los parametros 

// let pers = new Persona("FLorencia", "33", "", "F", "1,90", "1987");
// // pers.generarDni();
// pers.generarDni();
// pers.mostrarDatos();
// pers.esMayorDeEdad();
// pers.mostrareneracion();
