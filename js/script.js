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




// Get the select element
var select = document.querySelector('select');

// Add a change event listener
select.addEventListener('change', function() {
  // Get the selected value
  var selectedValue = select.value;

  // Do something with the selected value
  console.log(selectedValue);
});

// transaction
const form = document.querySelector('form');
const status = document.querySelector('#status');

form.addEventListener('submit', async (event) => {
  event.preventDefault();

  const phoneNumber = form.elements.phoneNumber.value;
  const amount = form.elements.amount.value;
  const reference = form.elements.reference.value;

  try {
    const response = await fetch('/pay', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ phoneNumber, amount, reference }),
    });

    const result = await response.text();

    status.innerHTML = result;
  } catch (error) {
    console.error(error);
    status.innerHTML = 'Payment failed!';
  }
});
