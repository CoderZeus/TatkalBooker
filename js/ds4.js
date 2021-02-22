var totalPassengerCount = 6;
function loadsaveDataL() {
    var rid = document.getElementById("ddlSavedList").options[document.getElementById("ddlSavedList").selectedIndex].value;
	if (document.getElementById("ddlSavedList").selectedIndex > 0) {
		if (localStorage.getItem("j_username" + rid) != null) {
			document.getElementsByName("j_username")[0].value = localStorage.getItem("j_username" + rid);
			document.getElementsByName("j_password")[0].value = localStorage.getItem("j_password" + rid);
			document.getElementsByName("jpform:fromStation")[0].value = localStorage.getItem("from" + rid);
			document.getElementsByName("jpform:toStation")[0].value = localStorage.getItem("to" + rid);
			document.getElementsByName("jpform:journeyDateInputDate")[0].value = localStorage.getItem("date" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:psgnName")[0].value = localStorage.getItem("a1" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:psgnAge")[0].value = localStorage.getItem("a2" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:psgnGender")[0].selectedIndex = localStorage.getItem("a3" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:berthChoice")[0].value = localStorage.getItem("a4" + rid);
			document.getElementsByName("addPassengerForm:psdetail:1:psgnName")[0].value = localStorage.getItem("b1" + rid);
			document.getElementsByName("addPassengerForm:psdetail:1:psgnAge")[0].value = localStorage.getItem("b2" + rid);
			document.getElementsByName("addPassengerForm:psdetail:1:psgnGender")[0].selectedIndex = localStorage.getItem("b3" + rid);
			document.getElementsByName("addPassengerForm:psdetail:1:berthChoice")[0].value = localStorage.getItem("b4" + rid);
			document.getElementsByName("addPassengerForm:psdetail:2:psgnName")[0].value = localStorage.getItem("c1" + rid);
			document.getElementsByName("addPassengerForm:psdetail:2:psgnAge")[0].value = localStorage.getItem("c2" + rid);
			document.getElementsByName("addPassengerForm:psdetail:2:psgnGender")[0].selectedIndex = localStorage.getItem("c3" + rid);
			document.getElementsByName("addPassengerForm:psdetail:2:berthChoice")[0].value = localStorage.getItem("c4" + rid);
			document.getElementsByName("addPassengerForm:psdetail:3:psgnName")[0].value = localStorage.getItem("d1" + rid);
			document.getElementsByName("addPassengerForm:psdetail:3:psgnAge")[0].value = localStorage.getItem("d2" + rid);
			document.getElementsByName("addPassengerForm:psdetail:3:psgnGender")[0].selectedIndex = localStorage.getItem("d3" + rid);
			document.getElementsByName("addPassengerForm:psdetail:3:berthChoice")[0].value = localStorage.getItem("d4" + rid);
			document.getElementsByName("addPassengerForm:psdetail:4:psgnName")[0].value = localStorage.getItem("e1" + rid);
			document.getElementsByName("addPassengerForm:psdetail:4:psgnAge")[0].value = localStorage.getItem("e2" + rid);
			document.getElementsByName("addPassengerForm:psdetail:4:psgnGender")[0].selectedIndex = localStorage.getItem("e3" + rid);
			document.getElementsByName("addPassengerForm:psdetail:4:berthChoice")[0].value = localStorage.getItem("e4" + rid);
			document.getElementsByName("addPassengerForm:psdetail:5:psgnName")[0].value = localStorage.getItem("f1" + rid);
			document.getElementsByName("addPassengerForm:psdetail:5:psgnAge")[0].value = localStorage.getItem("f2" + rid);
			document.getElementsByName("addPassengerForm:psdetail:5:psgnGender")[0].selectedIndex = localStorage.getItem("f3" + rid);
			document.getElementsByName("addPassengerForm:psdetail:5:berthChoice")[0].value = localStorage.getItem("f4" + rid);
			// quota = localStorage.getItem("quota" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:foodChoice")[0].selectedIndex = localStorage.getItem("a5" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:idCardType")[0].value = localStorage.getItem("a6" + rid);
			document.getElementsByName("addPassengerForm:psdetail:0:idCardNumber")[0].value = localStorage.getItem("a7" + rid);
			if (localStorage.getItem("a8" + rid) == "true")
				document.getElementsByName("addPassengerForm:psdetail:0:concessionOpt")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:psdetail:0:concessionOpt")[0].checked = false;

			document.getElementsByName("addPassengerForm:psdetail:1:foodChoice")[0].selectedIndex = localStorage.getItem("b5" + rid);
			document.getElementsByName("addPassengerForm:psdetail:1:idCardType")[0].value = localStorage.getItem("b6" + rid);
			document.getElementsByName("addPassengerForm:psdetail:1:idCardNumber")[0].value = localStorage.getItem("b7" + rid);
			if (localStorage.getItem("b8" + rid) == "true")
				document.getElementsByName("addPassengerForm:psdetail:1:concessionOpt")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:psdetail:1:concessionOpt")[0].checked = false;
			document.getElementsByName("addPassengerForm:psdetail:2:foodChoice")[0].selectedIndex = localStorage.getItem("c5" + rid);
			document.getElementsByName("addPassengerForm:psdetail:2:idCardType")[0].value = localStorage.getItem("c6" + rid);
			document.getElementsByName("addPassengerForm:psdetail:2:idCardNumber")[0].value = localStorage.getItem("c7" + rid);
			if (localStorage.getItem("c8" + rid) == "true")
				document.getElementsByName("addPassengerForm:psdetail:2:concessionOpt")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:psdetail:2:concessionOpt")[0].checked = false;
			document.getElementsByName("addPassengerForm:psdetail:3:foodChoice")[0].selectedIndex = localStorage.getItem("d5" + rid);
			document.getElementsByName("addPassengerForm:psdetail:3:idCardType")[0].value = localStorage.getItem("d6" + rid);
			document.getElementsByName("addPassengerForm:psdetail:3:idCardNumber")[0].value = localStorage.getItem("d7" + rid);
			if (localStorage.getItem("d8" + rid) == "true")
				document.getElementsByName("addPassengerForm:psdetail:3:concessionOpt")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:psdetail:3:concessionOpt")[0].checked = false;
			document.getElementsByName("addPassengerForm:psdetail:4:foodChoice")[0].selectedIndex = localStorage.getItem("e5" + rid);
			document.getElementsByName("addPassengerForm:psdetail:4:idCardType")[0].value = localStorage.getItem("e6" + rid);
			document.getElementsByName("addPassengerForm:psdetail:4:idCardNumber")[0].value = localStorage.getItem("e7" + rid);
			if (localStorage.getItem("e8" + rid) == "true")
				document.getElementsByName("addPassengerForm:psdetail:4:concessionOpt")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:psdetail:4:concessionOpt")[0].checked = false;
			document.getElementsByName("addPassengerForm:psdetail:5:foodChoice")[0].selectedIndex = localStorage.getItem("f5" + rid);
			document.getElementsByName("addPassengerForm:psdetail:5:idCardType")[0].value = localStorage.getItem("f6" + rid);
			document.getElementsByName("addPassengerForm:psdetail:5:idCardNumber")[0].value = localStorage.getItem("f7" + rid);
			if (localStorage.getItem("f8" + rid) == "true")
				document.getElementsByName("addPassengerForm:psdetail:5:concessionOpt")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:psdetail:5:concessionOpt")[0].checked = false;

			document.getElementsByName("addPassengerForm:childInfoTable:0:infantName")[0].value = localStorage.getItem("g1" + rid);
			document.getElementsByName("addPassengerForm:childInfoTable:0:infantAge")[0].selectedIndex = localStorage.getItem("g2" + rid);
			document.getElementsByName("addPassengerForm:childInfoTable:0:infantGender")[0].selectedIndex = localStorage.getItem("g3" + rid);
			document.getElementsByName("addPassengerForm:childInfoTable:1:infantName")[0].value = localStorage.getItem("h1" + rid);
			document.getElementsByName("addPassengerForm:childInfoTable:1:infantAge")[0].selectedIndex = localStorage.getItem("h2" + rid);
			document.getElementsByName("addPassengerForm:childInfoTable:1:infantGender")[0].selectedIndex = localStorage.getItem("h3" + rid);
			if (localStorage.getItem("autoUpgrade" + rid) == "true")
				document.getElementsByName("addPassengerForm:autoUpgrade")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:autoUpgrade")[0].checked = false;

			if (localStorage.getItem("confirmBirth" + rid) == "true")
				document.getElementsByName("addPassengerForm:onlyConfirmBerths")[0].checked = true;
			else
				document.getElementsByName("addPassengerForm:onlyConfirmBerths")[0].checked = false;


			document.getElementsByName("addPassengerForm:mobileNo")[0].value = localStorage.getItem("phone" + rid);
			document.getElementById("ddlPaymentMode").selectedIndex = localStorage.getItem("payMode" + rid);
			funShowBank(localStorage.getItem("payMode" + rid))
			if (localStorage.getItem("payMode" + rid) > 0)
				funShowDC();
			document.getElementById("jpBook:bankINBList").selectedIndex = localStorage.getItem("netBank" + rid);
			document.getElementById("jpBook:bankDCList").selectedIndex = localStorage.getItem("dbCard" + rid);
			document.getElementById("card_type_id").selectedIndex = localStorage.getItem("card_type" + rid);
			document.getElementById("card_no_id").value = localStorage.getItem("card_no" + rid);
			document.getElementById("card_expiry_mon_id").selectedIndex = localStorage.getItem("card_expiry" + rid);
			document.getElementById("cvv_no_id").value = localStorage.getItem("cvv_no" + rid);
			document.getElementById("ccPin_id").value = localStorage.getItem("ccPin_id" + rid);
			document.getElementById("card_name_id").value = localStorage.getItem("card_name" + rid);
			document.getElementById("card_expiry_year_id").value = localStorage.getItem("card_expiry_year" + rid);
			document.getElementById("jpBook:bankPGList").selectedIndex = localStorage.getItem("ccBankName" + rid);
			document.getElementById("txttrainNo").value = localStorage.getItem("trainNo" + rid);
			document.getElementById("ddlClass").selectedIndex = localStorage.getItem("jclass" + rid);
			document.getElementById("txtHid").value = localStorage.getItem("isValid" + rid);
			document.getElementById("txtHbookDate").value = localStorage.getItem("bookDate" + rid);
			document.getElementById("txtHbookDate1").value = localStorage.getItem("bookDate1" + rid);
			document.getElementById("txttest").value = "1";
			document.getElementById("boardingStation").value = localStorage.getItem("brPoint" + rid);

		} else {
			alert("No Ticket data found")
		}
	}
}

