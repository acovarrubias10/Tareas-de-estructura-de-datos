import UI from './iu.js';
import Producto from './producto.js'
import Inventario from './inventario.js'

const ui = new UI();
const inventario = new Inventario();

const formularioAgregar = document.querySelector('#formulario-agregar');
const formularioBorrar = document.querySelector('#formulario-borrar');
const formularioBuscar = document.querySelector('#formulario-buscar');
const btnListarProductos = document.querySelector('#btn1');
const btnListarProductosReverse = document.querySelector('#btn2')

formularioAgregar.addEventListener('submit', validarDatos);
formularioBorrar.addEventListener('submit', borrarArticulo);
formularioBuscar.addEventListener('submit', buscarArticulo);
btnListarProductos.addEventListener('click', recuperarProducto);
btnListarProductosReverse.addEventListener('click', recuperarProducto2);

function validarDatos(e) {
    e.preventDefault();
    const nombre = document.getElementById('nombre').value;
    const descripcion = document.getElementById('descripcion').value;
    const cantidad = Number(document.getElementById('cantidad').value);
    const costo = Number(document.getElementById('costo').value);

    if(inventario.totalProductos() >=20) {
        ui.mostrarMensaje('Alcanzaste el límite de productos a ingresar');
    } else {
        if(nombre === '' || descripcion === '' || cantidad === '' || costo === '') {
            ui.mostrarMensaje('Necesitas llenar todos los campos.');
        } else if( isNaN(cantidad) || cantidad <= 0) {
            ui.mostrarMensaje('Los campos no se han llenado correctamente');
        } else if(costo <= 0 || isNaN(costo)) {
            ui.mostrarMensaje('Los campos no se han llenado correctamente');
        } else {
            const nuevoProducto = new Producto(nombre, descripcion, cantidad, costo);
            inventario.agregarProducto(nuevoProducto);
        }
    }
    setTimeout(() => {
        limpiar();
    }, 2000)
}

function borrarArticulo(e) {
    e.preventDefault();
    const codigo = Number(document.querySelector('#codigoBorrar').value);
    if(inventario.borrarProducto(codigo)) {
        alert('El articulo ha sido borrado');
        return;
    } else {
        alert('¡EROR! El artículo no se ha podido borrar')
    }
    setTimeout(() => {
        limpiar();
    }, 3000)
}

function buscarArticulo(e) {
    e.preventDefault();
    const codigoProducto = Number(document.querySelector('#codigoBuscar').value);
    const productos = inventario.buscarProducto(codigoProducto);
    for(let producto of productos) {
        ui.mostrarProducto(producto);
    }
    setTimeout(() => {
        limpiar();
    }, 3000)
}

function recuperarProducto() {
    borrarElementos();
    for(let producto of inventario.productos) {
        ui.listarProductos(producto);
    }
}

function recuperarProducto2() {
    borrarElementos();
    for(let producto of inventario.productos.reverse()) {
        ui.listarProductos(producto)
    }
}

function borrarElementos() {
    const lista = document.querySelector('#listado-productos');
    while(lista.firstChild) {
        lista.firstChild.remove(lista.firstChild);
    }
}

function limpiar() {
    formularioAgregar.reset();
    formularioBorrar.reset();
    formularioBuscar.reset();
}