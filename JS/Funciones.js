const carrito = [];
let seccion = document.getElementById("principal");
let tituo = document.getElementById("titulo");
let Fecha = document.getElementById("Fecha");
Fecha.innerText = new Date().toLocaleDateString();
let ProductosCartas = document.getElementById("productos");

let boton2 = document.getElementById("Finalizar")
let Boton;


function Renderizado() {
    for (const producto of Products) {
        ProductosCartas.innerHTML += `
        <div class="card col-sm-2 TextoOrg content-fluid">
                <img src=${producto.imagen} class="card-img-top Tamaño" alt=${producto.nombre}>
                <div class="card-body">
                    <h5 class="card-title">${producto.nombre}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text">Precio: $ ${producto.precio}</p>
                    <div class="abajo"> 
                    <button id="btn${producto.id}" " class="btn btn-primary "> Comprar </button>
                    </div>
                </div>
        </div>
        `;
    }

    Products.forEach((producto) => {
        document.getElementById(`btn${producto.id}`).addEventListener("click", function () { agregarAlcarrito(producto); })
    })
}

Renderizado();

function agregarAlcarrito(productoAcomprar) {
    carrito.push(productoAcomprar);
    console.table(carrito);
    Swal.fire({
        title: productoAcomprar.nombre,
        text: `se agrego al carrito`,
        imageUrl:  productoAcomprar.imagen,
        backdrop: `rgba(254, 247, 234, 0.448)`,
        imageWidth: 200,
        imageHeight: 200,
        imageAlt: productoAcomprar.nombre,
    });
    document.getElementById("tablabody").innerHTML += `
        <tr>
            <td>${productoAcomprar.id} </td>
            <td>${productoAcomprar.nombre} </td>
            <td>${productoAcomprar.precio} </td>
            <td><button class="delete btn btn-danger" id="kick${productoAcomprar.id}">Eliminar del carrito</button> </td>
        </tr>
    `;
    let totalCarrito = carrito.reduce((acumulador, prod) => acumulador + prod.precio, 0);
    document.getElementById("total").innerText = "Total a pagar: $ " + totalCarrito;
}

const producto2 = [];
const guardarLocal = JSON.parse(localStorage.getItem("ListaDelcarro"))
for (const objeto of carrito) {
    producto2.push(new Products(objeto));
}


boton2.onclick = () => {
    FinalizarCompra();
    Swal.fire("Compra finalizada");
}


function FinalizarCompra() {
    document.getElementById("tablabody").innerHTML = ` `
}

const eliminar = document.getElementById("kick${productoAcomprar.id}")

eliminar.onclick = () => {
    eliminar.addEventListener(`click`,alert("Eliminado pau")) 
    console.log("Se apreto")
    Swal.fire("Se elimino el producto del carrito")
}