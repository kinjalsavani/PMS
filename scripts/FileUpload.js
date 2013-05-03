
var blnResponse = false;
var Response;

function getData(querystring) {
    var surl = "http://localhost:8080/FileUpload.php" + querystring;
      alert(surl);
    blnResponse = false;
    Response = "";

    $.getJSON(surl, function (rtndata) {
        Response = rtndata;
        blnResponse = true;
    })
}

