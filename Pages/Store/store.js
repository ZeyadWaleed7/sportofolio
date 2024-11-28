function filterProducts() {

    const searchValue = document.getElementById("search-form").value.toLowerCase();
    
    const productCards = document.querySelectorAll(".product-card");
    
    productCards.forEach((card) => {
    
    const titleElement = card.querySelector(".product-title"); // Find the title inside each card
    
    const title = titleElement.textContent.toLowerCase(); // to avoid stupidity
    
    if (title.includes(searchValue)) {
    
    card.style.display = "block"; // Show matching cards
    
    } else {
    
    card.style.display = "none"; // Hide non-matching cards
    
    }
    
    });
    
    } 