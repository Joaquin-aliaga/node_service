### Guia para utilizar main_server ###

[Install](#install)

[Levantar main_server y servidores externos](#levantar-main-server-y-servidores-externos)

[Lanzar Tests](#lanzar-tests)

[Códigos de respuesta](#códigos-de-respuesta)

### Version Node JS ###

Se utilizó la versión v8.9.3

### Install ###
Ubicarse en la carpeta en que se encuentra el archivo package.json y en consola escribir
```
npm install
```

### Base de datos ###
El archivo que contiene las bases de datos se llama dump.sql y se encuentra en la carpeta database

### Levantar main server y servidores externos: ###

Ejecutar start.sh

### Lanzar Tests ###

En repo Test_service, en el directorio python/test escribir en consola

```
pytest
```

### Códigos de respuesta ###
Se usarán los siguientes códigos de respuesta (agregar más):
<ul>
	<li>Código = 200  -> Conexión exitosa</li>
	<li>Código = 1000 -> Registro de ejemplo</li>
	<li>Código = 1001 -> Servicio exitoso</li>
	<li>Código = 1002 -> Error en conexión a base de datos USERS</li>
	<li>Código = 1003 -> Error en conexion a servidor SOAP</li>
	<li>Código = 1004 -> Error en conexion a servidor HTTP</li>
	<li>Código = 1005 -> Error en conexión a base de datos CDR</li>
	<li>Código = 1006 -> Error en respuesta final</li>
	<li>Código = 1007 -> Error ID incorrecto</li>
	<li>Código = 1008 -> Error ID vacío</li>
	<li>Código = 1009 -> Error ID tipo de dato incorrecto</li>
	<li>Código = 1010 -> Error Host DB Users</li>
	<li>Código = 1011 -> Error Port DB Users</li>
	<li>Código = 1012 -> Error Host SOAP server</li>
	<li>Código = 1013 -> Error Puerto SOAP server</li>
	<li>Código = 1014 -> Error Host HTTP server</li>
	<li>Código = 1015 -> Error Puerto HTTP server</li>
	<li>Código = 1016 -> Error Host DB CDR</li>
	<li>Código = 1017 -> Error Puerto DB CDR</li>
</ul>