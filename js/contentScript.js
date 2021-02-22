console.log(document.domain);
chrome.runtime.sendMessage("hello");
chrome.runtime.sendMessage({greeting: "hello"}, function(response) {
  console.log("greeting  :  "+response.farewell);
});

chrome.runtime.onMessage.addListener(
  function(request, sender, sendResponse) {
    console.log(sender.tab ?
                "from a content script:" + sender.tab.url :
                "from the extension");
    if (request.greeting == "hello")
      sendResponse({farewell: "goodbye from content"});
  }
);

javascript: function E() {
	debugger;
	chrome.storage.sync.get('selectedSet',function(sid) {
		console.log(sid);
		chrome.storage.sync.get( [sid],function(setObject) {
			console.log(setObject);
			var username = setObject.j_username;
			var password = setObject.j_password;
			console.log(username);
		});
	});
    /*var username = 'philips207';
    var password = 'php207';
	var username = 'anand7393';
    var password = 'Avp$7393';*/
	var startingStation = 'KSR BENGALURU - SBC';
    var destination = 'ALUVA - AWY';
    var dateOfJourney = '29-01-2018';
    var trainNumber = '16526';
	var trainClass = 'SL';
	var nameList = ["Sharath Kurian"];/*3 to 16 chars*/
	var ageList  = [24];
	var genderList  = ['M'];
	var seatList  = ['LB'];
	var mobileNum = '9446466207';
	var quota = 'TQ';
	
	
	f0 = document.forms['addPassengerForm'] || document.forms['jpBook'] || document.forms['jpform'];

	function D(n, t) {
        for (c = t.split('|'), d = !1, q = 0; q < c.length; q++) c[q] == n && (d = !0);
        return d
    }
    function F1(el, val) {
        if (document.getElementById(el) && val != '') document.getElementById(el).value = val;
		if (document.getElementsByName(el)[0] && val != '') document.getElementsByName(el)[0].value = val;
    }

    function F2(el, val) {
        if ((document.getElementById(el) && val != '') && (document.getElementById(el).value == val)) {
            return true;
        } else {
            return false;
        }
    }
	
    function enterKeyScript(e,elementId) {
		if (e.keyCode == 13 || event.which == 13 ) {
            if (document.getElementById(elementId)) {
                document.getElementById(elementId).click();
			}
		}
		return false;
	}
    if (document.forms['loginFormId']) {
        F1('usernameId', username);
        document.getElementsByClassName('loginPassword').j_password.value = password;
		var myInterval = setInterval ( function( ){
			if (document.getElementById('nlpAnswer')) {
				document.getElementById('nlpAnswer').focus();
                document.getElementById('nlpAnswer').addEventListener("keypress", function(){
					enterKeyScript(event, 'loginbutton');
				}, false);
				clearInterval(myInterval);
			}else if(document.getElementsByName('j_captcha')[0]) {
				document.getElementsByName('j_captcha')[0].focus();
                document.getElementsByName('j_captcha')[0].addEventListener("keypress", function(){
					enterKeyScript(event, 'loginbutton');
				}, false);
				clearInterval(myInterval);
			}
		}, 300 );
    }

    var foundTrain = false;
    if (document.forms['jpform']) {
        if (!((F2('jpform:fromStation', startingStation) == true) &&
                (F2('jpform:toStation', destination) == true)) ||
            !((F2('jpform:journeyDateInputDate', dateOfJourney) == true) &&
                (F2('jpform:ticketType', 'E_TICKET') == true))) {
			F1('jpform:fromStation', startingStation);
            F1('jpform:toStation', destination);
            F1('jpform:journeyDateInputDate', dateOfJourney);
            F1('jpform:ticketType', 'E_TICKET');
            document.getElementById("jpform:jpsubmit").click();
        }

		var trainNameList = document.getElementsByClassName('trainNoLink');
		if(trainNameList.length > 0){
			for (i = 0; i < trainNameList.length; i++) {
				if(trainNameList[i].innerHTML == trainNumber){
					foundTrain = true;
				}
			}
		}
		if (foundTrain){
            var trainCoach = "cllink-" + trainNumber + "-"+trainClass+"-";
			var trainSelectedForBooking = false;
            var counter = 6;
			var elements = document.getElementsByName('quota');
			for (i = 0; i < elements.length; i++) {
                if (elements[i].value == quota) {
					elements[i].checked = true;
				}
			}
			while (!trainSelectedForBooking) {
				if (document.getElementById(trainCoach + counter) && (counter > 0)) {
					document.getElementById(trainCoach + counter).click();
					break;
					trainSelectedForBooking = true;
				}
				counter--;
			}
			setInterval (function(){
                if (document.getElementById(trainNumber + '-'+trainClass+'-'+quota+'-0')) {
                    document.getElementById(trainNumber + '-'+trainClass+'-'+quota+'-0').click();
				}
			}, 300 );
		}
    }
	if (document.getElementById("addPassengerForm:mobileNo")) {
		for(var i = 0; i < nameList.length;i++){
			if (f0['addPassengerForm:psdetail:'+i+':psgnName']) f0['addPassengerForm:psdetail:'+i+':psgnName'].value = nameList[i];
			dq = document.querySelector('input[size=\'16\'][id^=\'addPassengerForm:psdetail:'+i+':\']');
			if (dq) dq.value = nameList[i];
			if (f0['addPassengerForm:psdetail:'+i+':psgnAge']) f0['addPassengerForm:psdetail:'+i+':psgnAge'].value = ageList[i];
			
			if($(f0['addPassengerForm:psdetail:'+i+':psgnGender']).is(":visible")){
				f0['addPassengerForm:psdetail:'+i+':psgnGender'].value = genderList[i];
			}else if($(document.getElementById('addPassengerForm:psdetail:'+i+':'+psgnDynGenderId)).is(":visible")){
				f0['addPassengerForm:psdetail:'+i+':'+psgnDynGenderId].value = genderList[i];
			}else{
				alert("Gender Selection Falied by Plugin");
			}
			if (f0['addPassengerForm:psdetail:'+i+':berthChoice']) f0['addPassengerForm:psdetail:'+i+':berthChoice'].value = seatList[i];
		}
		if (f0['addPassengerForm:travelInsurance']){
			for (i = 0; i < f0['addPassengerForm:travelInsurance'].length; i++) {
				if (D(f0['addPassengerForm:travelInsurance'][i].value, 'true')) {
					f0['addPassengerForm:travelInsurance'][i].checked = true;
				}
			}
		}
		document.getElementById("addPassengerForm:mobileNo").value = mobileNum;
		var myInterval = setInterval ( function( ){
			if (document.getElementById('nlpAnswer')) {
					document.getElementById('nlpAnswer').focus();
					document.getElementById('nlpAnswer').addEventListener("keypress", enterKeyScript);
					clearInterval(myInterval);
				}else if(document.getElementsByName('j_captcha')[0]) {
					document.getElementsByName('j_captcha')[0].focus();
					document.getElementsByName('j_captcha')[0].addEventListener("keypress", enterKeyScript);
					clearInterval(myInterval);
			}
		}, 300 );
	}
    if (document.forms['jpBook']) {
        try {
            if (document.getElementsByClassName('CREDIT_CARD')[0].style.display == 'none') eval(document.getElementById('CREDIT_CARD').getAttribute('onclick'));
        } catch (err) {}
        try {
            if (document.querySelectorAll("input[value='17']").length > 1) document.querySelectorAll("input[value='17']")[0].click();
            else document.querySelectorAll("input[value='17']")[0].click();
        } catch (err) {}
		if(document.getElementById('validate')){
			document.getElementById('validate').click();
		}
    };
    if (document.getElementById("CITI_CREDIT_RAD")) {
        document.getElementById("CITI_CREDIT_RAD").click();
		F1('cardNum1', '4386');
		F1('cardNum2', '2800');
		F1('cardNum3', '3283');
		F1('cardNum4', '9528');
		F1('HtmlMonth', '11');
		F1('HtmlYear', '20');
		F1('HtmlCVVNum', '577');
        document.getElementById("submitciti").click();
    };

	if (document.getElementById("ipincode")) {
		F1('ipincode', 'Banking@City1296');
		document.getElementById('next').click();
		document.getElementById('validate').click();
    }
		
	if (document.getElementById("debitCardholderName")) {
        F1('debitCardNumber', '4591650000069178');
        F1('debiMonth', '11');
        F1('debiYear', '2022');
        F1('debitCardholderName', 'Anand Varkey Philips');
        F1('cardPin', '5175');
        var myInterval = setInterval(function() {
            if (document.getElementById('passline')) {
                document.getElementById('passline').focus();
				document.getElementById('passline').addEventListener("keypress", function(){
					enterKeyScript(event, 'proceed');
				}, false);
                clearInterval(myInterval);
	}
        }, 300);
    };
}
E();