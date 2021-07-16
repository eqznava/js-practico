// Código de Cuadrado
function perimetroCuadrado(lado){
    const perimetro = lado * 4;
    return perimetro;
}

function areaCuadrado(lado){
    const area = lado * lado;
    return area;
}

function calcularPerimetroCuadrado(){
    const input =  document.getElementById('InputCuadrado');
    const value =  input.value;

    const perimetro = perimetroCuadrado(value);
    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input =  document.getElementById('InputCuadrado');
    const value =  input.value;

    const area = areaCuadrado(value);
    alert(area);
}

//Código de Triangulo

function perimetroTriangulo(lado1, lado2, lado3){
    const perimetro = lado1 + lado2 + lado3;
    return perimetro;
}

function areaTriangulo(base, altura){
    const area = (base * altura) / 2;
    return area;
}

function calcularPerimetroTriangulo(){
    const input_1 = document.getElementById('InputTriangulo_1');
    const input_2 = document.getElementById('InputTriangulo_2');
    const input_3 = document.getElementById('InputTriangulo_3');
    const value_1 = input_1.value;
    const value_2 = input_2.value;
    const value_3 = input_3.value;
    const value_one = parseInt(value_1);
    const value_two = parseInt(value_2);
    const value_three = parseInt(value_3);


    const perimetro = perimetroTriangulo(value_one, value_two, value_three);
    alert(perimetro);
}

function calcularAreaTriangulo(){
    const base = document.getElementById('InputTriangulo_4');
    const altura = document.getElementById('InputTriangulo_5');
    const base_1 = base.value;
    const altura_1 = altura.value;
    const base_one = parseInt(base_1);
    const altura_one = parseInt(altura_1);

    const area = areaTriangulo(base_one, altura_one);
    alert(area);
}

// Código de Circulo
const pi = 3.1415;

function diametroCirculo(radio){
    const diametro = radio * 2;
    return diametro;
}

function perimetroCirculo(radio){
    const diametro = diametroCirculo(radio);
    const perimetro = diametro * pi;
    return perimetro;
}

function areaCirculo(radio){
    const area = radio**2 * pi;
    return area;
}

function calcularPerimetroCirculo(){
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const radio = parseInt(value)

    const perimetro = perimetroCirculo(radio);
    alert(perimetro);
}

function calcularAreaCirculo(){
    const input = document.getElementById('InputCirculo');
    const value = input.value;
    const radio = parseInt(value);

    const area = areaCirculo(radio);
    alert(area);
}

//Código de Triangulo Isósceles
function alturaIsosceles(base, lado){
    const paso_1 = (lado**2) - (base / 2)**2;
    const altura = Math.sqrt(paso_1);
    return altura;
}

function calcularAlturaIsosceles(){
    const input1 = document.getElementById('InputIsosceles_6')
    const input2 = document.getElementById('InputIsosceles_7')
    const input3 = document.getElementById('InputIsosceles_8')
    const value1 = input1.value;
    const value2 = input2.value;
    const value3 = input3.value;
    const base = parseFloat(value1);
    const lado1 = parseFloat(value2);
    const lado2 = parseFloat(value3);

    if (lado1 === lado2) {
        const altura = alturaIsosceles(base, lado1)
        alert(altura + ' cm')
    }else{
        alert('Los triangulos isósceles tienen dos lados iguales.')
    }
}
