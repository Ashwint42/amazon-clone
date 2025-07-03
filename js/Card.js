import { formatPrice, calculateDiscountPercentage, dynamicStarMapper } from "./utils.js";

function renderCard(brand) {
    let card;
    card = `<div class="card-container">
                             <div class="card-wrapper">
                                <div class="image-container">
                                    <div class="image-wrapper">
                                        <img src= "${brand.image}"
                                            alt="mobile">
                                    </div>
                                </div>
                                <div class="card-details">
                                    <div class="title">
                                        <p>${brand.title}</p>
                                    </div>

                                    <div class="ratings-container">
                                        <div class="ratings">
                                            <div class="stars" style="background-position:${dynamicStarMapper[brand.rating.stars].x}px ${dynamicStarMapper[brand.rating.stars].y}px">
                                            </div>
                                            <div class="arrow">
                                            </div>
                                            <div class="buy-count">
                                                <p class="buy-count-text">${formatPrice(brand.rating.count)}</p>
                                            </div>
                                        </div>
                                        <div class="rating-tail-text">
                                            <p>${brand.buyingCount}K+ bought in past month</p>
                                        </div>
                                    </div>

                                    <div class="product-price-container">
                                        <div class="price-info">
                                            <p><span class="rupee-symbol">&#x20B9;</span>${formatPrice(brand.price)}</p>
                                            <div class="price-additional-info">
                                                <span class="mrp">M.R.P:</span>
                                                <span class="original-price mrp-tail"><span>&#x20B9;</span>${formatPrice(brand.original_price)}</span>
                                                <span class="discount-percent">(${calculateDiscountPercentage(brand.price, brand.original_price)}% off)</span>
                                            </div>
                                        </div>
                                        <div class="price-info-tail">
                                            <p>Up to 5% back with Amazon Pay ICICI…</p>
                                        </div>
                                    </div>

                                    <div class="prime">
                                        <div class="prime-image">
                                        </div>
                                        <div class="delivery-date">
                                            <p>FREE delivery <span class="date">${brand.deliveryDate}</span></p>
                                        </div>
                                        <div class="delivery-date-fast">
                                            <p>Or fastest delivery <span class="date">Wed, 2 Jul</span></p>
                                        </div>
                                    </div>

                                    
                                    <div class="service-installation">
                                    ${brand.serviceAvailable ? "<p>Service: Installation</p>" : ""}
                                        
                                    </div>

                                    <div class="cart-button-container">
                                        <button class="add-to-cart-button">Add to cart</button>
                                    </div>
                                </div>
                            </div>
                        </div>`

    return card;
}

export { renderCard }