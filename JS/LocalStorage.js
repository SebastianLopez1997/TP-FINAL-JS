let princi = document.getElementById("princi");
let boton = document.getElementById("modo");

let modo = localStorage.getItem("modo");

if (modo !=null){
    if (modo == "dark")
    {
        modo 
        document.body.className= modo;
        princi.className=modo;
        boton.innerText="Light mode";
    }
}else{
    modo="light"
}

boton.onclick = () => {
    if (modo == "light") {
        document.body.className = "dark";
        princi.classList.remove("light");
        princi.classList.add("dark");
        boton.innerText = "Light modo";
        modo = "dark";
    } else {
        document.body.className = "light";
        princi.classList.remove("dark");
        princi.classList.add("light");
        boton.innerText = "dark mode";
        modo = "light";
    }
    localStorage.setItem("modo", modo);
}
localStorage.setItem("anio",2022);

let anioActual = parseInt(localStorage.getItem("anio"))

console.log(anioActual)


const objetoAjson = JSON.stringify(Products)
console.log(objetoAjson)

localStorage.setItem("MisProductos",objetoAjson)

