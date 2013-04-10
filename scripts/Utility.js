function Logout() 
{
    localStorage.R_Mobileapp_UserName = null;
    localStorage.R_Mobileapp_ReportClient = null;
    localStorage.R_Mobileapp_ReportScheme = null;
    document.forms[0].action = "index.html";
    document.forms[0].submit();
}

function Home() 
{
    document.forms[0].action = "ReportOptions.html";
    document.forms[0].method = "post"; 
    document.forms[0].submit();
}
function ChangeClientS() {
    window.location.href = "RptAssetAllocation.html";
}
function ChangeClient() {
    localStorage.R_Mobileapp_ReportClient = null;
    localStorage.R_Mobileapp_ReportScheme = null;
    document.forms[0].action = "ReportSelection.html";
    document.forms[0].submit();
}

function GoToAboutUs() {
    document.forms[0].action = "AboutUs.html";
    document.forms[0].submit();
}

function GoToContactUs() {
    document.forms[0].action = "ContactUs.html";
    document.forms[0].submit();
}

function GoBack() {
    if (window.location.href.indexOf("RptSummary.html") > 0) {
        window.location = "ReportOptions.html";
    }

    if (window.location.href.indexOf("RptStatement.html") > 0) {
        window.location = "ReportOptions.html";
    }

    if (window.location.href.indexOf("RptAssetAllocation.html") > 0) {
        window.location = "ReportOptions.html";
    }
}
function SetActiveImage(name) {
    
    var srcPath;
    $("#footerwrapper img").each(function () {
        srcPath = $(this).attr('src');
        srcPath = srcPath.replace('-blue', '');
        $(this).removeAttr('src').attr('src', srcPath);

    });

    $("#footerwrapper span").each(function () {
        $(this).removeClass("txtWhite");
        $(this).addClass("txtGray")
    });

    $('#' + name + 'IMG').removeAttr('src').attr('src', 'style/images/' + name + '-blue.png');
    $('#' + name + 'TXT').addClass("txtWhite");
}

function LoadContactus() { SetActiveImage('contactus'); }
function LoadClientChange() { SetActiveImage('client'); }
function LoadAboutUs() { SetActiveImage('aboutus'); }