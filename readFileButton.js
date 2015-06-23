function Person(name) {}


function myFunction() {
    var xmlDoc = getXmlDoc(document.getElementById("xmlFile"));


}

function getXmlDoc(file) {
    f = new FileReader();
    f.onload = function(event) {
        var parser = new DOMParser();
        var xmlDoc = parser.parseFromString(event.target.result,"text/xml");

	console.log(xmlDoc.documentElement.nodeName);
	console.log(typeof xmlDoc);

	return xmlDoc;
    };

    f.readAsText(file.files[0]);
}


var resultStatus = {
    OK: "OK",
    Finished: "Unofficial",
    MissingPunch: "DSQ",
    Disqualified: "DSQ",
    DidNotFinish: "DSQ",
    Active: "Running",
    Inactive: "Not yet started",
    OverTime: "DSQ",
    SportingWithdrawal: "Sporting withdrawal",
    NotCompeting: "NC",
    Moved: "Moved",
    MovedUp: "Moved up",
    DidNotStart: "DNS",
    DidNotEnter: "Did not enter",
    Cancelled: "Cancelled"
}
