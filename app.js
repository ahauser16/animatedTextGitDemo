// Get the form element
const form = document.querySelector('form');

// Add event listener for form submission
form.addEventListener('submit', (event) => {
    event.preventDefault(); // Prevent form submission

    // Get form input values
    const name = document.querySelector('#name').value;
    const email = document.querySelector('#email').value;
    const address = document.querySelector('#address').value;
    const item = document.querySelector('#item').value;

    // Validate form inputs
    if (name === '' || email === '' || address === '' || item === '') {
        alert('Please fill in all fields');
        return;
    }

    // Create an object with the form data
    const formData = {
        name,
        email,
        address,
        item
    };

    // Send the form data to the server
    // Replace the URL with your server endpoint
    fetch('https://example.com/checkout', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData)
    })
        .then(response => response.json())
        .then(data => {
            // Handle the server response
            console.log(data);
            alert('Order placed successfully!');
            form.reset(); // Reset the form
        })
        .catch(error => {
            console.error(error);
            alert('An error occurred. Please try again later.');
        });
});
