const groceryData = [
    { id: 1, name: 'Apple', price: '$1.00', description: 'Fresh red apple' },
    { id: 2, name: 'Banana', price: '$0.50', description: 'Ripe yellow banana' },
    // Add more product data as needed
];

const displayedProducts = new Set();

document.querySelectorAll('.product-img').forEach(img => {
    img.addEventListener('click', () => {
        const productId = parseInt(img.getAttribute('data-id'));
        if (!displayedProducts.has(productId)) {
            displayedProducts.add(productId);
            const product = groceryData.find(item => item.id === productId);
            if (product) {
                displayProductDetails(product);
            }
        }
    });
});

function displayProductDetails(product) {
    const container = document.getElementById('product-details-container');
    const productDetail = document.createElement('div');
    productDetail.classList.add('product-detail');
    productDetail.innerHTML = `
        <h3>${product.name}</h3>
        <p>Price: ${product.price}</p>
        <p>${product.description}</p>
        <button class="update" onclick="updateProduct(${product.id})">Update</button>
        <button class="delete" onclick="deleteProduct(${product.id})">Delete</button>
    `;
    container.appendChild(productDetail);
}

function updateProduct(id) {
    const product = groceryData.find(item => item.id === id);
    if (product) {
        const newName = prompt('Enter new name:', product.name);
        const newPrice = prompt('Enter new price:', product.price);
        const newDescription = prompt('Enter new description:', product.description);
        if (newName && newPrice && newDescription) {
            product.name = newName;
            product.price = newPrice;
            product.description = newDescription;
            refreshProductDetails();
        }
    }
}

function deleteProduct(id) {
    displayedProducts.delete(id);
    refreshProductDetails();
}

function refreshProductDetails() {
    const container = document.getElementById('product-details-container');
    container.innerHTML = '';
    displayedProducts.forEach(productId => {
        const product = groceryData.find(item => item.id === productId);
        if (product) {
            displayProductDetails(product);
        }
    });
}
