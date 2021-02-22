$(function () {
    $("#fromStation").autocomplete({
        source: availableTags,
        minLength: 2
    });
    $("#toStation").autocomplete({
        source: availableTags
    });
    $("#boardingStation").autocomplete({
        source: availableTags,
        minLength: 2
    });
    $("#journeyDateInputDate").datepicker({
        dateFormat: "dd-mm-yy"
    });
    $(document).tooltip();
});
function funChangeBank(ind) {
    if (ind == 2) {
        document.getElementById("divbankUID").style.display = "block";
        document.getElementById("ddlSBIASS").style.visibility = "visible";
    } else if (ind == 20) {
        document.getElementById("divIMPS").style.display = "block";
    } else {
        document.getElementById("divbankUID").style.display = "block";
    }
}
function setPayID(ddl) {
    document.getElementById("txtPayID").value = ddl.options[ddl.selectedIndex].value;
}
function funShowBank(ind) {
    document.getElementById("jpBook:bankINBList").style.display = "none";
    document.getElementById("card-input-table").style.display = "none";
    document.getElementById("jpBook:bankDCList").style.display = "none";
    document.getElementById("jpBook:bankPGList").style.display = "none";
    document.getElementById("divbankUID").style.display = "none";
    document.getElementById("divIMPS").style.display = "none";
    document.getElementById("ddlSBIASS").style.visibility = "hidden";
    document.getElementById("divIMPS").style.display = "none";
    document.getElementById("divbankUID").style.display = "none";
    document.getElementById("CASH_CARD").style.display = "none";
    document.getElementById("UPI_VPA").style.display = "none";
    document.getElementById("NETBANKING").style.display = "none";
    document.getElementById("IRCTC_PREPAID").style.display = "none";
    document.getElementById("COD").style.display = "none";
    document.getElementById("E_WALLET").style.display = "none";
    document.getElementById("divUNPED").style.display = "none";
    document.getElementById("AGGREGATOR").style.display = "none";
    document.getElementById("cardTypeRowId").style.display = "table-row";
    document.getElementById("tdspCVV").style.display = "none";
    document.getElementById("tdccPin_id").style.display = "none";
    if (ind == 0) {
        document.getElementById("UPI_VPA").style.display = "block";
        document.getElementById("txtPayID").value = document.getElementById("jpBookUPIList").options[document.getElementById("jpBookUPIList").selectedIndex].value;
    } //
    else if (ind == 1) {
        document.getElementById("AGGREGATOR").style.display = "block";
        document.getElementById("tdspCVV").style.display = "block";
        document.getElementById("cardTypeRowId").style.display = "none";
        document.getElementById("txtPayID").value = document.getElementById("jpBookbankAggList").options[document.getElementById("jpBookbankAggList").selectedIndex].value;
        funShowDC();
    } else if (ind == 2) {
        document.getElementById("jpBook:bankDCList").style.display = "block";
        document.getElementById("tdspCVV").style.display = "table-cell";
        document.getElementById("tdccPin_id").style.display = "table-cell";
    } else if (ind == 3) {
        document.getElementById("NETBANKING").style.display = "block";
        document.getElementById("jpBook:bankINBList").style.display = "block";
        document.getElementById("divbankUID").style.display = "block";
        document.getElementById("divUNPED").style.display = "block";
    } else if (ind == 4) {
        document.getElementById("CASH_CARD").style.display = "block";
        document.getElementById("divUNPED").style.display = "block";
    } else if (ind == 5) {
        document.getElementById("IRCTC_PREPAID").style.display = "block";
        document.getElementById("cardTypeRowId").style.display = "none";
        document.getElementById("tdspCVV").style.display = "table-cell";
        document.getElementById("txtPayID").value = document.getElementById("jpBookbankPrepaidList").options[document.getElementById("jpBookbankPrepaidList").selectedIndex].value;
        funShowDC();
    } else if (ind == 6) {
        document.getElementById("E_WALLET").style.display = "block";
        document.getElementById("txtPayID").value = "";
    } else if (ind == 7) {
        document.getElementById("COD").style.display = "block";
        document.getElementById("txtPayID").value = document.getElementById("jpBookCODList").options[document.getElementById("jpBookCODList").selectedIndex].value;
    } else if (ind == 8) {
        // document.getElementById("CASH_CARD").style.display = "block";
        document.getElementById("jpBook:bankPGList").style.display = "block";
        document.getElementById("tdspCVV").style.display = "table-cell";
    }
    return; //
    if (ind == 0) {
        document.getElementById("jpBook:bankINBList").style.display = "block";
        document.getElementById("divbankUID").style.display = "block";
    } else if (ind == 1) {
        document.getElementById("jpBook:bankPGList").style.display = "block";
    } else if (ind == 2) {
        document.getElementById("jpBook:bankDCList").style.display = "block";
    }
}
function funShowDC() {
    document.getElementById("card-input-table").style.display = "block";
}

