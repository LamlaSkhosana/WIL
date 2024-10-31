const wishlist = [];
const favorites = [];

document.querySelectorAll('.wishlist-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.parentElement.querySelector('h2').innerText;
        if (!wishlist.includes(itemName)) {
            wishlist.push(itemName);
            updateWishlist();
        } else {
            alert(`${itemName} is already in your wishlist.`);
        }
    });
});

document.querySelectorAll('.favorite-btn').forEach(button => {
    button.addEventListener('click', () => {
        const itemName = button.parentElement.querySelector('h2').innerText;
        if (!favorites.includes(itemName)) {
            favorites.push(itemName);
            updateFavorites();
        } else {
            alert(`${itemName} is already in your favorites.`);
        }
    });
});

function updateWishlist() {
    const wishlistUl = document.getElementById('wishlist');
    wishlistUl.innerHTML = '';
    wishlist.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        wishlistUl.appendChild(li);
    });
}

function updateFavorites() {
    const favoritesUl = document.getElementById('favorites');
    favoritesUl.innerHTML = '';
    favorites.forEach(item => {
        const li = document.createElement('li');
        li.innerText = item;
        favoritesUl.appendChild(li);
    });
}
