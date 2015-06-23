var control = document.getElementById("xmlFile");

control.addEventListener("change", function(event) {
    // When the control has changed, there are new files
    var i = 0,
        files = control.files,
        len = files.length;

    for (; i < len; i++) {
        console.log("Filename: " + files[i].name);
        console.log("Type: " + files[i].type);
        console.log("Size: " + files[i].size + " bytes");
    }

    f = new FileReader();
    f.onload = function(e) {
        //console.log(e.target.result);
    };
    f.readAsText(files[0]);
}, false);
