fetch('/groceryData.json')
.then(response => {
    return response.json();
})
.then(function (products) {
    
    let placeholder = document.querySelector('#data-output');
    let out = '';
    for (let product of products){
        out += `

    <tr>
       <td>${product.id}</td>
       <td>${product.name}</td>
       <td>${product.quantityInStock}</td>
       <td>${product.price}</td>
    </tr>

        `;
    }

    placeholder.innerHTML = out;

})