function Button1_onclick() {
    document.getElementById("txtHid").value = 1;
    myA = document.getElementById("linDownload");
    if (myA.style.borderColor == "green") {
        var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
        if (isFirefox == true) {
            myA.style.borderColor = "red";
            alert("Your are using old version of myRailinfo autofill, Please download latest version!");
            installPlug();
            return;
        }
        alert('Check your Plugin version should be 5.3 (updated on 12-Dec-2017) to work properly. Your data has been saved..! Open IRCTC and Book your ticket now.');
    } else {
        alert('Please install Browser Plugin to use Autofill');
    }
}
var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
var isChrome = !!window.chrome; // Chrome 1+
var isIE = /*@cc_on!@*/ false || !!document.documentMode; // At least IE6
function ckBrowser() {
    var isFirefox = typeof InstallTrigger !== 'undefined'; // Firefox 1.0+
    var isChrome = !!window.chrome; // Chrome 1+
    var isIE = /*@cc_on!@*/ false || !!document.documentMode; // At least IE6
    myA = document.getElementById("linDownload");
    myMess = document.getElementById("divMess");
    if (isFirefox == true) {
        //document.getElementById("bankUID").style.display = "none";
        // myA.innerHTML = "Install Firefox Plugin";
        //  alert("Please install Firefox Plugin to use AutoFill in IRCTC");
    } else if (isChrome == true) {
        // myA.innerText = "Install Chrome Plugin";
        // myA.title = "Click to Install Chrome Plugin ";
        //   alert("Please install Chrome Plugin to use AutoFill in IRCTC");
    } else if (isIE == true) {
        myA.innerText = "Install IE App"
        alert("This web page only work for Firefox and Chrome browser!!! For IE please download our Windows App.")
    } else {
        myMess.innerText = "We support only Firefox, Chrome & IE Browser"
    }
}
function dd() {
    //    alert()
    // jDateM = document.getElementsByName("jpform:journeyDateInputDate")[0].value.split("-"); jDateM = jDateM[2] + "," + jDateM[1] + "," + jDateM[0]; jDateM = new Date(jDateM); jDateM = jDateM.getDate() + "-" + (parseInt(jDateM.getMonth()) + 1) + "-" + jDateM.getFullYear();
    //jDateM = new Date(document.getElementsByName("jpform:journeyDateInputDate")[0].value.split("-"); jDateM = jDateM[2] + "," + jDateM[1] + "," + jDateM[0]; jDateM = new Date(jDateM); jDateM = jDateM.getDate() + "-" + (parseInt(jDateM.getMonth()) + 1) + "-" + jDateM.getFullYear()
    //  alert(jDateM)
}
function installPlug(id) {
    if (myA.style.borderColor == "red") {
        if (isChrome == true) {
            //alert(id)
            chrome.webstore.install();
            setTimeout(function () {
                alert("Reload the page after installation");
                //                    window.location = window.location;
            }, 5000);
        } else if (isFirefox == true) {
            //txtFFURL
            window.open(document.getElementById("txtFFURL").value + "?" + Math.random());
            setTimeout(function () {
                alert("Reload the page after installation");
                window.location = window.location;
            }, 9000);
        } else {
            alert("This autofill work only in Chrome browser");
        }
    }
}
function cDate() {
    //alert()
    //jDateM =new Date(document.getElementById("journeyDateInputDate").value);
    jDateM = document.getElementById("journeyDateInputDate").value;
    result = jDateM.split("-");
    var jDateM = new Date(parseInt(result[2], 10),
        parseInt(result[1], 10) - 1,
        parseInt(result[0], 10));
    jDateM = jDateM.getDate() + "-" + (parseInt(jDateM.getMonth()) + 1) + "-" + jDateM.getFullYear();
    document.getElementById("txtHbookDate").value = jDateM;
    var jDateM = new Date(parseInt(result[2], 10),
        parseInt(result[1], 10) - 1,
        parseInt(result[0], 10));
    document.getElementById("txtHbookDate1").value = weekday[jDateM.getDay()] + " " + month[jDateM.getMonth()] + " " + result[0] + " 00:00:00 IST " + jDateM.getFullYear();
}
var weekday = new Array(7);
weekday[0] = "Sun";
weekday[1] = "Mon";
weekday[2] = "Tue";
weekday[3] = "Wed";
weekday[4] = "Thu";
weekday[5] = "Fri";
weekday[6] = "Sat";
var month = new Array(12);
month[0] = "Jan";
month[1] = "Feb";
month[2] = "Mar";
month[3] = "Apr";
month[4] = "May";
month[5] = "Jun";
month[6] = "Jul";
month[7] = "Aug";
month[8] = "Sep";
month[9] = "Oct";
month[10] = "Nov";
month[11] = "Dec";