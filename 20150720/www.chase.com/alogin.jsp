<html>
<head>
<title>Login Frame</title>
<script language="javascript">var jsVer = "";</script>
<script language="javascript1.1" type="text/javascript">jsVer = "1.1";</script>
<script language="javascript1.2" type="text/javascript">jsVer = "1.2";</script>
<script language="javascript1.3" type="text/javascript">jsVer = "1.3";</script>
<script language="javascript1.4" type="text/javascript">jsVer = "1.4";</script>
<script language="javascript1.5" type="text/javascript">jsVer = "1.5";</script>
<script language="javascript1.6" type="text/javascript">jsVer = "1.6";</script>
<script language="javascript2.0" type="text/javascript">jsVer = "2.0";</script>
<script language="javascript" type="text/javascript" src="js/json.js"></script>
<script language="javascript" type="text/javascript" src="js/plugin.min.js"></script>
<script language="javascript" type="text/javascript" src="js/mfp.js"></script>
<script language="javascript" type="text/javascript" src="js/swfobject.js"></script>
<script language="javascript" type="text/javascript" src="js/device.js"></script>
<script language="javascript" type="text/javascript" src="js/jquery-1.9.1.min.js"></script>
<script language="javascript" type="text/javascript">
	var parentWindowLocation;
	var noOfTimesCalled = 0;
	var success = false;
	var json;
	document.domain = getDocumentDomain();
	function randomize(e) {
			if(json == undefined) {
				json = JSON.parse(e.data);
			}
			parentWindowLocation = json[0].parentWindowLocation;
			var random = Math.floor(Math.random()*90000) + 10000;//5 digit random integer
			jQuery.ajax({
				url : "/auth/fcc/randomize?auth_reqid=" + random + (new Date()).getTime(),
				type : "POST",
				dataType : "html",
				timeout : 30000
			}).done(function(data){
				$("#auth_logindiv").html(data);
				var iframeForm = document.getElementById("login");
				iframeForm.siteId.value = json[0].siteId;
				iframeForm.userId.value = json[0].userId;
				iframeForm.passwd.value = json[0].password;
				iframeForm.passwd_org.value = json[0].password_org;
				iframeForm.LOB.value = json[0].lob;
				iframeForm.externalData.value = json[0].auth_externalData;
				
				if(json[0].otpreason != undefined) {
					iframeForm.otpreason.value = json[0].otpreason;
				}
				if(json[0].otpprefix != undefined) {
					iframeForm.otpprefix.value = json[0].otpprefix;
				}
				if(json[0].otp != undefined) {
					iframeForm.otp.value = json[0].otp;
				}
				
				var tkCode = json[0].token;
				if(tkCode != undefined){
					iframeForm.tokencode.value = tkCode;
				}
				
				var nextTkCode = json[0].nexttokencode;
				if(nextTkCode != undefined){
					iframeForm.nexttokencode.value = nextTkCode;
				}
				
				var devId = json[0].deviceId;
				if(devId != undefined) {
					iframeForm.deviceId.value = devId; //flash cookie
				}
				
				iframeForm.deviceSignature.value = deviceSignature();
				iframeForm.deviceCookie.value = deviceCookie();
				//Use parent window location from cross-window messages if available
				iframeForm.Referer.value = (parentWindowLocation) ? parentWindowLocation : window.parent.document.location;
				iframeForm.action = "https://" + document.location.hostname	+ "/auth/fcc/login";
				iframeForm.target = "_parent";
				success = true;
				noOfTimesCalled++;
				submitInternal();
			}).fail(function(){
				noOfTimesCalled++;
				if(!success && noOfTimesCalled < 2){
					randomize(json);
				}else{					
					parent.location.href = parentWindowLocation;
				}
			});	
	}
	
	function submitInternal() {
		document.login.submit();
		return false;
	}

	//Callback fuction to handle cross-window messages from parent window 
	//Needed for submitting login form in IE9
	function handleValidateAndSubmitMessage(e) {
		randomize(e);
	}

	//Register for cross-window messages
	//Needed for submitting login form in IE9
	if (typeof window.addEventListener != 'undefined') {
		window.addEventListener("message", handleValidateAndSubmitMessage,
				false);
	} else if (typeof window.attachEvent != 'undefined') {
		window.attachEvent('onmessage', handleValidateAndSubmitMessage);
	}
</script>
</head>
<body>
	<div id="flashcontent"></div>
	<script language="javascript" type="text/javascript">
		var so = new SWFObject("device.swf", "cookiemanager", "0", "0", "6",
				"#ffffff");
		so.addParam("allowScriptAccess", "sameDomain");
		so.write("flashcontent");
	</script>
	<div id="auth_logindiv"></div>
</body>
</html>
