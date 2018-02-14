//Capturar GET y obtener parametros recibidos
function query(connection,query,parametros,done){
	var start = process.hrtime();
	connection.query({sql:query,timeout:30000},parametros,function(err,results){
		var end = process.hrtime(start);
		var elapsedTime=end[1]/1000000.;
		if(err && err.code==='PROTOCOL_SEQUENCE_TIMEOUT'){
			throw new Error('Error de timeout');
			return done(err,[],elapsedTime);
		}
		if(err){
			console.error('Error en la consulta: ' + err.stack);
			return done(err,[],elapsedTime);
		}else{
			return done(null,{results},elapsedTime);
		}
	})
};

module.exports={
	query:query
}