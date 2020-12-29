class auto{
    constructor(colorA, marcaA, modeloA){
        this.color = colorA;
        this.marca = marcaA;
        this.modelo = modeloA;
    }

    encenderAuto () {
        document.write(`El auto esta encendido`)
    }
    
    apagarAuto (){
        document.write(`<br>El auto esta apagado`); 
    }
    
}


let Automovil = new auto("Azul", "Audi", "2020");

Automovil.encenderAuto();
Automovil.apagarAuto();