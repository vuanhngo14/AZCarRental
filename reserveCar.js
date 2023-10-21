// Sample car data
const cars = [
    {
        id: 1,
        make: 'toyota',
        model: 'Roadster',
        price: 300,
        image: 'img/roadster.jpeg',
    },
    {
        id: 2,
        make: 'Tesla',
        model: 'Model X',
        price: 250,
        image: 'img/modelX.webp',
    },
    // Add more car data as needed
];

// Function to render car cards based on filters
function renderCars() {
    const makeFilter = document.getElementById('filter-make').value;
    const priceFilter = document.getElementById('filter-price').value;
    const carList = document.getElementById('car-list');

    // Clear the existing car listings
    carList.innerHTML = '';

    cars.forEach((car) => {
        // Apply filters
        if (
            (makeFilter === 'all' || car.make === makeFilter) &&
            (priceFilter === 'all' || car.price <= parseInt(priceFilter))
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

// Add event listeners for filter options
document.getElementById('filter-make').addEventListener('change', renderCars);
document.getElementById('filter-price').addEventListener('change', renderCars);

// Initial rendering
renderCars();
