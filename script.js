const bookingForm = document.getElementById('booking-form');
const confirmationMessage = document.getElementById('confirmation-message');

bookingForm.addEventListener('submit', function(event) {
    event.preventDefault(); // Prevent default form submission

    // 1. Get form data (basic validation can be added here)
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const classDate = document.getElementById('class-date').value;
    const classType = document.getElementById('class-type').value;

    // 2. Basic date validation - prevent booking in the past
    const today = new Date().setHours(0,0,0,0);
    const chosenDate = new Date(classDate).setHours(0,0,0,0);
    if (chosenDate < today) {
        alert("Please select a date in the future.");
        return;
    }

    // 3. (Optional) Send data to a server/database (replace with your actual booking logic)
    //    In a real application, you would typically send this data to a backend server
    //    using AJAX (fetch or XMLHttpRequest) to store the booking in a database.
    console.log('Booking Data:', { name, email, classDate, classType });

    // 4. Hide form, show confirmation
    bookingForm.style.display = 'none';
    confirmationMessage.style.display = 'block';

    // 5. (Optional) Clear the form
    bookingForm.reset();
});
