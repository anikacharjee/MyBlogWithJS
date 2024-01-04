document.addEventListener('DOMContentLoaded', function () {
    // Get the visit count from localStorage
    var visitCount = localStorage.getItem('aboutPageVisitCount') || 0;

    // Increment the visit count
    visitCount++;
    
    // Display the visit count
    alert('You have visited the About page ' + visitCount + ' times.');

    // Save the updated visit count to localStorage
    localStorage.setItem('aboutPageVisitCount', visitCount);
});