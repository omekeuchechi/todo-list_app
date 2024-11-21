document.addEventListener("DOMContentLoaded", () => {  
    const cart = document.getElementById("cart");  
    const totalDisplay = document.getElementById("total");  
    const buyButton = document.getElementById("buy-button");  
    let total = 0;  
    const cartItems = {};
  
    fetch('item.json')  
        .then(response => {  
            if (!response.ok) {  
                throw new Error('Network response was not ok');  
            }  
            return response.json();  
        })  
        .then(items => {  
            const itemsContainer = document.getElementById("items-container");  
            items.forEach(item => {  
                const itemDiv = document.createElement("div");  
                itemDiv.classList.add("item");  
                itemDiv.setAttribute("data-id", item.id);  

                itemDiv.innerHTML = `  
                    <img src="${item.image}" alt="${item.name}">  
                    <div>  
                        <h2>${item.name}</h2>  
                        <p>Price: $${item.price}</p>  
                        <button class="add-to-cart">Add to Cart</button>  
                    </div>  
                `;  
                itemsContainer.appendChild(itemDiv);  
 
                const button = itemDiv.querySelector(".add-to-cart");  
                button.addEventListener("click", () => {  
                    const itemId = item.id;  
                    const itemPrice = item.price;  

                    if (cartItems[itemId]) {    
                        cartItems[itemId].count += 1;  
                        cartItems[itemId].li.textContent = `${item.name} - $${itemPrice.toFixed(2)} (x${cartItems[itemId].count})`;
                        cartItems[itemId].li.querySelector(".item-details").textContent = `${item.name} - $${itemPrice.toFixed(2)} (x${cartItems[itemId].count})`;//+
                    } else {  
                        const cartItem = document.createElement("li");  
                        cartItem.textContent = `${item.name} - $${itemPrice.toFixed(2)} (x1)`;
                        cartItem.setAttribute("data-id", itemId);
                        cartItem.setAttribute("data-price", itemPrice);
                        cartItem.innerHTML = `//+
                            <span class="item-details">${item.name} - $${itemPrice.toFixed(2)} (x1)</span>//+
                            <button class="remove-item">Remove</button>//+
                        `;
                        cart.appendChild(cartItem);  
                        cartItems[itemId] = { count: 1, li: cartItem };  
                    }  
                    total += itemPrice;  
                    totalDisplay.textContent = total.toFixed(2);  
                    buyButton.style.display = "block"; 
                });
            });  
        })  
        .catch(error => {  
            console.error('Error fetching the items:', error);  
        });  
  
    buyButton.addEventListener("click", () => {  
        if (total === 0) {  
            alert("Your cart is empty!");  
            return;  
        }  
  
        let purchaseSummary = "Thank you for your purchase!\n\nItems purchased:\n";  
        for (const id in cartItems) {  
            const item = cartItems[id];  
            purchaseSummary += `${item.li.textContent}\n`;  
        }  
        purchaseSummary += `\nTotal Amount: $${total.toFixed(2)}`;  
 
        alert(purchaseSummary);  
        cart.innerHTML = "";
        total = 0;  
        totalDisplay.textContent = total.toFixed(2);  
        buyButton.style.display = "none";
    });

     const feedbackInput = document.getElementById('feedback');//+
     const feedbackButton = document.getElementById('submit-btn');//+
     const feedbackOutput = document.getElementById('feedback-text');//+

     feedbackButton.addEventListener('click', () => {//+
         const feedbackValue = feedbackInput.value.trim();//+
//+
         if (feedbackValue === '') {//+
             feedbackOutput.textContent = 'Please enter your feedback.';//+
         } else {//+
             feedbackOutput.textContent = `Thank you for your feedback: ${feedbackValue}`;//+
             feedbackInput.value = ''; // Clear the input field after submission//+
         }//+
     });//+
//+
     // Add event listener for the Enter key//+
     feedbackInput.addEventListener('keypress', (e) => {//+
         if (e.key === 'Enter') {//+
             feedbackButton.click(); // Trigger the click event on the button//+
         }//+
     });//+
 });