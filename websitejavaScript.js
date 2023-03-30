function timeNow (){
	
	const today = new Date();

	let hour = today.getHours();
	
	let minute = today.getMinutes();
	
	let seconds = today.getSeconds();
	
	minute = formatTime(minute);
	
	seconds = formatTime(seconds);
	
	document.getElementById("time").innerHTML = today.toDateString()+ " - " + hour + ":" + minute + ":" + seconds;
	
	setTimeout(timeNow, 1000);
	
}

function formatTime (x){
	
	if (x<10)
			x = "0" + x;
	return x;
}

function privacyAlert(){
	
	alert("WEBSITE DISCLAIMER The information provided by GARDEN OF FRIENDS (\"we,\" \"us,\" or \"Our\") on http://127.0.0.1:56633/assignments/q8.html (the \"Site\")is for general informational purposes only. All information on the Site is provided in good faith, however we make no representation or warranty of any kind, express or implied, regarding the accuracy, adequacy, validity, reliability, availability, or completeness of any information on the Site. UNDER NO CIRCUMSTANCE SHALL WE HAVE ANY LIABILITY TO YOU FOR ANY LOSS OR DAMAGE OF ANY KIND INCURRED AS A RESULT OF THE USE OF THE SITE OR RELIANCE ON ANY INFORMATION PROVIDED ON THE SITE. YOUR USE OF THE SITE AND YOUR RELIANCE ON ANY INFORMATION ON THE SITE IS SOLELY AT YOUR OWN RISK.")
}

function verifyDog(){
	
	
	const textInputs =document.getElementsByClassName("formD");
	
	const checkboxInputs = document.getElementsByClassName("check1formD");
	
	const radioInputs = document.getElementsByClassName("radio1");
	
	let radioEmpty = false;
	
	let checkEmpty = false;
	
	
	for (let i = 0; i<textInputs.length; i++){
		
		if (textInputs[i].type == "text" && textInputs[i].value.length == 0){
			
				alert("Texts fields missing");
				return false;
		}
		
			else if (textInputs[i].type == "email"){
			
			if (textInputs[i].value.length == 0){
				alert("The Email is missing");
					return false;
			}
			
			
			else if (textInputs[i].match(/([@a-z]|[0-9])+\.(ca|com|fr)/g) == null){
				
				alert("The Email is invalid");
					return false;	
			} 
	
		}
		
		
	}
	
	for (let i = 0; i <radioInputs.length; i++){
		
		radioEmpty = radioInputs[i].checked;
		if (radioEmpty)
			return;
	}
	
	if(!radioEmpty){
		alert("Radios are empty");
		return false;
	}
			
	
	for (let i = 0; i <checkboxInputs.length; i++){
		
		checkEmpty = checkboxInputs[i].checked;
		alert(checkEmpty);
		if (checkEmpty)
			return false;
	}
	
	if(!checkEmpty){
		
		alert("All the checkboxes are empty");
		return false;
	}
			
}

function verifyCat(){
	
	
	const textInputs =document.getElementsByClassName("formc");
	
	const checkboxInputs = document.getElementsByClassName("check1formc");
	
	const radioInputs = document.getElementsByClassName("radio2");
	
	let radioEmpty = false;
	
	let checkEmpty = false;
	
	
	for (let i = 0; i<textInputs.length; i++){
		
		if (textInputs[i].type == "text" && textInputs[i].value.length == 0){
			
				alert(" Texts fields missing");
				return false;
		}
		
		else if (textInputs[i].type == "email"){
			
			if (textInputs[i].value.length == 0){
				alert("The Email is missing");
					return false;
			}
			
			
			else if (textInputs[i].match(/([@a-z]|[0-9])+\.(ca|com|fr)/g) == null){
				
				alert("The Email is invalid");
					return false;	
			} 
	
		}
	
	}
	
	for (let i = 0; i <radioInputs.length; i++){
		
		radioEmpty = radioInputs[i].checked;
		if (radioEmpty)
			return false;
	}
	
	if(!radioEmpty){
		
		alert("Radios are empty");
		return false;
		
	}
			
	
	for (let i = 0; i <checkboxInputs.length; i++){
		
		checkEmpty = checkboxInputs[i].checked;
			if (checkEmpty)
			return false;
	}
	
	if(!checkEmpty){
		
		alert("All the checkboxes are empty");
		return false;
	}
			
}


function giveAwayEmpty (){
	
	let pchildren = false;
	
	let mcats = false;
	
	let mdogs = false;
	
	let catAndDog = false;
	
	const giveText = document.getElementsByClassName("giveText");
	
	const petChildren = document.getElementsByClassName("smallChildren");
	
	const moreCats = document.getElementsByClassName("otherCat");
	
	const moreDogs = document.getElementsByClassName("otherDog");
	
	const choosePet = document.getElementsByClassName("catdogRadio");
	
	for (let i = 0; i<giveText.length; i++){
		
		if (giveText[i].type == "text" && giveText[i].value.length == 0){
			
				alert(" Texts fields missing");
				return false;
		}
		
		else if (giveText[i].type == "email"){
			
			if (giveText[i].value.length == 0){
				alert("The Email is missing");
					return false;
			}
			
			
			else if (giveText[i].match(/([@a-z]|[0-9])+\.(ca|com|fr)/g) == null){
				
				alert("The Email is invalid");
					return false;	
			} 
	
		}
	}
	
	for (let i = 0; i <petChildren.length; i++){
		
		pchildren = petChildren[i].checked;
		if (pchildren)
			return false;
	}
	
		if(!pchildren){
		
		alert("Radios are empty");
		return false;
	}
	
	for (let i = 0; i <moreCats.length; i++){
		
		mcats = moreCats[i].checked;
		if (mcats)
			return false;
	}
	
		if(!mcats){
		
		alert("Radios are empty");
		return false;
	}
	

	for (let i = 0; i <moreDogs.length; i++){
		
		mdogs = moreDogs[i].checked;
		if (mdogs)
			return false;
	}
	
		if(!mdogs){
		
		alert("Radios are empty");
		return false;
	}
	
	
	for (let i = 0; i <choosePet.length; i++){
		
		catAndDog = choosePet[i].checked;
		if (catAndDog)
			return false;
	}
	
		if(!catAndDog){
		
		alert("Radios are empty");
		return false;
	}
	
	
	
	
}




