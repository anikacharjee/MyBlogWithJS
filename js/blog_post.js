document.addEventListener('DOMContentLoaded', function () {
    // Array of different text options
    var textOptions = [
        "Welcome to our Blog",
        "Discover amazing articles",
        "Explore the latest insights",
        "Dive into thought-provoking content",
        "Stay informed with our blog posts",
        "Journey through our diverse articles",
        "Engage with compelling stories"
    ];

    // Get a random index from the textOptions array
    var randomIndex = Math.floor(Math.random() * textOptions.length);

    // Get the h1 element by its ID
    var h1Element = document.getElementById('greetings'); // Replace 'yourH1Id' with your actual ID

    // Change the text content of the h1 element
    if (h1Element) {
        h1Element.textContent = textOptions[randomIndex];
    } else {
        console.error("H1 element with the specified ID not found");
    }
});