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


function renderMobileHeading() {
    const mainContentHeading = `
     <div class="mb-filter-tab">
                <div class="mb-filter-tab-container">
                    <div class="mb-filter-tab-wrapper">
                        <div class="mb-filter-left">
                            <div class="mb-prime-container">
                                <span class="mb-prime-wrapper">
                                    <a class="mb-prime-holder">
                                        <span class="mb-prime-icon-holder">
                                            <i class="mb-prime-icon"></i>
                                        </span>
                                        <span class="mb-prime-toggle-container"></span>
                                    </a>
                                </span>
                            </div>
                            <div class="mb-brand-filters">
                                <span class="mb-brand-filter-container">
                                    <a class="mb-brand-filter-wrapper">
                                        <span class="mb-brand-filter-text">Samsung</span>
                                    </a>
                                </span>
                            </div>
                        </div>
                        <div class="mb-filter-right">
                            <div class="mb-filter-right-wrapper">
                                <span class="mb-filter-object-container">
                                    <span class="mb-filter-object-button-wrapper">
                                        <button class="mb-filter-button">
                                            <div class="mb-filter-button-wrapper">
                                                <span class="mb-filter-text-1">Filters</span>
                                                <span class="mb-filter-text-2">(2)</span>
                                                <span class="mb-filter-text-arrow"></span>
                                            </div>
                                        </button>
                                    </span>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div class="mb-leading-text-container">
                <p class="mb-leading-text">Check each product page for other buying options.</p>
            </div>
    `;

    return mainContentHeading;
}

function renderCardMobile(brand) {
    const cardDetails = `
     <div class="mb-card">
                <div class="mb-card-container">
                    <div class="mb-card-wrapper">
                        <div class="mb-card-liner">
                            <div class="mb-card-contents-container">
                                <a class="mb-card-left">
                                    <div class="mb-card-left-wrapper">
                                        <div class="mb-card-left-liner">
                                            <div class="mb-bestseller-container">
                                                <span class="mb-bestseller-wrapper">
                                                    <span class="mb-bestseller-grid">
                                                        <span class="mb-bestseller-text">
                                                            Best seller
                                                        </span>
                                                    </span>
                                                </span>
                                            </div>
                                            <div class="mb-image-container">
                                                <div class="mb-related-products-flow">
                                                    <span class="mb-related-products-wrapper">
                                                        <div class="mb-related-products-back-styler">
                                                            <img src="	https://m.media-amazon.com/images/I/01rrzVoKd5L.svg"
                                                                alt="related-products-image">
                                                        </div>
                                                    </span>
                                                </div>
                                                <div class="mb-image-wrapper">
                                                    <img src=${brand.imageMobile ? brand.imageMobile : brand.image}
                                                        alt="mobile-image">
                                                </div>

                                            </div>
                                        </div>
                                    </div>
                                </a>

                                <div class="mb-card-right">
                                    <div class="mb-card-right-liner">
                                        <div class="mb-card-right-wrapper">
                                            <div class="mb-card-title-container">
                                                <a class="mb-card-title-wrapper">
                                                    <p>${brand.title}</p>
                                                </a>
                                            </div>

                                            <div class="mb-card-ratings-container">
                                                <a class="mb-card-ratings-wrapper">
                                                    <div class="mb-rating-holder">
                                                        <span class="mb-rating-star-count">4.0</span>
                                                        <i class="mb-rating-star-icon"></i>
                                                        <span class="mb-rating-vote-count">(4.4K)</span>
                                                    </div>

                                                    <div class="mb-rating-tail-text">
                                                        <p>5K+ bought in past month</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="mb-card-price-container">
                                                <a class="mb-card-price-wrapper">
                                                    <div class="mb-card-price-info-container">
                                                        <span class="mb-price-holder">
                                                            <span class="mb-price-symbol">₹</span><span
                                                                class="mb-price-text">${formatPrice(brand.price)}</span>
                                                        </span>

                                                        <div class="mb-original-price-container">
                                                            <span class="mb-price-mrp">M.R.P:</span>
                                                            <span class="mb-mrp-text">₹${formatPrice(brand.original_price)}</span>
                                                        </div>

                                                        <span class="mb-discount-text">(${calculateDiscountPercentage(brand.price, brand.original_price)}% off)</span>
                                                    </div>
                                                    <div class="mb-saving-text-container">
                                                        <p class="mb-saving-text">Save extra with No Cost EMI</p>
                                                    </div>
                                                </a>
                                            </div>

                                            <div class="mb-card-prime-benefits-container">
                                                <div class="mb-card-prime-benefits-wrapper">
                                                    <div class="mb-card-prime-icon-container">
                                                        <span class="mb-card-prime-icon-wrapper">
                                                            <span class="mb-card-prime-resizer">
                                                                <i class="mb-card-prime-icon"></i>
                                                            </span>
                                                        </span>
                                                    </div>
                                                    <div class="mb-card-delivery-date-container">
                                                        <span class="mb-card-delivery-date-wrapper">
                                                            <span class="mb-delivery-text-1 mb-normal-text">FREE
                                                                delivery</span>
                                                            <span class="mb-delivery-text-2 mb-font-bold-text ">Wed, 9
                                                                Jul</span>
                                                        </span>
                                                    </div>
                                                    <div class="mb-fastest-develivery-container">
                                                        <span class="mb-fastest-delivery-date-wrapper">
                                                            <span
                                                                class="mb-fastest-delivery-date-text-1 mb-normal-text">Or
                                                                fastest
                                                                delivery</span>
                                                            <span
                                                                class="mb-fastest-delivery-date-text-2 mb-font-bold-text">Tomorrow,
                                                                8
                                                                Jul</span>
                                                        </span>
                                                    </div>
                                                </div>
                                            </div>

                                            <div class="mb-card-button-container">
                                                <button class="mb-cart-button">Add to cart</button>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
    `
    return cardDetails;
}

export { renderCard, renderCardMobile, renderMobileHeading }