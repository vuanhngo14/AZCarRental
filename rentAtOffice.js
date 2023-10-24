// Function to handle form submission
function handleSubmit(event) {
    event.preventDefault();

    const form = document.getElementById('rental-form');

    // Get the values from the form fields
    const carId = form.querySelector('#car-id').value;
    const fullName = form.querySelector('#full-name').value;
    const contactNumber = form.querySelector('#contact-number').value;
    const email = form.querySelector('#email').value;
    const currentDate = new Date();
  
    // Create a rental object
    const rentalInfo = {
      carId,
      fullName,
      contactNumber,
      email,
      rentalDateTime: currentDate.toISOString(),
    };
  
    // Store the rental data in local storage
    const rentalData = JSON.parse(localStorage.getItem('rentalData')) || [];
    rentalData.push(rentalInfo);
    localStorage.setItem('rentalData', JSON.stringify(rentalData));
  
    alert('Thank you for your reservation!');
      form.reset();
  }
  
  document.getElementById('rental-form').addEventListener('submit', handleSubmit);