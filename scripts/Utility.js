function Home() {
    window.location = "index.html";
}

function Logout() {
    window.location = "index.html";
}


var i = 0;
function clickinfoGraph() {

    if (i % 2 != 0) {
        sessionStorage.LocalSearchState = "";
        $('#innerinfograph').hide();
        $('#infograph').css('data-icon', 'arrow-d');
        $('#infograph').attr('data-icon', 'arrow-r');
        $('#infograph').children().children().next().removeClass('ui-icon-arrow-d').addClass('ui-icon-arrow-r');
    }
    else {
        sessionStorage.LocalSearchState = "InfoGraph";
        $('#innerinfograph').show();
        $('#infograph').css('data-icon', 'arrow-d');
        $('#infograph').attr('data-icon', 'arrow-d');
        $('#infograph').children().children().next().removeClass('ui-icon-arrow-u').addClass('ui-icon-arrow-d');
    }
    i = i + 1;
}

var j = 0;
function clickBenifitHandout() {

    if (j % 2 != 0) {
        sessionStorage.LocalSearchState = "";
        $('#innerBenifitsHandout').hide();
        $('#BenifitHandout').css('data-icon', 'arrow-d');
        $('#BenifitHandout').children().children().next().removeClass('ui-icon-arrow-d').addClass('ui-icon-arrow-r');
    }
    else {
        sessionStorage.LocalSearchState = "BenifitHandout";
        $('#innerBenifitsHandout').show();
        $('#BenifitHandout').css('data-icon', 'arrow-r');
        $('#BenifitHandout').children().children().next().removeClass('ui-icon-arrow-u').addClass('ui-icon-arrow-d');
    }
    j = j + 1;
}
function pageredirect(imagename, pageTitle) {
    sessionStorage.headerText = pageTitle;
    sessionStorage.imagenames = imagename;
    var path = window.location.pathname;
    var index = path.lastIndexOf("/") + 1;
    var filename = path.substr(index);
    sessionStorage.ResirectUrl = filename;
    window.location = 'viewverisearchImage.html';
}

function OnBackButtonClick() {
    window.location = sessionStorage.ResirectUrl;
}