function clrSaveTT() {
    var rid = document.getElementById("ddlSavedList").options[document.getElementById("ddlSavedList").selectedIndex].value;
	if (document.getElementById("ddlSavedList").selectedIndex > 0) {
		chrome.storage.sync.set({"j_username"  : ""});
		chrome.storage.sync.set({"j_password"  : ""});
		chrome.storage.sync.set({"from"  : ""});
		chrome.storage.sync.set({"to"  : ""});
		chrome.storage.sync.set({"date"  : ""});
		chrome.storage.sync.set({"a1"  : ""});
		chrome.storage.sync.set({"a2"  : ""});
		chrome.storage.sync.set({"a3"  : ""});
		chrome.storage.sync.set({"a4"  : ""});
		chrome.storage.sync.set({"b1"  : ""});
		chrome.storage.sync.set({"b2"  : ""});
		chrome.storage.sync.set({"b3"  : ""});
		chrome.storage.sync.set({"b4"  : ""});
		chrome.storage.sync.set({"c1"  : ""});
		chrome.storage.sync.set({"c2"  : ""});
		chrome.storage.sync.set({"c3"  : ""});
		chrome.storage.sync.set({"c4"  : ""});
		chrome.storage.sync.set({"d1"  : ""});
		chrome.storage.sync.set({"d2"  : ""});
		chrome.storage.sync.set({"d3"  : ""});
		chrome.storage.sync.set({"d4"  : ""});
		chrome.storage.sync.set({"e1"  : ""});
		chrome.storage.sync.set({"e2"  : ""});
		chrome.storage.sync.set({"e3"  : ""});
		chrome.storage.sync.set({"e4"  : ""});
		chrome.storage.sync.set({"f1"  : ""});
		chrome.storage.sync.set({"f2"  : ""});
		chrome.storage.sync.set({"f3"  : ""});
		chrome.storage.sync.set({"f4"  : ""});
		chrome.storage.sync.set({"a5"  : ""});
		chrome.storage.sync.set({"a6"  : "NULL_IDCARD"});
		chrome.storage.sync.set({"a7"  : ""});
		chrome.storage.sync.set({"a8"  : ""});
		chrome.storage.sync.set({"b5"  : ""});
		chrome.storage.sync.set({"b6"  : "NULL_IDCARD"});
		chrome.storage.sync.set({"b7"  : ""});
		chrome.storage.sync.set({"b8"  : ""});
		chrome.storage.sync.set({"c5"  : ""});
		chrome.storage.sync.set({"c6"  : "NULL_IDCARD"});
		chrome.storage.sync.set({"c7"  : ""});
		chrome.storage.sync.set({"c8"  : ""});
		chrome.storage.sync.set({"d5"  : ""});
		chrome.storage.sync.set({"d6"  : "NULL_IDCARD"});
		chrome.storage.sync.set({"d7"  : ""});
		chrome.storage.sync.set({"d8"  : ""});
		chrome.storage.sync.set({"e5"  : ""});
		chrome.storage.sync.set({"e6"  : "NULL_IDCARD"});
		chrome.storage.sync.set({"e7"  : ""});
		chrome.storage.sync.set({"e8"  : ""});
		chrome.storage.sync.set({"f5"  : ""});
		chrome.storage.sync.set({"f6"  : "NULL_IDCARD"});
		chrome.storage.sync.set({"f7"  : ""});
		chrome.storage.sync.set({"f8"  : ""});
		chrome.storage.sync.set({"g1"  : ""});
		chrome.storage.sync.set({"g2"  : ""});
		chrome.storage.sync.set({"g3"  : ""});
		chrome.storage.sync.set({"h1"  : ""});
		chrome.storage.sync.set({"h2"  : ""});
		chrome.storage.sync.set({"h3"  : ""});
		chrome.storage.sync.set({"autoUpgrade"  : ""});
		chrome.storage.sync.set({"confirmBirth"  : ""});
		chrome.storage.sync.set({"phone"  : ""});
		chrome.storage.sync.set({"payMode"  : ""});
		chrome.storage.sync.set({"netBank"  : ""});
		chrome.storage.sync.set({"dbCard"  : ""});
		chrome.storage.sync.set({"card_type"  : ""});
		chrome.storage.sync.set({"card_no"  : ""});
		chrome.storage.sync.set({"card_expiry"  : ""});
		chrome.storage.sync.set({"cvv_no"  : ""});
		chrome.storage.sync.set({"ccPin_id"  : ""});
		chrome.storage.sync.set({"card_name"  : ""});
		chrome.storage.sync.set({"card_expiry_year"  : ""});
		chrome.storage.sync.set({"ccBankName"  : ""});
		chrome.storage.sync.set({"trainNo"  : ""});
		chrome.storage.sync.set({"jclass"  : ""});
		chrome.storage.sync.set({"bookDate"  : ""});
		chrome.storage.sync.set({"bookDate1"  : ""});
		chrome.storage.sync.set({"brPoint"  : ""});
	}
    loadsaveDataL();
}


