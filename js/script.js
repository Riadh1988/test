function phonenumber(tel){
	var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
	if(tel.value.match(phoneno)){
		document.getElementById('loadingGif').style.display = "block";
		document.getElementById('inner').style.opacity = "0.3";
		document.getElementById('invalid-tel').style.opacity = "0";
		setTimeout(function() {
			document.getElementById('loadingGif').style.display = "none"; 
			document.getElementById('inner').style.opacity = "1";
			document.getElementById('invalid-tel').style.opacity = "0";
			document.getElementById("btnanimate").classList.toggle('btnanimategrow');
			document.getElementById("welcomeh").classList.toggle('welcome-left');
			document.getElementById("btn-goback").classList.toggle('btn-goback-up');
		},2000);    
	}
	else
		{
			document.getElementById('invalid-tel').style.opacity = "1"; 
		}
}

function Email(email){
	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){ 
		document.getElementById('loadingGif').style.display = "block";
		document.getElementById('inner').style.opacity = "0.3";
		document.getElementById('invalid-email').style.opacity = "0";
		setTimeout(function() {
			document.getElementById('loadingGif').style.display = "none"; 
			document.getElementById('inner').style.opacity = "1";
			document.getElementById('invalid-email').style.opacity = "0";
			document.getElementById("btn-animate").classList.toggle('btn-animate-grow');
			document.getElementById("welcomeh").classList.toggle('welcome-left');
			document.getElementById("btn-goback").classList.toggle('btn-goback-up');
		},2000);  
	}
	else
	{
		document.getElementById('invalid-email').style.opacity = "1";
		
	}
}  


