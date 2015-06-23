function myFunction() {
    var x = document.getElementById("xmlFile");

    f = new FileReader();
    f.onload = function(e) {
        //console.log(e.target.result);

        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(e.target.result,"text/xml");

	console.log(xmlDoc.documentElement.nodeName);
	console.log(typeof xmlDoc);
    };
    f.readAsText(x.files[0]);
}
