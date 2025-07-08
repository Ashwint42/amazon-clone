import { fetchProducts } from "./utils.js";
import { renderCard, renderCardMobile, renderMobileHeading } from "./Card.js";

let clientFilters = {
    brands: ["samsung"],
    rating: 4,
    minPrice: 500,
    maxPrice: 100000
}

const productsContainer = document.querySelector('.products-container');
const mainContentWrapper = document.querySelector('.mb-main-wrapper');

async function applyFilters() {
    const products = await fetchProducts();
    let renderedHTML = ``;

    const filteredBrands = clientFilters.brands.filter(brand => brand in products);

    filteredBrands.forEach(brand => {
        const filteredProducts = products[brand].filter(product => {
            return product.rating.stars >= clientFilters.rating && (product.price >= clientFilters.minPrice && product.price <= clientFilters.maxPrice);
        });

        if (window.innerWidth < 768) {
            renderedHTML = renderMobileHeading();
            filteredProducts.forEach(item => {
                renderedHTML += renderCardMobile(item);
            })
        } else {
            filteredProducts.forEach(item => {
                renderedHTML += renderCard(item);
            })
        }
        // filteredProducts.forEach(item => {
        //     renderedHTML += renderCard(item);
        // })
    })

    if (window.innerWidth < 768)
        mainContentWrapper.innerHTML = renderedHTML;
    else
        productsContainer.innerHTML = renderedHTML;
}


export { applyFilters, clientFilters }