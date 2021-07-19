// [ok] Generar funcion que haga un descuento
// [ok] Generar una funcion que cada vez que hagamos click haga el descuento. 
// Generar funcion que valide el cupon y muestre mensaje de validacion de cupon y retorne el valor del descuento.
// Generar funcion que aplique el descuento al precio más el valor del cupon. 

function descuentoDePrecio(precio, descuento){
    const porcentajePrecionDescuento = 100 - descuento;
    const precionConDescuento = (precio * porcentajePrecionDescuento) / 100;

    return precionConDescuento;
}

function calcularDescuento(){
    const cupon = document.getElementById('cuponDescuento').value;
    if (cupon === 'cuponA') {
        const precioArticulo = document.getElementById('precioArticulo');
        const priceValue = precioArticulo.value;
        const valorPrecio = parseInt(priceValue);
    
        const porcentajeDescuentoArticulo = document.getElementById('porcentajeDescuentoArticulo');
        const discountValue = porcentajeDescuentoArticulo.value;
        const porcentajeDescuento = parseInt(discountValue);
        const porcentajeDescuentoFinal = porcentajeDescuento +10;
        const precioFinal = descuentoDePrecio(valorPrecio, porcentajeDescuentoFinal);
    
        const infoFinal = document.getElementById('infoPrice');
        infoFinal.innerText = `El precio de tu articulo con el ${porcentajeDescuentoFinal}% de descuento es de $${precioFinal}`;
    }else if(cupon === 'cuponB'){
        const precioArticulo = document.getElementById('precioArticulo');
        const priceValue = precioArticulo.value;
        const valorPrecio = parseInt(priceValue);
    
        const porcentajeDescuentoArticulo = document.getElementById('porcentajeDescuentoArticulo');
        const discountValue = porcentajeDescuentoArticulo.value;
        const porcentajeDescuento = parseInt(discountValue);
        const porcentajeDescuentoFinal = porcentajeDescuento +20;
        const precioFinal = descuentoDePrecio(valorPrecio, porcentajeDescuentoFinal);
    
        const infoFinal = document.getElementById('infoPrice');
        infoFinal.innerText = `El precio de tu articulo con el ${porcentajeDescuentoFinal}% de descuento es de $${precioFinal}`;
    }else if(cupon === 'cuponC'){
        const precioArticulo = document.getElementById('precioArticulo');
        const priceValue = precioArticulo.value;
        const valorPrecio = parseInt(priceValue);
    
        const porcentajeDescuentoArticulo = document.getElementById('porcentajeDescuentoArticulo');
        const discountValue = porcentajeDescuentoArticulo.value;
        const porcentajeDescuento = parseInt(discountValue);
        const porcentajeDescuentoFinal = porcentajeDescuento +30;
        const precioFinal = descuentoDePrecio(valorPrecio, porcentajeDescuentoFinal);
    
        const infoFinal = document.getElementById('infoPrice');
        infoFinal.innerText = `El precio de tu articulo con el ${porcentajeDescuentoFinal}% de descuento es de $${precioFinal}`;
    }else{
    const precioArticulo = document.getElementById('precioArticulo');
    const priceValue = precioArticulo.value;
    const valorPrecio = parseInt(priceValue);

    const porcentajeDescuentoArticulo = document.getElementById('porcentajeDescuentoArticulo');
    const discountValue = porcentajeDescuentoArticulo.value;
    const porcentajeDescuento = parseInt(discountValue);
    const precioFinal = descuentoDePrecio(valorPrecio, porcentajeDescuento);

    const infoFinal = document.getElementById('infoPrice');
    infoFinal.innerText = `El precio de tu articulo con el ${porcentajeDescuento}% de descuento es de $${precioFinal}`;
    }
}

function aplicarCupon(){
    const cupon = document.getElementById('cuponDescuento').value;
    switch (cupon) {
        case 'cuponA':
            const infoCupon1 = document.getElementById('messageCupon');
            infoCupon1.innerText = `10% extra en tu descuento`;
            break;
        case 'cuponB':
            const infoCupon2 = document.getElementById('messageCupon');
            infoCupon2.innerText = `20% extra en tu descuento`;
            break;
        case 'cuponC':
            const infoCupon3 = document.getElementById('messageCupon');
            infoCupon3.innerText = `30% extra en tu descuento`;
            break;
        default:
            const infoCupon4 = document.getElementById('messageCupon');
            infoCupon4.innerText = `El cupon no es válido`;
            break;
    }
}