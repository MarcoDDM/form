$(document).ready(function(){ 
	$("#ajax-contact-form").submit(function(){
		var str = $(this).serialize(); 
		$.ajax( { type: "POST", url: "contact.php", data: str, success: function(msg){ 
				if(msg == 'OK') // Message Sent? Show the 'Thank You' message and hide the form
					{ result = '<div class="notification_ok">Your message has been sent. Thank you!<br> Please check your spam folder. If you don\'t receive a response, please write us an email to <em>voodoocenter@voodoospells.services</em>.<a href="#" onclick="freset();return false;">send another mail</a></div>'; $("#fields").hide(); } 							
				else
					{ result = msg; } 
				$("#note").html(result); 
			} 
		}); 
		return false; 
	}); 
});
				
function freset(){ 	
	$("#note").html('');
	document.getElementById('ajax-contact-form').reset();
	$("#fields").show();
};