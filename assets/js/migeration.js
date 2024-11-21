fetch('/groceryData.json')
.then(response => {
    return response.json();
})
.then(function (products) {
    
    let placeholder = document.querySelector('#data-output');
    let out = '';
    // let count = 0;
    // let out2 = '';
    // let itemContainerId = 0;
    for (let product of products){
        out += `

    <tr>
       <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.quantityInStock}</td>
       <td>${product.price}</td>
       <td><img src="${product.image}" alt="${product.name}" class="product-img"></td>
    </tr>

        `;
        // const imageTag = document.getElementById('')      
}
products.forEach(item => {
    const productImage = document.querySelector('.product-img');
    productImage.setAttribute('id', `img-btn-${item.id}`);
    const productId = parseInt(productImage.getAttribute('id'));
    document.querySelector('.product-img').addEventListener('click', () => {
        if (!displayProductId.has(productId) || !productId === item.id) {
            displayProductId.add(productId);
            displayProductDetailsCapture(item);
        }
    })
});
    


    placeholder.innerHTML = out;

});

function displayProductDetailsCapture(item) {
    const container = document.getElementById('product-details-container');
    const productDetail = document.createElement('div');
    productDetail.classList.add('product-detail');
    productDetail.innerHTML = `
        <h3>${item.name}</h3>
        <p>Price: ${item.price}</p>
        <p>${item.quantityInStock}</p>
        <button class="delete" onclick="deleteProduct(${item.id})">Delete</button>
    `;
    container.appendChild(productDetail);
}

function deleteProduct(id) {
    displayedProducts.delete(id);
    refreshProductDetails();
}