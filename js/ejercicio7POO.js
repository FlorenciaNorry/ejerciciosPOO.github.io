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
        //document.write(contacto.mostrarNombre + "" + contacto.mostrarTelefono + "<br>");
    }

    listarContacto() {
        let prop;
        for (prop in agenda) {
            document.write("Nombre: " + agenda[prop].mostrarNombre + "<br>");
            document.write("Telefono: " + agenda[prop].mostrarTelefono + "<br>");
            document.write("<br>");
            console.log(agenda);
        }
    }

    existeContacto(Inombre) {
        let prop;
        if (agenda.length > 0) {
            for (prop in agenda) {
                if (agenda[prop].mostrarNombre == Inombre) {
                    alert("El contacto ya existe");
                }
            }
        } else {
            alert("contacto guardado");
        }

    }
    buscarContacto() {
        let Bcontacto = prompt("Ingresar nombre del contacto");
        let prop;
        for (prop in agenda) {
            if (agenda[prop].mostrarNombre == Bcontacto) {
                return document.write("Nombre: " + agenda[prop].mostrarNombre + "<br>" + "Telefono: " + agenda[prop].mostrarTelefono);
            }
        }
        alert("El contacto no existe");
    }

    eliminarContacto() {
        let Bcontacto = prompt("Ingresar nombre del contacto");
        let i;
        for (i = 0; i < agenda.length; i++) {
            if(agenda[i].mostrarNombre==Bcontacto){
                agenda.splice(i,1);
            }
        }
    }
}

agenda = [];

do {
    let menu = parseInt(prompt("Elija una opcion:" + " " +
        "1-Añadir contacto" + " " +
        "2-Mostrar Contactos" + " " +
        "3-Buscar Contactos" + " " +
        "4-Eliminar contacto" + " " +
        "5-Salir"));

    switch (menu) {
        case 1:
            do {
                let Inombre = prompt("Ingresar el nombre del contacto");
                let Itelefono = prompt("Ingresar numero del telefono");
                contacto = new Contacto(Inombre, Itelefono);
                contacto.existeContacto(Inombre, Itelefono);
                contacto.aniadirContacto();
                val = confirm("Desea ingresar otro contacto");
            } while (val);
            break;
        case 2:
            contacto.listarContacto();
            break;
        case 3:
            contacto.buscarContacto();
            break;
        case 4:
            contacto.eliminarContacto();
            break;
        case 5:
            document.write("Gracias");
            break;
        default:
    }
    continuar = confirm("¿desea continuar?");
} while (continuar);