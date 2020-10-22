export default class Inventario {
    constructor() {
        this._productos = [];
    }

    get productos() {
        return this._productos;
    }

    totalProductos() {
        return this.productos.length;
    }

    agregarProducto(producto) {
        if(this.productos.length >= 20) {
            ui.imprimirMensaje('No se agregó el producto correctamente');
            return;
        } else {
            this._productos.push(producto);
            console.log(this.productos)
            return;
        }
    }

    borrarProducto(codigo) {
        let borrado = false;
        this._productos.forEach((producto, indice) => {
            if(producto.codigo === codigo) {
                borrado = true
                this._productos.splice(indice, 1);
            }
        })
        return borrado
    }

    buscarProducto(codigo) {
        const producto = this.productos.filter(producto => producto.codigo === codigo);
        return producto
    }
}