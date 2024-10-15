$(document).ready(function() {
    $('#qrForm').on('submit', function(event) {
        event.preventDefault();
        
        const url = $('#url').val();
        const fgColor = $('#fgColor').val();
        const bgColor = $('#bgColor').val();

        $('#qrCode').empty(); // Clear previous QR code
        $('#qrCode').qrcode({
            text: url,
            width: 200,
            height: 200,
            colorDark: fgColor,
            colorLight: bgColor,
        });
    });
});