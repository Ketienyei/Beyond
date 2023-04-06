function redirectToPage() {
  window.location.href = "contactus.html";
}

<button onclick="redirectToPage()">Contact Us</button>


$(document).ready(function() {
  $('#contact-form').submit(function(event) {
    event.preventDefault();
    var formData = $(this).serialize();
    $.ajax({
      type: 'POST',
      url: 'contact.php', // replace with your PHP file that handles the form data
      data: formData,
      success: function(response) {
        alert('Your message has been sent!');
        $('#contact-form')[0].reset(); // reset the form
      },
      error: function(xhr, status, error) {
        alert('There was an error sending your message. Please try again later.');
      }
    });
  });
});
