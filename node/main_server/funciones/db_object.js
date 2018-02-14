var mysql = require( 'mysql' );

function Db_Object(params){
	this.params = params;
	this.pool = crear_variable_conexion(params);

}

function crear_variable_conexion(parametros){
	
	var crear_pool = mysql.createPool( {

		connectionLimit : 10,
		host : parametros.host,
		user: parametros.user,
		password: parametros.password,
		database: parametros.database,
		port: parametros.port,
	
	});

	return crear_pool;
}

function conectar(pool){

	pool.getConnection( function ( error , connection ) {

		if ( error ) {

			console.log( "Error en crear Pool Conexiones USERS DB " );
		}
		this.connection = connection;
		
	});
}

function terminar_conexion(){
	this.connection.release();
}

Db_Object.prototype.consultar = function( consulta , parametros , callback ) {

	conectar ( this.pool );

	if( parametros === '102' ) {
		var consulta = 'SELECT SLEEP(5)' 
	}
	
	var start = process.hrtime();
	
	this.pool.query( {sql:consulta,timeout:3000} , parametros , function( err , results ) {
			
		var end = process.hrtime( start );
			
		var elapsedTime = end[1]/1000000.;
			
		if( err ) {
	
			callback(err,1002,elapsedTime);

			terminar_conexion();

		}
		else{

			callback( null , {results} , elapsedTime );
			terminar_conexion();

		}
	});
};

Db_Object.prototype.insertar_CDR = function ( insert_query , args , errorCode ) {

	var cdr_dic = args.getDictionary(errorCode)

	conectar (this.pool);

	this.pool.query( insert_query , cdr_dic , function( err , results ) {

		if(err) {

			console.log('Error en insertar registro en CDR',err);
			
		}else
		{

			console.log('Registro insertado \n');
				
		}
	});
}

module.exports = {
		Db_Object:Db_Object
}