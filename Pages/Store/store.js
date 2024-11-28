// search filter
function filterProducts() {
    const searchValue = document.querySelector(".search-input").value.toLowerCase();
  
    const productCards = document.querySelectorAll(".product-card");
  
    productCards.forEach(card => {
      const titleElement = card.querySelector(".product-title");
  
      if (titleElement) {
        const title = titleElement.textContent.toLowerCase();
  
        if (title.includes(searchValue)) {
          card.style.display = "block";
        } else {
          card.style.display = "none";
        }
      }
    });
  }