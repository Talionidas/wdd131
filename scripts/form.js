const products = [
    {
        id: "fc-1888",
        name: "flux capacitor",
        avgRating: 4.5
    },
    {
        id: "fc-2050",
        name: "power laces",
        avgRating: 4.7
    },
    {
        id: "fs-1987",
        name: "time circuits",
        avgRating: 3.5
    },
    {
        id: "ac-2000",
        name: "low voltage reactor",
        avgRating: 3.9
    },
    {
        id: "jj-1969",
        name: "warp equalizer",
        avgRating: 5.0
    }
];

function populateProductOptions() {
    const selectElement = document.getElementById('product');

    selectElement.innerHTML = '<option value="">Choose a Product...</option>';

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