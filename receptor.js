
    
export default class Receptor{
    
    constructor(nX5, x5, nX4, x4, nX3, x3, nX2, x2, nX1, x1, constante, a, b, segmentos){
        this._nX5 = nX5;
        this._x5 = x5;
        this._nX4 = nX4;
        this._x4 = x4;
        this._nX3 = nX3;
        this._x3 = x3;
        this._nX2 = nX2;
        this._x2 = x2;
        this._nX1 = nX1;
        this._x1 = x1;
        this._constante = constante;
        this._a = a;
        this._b = b;
        this._segmentos = segmentos;
    }

    getNX5(){
        return this._nX5; 
    }

    getNX4(){
        return this._nX4;
    }

    getNX3(){
        return this._nX3;
    }

    getNX2(){
        return this._nX2;
    }

    getNX1(){
        return this._nX1;
    }

    getConstante(){
        return this._constante;
    }

    getX5(){

        if(this._x5 === 1){
            return ("x⁵");
        } else if(this._x5 === 0){
            return ("0⁵");
        }
    }

    getX4(){

        if(this._x4 === 1){
            return ("x⁴");
        } else if(this._x4 === 0){
            return ("0⁴");
        }
    }

    getX3(){

        if(this._x3 === 1){
            return ("x³");
        } else if(this._x3 === 0){
            return ("0³");
        }
    }

    getX2(){

        if(this._x2 === 1){
            return ("x²");
        } else if(this._x2 === 0){
            return ("0²");
        }
    }

    getX1(){
    
        if(this._x1 === 1){
            return ("x");
        } else if(this._x1 === 0){
            return ("0");
        }
    }

    getA(){
        return this._a;
    }

    getB(){
        return this._b;
    }

    getSegmentos(){
        return this._segmentos;
    }

    static readForm(){
        let inpNX5 = document.querySelector("#quinta");
        let inpX5 = document.querySelector("#quintaPotencia");
        let inpNX4 = document.querySelector("#cuarta");
        let inpX4 = document.querySelector("#cuartaPotencia");
        let inpNX3 = document.querySelector("#tercera");
        let inpX3 = document.querySelector("#terceraPotencia");
        let inpNX2 = document.querySelector("#segunda");
        let inpX2 = document.querySelector("#segundaPotencia");
        let inpNX1 = document.querySelector("#primera");
        let inpX1 = document.querySelector("#primeraPotencia");
        let inpConstante = document.querySelector("#constante");
        let inpA = document.querySelector("#posA");
        let inpB = document.querySelector("#posB");
        let inpSegmentos = document.querySelector("#segmentos");
        
        let nX5 = Number(inpNX5.value); 
        let x5 = Number(inpX5.value);
        let nX4 = Number(inpNX4.value);
        let x4 = Number(inpX4.value);
        let nX3 = Number(inpNX3.value);
        let x3 = Number(inpX3.value);
        let nX2 = Number(inpNX2.value);
        let x2 = Number(inpX2.value);
        let nX1 = Number(inpNX1.value);
        let x1 = Number(inpX1.value);
        let constante = Number(inpConstante.value);
        let A = Number(inpA.value);
        let B = Number(inpB.value);
        let segmentos = Number(inpSegmentos.value);

        if(A && B && segmentos){
            if(nX5 || x5 || nX4 || x4 || nX3 || x3 || nX2 || x2 || nX1 || x1 || constante){
                let ecuacion = new Receptor(nX5, x5, nX4, x4, nX3, x3, nX2, x2, nX1, x1, constante, A, B, segmentos);
            
                inpNX5.value = '';
                inpNX4.value = '';
                inpNX3.value = '';
                inpNX2.value = '';
                inpNX1.value = '';
                inpConstante.value = '';
                inpA.value = '';
                inpB.value = '';
                inpSegmentos.value = '';

                return ecuacion;

            } else {
                Swal.fire(
                    'Error',
                    'Es nesesario colocar por lo menos un numero en la ecuación',
                    'error'
                  );
                  return false;
            }
        }

        Swal.fire(
            'Error',
            'Es nesesario colocar las letras A y B ademas de los segmentos',
            'error'
          );
          return false;

        
    }
}