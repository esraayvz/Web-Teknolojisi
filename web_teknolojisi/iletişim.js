const productPrices = {
    'Orjinal Cheesecake': 80,
    'Çikolatalı Cheesecake': 110,
    'Çikolata Soslu San Sebastian Cheesecake': 130,
    'Limonlu Cheesecake': 110,
    'Frambuazlı Cheesecake': 120,
    'Yaban Mersinli Cheesecake': 120,
    'Oreolu Cheesecake': 150,
    'Lotuslu Cheesecake': 150,
    'Kurabiyeli Cheesecake': 150,
    'Brownie Cheesecake': 130,
  };
  
  let cart = [];
  
  function addToCart() {
    const productDropdown = document.getElementById('productSelection');
    const cartList = document.getElementById('cartList');
  
    Array.from(productSelection.selectedOptions).forEach(option => {
      const selectedProduct = option.value;
  
      const existingCartItem = cart.find(item => item.product === selectedProduct);
  
      if (existingCartItem) {
        existingCartItem.quantity++;
      } else {
        cart.push({ product: selectedProduct, quantity: 1 });
      }
    });
  
    updateCartDisplay();
  }
  
  function removeFromCart(index) {
    cart.splice(index, 1);
    updateCartDisplay();
  }
  
  function updateCartDisplay() {
    const cartList = document.getElementById('cartList');
    const totalPriceElement = document.getElementById('totalPrice');
    const submitButton = document.getElementById('submitButton');
  
    cartList.innerHTML = '';
    let totalPrice = 0;
  
    cart.forEach((item, index) => {
      const listItem = document.createElement('li');
      listItem.textContent = `${item.quantity} adet ${item.product}`;
  
      const removeButton = document.createElement('button');
      removeButton.textContent = 'Sil';
      removeButton.className = 'remove-button';
      removeButton.onclick = () => removeFromCart(index);
      listItem.appendChild(removeButton);
  
      cartList.appendChild(listItem);
  
      totalPrice += productPrices[item.product] * item.quantity;
    });
  
    totalPriceElement.textContent = `Toplam Fiyat: ${totalPrice} TL`;
  
    
    if (submitButton) {
      submitButton.disabled = cart.length === 0;
    }
  }
  
  document.addEventListener('DOMContentLoaded', function () {
    const orderForm = document.getElementById('orderForm');
    const productSelection = document.getElementById('productSelection');
  
    if (orderForm && productSelection) {
      orderForm.addEventListener('submit', function (event) {
        event.preventDefault(); 
  
        if (cart.length === 0) {
          alert("Ürün seçimi zorunludur. Lütfen bir ürün seçiniz!");
        } else {
          
          const feedbackMessage = "Siparişiniz verilen adrese doğru yola çıkmıştır.";
          alert(feedbackMessage);
  
          
          orderForm.reset();
         
          cart = [];
          updateCartDisplay();
        }
      });
    } else {
      console.error("orderForm veya productSelection elemanı bulunamadı. ID değerlerini kontrol edin.");
    }
  
  
    const isDarkMode = sessionStorage.getItem('darkMode') === 'true';
    document.body.classList.toggle('dark-mode', isDarkMode);
  
    function toggleDarkMode() {
      var bodyElement = document.body;
      bodyElement.classList.toggle("dark-mode");
      const isDarkMode = bodyElement.classList.contains('dark-mode');
      sessionStorage.setItem('darkMode', isDarkMode);
    }
  
    var darkModeLink = document.getElementById("darkModeLink");
    darkModeLink.addEventListener("click", function () {
      toggleDarkMode();
    });
  
    function updateTime() {
      var currentTimeElement = document.getElementById("current-time");
      var currentTime = new Date();
      var hours = currentTime.getHours();
      var minutes = currentTime.getMinutes();
      var formattedTime = hours + ":" + (minutes < 10 ? "0" : "") + minutes;
      currentTimeElement.textContent = formattedTime;
    }
  
    updateTime();
    setInterval(updateTime, 1000);
    
  });