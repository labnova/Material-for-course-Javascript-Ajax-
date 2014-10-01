$.getJSON('json_open_data.json', function(data) {


var risultato ="<ul>";


$.each (data, function(key, val){
	risultato += '<li>'+ val.link + '</li>';


});

risultato +="</ul>";

$('#update').append(risultato);


});