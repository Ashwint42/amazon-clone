const starMappings = {
    "oneStar": `<i class="fa-solid fa-star stars" id="oneStar"></i>
                                    <i class="fa-regular fa-star stars" id="twoStar"></i>
                                    <i class="fa-regular fa-star stars" id="threeStar"></i>
                                    <i class="fa-regular fa-star stars" id="fourStar"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar"></i>`,
    "twoStar": `<i class="fa-solid fa-star stars" id="oneStar"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar"></i>
                                    <i class="fa-regular fa-star stars" id="threeStar"></i>
                                    <i class="fa-regular fa-star stars" id="fourStar"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar"></i>`,
    "threeStar": `<i class="fa-solid fa-star stars" id="oneStar"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar"></i>
                                    <i class="fa-solid fa-star stars" id="threeStar"></i>
                                    <i class="fa-regular fa-star stars" id="fourStar"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar"></i>`,
    "fourStar": `<i class="fa-solid fa-star stars" id="oneStar"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar"></i>
                                    <i class="fa-solid fa-star stars" id="threeStar"></i>
                                    <i class="fa-solid fa-star stars" id="fourStar"></i>
                                    <i class="fa-regular fa-star stars" id="fiveStar"></i>`,
    "fiveStar": `<i class="fa-solid fa-star stars" id="oneStar"></i>
                                    <i class="fa-solid fa-star stars" id="twoStar"></i>
                                    <i class="fa-solid fa-star stars" id="threeStar"></i>
                                    <i class="fa-solid fa-star stars" id="fourStar"></i>
                                    <i class="fa-solid fa-star stars" id="fiveStar"></i>`,
}


async function fetchProducts() {
    let products;

    try {
        const data = await fetch("../products.json");
        products = await data.json();
        return products;
    } catch (err) {
        console.log('Could not load products.json')
    }
}


export { starMappings, fetchProducts }