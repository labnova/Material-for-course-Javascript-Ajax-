/* prima versione per XML

request.onreadystatechange= function() {

	if((request.readyState===4) && (request.status===200)) { 

		

		console.log(request.responseXML.getElementsByTagName('link'));

		var  elementi=request.responseXML.getElementsByTagName('link');

		var risultato='<ul>';



		for (var i=0; i< elementi.length; i++) {

			risultato += '<li>' + elementi[i].firstChild.nodeValue + '</li>';
		}

		risultato += '</ul>';



		document.getElementById('update').innerHTML= risultato;
}




}


*/


/*seconda versione per JSON e 'gestione eventi'

var mioBottone= document.getElementById('bottone');


mioBottone.onclick= loadAJAX;



function loadAJAX() {


		if(window.XMLHttpRequest) {
	request= new XMLHttpRequest();

	} else {
		request= new ActiveXObject("Microsoft.XMLHTTP");


	}

	request.open('GET', 'json_open_data.json');

	request.onreadystatechange= function() {

		if((request.readyState===4) && (request.status===200)) { 

			var elementi= JSON.parse(request.responseText);

			var risultato='<ul>';

			for (var valore in elementi) {

				risultato += '<li>' + elementi[valore].titolo + '</li>';
			}

			risultato += '</ul>';

	}

	document.getElementById('update').innerHTML= risultato;




	}

	request.send();


}







*/