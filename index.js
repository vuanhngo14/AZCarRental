
// Add smooth scrolling for better UX
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop,
                behavior: 'smooth'
            });
        }
    });
});


// Get all buttons with the class 'direct_toCars'
const buttons = document.querySelectorAll('.direct_toCars');

// Add an event listener to each button
buttons.forEach((button) => {
    button.addEventListener('click', function () {
        const url = "reserveCar.html"
        
        // Redirect to the URL when the button is clicked
        window.location.href = url;
    });
});
