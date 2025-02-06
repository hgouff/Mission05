// Please see documentation at https://learn.microsoft.com/aspnet/core/client-side/bundling-and-minification
// for details on configuring this project to bundle and minify static web assets.

$(document).ready(function() {
    $('#btnSubmit').click(function() {
        //not refresh on button click
        event.preventDefault();
        
        const hours = parseFloat($('#Hours').val());  // Convert hours to a floating-point number
        const charge = parseFloat($('#chargePerHour').val().replace('$', ''));  // Remove the '$' symbol and convert charge to float


        // Check if the input is a positive number (int or float)
        if (isNaN(hours) || hours <= 0) {
            // If input is not a valid positive number, show the alert
            alert("Please enter a valid positive number.");
            $('#Hours').css('border-color', 'red'); // Highlight the input with a red border
        } else {
            $('#Hours').css('border-color', '');
            const total = hours * charge; // Calculate the total amount
            $('#total').val('$' + total.toFixed(2));
        }
    });
});
