
//declaro el array de objetos que contendra los productos guardados
let productosJSON = []
fetch("data/productos.JSON")
.then((response) => response.json()
)
.then((data) => {data.forEach(element => {
    productosJSON.push(element)
})},
      
)
console.log(productosJSON)
try {   
    
} catch (error) {   console.log("No se logro encontrar el archivo")
    
}
 
//DECLARO LAS VARIABLES PARA TRABAJAR CON EL DOM
let contenedorFiltros = document.querySelector("#contenedorFiltros");
contenedorFiltros.style.display = "none";

let panelFiltros = document.querySelector("#filtros")
let comboFiltros = document.querySelector("#combos")
let panelFiltrosActivos = document.querySelector("#filtrosActivos");
let aIndex = document.querySelectorAll(".aIndex");
console.log(aIndex[0]);


//DECLARO LAS FUNCIONES

function CambiarColorLink(){
    aIndex[0].style.color = "#00000098";
    aIndex[1].style.color = "#00000098";
    aIndex[2].style.color = "#00000098";
}


// $(() => { //Esto se ejecuta una vez termina de cargar todo el DOM, es algo adicional, no necesario.
    
//         $.getJSON("data/propiedades.JSON", (respuesta) => { //Obtenemos los datos desde un JSON en forma estática. Es una petición asíncrona.
//         // GUARDAMOS LA RESPUESTA EN UNA VARIABLE DENTRO DE LISTATAREASJSON.
//         listaProductosJSON = respuesta;
//         console.log(listaProductosJSON);

//     })
// })

function DesCheckPres(){
    cboxMolido.checked = false;
    cboxGrano.checked = false;
    cboxCapsulas.checked = false;
}

function DesCheckInten(){
    cboxSuave.checked = false;
    cboxMedio.checked = false;
    cboxIntenso.checked = false;
}


// EVENTO CHANGE DEL COMBO DE tipo de PROPIEDAD DE LA PAGINA INDEX

let comboIntensidad = document.querySelector('#comboIntensidad');
comboIntensidad.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    //Primero borramos el contenido de #displayContainer
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "Suave":
            renderIndex("Suave");
            break;
        case "Medio":
            renderIndex("Medio");
            break;
        case "Intenso":
            renderIndex("Intenso");
            break;
    }
})


