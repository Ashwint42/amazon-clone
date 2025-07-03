import { fetchProducts } from "./utils.js";
import { renderCard } from "./Card.js";

let clientFilters = {
    brands: ["samsung"],
    rating: 4,
    minPrice: 500,
    maxPrice: 130000
}

const productsContainer = document.querySelector('.products-container');

async function applyFilters() {
    const products = await fetchProducts();
    let renderedHTML = ``;

    const filteredBrands = clientFilters.brands.filter(brand => brand in products);

    filteredBrands.forEach(brand => {
        const filteredProducts = products[brand].filter(product => {
            return product.rating.stars >= clientFilters.rating && (product.price >= clientFilters.minPrice && product.price <= clientFilters.maxPrice);
        });

        filteredProducts.forEach(item => {
            renderedHTML += renderCard(item);
        })
    })

    productsContainer.innerHTML = renderedHTML;
}


export { applyFilters, clientFilters }