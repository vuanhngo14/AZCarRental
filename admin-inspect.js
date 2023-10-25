let cars;
let matchingRentals; 

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

function getFromLocalStorage() {

    event.preventDefault();

    matchingRentals = JSON.parse(localStorage.getItem('returnedCar')) || [];
    displayCarData();
}


const testButton = document.getElementById('test-button');
testButton.addEventListener('click', reloadRentedCars); 
testButton.addEventListener('click', getFromLocalStorage); 

function displayCarData() {
    if (matchingRentals.length === 0) {
        alert("No bookings found");
    } else {

        counter = -1; 

        matchingRentals.forEach((entry) => {

            // Initiate counter for button ID
            counter +=1; 

            const carIdInt = parseInt(entry.carId, 10); 
            const matchingCar = cars.find((car) => car.id === carIdInt);

            if (matchingCar) {
                const carId = matchingCar.id;
                const rentalDateTime = new Date(entry.rentalDateTime); // Convert the ISO string to a Date object
            
                const rentedCarDiv = document.createElement('div');
                rentedCarDiv.classList.add('rented-car');
            
                const showDetailsDiv = document.createElement('div');
                showDetailsDiv.classList.add('show-details');
            
                const carIdLabelSpan = document.createElement('span');
                carIdLabelSpan.textContent = "Car ID: ";
            
                const carIdSpan = document.createElement('span');
                carIdSpan.id = 'car-id';
                carIdSpan.textContent = carId;
            
                // Display Rental Date & Time
                const rentalDateTimeLabelSpan = document.createElement('span');
                rentalDateTimeLabelSpan.textContent = "Rental Date & Time: ";
            
                const rentalDateTimeSpan = document.createElement('span');
                rentalDateTimeSpan.id = 'rental-date-time';
            
                const year = rentalDateTime.getFullYear();
                const month = (rentalDateTime.getMonth() + 1).toString().padStart(2, '0');
                const day = rentalDateTime.getDate().toString().padStart(2, '0');
                const hours = rentalDateTime.getHours().toString().padStart(2, '0'); // Get hours in 24-hour format
                const minutes = rentalDateTime.getMinutes().toString().padStart(2, '0'); // Get minutes
            
                rentalDateTimeSpan.textContent = `${year}-${month}-${day} ${hours}:${minutes}`;
            
                // Rest of the car details
                const carNameLabelSpan = document.createElement('span');
                carNameLabelSpan.textContent = "Make and Model: ";
            
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
                showDetailsDiv.appendChild(rentalDateTimeLabelSpan);
                showDetailsDiv.appendChild(rentalDateTimeSpan);
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
                returnCarButton.id = counter;
                returnCarButton.onclick = function () {
                    const clickedButtonId = this.id;
                    returnCar(clickedButtonId); 
                };               
                returnCarButton.textContent = 'Inspected - No issues';

                // Append the elements to rentedCarDiv
                rentedCarDiv.appendChild(showDetailsDiv);
                rentedCarDiv.appendChild(showButtonsDiv);
                showButtonsDiv.appendChild(returnCarButton);
            
                // Append rentedCarDiv to the list-rented-car div
                const listRentedCarDiv = document.querySelector('.list-rented-car');
                listRentedCarDiv.appendChild(rentedCarDiv);
            }
            
        });
    }
}

function returnCar(clickedButtonId){

    console.log("Clicked " + clickedButtonId)

    // Retrieved button ID 
    var index = parseInt(clickedButtonId, 10); 

    // Access the local storage name returnedCar
    // Remove items at corresponding index 

    console.log("DISPLAYING MATCHING RENTALS (RETURNED CARS)"); 
    console.log(matchingRentals); 

    if (index >= 0 && index < matchingRentals.length) {
        matchingRentals.splice(index, 1);

        // Replace the current local storage
        localStorage.setItem('returnedCar', JSON.stringify(matchingRentals));
    }

    reloadRentedCars(); 
    getFromLocalStorage();

}

// Function to reload the rented car list 
function reloadRentedCars(){
    const rentedCarList = document.getElementById('rented-car');
    rentedCarList.innerHTML = ''; 

}



window.onload = loadCarData;

