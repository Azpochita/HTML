const createNav = () => {
    let nav = document.querySelector('.navbar');

    nav.innerHTML = `
        <div class="nav">
            <img src="pictures/IMG_20230221_231928_694.jpg" class="brand-logo" alt="">
            <div class="nav-items">
                <div class="search">
                    <input type="text" class="search-box" placeholder="search">
                    <button class="search-btn">search</button>
                </div>
                <a href="#"><img src="pictures/pochita_user.png" alt=""></a>
                <a href="#"><img src="pictures/cart.jpg" alt=""></a>
            </div>
        </div>
        <ul class="links-container">
            <li class="link-item"><a href="#" class="link">Home</a></li>
            <li class="link-item"><a href="#" class="link">Genshin Impact</a></li>
            <li class="link-item"><a href="#" class="link">Honkai Star Rail</a></li>
            <li class="link-item"><a href="#" class="link">Armors</a></li>
            <li class="link-item"><a href="#" class="link">Accessories</a></li>
        </ul>
    `;
}

createNav();