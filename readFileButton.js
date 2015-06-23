function Club(id, name, address, contact) {
    this.id = id;
    this.name = name;
    this.address = address;
    this.contact = contact;
}

function Result(id, time, timeBehind, position, status, runnerClass) {
    this.id = id;
    this.time = time;
    this.timeBehind = timeBehind;
    this.position = position;
    this.status = resultStatus[status];
    this.runnerClass = runnerClass;
}

function Person(id, firstName, lastName, result, club) {
    this.id = id;
    this.firstName = firstName;
    this.lastName = lastName;
    this.result = result;
    this.club = club;
}


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
