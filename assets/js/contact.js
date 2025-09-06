const form = document.getElementById('contact-form');

form.addEventListener('submit', function(event) {
    event.preventDefault();

    // Get form data
    const formData = {
        user_name: form.user_name.value,
        user_email: form.user_email.value,
        message: form.message.value
    };

    // Show loading state
    const submitButton = form.querySelector('.contact__button');
    const originalText = submitButton.value;
    submitButton.value = 'Sending...';
    submitButton.disabled = true;

    // For now, simulate a successful send (you can replace this with actual EmailJS)
    setTimeout(function() {
        console.log('Form data:', formData);
        alert('Message sent successfully! Thank you for contacting me.');
        form.reset();
        submitButton.value = originalText;
        submitButton.disabled = false;
    }, 1500);

    // Uncomment and configure the following code when you have EmailJS set up:
    /*
    emailjs.send('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', formData)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            alert('Message sent successfully!');
            form.reset();
        }, function(error) {
            console.log('FAILED...', error);
            alert('Failed to send message. Please try again.');
        })
        .finally(function() {
            submitButton.value = originalText;
            submitButton.disabled = false;
        });
    */
}); 