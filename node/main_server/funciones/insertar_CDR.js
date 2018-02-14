var query = require('./query').query

function insertar_CDR(connection_cdr,insert_query,args){

	query(connection_cdr,insert_query,args,function(err,results){

		if(err) {
			console.log('Error en insertar registro en CDR \n');
		}
		else{
			console.log('Registro insertado'+ '\n');
		}
	})
}

module.exports={
		insertar_CDR:insertar_CDR
}
