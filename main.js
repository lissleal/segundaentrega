//Lista de Compras

//Creo una clase para crear los productos
class Producto {
    constructor (nombre, precio, categoria, cantidad){
        this.nombre = nombre;
        this.precio = precio;
        this.categoria = categoria;
        this.cantidad = cantidad;
    }
}
//Inicializo algunas porque no quiero tener el array vacio

let producto1 = new Producto ("marraqueta", 800, "pan", 3);
let producto2 = new Producto ("leche", 1200, "lacteos", 1);
let producto3 = new Producto ("queso", 5000, "lacteos", 1);
let producto4 = new Producto ("pollo", 3000, "carnes", 2);

//Declaracion de variables
const arrayLista = [producto1, producto2, producto3, producto4];
let opcion;

// Creo una funcion para pedir al usuario que quiere hacer
function menu() {
    do {
    let opcion = parseInt(prompt(`Ingresa: \n
    1) Ver mi lista \n
    2) Agregar un producto \n
    3) Eliminar un producto \n
    4) Editar un producto \n
    5) Cuanto dinero necesito \n
    6) Filtrar por categoria \n
    7) Salir`));
    return opcion;
    //valido los datos
    }while (opcion >=8 || opcion < 0 || isNaN(opcion));
}

// Funcion para ver mi lista

function verLista() {
    console.log("\n Tu lista de compras es: ");
    console.table(arrayLista);
}
//Funcion para validar datos numericos
function validar(numero){
    if (numero <= 0 || isNaN(numero)){
        do{
        numero = parseInt(prompt("No ingresaste un valor válido, ingresa un monto en numeros") );
        } while (numero <= 0 || isNaN(numero));
    }
    return numero;
    }

//Creo una funcion para agregar un producto a mi array

function agregarProducto() {
    //Pido los datos
    let nombre = prompt("Ingrese el nombre del producto: ");
    let precio = validar(parseInt(prompt("Ingrese el valor del producto en pesos chilenos: ")));
    let categoria = prompt(`Ingrese categoria del producto: \n Ejemplo: \n "Frutas" \n "Verduras" \n "Carnes"\n`);
    let cantidad = validar(parseInt(prompt("Ingrese cantidad del producto: ")));
    //Uso el constructor para crear el producto
    const productoNuevo = new Producto (nombre, precio, categoria, cantidad);
    //Uso push para agregar el producto al array
    arrayLista.push(productoNuevo);
    //Muestro el resultado
    console.log ("\n Se añadió a tu lista de compras: ")
    console.table(productoNuevo);
}


//Funcion para eliminar un producto

function eliminarProducto() {
    //Le pido al usuario el producto que quiere eliminar
    let nombreComparar = prompt ("Ingrese el nombre del producto que desea eliminar: ");
    //Uso findIndex para encontrar el indice del producto que pidio
    let index = arrayLista.findIndex((producto) => producto.nombre === nombreComparar);
    //Si el producto esta en la lista el indice es distinto de -1
    if (index != -1){
            //Uso metodo splice para eliminar el producto
            arrayLista.splice(index,1);
            //Muestro el resultado
            console.log("\n Se eliminó de tu lista de compras: ");
            console.table(nombreComparar);
    } else {
            console.log ("El producto indicado no esta en la lista")
    }
    
}

// Funcion para editar un producto

function editarProducto (){
    //Le pido al usuario el producto que quiere editar
    let nombreComparar = prompt ("Ingrese el nombre del producto que desea editar: ");
    //Uso findIndex para encontrar el indice del producto que quiere editar
    let index = arrayLista.findIndex((producto) => producto.nombre === nombreComparar);
    //Si el producto esta en la lista el indice es distinto de -1
    if (index != -1){
        //Pido los valores nuevos a modificar
        let nombre = prompt("Ingrese el nombre del producto: "); 
        let valor = validar(parseInt(prompt("Ingrese el valor del producto en pesos chilenos: ")));
        let categoria = prompt(`Ingrese categoria del producto: \n Ejemplo: \n "Frutas" \n "Verduras" \n "Carnes"\n`);
        let cantidad = validar(parseInt(prompt("Ingrese cantidad del producto: ")));
        //Uso constructor para crear producto nuevo
        const productoModificado = new Producto (nombre, valor, categoria, cantidad);
        //Uso splice para modificar producto
        arrayLista.splice(index, 1 , productoModificado);
        //Muestro datos
        console.log("\n Tu nueva lista modificada es: ");
        console.table(arrayLista);
} else {
        console.log ("El producto indicado no esta en la lista")
}
}

//Funcion para sacar el total necesario
function calcularTotal(){
    //Uso metodo map para calcular valores totales
    const arrayValorTotal = arrayLista.map ((multi) => multi.cantidad * multi.precio);
    //Uso metodo reduce para calcular monto total
    let valorTotal = arrayValorTotal.reduce ((acumulador, elemento) => acumulador + elemento, 0);
    //Muestro valores
    console.log ("\n Para comprar todos los productos de tu lista de compras necesitas: ");
    console.log (" " + valorTotal + " pesos")

}

//Funcion para filtrar por categoria

function filtrar() {
    //Solicito al usuario la categoria que quiere filtrar
    let categoriaComparar = prompt("Ingrese la categoria que desea filtrar: ")
    //Uso filter para crear un array nuevo solo con esa categoria
    const arrayCategoria = arrayLista.filter((elemento)=> elemento.categoria === categoriaComparar);
    //Muestro resultados
    console.log("\n Los productos de la categoría " + categoriaComparar + " son: ");
    console.table(arrayCategoria);

}

//funcion salir
function salir() {
    alert("Hasta luego que tenga buenas compras.");
}

//Ejecuto el programa

alert("Bienvenido a tu lista de Compras")

do {
    opcion = menu();
switch (opcion){
    case 1: 
        verLista();
        break;
    case 2: 
        agregarProducto();
        break;
    case 3:
        eliminarProducto();
        break;
    case 4: 
        editarProducto();
        break;
    case 5:
        calcularTotal();
        break;
    case 6:
        filtrar();
        break;
    case 7:
        salir();
        break;
}
} while (opcion != 7)




