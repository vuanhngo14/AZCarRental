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
    const makeFilter = document.getElementById('filter-make').value;
    const priceFilter = parseInt(document.getElementById('filter-price').value);

    carList.innerHTML = '';


    cars.forEach((car) => {
        if (
            (makeFilter === 'all' || car.make.toLowerCase() === makeFilter) &&
            (priceFilter === 0 || car.price <= priceFilter)
        ) {
        const carCard = document.createElement('div');
        carCard.classList.add('car');
        carCard.innerHTML = `
            <img src="${car.image}" alt="${car.model}">
            <h3>${car.make} ${car.model}</h3>
            <p>Price: $${car.price}/day</p>
            <button>Book Now</button>
        `;
        carList.appendChild(carCard);
        }
    });
}


window.onload = loadCarData;

// Reload cars when change filters
document.getElementById('filter-make').addEventListener('change', () => {
    renderCars(cars);
});

document.getElementById('filter-price').addEventListener('change', () => {
    renderCars(cars);
});