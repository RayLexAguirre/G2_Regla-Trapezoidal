import Receptor from "./receptor.js";
import Estructurador from "./estructurador.js";

function limpear() {
    document.getElementById('Interpolacion').reset();
}

console.log("Prueba");

/*
let r1 = new Receptor();
let e1 = new Estructurador(r1);


let r1 = new Receptor(0, 0, 0, 0, 1, 1, 0, 0, 0, 0, 1, 1, 3, 4);
let e1 = new Estructurador(r1);

console.log(r1.getNX5());
console.log(r1.getNX4());
console.log(r1.getNX3());
console.log(r1.getNX2());
console.log(r1.getNX1());
console.log(r1.getConstante());
console.log(r1.getX5());
console.log(r1.getX4());
console.log(r1.getX3());
console.log(r1.getX2());
console.log(r1.getX1());
console.log(r1.getA());
console.log(r1.getB());
console.log(r1.getSegmentos());


console.log("Estructurador");
console.log(e1.formarFormula(r1));
console.log(e1.clacularPendiente(r1)); 
console.log(e1.tablaX(r1));
console.log(e1.formarFormulaFuncional(r1));
//console.log(e1._estX5(r1), "hola");
console.log(e1.formIntegralA(r1));
console.log(e1.formIntegralB(r1));
console.log(e1.primeraIntegral(r1));
console.log(e1.diseñoIntegral(r1));
console.log(e1.ecuacionI(r1));
console.log(e1.calcularER(r1));
console.log(e1.add(r1));
*/
class App{
    constructor(){ 
        this.btnRegister = document.querySelector("#btnRegister");
        btnRegister.addEventListener("click", this.readForm);
        this._table = document.querySelector('#tableGrades');
        this._estructura = new Estructurador();
    }

    readForm = () => {
        let receptor = Receptor.readForm();
    
        if(receptor === false){
            Swal.fire(
                'Error',
                'Es nesesario colocar las letras A y B ademas de los segmentos',
                'error'
              );
              return;
        }

        let completado = this._estructura.add(receptor);
        console.log(this._estructura);
        
        this._printResolution(receptor);
            Swal.fire(
                'Bien!',
                'Ecuación Registrada',
                'success'
              )

    }

    _printResolution(receptor){

        document.getElementById("colFormula").innerHTML = this._estructura.formarFormula(receptor);
        document.getElementById("colAltura").innerHTML = this._estructura.clacularPendiente(receptor);
        document.getElementById("colIntegral").innerHTML = this._estructura.diseñoIntegral(receptor);
        document.getElementById("colIntegralI").innerHTML = this._estructura.primeraIntegral(receptor) + " u²";
        document.getElementById("colI").innerHTML = this._estructura.ecuacionI(receptor) + " u²";
        document.getElementById("colEr").innerHTML = this._estructura.calcularER(receptor) + "%";

    }

}

new App();
