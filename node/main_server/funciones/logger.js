var winston = require( 'winston' );
var path = require( 'path' );

var ts = require( './ts' );

var config = require( '../config/logger.json');

var fconfig = config[ "file" ];
//var cconfig = config[ "console" ];

function constructor(log) {

    fconfig.handleExceptions = true;
    fconfig.json = false;
    fconfig.filename = __dirname + "/../logs/"+log+".log";
    fconfig.timestamp = function() {
        return ts.str();
    }
/*
    cconfig.handleExceptions = true;
    cconfig.json = false;
    cconfig.timestamp = function() {
        return ts.str();
    }
*/
    winston.emitErrs = true;

    return new winston.Logger({
        transports: [
            new winston.transports.File( fconfig )
            //new winston.transports.Console( cconfig )
        ],
        exitOnError: false
    });
}

module.exports = constructor;

module.exports.stream = {
    write: function( message, encoding ){
        logger.info( message );
    }
};