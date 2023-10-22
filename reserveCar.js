let cars; 

// Function to load car data from JSON and display it in the HTML
function loadCarData() {
    fetch('cars.json')
        .then((response) => response.json())
        .then((data) => {
            cars = data; 
            renderCars(cars);
        })
        .catch((error) => {
            console.error('Error loading car data: ' + error);
        });
}

// Function to render car cards based on data
function renderCars(cars) {
    const carList = document.getElementById('car');

    cars.forEach((car) => {
        const carCard = document.createElement('div');
        carCard.classList.add('car');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h3>${car.make} ${car.model}</h3>
            <p>Price: $${car.price}/day</p>
            <button>Book Now</button>
        `;
        carList.appendChild(carCard);
    });
}


window.onload = loadCarData;
