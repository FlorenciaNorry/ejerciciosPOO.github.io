class Contacto {
    constructor(nombreP, telefonoP) {
        this.nombre = nombreP;
        this.telefono = telefonoP;
    }

    get mostrarNombre() {
        return this.nombre;
    }
    get mostrarTelefono() {
        return this.telefono;
    }
    set modificarNombre(nuevoNombre) {
        this.nombre = nuevoNombre;
    }
    set modificarTelefono(nuevoTelefono) {
        this.telefono = nuevoTelefono;
    }

    aniadirContacto() {
        agenda.push(contacto);
        console.log(agenda);
    }
    // listarContactos() {
    //     for (i in agenda) {
    //         document.write(agenda[i].mostrarNombre + "" + agenda[i].mostrarTelefono);
    //     }
    // }
}


let agenda = [10];
for (i = 0; i < agenda.length; i++) {
    let Inombre = prompt("Ingresar el nombre del contacto");
    let Itelefono = prompt("Ingresar numero del telefono");
    contacto = new Contacto(Inombre, Itelefono);
    console.log(contacto);
    contacto.aniadirContacto();
}








// let op = parseInt(prompt("1-Añadir contacto<br>2-Buscar contacto<br>3-Eliminar contacto<br>4-Ver contactos5-Salir"));

// switch (op) {
//     case 1:
//         for (i = 0; i < 2; i++) {
//             while(op=1){
//                 let Inombre = prompt("Ingresar el nombre del contacto");
//                 let Itelefono = prompt("Ingresar numero del telefono");
//                 prompt("¿Desea Ingresar un contacto?");
//                 agenda[i] = new Contacto(Inombre, Itelefono);

//             }

//         }
//         for (i in agenda) {
//             document.write(agenda[i].mostrarNombre + "" + agenda[i].mostrarTelefono + "<br>");
//         }
//         break;
//     case 2:

//         break;
//     case 3:
//         document.write("El usuario selecciono <br>");
//         break;
//     case 4:
//         document.write("El usuario selecciono <br>");
//         break;
//     case 5:
//         document.write("Gracias");
//         break;
//     default:
// }

