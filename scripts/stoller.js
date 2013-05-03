
var blnResponse = false;
var Response;
var LabelString = "";
var BackButtonUrl = "";
//var LocalPath="http://capturedview.co.uk/captureviewwrapper";                                          
var LocalPath="http://emobilecanada.com/stoller";
//var LocalPath="http://192.168.1.105:8080";
var LocalPathfolder="CapturedImages/";
var Localdefaultfile="CapturedImages/profile.jpg";
var surl = LocalPath+"/stollerwrapper.php";

function getDataForGetCrop(querystring) {
       serverurl = surl + querystring
        //alert(serverurl);
       $.getJSON(serverurl, function (rtndata) {
       GetCrop(rtndata);
    })
}

function getDataForGetTiming(querystring) {
 
       serverurl = surl + querystring
    //   alert(serverurl);
       $.getJSON(serverurl, function (rtndata) {
       GetTiming(rtndata);
    })
}
function getDataForGetCondition(querystring) {
        serverurl = surl + querystring
    //   alert(serverurl);
       $.getJSON(serverurl, function (rtndata) {
       GetCondition(rtndata);
    })
}
function getDataForGetReasonResponse(querystring) {
        serverurl = surl + querystring
      // alert(serverurl);
       $.getJSON(serverurl, function (rtndata) {
       GetReasonResponse(rtndata);
    })
}
function getData(querystring) {

    var surl = LocalPath+"/stollerwrapper.php" + querystring;
 //  var surl = "http://memories.jsmhosting.com/captureviewwrapper.php" + querystring + "&dt=" + new Date().getTime();
  

    blnResponse = false;
    Response = "";
    $.ajax({
     url:surl,
     dataType: 'jsonp', 
     success:function(rtndata){
         Response = rtndata;
         blnResponse = true;
     },
     error:function(){
    //     alert("Error");
     },
    });
}

function Logout() {
    SubmitForm("index.html");
}

function SubmitForm(location) {
    document.forms[0].action = location;
    document.forms[0].submit();
}

function Home() {
    SubmitForm("home.html");
}