// // Create a new XMLHttpRequest object
// const xhr = new XMLHttpRequest();

// // Set up the request
// xhr.open('GET', 'groceryData.json', true);

// // Handle the response
// xhr.onload = function() {
//   if (xhr.status === 200) {
//     const data = JSON.parse(xhr.responseText);
//     const todoList = document.getElementById('todo-list');

//     // Loop through the grocery items and create list items
//     data.forEach(item => {
//       const li = document.createElement('li');
//       li.classList.add('todo-item');

//       const img = document.createElement('img');
//       img.src = item.image;
//       img.alt = item.name;

//       // Add click event listener to the image
//       img.addEventListener('click', () => {
//         // Add the grocery item to the todo list
//         const todoText = document.createTextNode(item.name);
//         li.appendChild(todoText);
//       });

//       li.appendChild(img);
//       todoList.appendChild(li);
//     });
//   } else {
//     console.error('Error:', xhr.statusText);
//   }
// };

  // Fetch groceryData.json
  fetch('groceryData.json')
  .then(response => response.json())
  .then(data => {
    const todoList = document.getElementById('todo-list');
    // const tr = document.getElementById('tr');

    // Loop through the grocery items and create list items
    data.forEach(item => {
      const li = document.createElement('li');
      li.classList.add('todo-item');

      // const label = document.createElement('label');
      // label.classList.add('label-todo');
      // label.htmlFor = item.name;
      // label.textContent = item.name;
      // label.style.transform = 'translate(-140%, -10%)';
      // label.style.paddingLeft = '10px';

      
      const nameOfProduct = item.name;
      const id = item.id;
      const price = item.price;
      const amount = item.quantityInStock;

      function tableRow(text) {
        const template = document.createElement('template');

        template.innerHTML = text.trim();

        return template.content.firstElementChild;
      }

      // const tableData = tableRow(`
      //   <tr>
      //   <td id="id"></td>
      //   <td id="name">2</td>
      //   <td id="">3</td>
      //   <td id="">4</td>
      //   </tr> `);

      const img = document.createElement('img');
      img.src = item.image;
      img.alt = item.name;

      img.addEventListener('click', () => {
        const buy = document.getElementById('cart-items');

        buy.style.display = 'block';
      })


      // Add click event listener to the image
      img.addEventListener('click', () => {
        // Add the grocery item to the cart
        addToCart(item);
      });

      li.appendChild(img);
      todoList.appendChild(li);
      // todoList.appendChild(label);
      // tr.appendChild(tableData);
    });
  })
  .catch(error => {
    console.error('Error:', error);
  });

// Function to add grocery item to the cart
function addToCart(item) {
  // Update the cart counter
  const cartCounter = document.getElementById('cart-counter');
  cartCounter.textContent = parseInt(cartCounter.textContent) - 1;

  // Add the item to the cart list
  const cartList = document.getElementById('cart-list');
  const li = document.createElement('li');
  li.textContent = item.name;
  cartList.appendChild(li);

  // Update the total price
  const totalPrice = document.getElementById('total-price');
  const currentPrice = parseFloat(totalPrice.textContent.slice(1));
  totalPrice.textContent = `$${(currentPrice + item.price).toFixed(2)}`;
}

// Add event listener to the clear cart button
document.getElementById('clear-cart').addEventListener('click', () => {
  // Clear the cart counter
  document.getElementById('cart-counter').textContent = '0';

  // Clear the cart list
  const cartList = document.getElementById('cart-list');
  cartList.innerHTML = '';

  // Reset the total price
  document.getElementById('total-price').textContent = '$0.00';

  if (document.getElementById('total-price').textContent === '$0.00') {
    const buy = document.getElementById('cart-items');

    buy.style.display = 'none';
  }
});

// Add event listener to the remove item button
document.getElementById('remove-item').addEventListener('click', () => {
  // Remove the last item from the cart list
  const cartList = document.getElementById('cart-list');
  const lastItem = cartList.lastElementChild;
  cartList.removeChild(lastItem);

  // Update the cart counter
  const cartCounter = document.getElementById('cart-counter');
  cartCounter.textContent = parseInt(cartCounter.textContent) + 1;

  // Update the total price
  const totalPrice = document.getElementById('total-price');
  const currentPrice = parseFloat(totalPrice.textContent.slice(1));
  totalPrice.textContent = `$${(currentPrice - lastItem.textContent.length * 0.5).toFixed(totalPrice.length)}`;

  if (document.getElementById('total-price').textContent === '$0.00') {
    const buy = document.getElementById('cart-items');

    buy.style.display = 'none';
  }
});

// // Send the request
// xhr.send();