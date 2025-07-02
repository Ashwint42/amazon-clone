import { fetchProducts } from "./utils.js";

async function filterByBrand() {
    const products = await fetchProducts();
    let brandCheckboxes = document.querySelectorAll('.brand-checkbox');
    brandCheckboxes.forEach(checkbox => {
        checkbox.addEventListener('click', (e) => {
            const brand = e.target.name;
        })
    })

}


export { filterByBrand }