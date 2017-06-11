function getHouseCode() {
    return $('select#housecode').val();
}

function getDirectionFromID(string) {
    if (typeof string !== 'string') return null;
    string = string.split('-')[0];
    if (string === 'on') return 'ON';
    return 'OFF';
}

function getNumberFromID(string) {
    if (typeof string !== 'string') return -1;
    string = string.split('-')[1];
    if (string === 'one') return 1;
    if (string === 'two') return 2;
    if (string === 'three') return 3;
    if (string === 'four') return 4;
    if (string === 'five') return 5;
    if (string === 'six') return 6;
    if (string === 'seven') return 7;
    if (string === 'eight') return 8;
    if (string === 'nine') return 9;
    if (string === 'ten') return 10;
    if (string === 'eleven') return 11;
    if (string === 'twelve') return 12;
    if (string === 'thirteen') return 13;
    if (string === 'fourteen') return 14;
    if (string === 'fifteen') return 15;
    if (string === 'sixteen') return 16;    
}

$('select#housecode').on('change', function(e) {
    console.log('house code was changed');
    console.log(e);
});

$('button').click(function(e) {
    var houseCode = getHouseCode();
    var number = getNumberFromID(e.target.id);
    var direction = getDirectionFromID(e.target.id);
    $.get('/l/'+houseCode+'/'+number+'/'+direction, function(res) {
        console.log(res);
    });
});


Zepto(function($) {
    console.log('SCRIPT LOAD');
});
