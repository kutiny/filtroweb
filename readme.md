# FILTRO WEB
Es un filtro que nos permite buscar en un listado por cadena de texto o filtrando su tipo de archivo.

# RECOMENDACIONES
Si no conoces sobre desarrollo en Javascript te recomiendo utilizar el archivo que está dentro de la carpeta compressed.

Para utilizarlo necesitaras en tu documento HTML los siguientes elementos:
- Un DIV con ID = "publicaciones" (<div id="publicaciones"></div>), que contendrá solo los enlaces a los archivos (sólo elementos a)
		Este DIV no deberá ser visible en el documento (ya que es el que contiene todos los enlaces)

- Un DIV con ID = "listado" (<div id ="listado"></div>), es el que se actualizará constantemente con el filtro.
	Puede estar vacío o no, de igual manera se limpia al cargar la página y se colocan todos los elementos de #publicaciones.

- La cantidad de CheckBox que sea necesaria en tu proyecto, deben incluir la CLASE ".input__filtro" y el ID debe ser exactamente el tipo de archivo que se quiere filtrar, por ejemplo "mp3, doc, pdf".

- El tipo de datos de cada archivo se especifica en cada elemento 'a' de #publicaciones, con el atributo 'data-type', por ejemplo <a href="archivos/archivo.extension" data-type="extension">Texto a Mostrar</a>.
	Este tipo de datos es el que se filtra, y se filtra de acuerdo al ID de los checkbox.

- Un INPUT de tipo texto con el ID = "text__filter", se va a encargar de buscar sobre el texto de la etiqueta de enlace.