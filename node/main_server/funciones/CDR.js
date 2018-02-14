function CDR() {

	this.registro = null;
	this.time_key = null;
	start_time = process.hrtime();
}

CDR.prototype.setTime = function( time ) {

	if (this.time_key == null) {
		this.database_time = time;
		this.globalTime = time;
		this.time_key = 'consulta';

	}else{

		if (this.time_key == 'consulta') {
			this.soap_time = time;
			this.globalTime = this.globalTime + time;
			this.time_key = 'soap';
			
		}else{

			if (this.time_key == 'soap') {
			this.http_time = time;
			this.globalTime = this.globalTime + time;
			this.time_key = 'http';
				
			}else{

				if(this.time_key == 'http'){
					this.setMainServerTime();
				}
			}
		}
	}
}

CDR.prototype.getDictionary = function( errorCode ) {
	this.setErrorCode( errorCode );
	this.setMainServerTime();
	return this.makeDictionary();

}

CDR.prototype.setMainServerTime = function() {
	end_time = process.hrtime( start_time );
	tiempo_proceso = end_time[1]/1000000.;
	
	if (this.globalTime === undefined){
		this.MainServer_time = tiempo_proceso;
	}
	else{

		this.MainServer_time = tiempo_proceso - this.globalTime;

	}
}

CDR.prototype.setErrorCode = function( code ) {
	this.errorCode = code;
};

CDR.prototype.makeDictionary = function() {
	var cdr_dic = new Object();

	cdr_dic['database_time'] = this.database_time;
	cdr_dic['soap_time'] = this.soap_time;
	cdr_dic['http_time'] = this.http_time;
	cdr_dic['codigo_error'] = this.errorCode;
	cdr_dic['MainServer_time'] = this.MainServer_time;
	
	return cdr_dic;
}

module.exports= {
	CDR:CDR
}
/*
var ejemplo_cdr=new CDR();
//tiempo query
//ejemplo_cdr.setTime(1);

//tiempo soap
var dic_final = ejemplo_cdr.getDictionary(1000);

console.log(dic_final);
*/