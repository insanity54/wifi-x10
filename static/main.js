$('#housecode').change(function(e) {
    console.log('house code was changed');
    console.log(e);
});

$('#off-one').click(function(e) {
    console.log(e);
    console.log(houseCode);
});

$('#off-three').click(function() {
    $.get('/l/a/3/off', function(res) {
        console.log(res);
    });
});

Zepto(function($) {
    console.log('SCRIPT LOAD');
});