const renderIndex = (tipoIntensidad) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    

    productosJSON.forEach(elemento => {{
        if(elemento.tipo==tipoIntensidad){
         //Solo imprimimos los elementos que coincidan con el tipo elegido del dropdown
            // Hay que colocar += para que se sume al contenido ya puesto antes, sino lo sobreescribe.  
          //  contenedorFiltros.style.display = "none";
            contenedorFiltros.style.display = "";
            console.log(contenedor.innerHTML);
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div id="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            </div>
            </ul>
            </p>
            </div>
            <br>
           `
            console.log(elemento)
            const boton = document.createElement("button");
        boton.id='btnAgregar'
        const cont = document.createTextNode("Agregar al carrito")
        boton.appendChild(cont)
        let info = document.querySelector("#info")
         info.appendChild(boton)
            
        
        
        console.log(boton)
           console.log(contenedor.innerHTML)
        }}
        

        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px"; 
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
   //     contenedor.style.margin = "20px";
    //    contenedor.style.padding = "25px";

        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo intensidad: ${tipoIntensidad}</p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    CambiarColorLink();
 //   aIndex.style.color = "#00000098";


}
//Declaro el array donde guardo los productos
var arrayIntensidad = []
productosJSON.forEach(elemento => {
    if(elemento.tipo==tipoIntensidad){
            arrayIntensidad.push(elemento)}
    })

// EVENTO CHANGE DEL COMBO DE tipo de OPERACION DE LA PAGINA INDEX

let comboCategoria = document.querySelector('#comboCategoria');
comboCategoria.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "Nespresso":
            renderIndexCategoria("Nespresso");
            break;
        case "Oster":
            renderIndexCategoria("Oster");
            break;
        case "DolceGusto":
            renderIndexCategoria("DolceGusto");
            break
        case "Molido":
            renderIndexCategoria("Molido");
            break;
        case "Grano":
            renderIndexCategoria("Grano");
            break;
        case "Capsulas":
            renderIndexCategoria("Capsulas");
            break
    }
})


const renderIndexCategoria = (tipoCategoria) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.operacion == tipoCategoria) { //Solo imprimimos los elementos que coincidan con el tipo elegido del dropdown
            // Hay que colocar += para que se sume al contenido ya puesto antes, sino lo sobreescribe.  
            console.log('entro al if');
            console.log(contenedorFiltros.style);
            console.log(contenedorFiltros.style);
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo de categoria: ${tipoCategoria}</p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    CambiarColorLink();

}




// EVENTO CHANGE DEL COMBO DE CANTIDAD DE DORMITORIOS DE LA PAGINA INDEX

let comboPres = document.querySelector('#comboPresentacion');

comboPres.addEventListener('change', (evt) => {
    console.log(evt.target.value);
    switch (evt.target.value) { //Captamos el texto de la opción elegida con evento.target.value
        case "Molido":
            renderIndexPres("Molido");
            break;
        case "Grano":
            renderIndexPres("Grano");
            break;
        case "Capsulas":
            renderIndexPres("Capsulas");
            break;
    }
})


const renderIndexPres = (tipoPres) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.presentacion == tipoPres) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML += ` <p> Tipo: ${tipoPres}</p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    CambiarColorLink();
}


// EVENTO CLICK DEL BOTON APLICAR PARA FILTRAR POR PRECIOS
let pDesde = '';
let pHasta = '';
let bAplicar = document.querySelector('#baplicar');
bAplicar.addEventListener('click', (evt) => {
    if (iDesde != '' && iHasta != '') {
        pDesde = iDesde.value;
        localStorage.setItem('Precio_desde',pDesde); 
        pHasta = iHasta.value;
        localStorage.setItem('Precio_hasta', pHasta);
        let cDesde = localStorage.getItem('Precio_desde');
        let cHasta = localStorage.getItem('Precio_hasta');
        console.log("El precio colocado en el cuadro Desde es de: " + cDesde);
        console.log("El precio colocado en el cuadro Hasta es de: " + cHasta);
        renderIndexPrecio(pDesde, pHasta);


    } else {
        alert("Complete ambos campos Desde y Hasta");
    }
})


const renderIndexPrecio = (Desde, Hasta) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.precio >= Desde && elemento.precio <= Hasta) {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Desde: ${Desde} </p>`;
    panelFiltrosActivos.innerHTML += ` <p> Precio Hasta: ${Hasta} </p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
}



// EVENTO CLICK DEL combos checkbox tipo medio de Intensidad  --- cboxMedio

let cboxMedio = document.querySelector('#cboxMedio');
cboxMedio.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.tipo == 'Medio') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de Intensidad: Media </p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    cboxSuave.checked = false;
    cboxMedio.checked = false;
    cboxIntenso.checked = false;
    DesCheckPres();
    
})


// EVENTO CLICK DEL combos checkbox tipo de Intensidad --- cboxSuave

let cboxSuave = document.querySelector('#cboxSuave');
cboxSuave.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.tipo == 'Suave') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de intensidad: Suave</p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    cboxSuave.checked = false;
    cboxMedio.checked = false;
    cboxIntenso.checked = false;
    DesCheckPres();


})

// EVENTO CLICK DEL combos checkbox tipo de intensidad  --- cboxIntenso

let cboxIntenso = document.querySelector('#cboxIntenso');
cboxIntenso.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.tipo == 'Intenso') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de intensidad: Intenso </p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    cboxSuave.checked = false;
    cboxMedio.checked = false;
    cboxIntenso.checked = false;
    DesCheckPres();

})



// EVENTO CLICK DEL combos checkbox tipo de presentacion --- cboxMolido

let cboxMolido = document.querySelector('#cboxMolido');
cboxMolido.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.presentacion == 'Molido') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            </ul></p>

            </div>
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de presentacion: Molido </p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    cboxMolido.checked = false;
    cboxGrano.checked = false;
    cboxCapsulas.checked = false;
    DesCheckInten();

})

