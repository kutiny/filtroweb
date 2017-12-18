//VARIABLES DEL DOCUMENTO:
//NOTESE QUE LA VARIABLE classInputCheckbox LLEVA EL PUNTO DE CLASE
//EL RESTO DE CONSTANTES NO LLEVAN NINGUN PRE-NOMBRE.
const idListaOculta = "publicaciones",
			idListaMostrar = "listado",
			idBotonFiltrar = "btn_filtrar",
			idInputTextFiltro = "text_filter",
			classInputCheckbox = ".input__filtro",
			atributoFiltro = "data-type";
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------- NO EDITAR LAS SIGUIENTES LINEAS POR DEBAJO SI NO ERES DESARROLADOR	--------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------- https://github.com/Alex253/filtroweb ---------------------------------------------------
//------------------------------------------------------------------------------------------------------------
//------------------------------------------------------------------------------------------------------------
document.addEventListener("DOMContentLoaded",()=>{
	const source = document.getElementById(idListaOculta).childNodes,
				list = document.getElementById(idListaMostrar),
				btn_filtrar = document.getElementById(idBotonFiltrar),
				txt_filtrar = document.getElementById(idInputTextFiltro);
	limpiarLista(list);
	cargarTodosArchivos(source,list);
	btn_filtrar.addEventListener("click",e =>{
		e.preventDefault();
		limpiarLista(list);
		const filtros = document.querySelectorAll(classInputCheckbox);
		for(let i = 0 ; i < filtros.length ; i++){
			if (filtros[i].checked){
				for(let j = 0 ; j < source.length ; j++){
					let type = source[j].getAttribute(atributoFiltro).trim().toLowerCase();
					if (type.includes( filtros[i].getAttribute("id").trim().toLowerCase()) )
						list.appendChild(source[j].cloneNode(true));
				}
			}
		}
		verificarListaVacia();
	});
	txt_filtrar.addEventListener("keyup",filtrarTexto);
	function limpiarLista(lista){
		while(lista.firstChild){
			lista.removeChild(list.firstChild);
		}
	}
	function cargarTodosArchivos(source,list){
		for (let i = 0 ; i < source.length ; i++){
			list.appendChild(source[i].cloneNode(true));
		}
	}
	function filtrarTexto(){
		const busqueda = txt_filtrar.value.trim().toLowerCase();
		limpiarLista(list);
		for (let i = 0 ; i < source.length ; i++){
			let text = source[i].textContent.trim().toLowerCase(),
					type = source[i].getAttribute(atributoFiltro);
			if (text.includes(busqueda) || type.includes(busqueda))
				list.appendChild(source[i].cloneNode(true));
		}
		verificarListaVacia();
	}
	function verificarListaVacia(){
		if (list.childNodes.length === 0){
			let texto = document.createElement("p");
			texto.textContent = "No hay ningún archivo con ese filtro";
			list.appendChild(texto);
		}
	}
});
