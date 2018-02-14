function pad( n, l ) {
    var str = '';
    for( var len = 0; len < l - String( n ).length ; len++ )
        str += '0';
    str += n;
    return str;
}

function str( ts ) {

    var a = new Date();
    if( arguments.length > 0 )
        a = new Date( ts * 1000 );

    return "" + a.getFullYear() + pad( a.getMonth() + 1, 2 ) + pad( a.getDate(), 2) + pad( a.getHours(), 2 ) + pad( a.getMinutes(), 2 ) + pad( a.getSeconds(), 2);
}

function dbString( a ) {
    return "" + a.getFullYear() + "-" + pad( a.getMonth() + 1, 2 ) + "-" + pad( a.getDate(), 2) + " " + pad( a.getHours(), 2 ) + ":" + pad( a.getMinutes(), 2 ) + ":" + pad( a.getSeconds(), 2);
}

function uts( ts ) {

    var a = new Date();
    if( arguments.length > 0 )
        a = new Date( ts * 1000 );

    return dbString( a );
}

function getDate( ts ) {

    if( arguments.length == 0 )
        ts = new Date();

    return "" + ts.getFullYear() + "-" + pad( ts.getMonth() + 1, 2 ) + "-" + pad( ts.getDate(), 2 );
}

function getTime( ts ) {
    return "" +pad( ts.getHours(), 2 ) + ":" + pad( ts.getMinutes(), 2 ) + ":" + pad( ts.getSeconds(), 2);
}

function getDateFromUnixTimestamp( uts ) {

    a = new Date( uts * 1000 );
    return "" + a.getFullYear() + "-" + pad( a.getMonth() + 1, 2 ) + "-" + pad( a.getDate(), 2);
}

function getHourFromUnixTimestamp( ts ) {

    a = new Date( ts * 1000 );
    return "" +pad( a.getHours(), 2 ) + ":" + pad( a.getMinutes(), 2 );
}

function daysInMonth( month, year ) {
    return new Date( year, month, 0 ).getDate();
}


function dateAdd( dt, days ) {
    var ms = days * 24 * 3600000;
    var result = new Date();
    result.setTime( dt.getTime() + ms );
    return result;
};

function minutesAdd( dt, mins ) {
    var ms = mins * 60000;
    dt.setTime( dt.getTime() + ms );
    return dt;
};

function secondsAdd( dt, sec ) {
    dt.setMinutes(dt.getMinutes() + ( sec / 60 ));
    return dt;
};

function secondsSubtract( dt, sec ) {
    dt.setMinutes(dt.getMinutes() - ( sec / 60 ));
    return dt;
};

function getIntervalArray( dt, min, lmt ) {

    var d = new Date( dt );
    var rst = [];

    d.setHours( 0, 0, 0, 0 );

    rst.push( dbString( d ));
    for( i = 0 ; i < (( 1440 / min ) - 1 ); i++ ) {
        d = minutesAdd( d, min );
        if( lmt ) {
            if( d > lmt )
                break;
        }
        rst.push( dbString( d ));
    }

    return rst;
}

function isLeapYear( d ) {
    var year = d.getFullYear();
    if((year & 3) != 0) return false;
    return (( year % 100 ) != 0 || (year % 400) == 0);
};

function dayOfYear( d ) {
    var dayCount = [0, 31, 59, 90, 120, 151, 181, 212, 243, 273, 304, 334];
    var mn = d.getMonth();
    var dn = d.getDate();
    var dayOfYear = dayCount[mn] + dn;
    if(mn > 1 && isLeapYear( d )) dayOfYear++;
    return dayOfYear;
};

function secondsToTime( seconds ) {
    var secs = new Date();
    secs.setHours( 0, 0, seconds, 0 );
    return getTime( secs );
}

module.exports = {
    str: function(ts) {
        var a = new Date();
        if( arguments.length > 0 ) {
            if( typeof ts == 'object')
                a = new Date(ts);
            else
                a = new Date(ts*1000);
        }
        return ""+a.getFullYear()+"-"+pad(a.getMonth()+1,2)+"-"+pad(a.getDate(),2)+" "+pad(a.getHours(),2)+":"+pad(a.getMinutes(),2)+":"+pad(a.getSeconds(),2);
    },
    strDate: function(ts) {
        var a = new Date();
        if( arguments.length > 0 ) {
            if( typeof ts == 'object')
                a = new Date(ts);
            else
                a = new Date(ts*1000);
        }
        return ""+a.getFullYear()+"-"+pad(a.getMonth()+1,2)+"-"+pad(a.getDate(),2);
    },
    utc: function(ts,tz) {
        d = new Date(ts*1000);
        d.setHours(d.getHours()+tz);
        return d;
    },
    utcDate: function(ts,tz) {
        d = new Date(ts*1000);
        d.setHours(0+tz);
        d.setMinutes(0);
        d.setSeconds(0);
        return d;
    }
};