// EVENTO CLICK DEL combos checkbox tipo de presentacion --- cboxGrano
let cboxGrano = document.querySelector('#cboxGrano');
cboxGrano.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.presentacion == 'Grano') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            <button id="btnAgregar">Agregar al carrito</button>
            

            </div>
            </ul>
            </p>
            </div>
            <br>
           `
        }
    
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de presentacion: Grano </p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    cboxMolido.checked = false;
    cboxGrano.checked = false;
    cboxCapsulas.checked = false;
    DesCheckInten();


})


// EVENTO CLICK DEL combos checkbox tipo de presentacion --- cboxCapsulas

let cboxCapsulas = document.querySelector('#cboxCapsulas');
cboxCapsulas.addEventListener('click', (evt) => {
    document.querySelector("#displayIndex").innerText = ``
    let contenedor = document.querySelector("#displayIndex");
    listaProductosJSON.map(elemento => {
        if (elemento.presentacion == 'Capsulas') {
            contenedorFiltros.style.display = "";
            contenedor.innerHTML += ` 
            <div class= "contFiltradas">
            <p>
            <ul>
            <li> Foto: </li> 
            <img src=${elemento.img} class="imgs"/>
            <div class="info">
            <li> Tipo: ${elemento.tipo}</li>
            <li> Presentacion: ${elemento.presentacion}</li>
            <li> Categoria: ${elemento.categoria}</li>
            <li> Precio: ${elemento.precio}</li>
            </div>
            <button class="btnAgregar">Agregar al carrito</button>
            </ul></p>

            
            </div>
            <br>
           `
        }
        panelFiltros.style.border = "5px solid #aa76a1";
        panelFiltros.style.margin = "20px";
        panelFiltros.style.top = "100px";
        panelFiltros.style.height = "802px";
        contenedor.style.border = "2px solid rebeccapurple";
        let contenedorPrincipal = document.querySelector("#contenedorPrincipal");
        contenedorPrincipal.style.height = "122px";
        contenedorPrincipal.style.background = "#e1cccc";
        comboFiltros.style.display = "none";
    })
    panelFiltrosActivos.innerHTML = ``;
    panelFiltrosActivos.innerHTML += `<h6 id="pfiltros">Filtros Activos:</h6>`;
    panelFiltrosActivos.innerHTML += `<p> Tipo de presentacion: Capsulas </p>`;
    panelFiltrosActivos.style.color = "rgb(168 62 149)";
    cboxMolido.checked = false;
    cboxGrano.checked = false;
    cboxCapsulas.checked = false;
    DesCheckInten();

})


// Carrito

const capturarBoton = async() => {


document.querySelector("#info")
function captura(){
    let botonCaptura = document.getElementById("btnAgregar")
    return botonCaptura
}

var botonCarr = await(captura())
console.log(botonCarr)


botonCarr.addEventListener("click", () => {

    let contenedorCarrito = document.querySelector("#carritoContainer")
    console.log(contenedorCarrito)
    console.log("Despues del query carritocontainer")
    
    arrayIntensidad.forEach(elemento => {
    contenedorCarrito.innerHTML += `
    <div class="prodAgregados">
    <ul>
    <img src= ${elemento.img} class="imgs"/>
    <div class="info">
    
    <li> ${elemento.tipo}</li>
    <li>  ${elemento.detalles}</li>
    <li>  ${elemento.precio}</li>
    </div>

    </ul>
    
    </div>
    
    `
    }
    )

}
)
}
setTimeout(() => capturarBoton(),10000)

// function respuestaClick() {
//     let contenedorCarrito = document.querySelector('#carritoContainer')
//     console.log(contenedorCarrito)
//     contenedorCarrito.innerHTML += `
//     <div class="prodAgregados">
//     <ul>
//     <img src=${elemento.img} class="imgs"/>
//     <div class="info">
    
//     <li> ${elemento.tipo}</li>
//     <li>  ${elemento.detalles}</li>
//     <li>  ${elemento.precio}</li>
//     </div>

//     </ul>
    
//     </div>
    
//     `

// }
{/* <li> Tipo: ${elemento.tipo}</li> */}