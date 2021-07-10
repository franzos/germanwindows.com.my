$(function() {
	$('#quick-contact-form').parsley().subscribe('parsley:form:validate', function (formInstance) {
		formInstance.submitEvent.preventDefault();
		if (formInstance.isValid() == true) {
			$.ajax({
				url:'https://hooks.zapier.com/hooks/catch/184367/e2tsii/',
				type:'post',
				data:$('#quick-contact-form').serialize(),
				success:function(){
					window.location = "https://germanwindows.com.my/thank-you/";
				}
			});
		}});
});