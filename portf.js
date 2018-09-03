$(document).ready(function() {

    // Responsive mobile buttons
    $(".icon-menu").on("click",function(){
		event.preventDefault();
		$a = $(this);
        $("#main-menu").slideToggle(function(){
        	$(window).scrollTop($a.offset().top-4);
		});
    });

    //Shadow menu scroll
    var navbar = $('nav');
    $(window).scroll(function(){
        if($(window).scrollTop() <= 50){
       		navbar.css('box-shadow', 'none');
        } else {
          navbar.css('box-shadow', '0px 10px 20px rgba(0, 0, 0, 0.4)');
        }
    });

    // Scroll links
    $.scrollIt(); 

    // Form validation
    $('#bt_submit').on("click",function(){
		// Remove all '.error' classes
		$('input, textarea').removeClass('error');
		// Variables
		var frm_name = $("#frm_name").val();
		var frm_email = $("#frm_email").val();
		var frm_message = $("#frm_message").val();
		// Validation
		if(frm_name==''){
			valAction("frm_name");
		} else if(frm_email=='' || !(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(frm_email))){
			valAction("frm_email");
		} else if(frm_message==''){
			valAction("frm_message");
		} else {	
			alert("Success!");		
		}
		function valAction(y){
			$('#' + y).val('');	
			$('#' + y).focus().select();
			$('#' + y).addClass('error');
		}
		return false;
	});

});

    