function saveDataL() {
	if (document.getElementById("ddlSavedList").selectedIndex > 0) {
		var rid = document.getElementById("ddlSavedList").options[document.getElementById("ddlSavedList").selectedIndex].value;
		var setObject = {
			j_username : document.getElementsByName("j_username")[0].value,
			j_password : document.getElementsByName("j_password")[0].value
		};
		chrome.storage.sync.set( {[rid] : setObject });
		/* chrome.storage.sync.set({"from"  : document.getElementsByName("jpform:fromStation")[0].value});
		chrome.storage.sync.set({"to"  : document.getElementsByName("jpform:toStation")[0].value});
		chrome.storage.sync.set({"date"  : document.getElementsByName("jpform:journeyDateInputDate")[0].value});
		chrome.storage.sync.set({"a1"  : document.getElementsByName("addPassengerForm:psdetail:0:psgnName")[0].value});
		chrome.storage.sync.set({"a2"  : document.getElementsByName("addPassengerForm:psdetail:0:psgnAge")[0].value});
		chrome.storage.sync.set({"a3"  : document.getElementsByName("addPassengerForm:psdetail:0:psgnGender")[0].selectedIndex});
		chrome.storage.sync.set({"a4"  : document.getElementsByName("addPassengerForm:psdetail:0:berthChoice")[0].value});
		chrome.storage.sync.set({"b1"  : document.getElementsByName("addPassengerForm:psdetail:1:psgnName")[0].value});
		chrome.storage.sync.set({"b2"  : document.getElementsByName("addPassengerForm:psdetail:1:psgnAge")[0].value});
		chrome.storage.sync.set({"b3"  : document.getElementsByName("addPassengerForm:psdetail:1:psgnGender")[0].selectedIndex});
		chrome.storage.sync.set({"b4"  : document.getElementsByName("addPassengerForm:psdetail:1:berthChoice")[0].value});
		chrome.storage.sync.set({"c1"  : document.getElementsByName("addPassengerForm:psdetail:2:psgnName")[0].value});
		chrome.storage.sync.set({"c2"  : document.getElementsByName("addPassengerForm:psdetail:2:psgnAge")[0].value});
		chrome.storage.sync.set({"c3"  : document.getElementsByName("addPassengerForm:psdetail:2:psgnGender")[0].selectedIndex});
		chrome.storage.sync.set({"c4"  : document.getElementsByName("addPassengerForm:psdetail:2:berthChoice")[0].value});
		chrome.storage.sync.set({"d1"  : document.getElementsByName("addPassengerForm:psdetail:3:psgnName")[0].value});
		chrome.storage.sync.set({"d2"  : document.getElementsByName("addPassengerForm:psdetail:3:psgnAge")[0].value});
		chrome.storage.sync.set({"d3"  : document.getElementsByName("addPassengerForm:psdetail:3:psgnGender")[0].selectedIndex});
		chrome.storage.sync.set({"d4"  : document.getElementsByName("addPassengerForm:psdetail:3:berthChoice")[0].value});
		chrome.storage.sync.set({"e1"  : document.getElementsByName("addPassengerForm:psdetail:4:psgnName")[0].value});
		chrome.storage.sync.set({"e2"  : document.getElementsByName("addPassengerForm:psdetail:4:psgnAge")[0].value});
		chrome.storage.sync.set({"e3"  : document.getElementsByName("addPassengerForm:psdetail:4:psgnGender")[0].selectedIndex});
		chrome.storage.sync.set({"e4"  : document.getElementsByName("addPassengerForm:psdetail:4:berthChoice")[0].value});
		chrome.storage.sync.set({"f1"  : document.getElementsByName("addPassengerForm:psdetail:5:psgnName")[0].value});
		chrome.storage.sync.set({"f2"  : document.getElementsByName("addPassengerForm:psdetail:5:psgnAge")[0].value});
		chrome.storage.sync.set({"f3"  : document.getElementsByName("addPassengerForm:psdetail:5:psgnGender")[0].selectedIndex});
		chrome.storage.sync.set({"f4"  : document.getElementsByName("addPassengerForm:psdetail:5:berthChoice")[0].value});
		chrome.storage.sync.set({"a5"  : document.getElementsByName("addPassengerForm:psdetail:0:foodChoice")[0].selectedIndex});
		chrome.storage.sync.set({"a6"  : document.getElementsByName("addPassengerForm:psdetail:0:idCardType")[0].value});
		//chrome.storage.sync.set({"a7"  : document.getElementsByName("addPassengerForm:psdetail:0:idCardNumber")[0].value});
		//chrome.storage.sync.set({"a8"  : document.getElementsByName("addPassengerForm:psdetail:0:concessionOpt")[0].checked});
		chrome.storage.sync.set({"b5"  : document.getElementsByName("addPassengerForm:psdetail:1:foodChoice")[0].selectedIndex});
		chrome.storage.sync.set({"b6"  : document.getElementsByName("addPassengerForm:psdetail:1:idCardType")[0].value});
		//chrome.storage.sync.set({"b7"  : document.getElementsByName("addPassengerForm:psdetail:1:idCardNumber")[0].value});
		//chrome.storage.sync.set({"b8"  : document.getElementsByName("addPassengerForm:psdetail:1:concessionOpt")[0].checked});
		chrome.storage.sync.set({"c5"  : document.getElementsByName("addPassengerForm:psdetail:2:foodChoice")[0].selectedIndex});
		chrome.storage.sync.set({"c6"  : document.getElementsByName("addPassengerForm:psdetail:2:idCardType")[0].value});
		//chrome.storage.sync.set({"c7"  : document.getElementsByName("addPassengerForm:psdetail:2:idCardNumber")[0].value});
		//chrome.storage.sync.set({"c8"  : document.getElementsByName("addPassengerForm:psdetail:2:concessionOpt")[0].checked});
		chrome.storage.sync.set({"d5"  : document.getElementsByName("addPassengerForm:psdetail:3:foodChoice")[0].selectedIndex});
		chrome.storage.sync.set({"d6"  : document.getElementsByName("addPassengerForm:psdetail:3:idCardType")[0].value});
		//chrome.storage.sync.set({"d7"  : document.getElementsByName("addPassengerForm:psdetail:3:idCardNumber")[0].value});
		//chrome.storage.sync.set({"d8"  : document.getElementsByName("addPassengerForm:psdetail:3:concessionOpt")[0].checked});
		chrome.storage.sync.set({"e5"  : document.getElementsByName("addPassengerForm:psdetail:4:foodChoice")[0].selectedIndex});
		chrome.storage.sync.set({"e6"  : document.getElementsByName("addPassengerForm:psdetail:4:idCardType")[0].value});
		//chrome.storage.sync.set({"e7"  : document.getElementsByName("addPassengerForm:psdetail:4:idCardNumber")[0].value});
		//chrome.storage.sync.set({"e8"  : document.getElementsByName("addPassengerForm:psdetail:4:concessionOpt")[0].checked});
		chrome.storage.sync.set({"f5"  : document.getElementsByName("addPassengerForm:psdetail:5:foodChoice")[0].selectedIndex});
		chrome.storage.sync.set({"f6"  : document.getElementsByName("addPassengerForm:psdetail:5:idCardType")[0].value});
		//chrome.storage.sync.set({"f7"  : document.getElementsByName("addPassengerForm:psdetail:5:idCardNumber")[0].value});
		//chrome.storage.sync.set({"f8"  : document.getElementsByName("addPassengerForm:psdetail:5:concessionOpt")[0].checked});
		chrome.storage.sync.set({"g1"  : document.getElementsByName("addPassengerForm:childInfoTable:0:infantName")[0].value});
		chrome.storage.sync.set({"g2"  : document.getElementsByName("addPassengerForm:childInfoTable:0:infantAge")[0].selectedIndex});
		chrome.storage.sync.set({"g3"  : document.getElementsByName("addPassengerForm:childInfoTable:0:infantGender")[0].selectedIndex});
		chrome.storage.sync.set({"h1"  : document.getElementsByName("addPassengerForm:childInfoTable:1:infantName")[0].value});
		chrome.storage.sync.set({"h2"  : document.getElementsByName("addPassengerForm:childInfoTable:1:infantAge")[0].selectedIndex});
		chrome.storage.sync.set({"h3"  : document.getElementsByName("addPassengerForm:childInfoTable:1:infantGender")[0].selectedIndex});
		chrome.storage.sync.set({"autoUpgrade"  : document.getElementsByName("addPassengerForm:autoUpgrade")[0].checked});
		chrome.storage.sync.set({"confirmBirth"  : document.getElementsByName("addPassengerForm:onlyConfirmBerths")[0].checked});
		chrome.storage.sync.set({"phone"  : document.getElementsByName("addPassengerForm:mobileNo")[0].value});
		chrome.storage.sync.set({"payMode"  : document.getElementById("ddlPaymentMode").selectedIndex});
		chrome.storage.sync.set({"netBank"  : document.getElementById("jpBook:bankINBList").selectedIndex});
		chrome.storage.sync.set({"dbCard"  : document.getElementById("jpBook:bankDCList").selectedIndex});
		chrome.storage.sync.set({"card_type"  : document.getElementById("card_type_id").selectedIndex});
		chrome.storage.sync.set({"card_no"  : document.getElementById("card_no_id").value});
		chrome.storage.sync.set({"card_expiry"  : document.getElementById("card_expiry_mon_id").selectedIndex});
		chrome.storage.sync.set({"cvv_no"  : document.getElementById("cvv_no_id").value});
		chrome.storage.sync.set({"ccPin_id"  : document.getElementById("ccPin_id").value});
		chrome.storage.sync.set({"card_name"  : document.getElementById("card_name_id").value});
		chrome.storage.sync.set({"card_expiry_year"  : document.getElementById("card_expiry_year_id").value});
		chrome.storage.sync.set({"ccBankName"  : document.getElementById("jpBook:bankPGList").selectedIndex});
		chrome.storage.sync.set({"trainNo"  : document.getElementById("txttrainNo").value});
		chrome.storage.sync.set({"jclass"  : document.getElementById("ddlClass").selectedIndex});
		chrome.storage.sync.set({"bookDate"  : document.getElementById("txtHbookDate").value});
		chrome.storage.sync.set({"bookDate1"  : document.getElementById("txtHbookDate1").value});
		chrome.storage.sync.set({"brPoint"  : document.getElementById("boardingStation").value}); */
	}
}

