function newEventorEvent() {
    var eventID = document.getElementById("eventID").value;

    var req = createRequest(); // defined above
    // Create the callback:
    req.onreadystatechange = function() {
        if (req.readyState != 4) return; // Not there yet
        if (req.status != 200) {
            console.log("ERROR 200 help");
	    console.log(req.status);
            return;
        }

        // Request successful, read the response
        var resp = req.responseText;

        console.log(resp);
    }

    var baseURL = "https://eventor.orientering.no/api/";
    var parameters = "results/event?eventID=" + eventID;

    req.open("GET", baseURL + parameters, true);
    req.setRequestHeader("ApiKey", "fill api key here");
    req.send();

    if (req.status == 200)
        alert("The request succeeded!\n\nThe response representation was:\n\n" + req.responseText)
    else
        alert("The request did not succeed!\n\nThe response status was: " + req.status + " " + req.statusText + ".");
}


function createRequest() {
    var result = new XMLHttpRequest();

    if (typeof result.overrideMimeType != 'undefined') {
        result.overrideMimeType('text/xml'); // Or anything else
    }

    return result;
}
