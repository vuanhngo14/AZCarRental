let cars; 

// Function to load car data from JSON and display it in the HTML
function loadCarData() {
    fetch('cars.json')
        .then((response) => response.json())
        .then((data) => {
            cars = data; 
            displayCarDetails(); 
        })
        .catch((error) => {
            console.error('Error loading car data: ' + error);
        });
}

// Function to retrieve car details and update the HTML
function displayCarDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const carId = urlParams.get('id');

    const selectedCar = cars.find((car) => car.id.toString() === carId);

    // Update the elements in HTML with the car details
    const carImage = document.querySelector('.car-image img');
    const carDescription = document.querySelector('.car-description');

    if (selectedCar) {
        carImage.src = selectedCar.image;
        carImage.alt = selectedCar.make + ' ' + selectedCar.model;

        carDescription.querySelector('h2').textContent = selectedCar.make + ' ' + selectedCar.model;
        carDescription.querySelector('p').textContent = 'Price: $' + selectedCar.price + '/day';
    } else {

        carDescription.querySelector('h2').textContent = 'Car Not Found';
        carDescription.querySelector('p').textContent = 'The specified car ID was not found.';
    }
}

// Run the function when the page loads
window.onload = loadCarData;