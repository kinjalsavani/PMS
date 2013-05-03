var oForm = document.forms[0];
var crop = document.getElementById("select1").value;
var timing = document.getElementById("select_timing").options[selectedIndex];
var condition = document.getElementById("select_condition").options[selectedIndex].text;

function callout(){
alert(crop);
alert(timing);
alert(condition);
}