function enableDisableExtension() {
	var selectedSet = document.getElementById("ddlSavedList").options[document.getElementById("ddlSavedList").selectedIndex].value;
	if(selectedSet != "nil"){
		chrome.storage.sync.set({"selectedSet" : selectedSet});
		myA = document.getElementById("enableDisableFlag");
		chrome.storage.sync.get("selectedSet",function(item) {
			var enableDisableFlag = localStorage.getItem("enableDisableFlag");
			if(enableDisableFlag === null){
				chrome.storage.sync.set({"enableDisableFlag" : "true"});
				myA.style.borderColor = "green";
			}else if(enableDisableFlag == "false"){
				chrome.storage.sync.set({"enableDisableFlag" : "true"});
				myA.style.borderColor = "green";
			}else{
				chrome.storage.sync.set({"enableDisableFlag" : "false"});
				myA.style.borderColor = "red";
			}
		});
	} else{
		alert("Select A Ticket Set");
	}
}

$(function() {
    ckBrowser();
    loadsaveDataL();
    funShowBank(1);
    document.getElementById("btnLoadData").addEventListener("click", loadsaveDataL);
    document.getElementById("btnClearData").addEventListener("click", clrSaveTT);
    /* document.getElementById("btnSaveData").addEventListener("click", Button1_onclick);To Check Plugin*/
	document.getElementById("enableDisableFlag").addEventListener("click", enableDisableExtension);
    document.getElementById("btnSaveData").addEventListener("click", saveDataL);
    document.getElementById("journeyDateInputDate").addEventListener("onchange", cDate);
    document.getElementById("jpBook:bankINBList").addEventListener("onchange", funChangeBank(document.getElementById("jpBook:bankINBList").selectedIndex));
    document.getElementById("jpBook:bankDCList").addEventListener("onchange", funShowDC(document.getElementById("jpBook:bankDCList").selectedIndex));
    document.getElementById("jpBook:bankPGList").addEventListener("onchange", funShowDC(document.getElementById("jpBook:bankPGList")));
    document.getElementById("ddlPaymentMode").addEventListener("onchange", funShowBank(document.getElementById("ddlPaymentMode").selectedIndex));
    document.getElementById("jpBookbankCCList").addEventListener("onchange", setPayID(document.getElementById("jpBookbankCCList")));
});
