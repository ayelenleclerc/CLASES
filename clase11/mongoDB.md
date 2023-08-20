##MongoDB Sintaxis

#### COMANDOS DE APOYO

**show dbs :** Muestra las bases de datos existentes.

**use db_name :**  Crea una nueva base de datos (en caso de no existir) y se posiciona sobre ella.

**db:** Muestra en qué base de datos estamos posicionados.

**show collections :** Muestra las colecciones existentes en la base de datos actual.

**db.createCollection(collection_name) :** Crea una nueva colección.

**db.dropDatabase() :** Borra la base de datos actual.

**db.collection.drop() :** Borra la colección actual.

### COMANDOS CRUD

#### CR = Create, Read

**db.collection.insertOne(document):** Crea un documento en la colección actual.

**db.collection.insertMany(documents):** Crea varios documentos en la colección actual.

**db.collection.find(option) :** Consulta los documentos de la colección actual.

**db.collection.findOne(option) :** Consulta el primer documento de la colección actual.

**db.collection.find(option).pretty() :** Consulta los documentos de la colección actual, pero con formato.

#### U = Update

**db.collection.updateOne(query, update,option) :** Actualiza un documento de la colección actual.
- query: sirve para filtrar qué elemento actualizar (usa los filtros igual al find)
- update: Apartado para indicar qué actualizar de los documentos que cumplen con el filtro. Update tiene sus propios operadores como `$set` ,` $unset`, `$inc`, `$rename`,` $mul`, `$min`, `$max`.
- option: Opciones a tomar en cuenta para la actualización (como upsert, que inserta el valor en caso de que el documento a actualizar ni siquiera exista)

**db.collection.updateMany(query, update,option) :** Actualiza múltiples documentos que cumplan con el criterio.

#### D = Delete

**db.collection.deleteOne({key:val}) :** Elimina sólo el primer elemento que cumpla con el criterio, se usa principalmente para encontrar identificadores específicos. Se recomienda no utilizar si somos conscientes de que el valor a buscar no es repetido.

**db.collection.deleteMany({key:val}) :** Elimina todos los documentos que cumplan con el criterio, se usa cuando sabemos que más de un valor va a contar con ese valor y necesitamos hacer una limpieza general.

#### CONTEO DE DATOS

**db.collection.estimatedDocumentCount() :** Cuenta el número de documentos de la colección actual.(en ese instante en el que se hace la petición)

**db.collection.countDocuments(option) :** Cuenta el número de documentos de la colección actual que cumplen con el criterio definido en las opciones.

#### FILTROS

 Los filtros pueden agregarse dentro de los elementos de criterio (option) con ayuda del simbolo **`$`**, ademas, podemos agregar más de un filtro para asegurarnos que el documento se ajuste a criterios muy específicos.
 Sintaxis: `(db.collection.find({key: $operator:val}) :) `

##### OPERADORES PARA FILTROS DE QUERY

- Comparacion
`$eq`: Coincide con valores que son iguales a un valor especificado.
`$gt`: Coincide con valores que son mayores que un valor especificado.
`$gte`: Coincide con valores que son mayores o iguales a un valor especificado.
`$in`: Coincide con cualquiera de los valores especificados en una matriz.
`$lt`: Coincide con valores que son menores que un valor especificado.
`$lte`: Coincide con valores que son menores o iguales a un valor especificado.
`$ne:`: Coincide con todos los valores que no son iguales a un valor especificado.
`$nin`: No coincide con ninguno de los valores especificados en una matriz.

- Lógico
`$and`: Une las cláusulas de consulta con un ANDresultado lógico de todos los documentos que coinciden con las condiciones de ambas cláusulas.
`$not`: Invierte el efecto de una expresión de consulta y devuelve documentos que no coinciden con la expresión de consulta.
`$nor`: Une las cláusulas de consulta con un NORresultado lógico de todos los documentos que no coinciden con ambas cláusulas.
`$or`: Une las cláusulas de consulta con un resultado lógico ORde todos los documentos que coinciden con las condiciones de cualquiera de las cláusulas.

- Elemento
`$exists`: Coincide con documentos que tienen el campo especificado.
`$type`: Selecciona documentos si un campo es del tipo especificado.

- Evaluación
`$expr`: Permite el uso de expresiones de agregación dentro del lenguaje de consulta.
`$jsonSchema`: Valide documentos contra el esquema JSON dado.
`$mod:` Realiza una operación de módulo sobre el valor de un campo y selecciona documentos con un resultado especificado.
`$regex`: Selecciona documentos donde los valores coinciden con una expresión regular especificada.
`$text`: Realiza la búsqueda de texto.
`$where`: Coincide con documentos que satisfacen una expresión de JavaScript.

- Formación
`$all`: Coincide con matrices que contienen todos los elementos especificados en la consulta.
`$elemMatch`: Selecciona documentos si el elemento en el campo de la matriz coincide con todas las `$elemMatch` condiciones especificadas.
`$size`: Selecciona documentos si el campo de matriz tiene un tamaño especificado.

#### BÚSQUEDA AVANZADA

**db.collection.distinct(val) :** Devuelve un conjunto de valores únicos de un campo especificado.

**db.collection.find({doc.subdoc:value}) :** Se utiliza para filtrar subdocumentos.

**db.collection.find({name:/^Max$/i}) :** Se utiliza para filtrar expresiones regulares.


### PROYECCIONES
Una proyección se incluye al m,omento de hacer un búsqueda, (siempre como segundo parámetro) y es el equivalente a decirle a la base de datos: "Sólo necesito ésto".
Sintaxis: `db.collection.find({},{key:1})` 

##### SORT
Sirve para poder hercer un ordenamiento de la información.
Sintaxis: 
`db.collection.find({},{key:1}).sort({key:1})` 1 ordenamiento ascendente

`db.collection.find({},{key:1}).sort({key:-1})` -1 ordenamiento descendente

`db.collection.find({},{key:1}).sort({key_A:1, key_B:-1})` ordenamiento ascendente y en el caso que se repita, el siguiente valor se ordena descendente

##### SKIP
Sirve para poder hacer paginación de la información. Omite el numero de documentos indicados.
Sintaxis: `db.collection.find({},{key:1}).skip(n)`

##### LIMIT
Sirve para poder hacer paginación de la información. Limita el numero de documentos indicados.
Sintaxis: `db.collection.find({},{key:1}).limit(n)`
