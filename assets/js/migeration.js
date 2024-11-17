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
       <td><img src="${product.img}" ait=""></td>
    </tr>

        `;

    // if (itemContainerId !== products.id) {
    //         count++;
    //         out2 = `
    //     <div class="todo-box in-cart">
    //         <p class="todo-text">${count + 1}</p>
    //         <img src="${product.img}" alt="">
    //         <p class="todo-text">${product.id}</p>
    //         <p class="todo-text">${product.name}</p>
    //         <p class="todo-text">${product.price}</p>
    //         <p class="todo-text">${product.quantityInStock}</p>
    //     </div>
    //     `;
    // }
        
}
    
    // const productBtn = document.querySelectorAll('.todo-item');
    // const cartDiv = document.createElement('div');
    // cartDiv.setAttribute('id', 'cart-display')
    
    
    // let itemContainerId = 0;
    // let out2 = '';
    // let count = 0;

    // productBtn.onclick = () => {
    // for (let productData of products) {
    //         if (itemContainerId !== products.id) {
    //             count++;
    //             out2 =`

    //         <div class="todo-box">
    //             <p class="todo-text">${count}</p>
    //             <img src="${productData.img}" alt>
    //             <p class="todo-text">${productData.id}</p>
    //             <p class="todo-text">${productData.name}</p>
    //             <p class="todo-text">${productData.price}</p>
    //             <p class="todo-text">${productData.quantityInStock}</p>
    //         </div>

    //             `; 
    //         }

    //         count++;
    //     }

    //     cartDiv.innerHTML = out2;
    //     document.body.appendChild(cartDiv);
    //     itemContainerId = products.id;
    // }

    // document.body.innerHTML = out2;
    placeholder.innerHTML = out;

})