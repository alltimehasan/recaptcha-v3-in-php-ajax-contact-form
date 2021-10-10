$(function() {

	// Get the form.
	var form = $('#contactForm');

	// Get The submit button
	var submitBtn = $('#contactForm > :submit');	

	// Get the messages div.
	var formMessages = $('#responseMsg');

	// Set up an event listener for the contact form.
	$(form).submit(function(e) {
		// Stop the browser from submitting the form.
		e.preventDefault();

		// Make the button disabled
		$(submitBtn).attr('disabled', 'disabled');

		// Show the processing message to the user
		$(responseMsg).text('Please wait ...');
		$(responseMsg).addClass('processing');
		$(responseMsg).removeClass('error');
		$(responseMsg).removeClass('success');

		grecaptcha.ready(function() {
			grecaptcha.execute('site_key', {action: 'submit'}).then(function(token) {
				
				// Generate reCaptcha Token
				$('#g-recaptcha-response').val(token);

				// Serialize the form data.
				var formData = $(form).serialize();

				// Submit the form using AJAX.
				$.ajax({
					type: 'POST',
					url: $(form).attr('action'),
					data: formData
				})
				.done(function(response) {
					// Make the button active
					$(submitBtn).removeAttr('disabled');

					// Make sure that the formMessages div has the 'success' class.
					$(responseMsg).removeClass('processing');
					$(formMessages).removeClass('error');
					$(formMessages).addClass('success');

					// Set the message text.
					$(formMessages).text(response);

					// Clear the form.
					$('#name').val('');
					$('#email').val('');
					$('#message').val('');
				})
				.fail(function(data) {
					// Make the button active
					$(submitBtn).removeAttr('disabled');

					// Make sure that the formMessages div has the 'error' class.
					$(responseMsg).removeClass('processing');
					$(formMessages).removeClass('success');
					$(formMessages).addClass('error');

					// Set the message text.
					if (data.responseText !== '') {
						$(formMessages).text(data.responseText);
					} else {
						$(formMessages).text('Oops! An error occurred and your message could not be sent.');
					}
				});
				
			});
		});

	});

});