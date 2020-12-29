class cuentaBancaria{
    constructor(titularC, saldoC){
        this.titular = titularC;
        this.saldo = saldoC;
    }

    ingresar(depositar){
        this.saldo = this.saldo + depositar;
        document.write("Su saldo actual es de : " + this.saldo);
    }

    extraer(montoE){
        this.saldo = this.saldo - montoE;
        document.write("<br>Su saldo actual es de : " + this.saldo);
    }

    informar(depositar, montoE){
        ``
        document.write("<h4>Ultimos movimientos</h4> Titular: "+ this.titular + "<br> monto Ingresado = " + depositar + "<br>monto extraido : " + montoE + "<br>saldo actual : " + this.saldo
        );
    }
}

let cuenta = new cuentaBancaria("Alex", "");
let depositar = prompt("cuanto dinero desea depositar");
let retirar = prompt("cuanto dinero desea retirar");
cuenta.ingresar(depositar);
cuenta.extraer(retirar);
cuenta.informar(depositar,retirar);



