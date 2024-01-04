document.addEventListener('DOMContentLoaded', function () {
    // Generate a random color
    function getRandomColor() {
        var letters = '0123456789ABCDEF';
        var color = '#';
        for (var i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    // Set the background color
    document.body.style.backgroundColor = getRandomColor();
});