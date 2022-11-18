/// SE OBTIENE DEL JSON CREADO MANUEALMENTE LOS DATOS DE MIS EMPLEADO ( API ) 
function obtenerDatosJson(){
    const URLJSON="/users.json";
    fetch(URLJSON)
        .then(res => res.json() )
        .then(datosRecibidos => {
            const misEmpleados = datosRecibidos.empleados;
            misEmpleados.forEach(empleado => {
            document.getElementById("empleados").innerHTML += `
            <div class="card" style="width: 18rem;">
                <img src="${empleado.imagen}" class="card-img-top" alt="Foto empleado">
                <div class="card-body">
                    <h5 class="card-title">${empleado.nombre}</h5>
                    <p class="card-text">${empleado.puesto}</p>
                    <h5 class="card-title">${empleado.edad}</h5>
                </div>
            </div>
            `
            });
        })
}

obtenerDatosJson ();