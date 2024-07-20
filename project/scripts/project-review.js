document.addEventListener('DOMContentLoaded', () => {
    let reviewCounter = localStorage.getItem('reviewCounter');
    
    if (isNaN(reviewCounter) || reviewCounter === null) {
        reviewCounter = 0;
    } else {
        reviewCounter = parseInt(reviewCounter, 10);
    }

    const reviewCountElement = document.getElementById('reviewCount');
    if (reviewCountElement) {
        reviewCountElement.textContent = reviewCounter;
    } else {
        console.error('Element with ID "reviewCount" not found.');
    }
});

const confirmationMessage = document.getElementById('confirmationMessage');
if (confirmationMessage) {
    confirmationMessage.style.display = 'block';
}


document.addEventListener('DOMContentLoaded', (event) => {
    const currentYear = new Date().getFullYear();
    document.getElementById('currentYear').textContent = currentYear;


    const lastModified = document.lastModified;
    document.getElementById("lastModified").textContent = `Last modified: ${lastModified}`;
});