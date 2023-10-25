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

    displayCarData(matchingCarIds);
};

function displayCarData(matchingCarIds) {

    if (matchingCarIds.length === 0) {
        alert("No bookings found");
    } else {
        console.log("running display car function");
        matchingCarIds.forEach((carId) => {

            var carIdInt = parseInt(carId, 10);

            const matchingCar = cars.find((car) => car.id === carIdInt);

            if (matchingCar) {
                if (matchingCar) {
                    // Create and append elements to display car data
                    const rentedCarDiv = document.createElement('div');
                    rentedCarDiv.classList.add('rented-car');
                
                    // Create showDetailsDiv and its children
                    const showDetailsDiv = document.createElement('div');
                    showDetailsDiv.classList.add('show-details');
                
                    // Create elements for car data
                    const carIdLabelSpan = document.createElement('span');
                    carIdLabelSpan.textContent = "Car ID: ";
                
                    const carIdSpan = document.createElement('span');
                    carIdSpan.id = 'car-id';
                    carIdSpan.textContent = matchingCar.id;
                
                    const carNameLabelSpan = document.createElement('span');
                    carNameLabelSpan.textContent = "Name: ";
                
                    const carNameSpan = document.createElement('span');
                    carNameSpan.id = 'car-name';
                    carNameSpan.textContent = `${matchingCar.make} ${matchingCar.model}`;
                
                    const carPriceLabelSpan = document.createElement('span');
                    carPriceLabelSpan.textContent = "Total Price: ";
                
                    const carPriceSpan = document.createElement('span');
                    carPriceSpan.id = 'car-price';
                    carPriceSpan.textContent = `$${matchingCar.price}`;
                
                    // Append the elements to their respective parents
                    showDetailsDiv.appendChild(carIdLabelSpan);
                    showDetailsDiv.appendChild(carIdSpan);
                    showDetailsDiv.appendChild(document.createElement('br'));
                    showDetailsDiv.appendChild(carNameLabelSpan);
                    showDetailsDiv.appendChild(carNameSpan);
                    showDetailsDiv.appendChild(document.createElement('br'));
                    showDetailsDiv.appendChild(carPriceLabelSpan);
                    showDetailsDiv.appendChild(carPriceSpan);
                
                    // Create showButtonsDiv and its children
                    const showButtonsDiv = document.createElement('div');
                    showButtonsDiv.classList.add('show-buttons');
                
                    const returnCarButton = document.createElement('button');
                    returnCarButton.id = 'return-car';
                    returnCarButton.textContent = 'Return car';
                
                    // Append the elements to rentedCarDiv
                    rentedCarDiv.appendChild(showDetailsDiv);
                    rentedCarDiv.appendChild(showButtonsDiv);
                    showButtonsDiv.appendChild(returnCarButton);
                
                    // Append rentedCarDiv to the list-rented-car div
                    const listRentedCarDiv = document.querySelector('.list-rented-car');
                    listRentedCarDiv.appendChild(rentedCarDiv);
                }
                
            }
        });
    }
}



// Onload

window.onload = loadCarData;

