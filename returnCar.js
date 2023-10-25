let cars;

// Function to load car data from JSON
function loadCarData() {
    fetch('cars.json')
        .then((response) => response.json())
        .then((data) => {
            cars = data;
        })
        .catch((error) => {
            console.error('Error loading car data: ' + error);
        });
}

document.getElementById('rental-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const fullName = document.getElementById('full-name').value;
    const contactNumber = document.getElementById('contact-number').value;

    // Retrieve user data from local storage
    const rentalData = JSON.parse(localStorage.getItem('rentalData')) || [];

    // Find car IDs matching the full name and contact number
    const matchingCarIds = rentalData.filter((entry) => entry.fullName === fullName && entry.contactNumber === contactNumber).map((entry) => entry.carId);

    // Display car details for each matching car ID
    displayCarData(matchingCarIds);
});

function displayCarData(matchingCarIds) {

    if (matchingCarIds.length === 0) {
        alert("No bookings found");
    } else {
        matchingCarIds.forEach((carId) => {
            const matchingCar = cars.find((car) => car.id === carId);
            
            if (matchingCar) {
                // Create and append elements to display car data
                const rentedCarDiv = document.createElement('div');
                rentedCarDiv.classList.add('rented-car');

                const showDetailsDiv = document.createElement('div');
                showDetailsDiv.classList.add('show-details');
                showDetailsDiv.innerHTML = `<p>Car ID: ${matchingCar.id}</p><p>Name: ${matchingCar.make} ${matchingCar.model}</p><p>Total Price: $${matchingCar.price}</p>`;

                rentedCarDiv.appendChild(showDetailsDiv);
                carDetailsDiv.appendChild(rentedCarDiv);
            }
        });
    }
}



// Onload

window.onload = loadCarData;

