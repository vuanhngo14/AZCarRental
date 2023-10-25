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

function collectNames() {

    event.preventDefault(); 

    const fullName = document.getElementById('full-name').value;
    const contactNumber = document.getElementById('contact-number').value;

    console.log(fullName); 
    console.log(contactNumber); 

    const rentalData = JSON.parse(localStorage.getItem('rentalData')) || [];

    const matchingCarIds = rentalData.filter((entry) => entry.fullName === fullName && entry.contactNumber === contactNumber).map((entry) => entry.carId);
    console.log(matchingCarIds.length); 

    displayCarData(matchingCarIds);
};

function displayCarData(matchingCarIds) {

    if (matchingCarIds.length === 0) {
        alert("No bookings found");
    } else {
        console.log("running display car function");
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

