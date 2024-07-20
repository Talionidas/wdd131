const products = [
    {
        id: "BBG",
        name: "Base Biome Guide",
        avgRating: 4.5
    },
    {
        id: "DLC-BG",
        name: "DLC Biome Guide",
        avgRating: 4.7
    }
];

function populateProductOptions() {
    const selectElement = document.getElementById('product');

    selectElement.innerHTML = '<option value="">Choose a Guide...</option>';

    products.forEach(product => {
        const option = document.createElement('option');
        option.value = product.id;
        option.textContent = product.name;
        selectElement.appendChild(option);
    });
}

document.addEventListener('DOMContentLoaded', (event) => {
    populateProductOptions();
});

function handleFormSubmission(event) {
    event.preventDefault();

    let reviewCounter = localStorage.getItem('reviewCounter');
    if (isNaN(reviewCounter) || reviewCounter === null) {
        reviewCounter = 0;
    } else {
        reviewCounter = parseInt(reviewCounter, 10);
    }
    reviewCounter += 1;
    localStorage.setItem('reviewCounter', reviewCounter);

    event.target.submit();
}

const formElement = document.querySelector('form');
if (formElement) {
    formElement.addEventListener('submit', handleFormSubmission);
} else {
    console.error('Form element not found.');
}