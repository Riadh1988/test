 
	var elements = document.getElementsByClassName('btn');
for(var i = 0, len = elements.length; i < len; i++) {
    elements[i].onclick = function () {
        $(".formemail").toggle("formemail-left");
    	$(".formtelnum").toggle("formtelnum-left");
    	$(".frame").toggle("frame-long");
    	$(".tel-num-inactive").toggle("tel-num-active");
    	$(".email-active").toggle("email-inactive"); 
    	$(this).removeClass("idle").addClass("active");
    }
}
 
function phonenumber(tel){
  var phoneno = /^\(?([0-9]{3})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{4})$/;
  if(tel.value.match(phoneno))
     {
     	document.getElementById('loadingGif').style.display = "block";
     	document.getElementById('frame').style.opacity = "0.3";
		setTimeout(function() { 
			document.getElementById('frame').style.opacity = "1";
			$(".nav").toggleClass("nav-up");
		$(".frame").toggleClass("frame-short");  
		$(".btn-animate").toggleClass("btn-animate-grow2");
		$(".welcome").toggleClass("welcome-left");
		$(".frame").toggleClass("frame-short");
		$(".btn-goback").toggleClass("btn-goback-up");
		document.getElementById('loadingGif').style.display = "none"; 
		  },3000);  
		
	 }
   else
     {
	   document.getElementById('invalid-tel').style.display = "block";
	   $(".formtelnum .form-styling").css({"border-bottom":"2px solid #cb3649"});
	   $(".formtelnum .txt_field label").css({"color":"#cb3649"});
	   return falbtn-animate-grow2se;
     }
}


function Email(email){
	var mailformat=/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
	if(email.value.match(mailformat)){ 
		document.getElementById('loadingGif').style.display = "block";
		document.getElementById('frame').style.opacity = "0.3";
		setTimeout(function() {
			document.getElementById('frame').style.opacity = "1";
		$(".btn-animate").toggleClass("btn-animate-grow");
		$(".welcome").toggleClass("welcome-left"); 
		$(".frame").toggleClass("frame-short"); 
		$(".btn-goback").toggleClass("btn-goback-up");
		document.getElementById('loadingGif').style.display = "none"; 
		  },3000); 
		

		}
		else
		{
			document.getElementById('invalid-email').style.display = "block";
			$(".formemail .form-styling").css({"border-bottom":"2px solid #cb3649"});
			$(".formemail .txt_field label").css({"color":"#cb3649"});
			
		}
	}  